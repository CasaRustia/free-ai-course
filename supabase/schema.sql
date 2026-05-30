-- Team Casa Rustia AI Workplace Skills Hub
-- Supabase backend schema with login, first-account admin, and admin-assigned course access.
-- Run this in Supabase SQL Editor before publishing the app.

create extension if not exists pgcrypto;

create table if not exists public.tcr_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null,
  role text not null default 'learner' check (role in ('learner','trainer','admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.tcr_enrollments (
  id uuid primary key default gen_random_uuid(),
  learner_id uuid not null references public.tcr_profiles(id) on delete cascade,
  course_id text not null,
  status text not null default 'active' check (status in ('active','completed','paused','cancelled')),
  enrolled_at timestamptz not null default now(),
  completed_at timestamptz,
  unique(learner_id, course_id)
);

create table if not exists public.tcr_lesson_progress (
  id uuid primary key default gen_random_uuid(),
  learner_id uuid not null references public.tcr_profiles(id) on delete cascade,
  enrollment_id uuid not null references public.tcr_enrollments(id) on delete cascade,
  course_id text not null,
  day_number int not null check (day_number between 1 and 14),
  practice_answer text,
  quiz_answers jsonb not null default '[]'::jsonb,
  quiz_score int not null default 0 check (quiz_score between 0 and 100),
  quiz_correct int not null default 0,
  quiz_total int not null default 0,
  completed boolean not null default false,
  completed_at timestamptz,
  reviewed_by uuid references public.tcr_profiles(id),
  review_status text not null default 'not_reviewed' check (review_status in ('not_reviewed','approved','needs_revision')),
  review_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(learner_id, course_id, day_number)
);

create table if not exists public.tcr_certificates (
  id uuid primary key default gen_random_uuid(),
  learner_id uuid not null references public.tcr_profiles(id) on delete cascade,
  enrollment_id uuid not null references public.tcr_enrollments(id) on delete cascade,
  course_id text not null,
  certificate_code text not null unique,
  learner_name text not null,
  course_title text not null,
  issued_at timestamptz not null default now(),
  unique(learner_id, course_id)
);

create table if not exists public.tcr_audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.tcr_profiles(id),
  action text not null,
  entity_type text not null,
  entity_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- Utility functions
create or replace function public.tcr_touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

create or replace function public.tcr_no_profiles()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select not exists (select 1 from public.tcr_profiles);
$$;

create or replace function public.tcr_is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.tcr_profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

create or replace function public.tcr_completed_lesson_count(p_learner_id uuid, p_course_id text)
returns int
language sql
stable
security definer
set search_path = public
as $$
  select count(*)::int
  from public.tcr_lesson_progress
  where learner_id = p_learner_id
    and course_id = p_course_id
    and completed = true;
$$;

-- First account rule: the first profile inserted becomes admin automatically.
-- All later profiles become learners unless changed by the existing admin.
create or replace function public.tcr_assign_first_admin()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (select 1 from public.tcr_profiles) then
    new.role := 'admin';
  elsif new.role = 'admin' then
    new.role := 'learner';
  end if;
  new.email := lower(new.email);
  return new;
end $$;

-- Only one admin is allowed, and the first admin account cannot be demoted by accident.
create or replace function public.tcr_protect_admin_role()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if old.role = 'admin' and new.role <> 'admin' then
    raise exception 'The only admin account cannot be demoted.';
  end if;

  if old.role is distinct from new.role and not public.tcr_is_admin() then
    raise exception 'Only the admin can change account access.';
  end if;

  if new.role = 'admin' and old.role <> 'admin' and exists (
    select 1 from public.tcr_profiles where role = 'admin' and id <> old.id
  ) then
    raise exception 'Only one admin account is allowed.';
  end if;

  new.email := lower(new.email);
  return new;
end $$;


-- Learners cannot complete a lesson without a real practice answer and a passing quiz score.
create or replace function public.tcr_validate_lesson_completion()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.completed = true then
    if coalesce(length(trim(new.practice_answer)), 0) < 20 then
      raise exception 'A practice answer is required before completing this lesson.';
    end if;
    if coalesce(new.quiz_score, 0) < 70 then
      raise exception 'A passing quiz score is required before completing this lesson.';
    end if;
    if new.completed_at is null then
      new.completed_at := now();
    end if;
  end if;
  return new;
end $$;

-- Certificates cannot be created until all 14 lesson days are completed.
create or replace function public.tcr_validate_certificate_completion()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare completed_count int;
begin
  select count(*)::int into completed_count
  from public.tcr_lesson_progress
  where learner_id = new.learner_id
    and course_id = new.course_id
    and completed = true;

  if completed_count < 14 then
    raise exception 'Certificate cannot be issued until all 14 lessons are completed.';
  end if;

  return new;
end $$;

-- Triggers
drop trigger if exists tcr_profiles_touch_updated_at on public.tcr_profiles;
create trigger tcr_profiles_touch_updated_at before update on public.tcr_profiles
for each row execute function public.tcr_touch_updated_at();

drop trigger if exists tcr_lesson_progress_touch_updated_at on public.tcr_lesson_progress;
create trigger tcr_lesson_progress_touch_updated_at before update on public.tcr_lesson_progress
for each row execute function public.tcr_touch_updated_at();


drop trigger if exists tcr_lesson_progress_validate_completion on public.tcr_lesson_progress;
create trigger tcr_lesson_progress_validate_completion before insert or update on public.tcr_lesson_progress
for each row execute function public.tcr_validate_lesson_completion();

drop trigger if exists tcr_certificates_validate_completion on public.tcr_certificates;
create trigger tcr_certificates_validate_completion before insert or update on public.tcr_certificates
for each row execute function public.tcr_validate_certificate_completion();

drop trigger if exists tcr_profiles_assign_first_admin on public.tcr_profiles;
create trigger tcr_profiles_assign_first_admin before insert on public.tcr_profiles
for each row execute function public.tcr_assign_first_admin();

drop trigger if exists tcr_profiles_protect_admin_role on public.tcr_profiles;
create trigger tcr_profiles_protect_admin_role before update on public.tcr_profiles
for each row execute function public.tcr_protect_admin_role();

-- Admin report view. Learners cannot read this because RLS on source tables limits them to their own rows.
create or replace view public.tcr_admin_report
with (security_invoker = true) as
select
  p.id as learner_id,
  p.full_name,
  p.email,
  p.role,
  e.id as enrollment_id,
  e.course_id,
  e.status,
  e.enrolled_at,
  e.completed_at,
  p.created_at,
  coalesce(count(lp.id) filter (where lp.completed = true), 0)::int as completed_days,
  least(100, round((coalesce(count(lp.id) filter (where lp.completed = true), 0)::numeric / 14) * 100))::int as progress_percent,
  c.certificate_code,
  c.issued_at as certificate_issued_at
from public.tcr_profiles p
join public.tcr_enrollments e on e.learner_id = p.id
left join public.tcr_lesson_progress lp on lp.enrollment_id = e.id
left join public.tcr_certificates c on c.enrollment_id = e.id
group by p.id, p.full_name, p.email, p.role, e.id, e.course_id, e.status, e.enrolled_at, e.completed_at, p.created_at, c.certificate_code, c.issued_at;

alter table public.tcr_profiles enable row level security;
alter table public.tcr_enrollments enable row level security;
alter table public.tcr_lesson_progress enable row level security;
alter table public.tcr_certificates enable row level security;
alter table public.tcr_audit_logs enable row level security;

-- Drop existing policies so this file can be rerun safely.
do $$
declare r record;
begin
  for r in select schemaname, tablename, policyname from pg_policies where schemaname='public' and tablename like 'tcr_%' loop
    execute format('drop policy if exists %I on %I.%I', r.policyname, r.schemaname, r.tablename);
  end loop;
end $$;

-- Profiles
create policy "profiles_select_own_or_admin" on public.tcr_profiles
for select using (id = auth.uid() or public.tcr_is_admin());

create policy "profiles_insert_own_first_admin_or_learner" on public.tcr_profiles
for insert with check (
  id = auth.uid()
  and (
    role = 'learner'
    or (role = 'admin' and public.tcr_no_profiles())
  )
);

create policy "profiles_update_own_or_admin" on public.tcr_profiles
for update using (id = auth.uid() or public.tcr_is_admin())
with check (id = auth.uid() or public.tcr_is_admin());

-- Enrollments/course access
-- Learners can read their own assigned courses. Only the admin can create/update course access for anyone.
create policy "enrollments_select_own_or_admin" on public.tcr_enrollments
for select using (learner_id = auth.uid() or public.tcr_is_admin());

create policy "enrollments_insert_admin_only" on public.tcr_enrollments
for insert with check (public.tcr_is_admin());

create policy "enrollments_update_admin_or_completed_own" on public.tcr_enrollments
for update using (learner_id = auth.uid() or public.tcr_is_admin())
with check (
  public.tcr_is_admin()
  or (
    learner_id = auth.uid()
    and status = 'completed'
    and public.tcr_completed_lesson_count(auth.uid(), course_id) >= 14
  )
);

-- Lesson progress
create policy "progress_select_own_or_admin" on public.tcr_lesson_progress
for select using (learner_id = auth.uid() or public.tcr_is_admin());

create policy "progress_insert_own_assigned_or_admin" on public.tcr_lesson_progress
for insert with check (
  public.tcr_is_admin()
  or (
    learner_id = auth.uid()
    and exists (
      select 1 from public.tcr_enrollments e
      where e.id = enrollment_id
        and e.learner_id = auth.uid()
        and e.course_id = course_id
        and e.status = 'active'
    )
  )
);

create policy "progress_update_own_assigned_or_admin" on public.tcr_lesson_progress
for update using (learner_id = auth.uid() or public.tcr_is_admin())
with check (
  public.tcr_is_admin()
  or (
    learner_id = auth.uid()
    and exists (
      select 1 from public.tcr_enrollments e
      where e.id = enrollment_id
        and e.learner_id = auth.uid()
        and e.course_id = course_id
        and e.status = 'active'
    )
  )
);

-- Certificates
create policy "certificates_select_own_or_admin" on public.tcr_certificates
for select using (learner_id = auth.uid() or public.tcr_is_admin());

create policy "certificates_insert_after_completion_or_admin" on public.tcr_certificates
for insert with check (
  public.tcr_is_admin()
  or (
    learner_id = auth.uid()
    and exists (
      select 1 from public.tcr_enrollments e
      where e.id = enrollment_id
        and e.learner_id = auth.uid()
        and e.course_id = course_id
        and e.status in ('active','completed')
    )
    and public.tcr_completed_lesson_count(auth.uid(), tcr_certificates.course_id) >= 14
  )
);

create policy "certificates_update_admin" on public.tcr_certificates
for update using (public.tcr_is_admin()) with check (public.tcr_is_admin());

-- Audit logs
create policy "audit_select_admin" on public.tcr_audit_logs
for select using (public.tcr_is_admin());

create policy "audit_insert_authenticated" on public.tcr_audit_logs
for insert with check (auth.uid() is not null);

-- Helpful indexes
create index if not exists idx_tcr_profiles_email on public.tcr_profiles (lower(email));
create index if not exists idx_tcr_enrollments_learner on public.tcr_enrollments (learner_id);
create index if not exists idx_tcr_progress_learner_course on public.tcr_lesson_progress (learner_id, course_id, day_number);
create index if not exists idx_tcr_certificates_learner on public.tcr_certificates (learner_id);

-- Explicit grants for Supabase authenticated users.
grant usage on schema public to authenticated;
grant select, insert, update on public.tcr_profiles to authenticated;
grant select, insert, update on public.tcr_enrollments to authenticated;
grant select, insert, update on public.tcr_lesson_progress to authenticated;
grant select, insert, update on public.tcr_certificates to authenticated;
grant select, insert on public.tcr_audit_logs to authenticated;
grant select on public.tcr_admin_report to authenticated;

-- IMPORTANT:
-- 1. Run this schema before anyone registers.
-- 2. The first account registered in the app becomes the only admin automatically.
-- 3. Every account after that becomes learner.
-- 4. The admin assigns course access from the Admin / Reports panel.
