# Team Casa Rustia AI Workplace Skills Hub — Supabase Version

This version is designed for public learners. It does **not** save training records in browser localStorage. Learner accounts, enrollments, practice answers, quiz scores, progress, certificates, and admin reports are stored in Supabase Database.

## Included courses

1. Operations Management — 14 modules
2. Project Management — 14 modules
3. Project Coordination — 14 modules
4. HR — 14 modules
5. Admin Positions — 14 modules

Total: 70 practical AI workplace modules.

## Features

- Supabase Auth email/password registration and sign in
- Dedicated login/register page
- First registered account automatically becomes the only admin
- Later registrations become learner accounts
- Admin assigns course access to learner accounts
- Practice task answer box saved to Supabase
- Quiz answers and scores saved to Supabase
- Module completion logic
- Certificate unlock after 14 completed modules
- Course-targeted certificate with learning achievements and digital signatures
- Certificate print/save as PDF
- Simple formal course-targeted certificate with course learnings and digital signatures
- Admin / Reports panel restricted to the single admin profile only
- Admin can view all accounts and assign course access
- Admin CSV export from Supabase report data
- GitHub Pages ready

## Setup steps

### 1. Supabase project

This package is already configured with your Supabase project:

```text
https://fkpewwgslqudduqdqhho.supabase.co
```

Important: the frontend uses the Project URL, not the REST URL. If Supabase shows `https://fkpewwgslqudduqdqhho.supabase.co/rest/v1/`, use only `https://fkpewwgslqudduqdqhho.supabase.co` in `js/supabase-config.js`.

### 2. Run the schema

Open Supabase → SQL Editor → paste and run:

```text
supabase/schema.sql
```

This creates the required tables, view, triggers, indexes, and Row Level Security policies.

### 3. Frontend configuration

The file below has already been updated with your Supabase Project URL and anon public key:

```text
js/supabase-config.js
```

Do not place a Supabase `service_role` key in this frontend file. Only the anon public key should be used in the browser.

Real admin access is controlled by the database profile role. The first account created after running the schema becomes the admin automatically.

### 4. Register your admin account first

After running the schema, open the app and register your own account first.

The database trigger automatically makes the first registered account the only admin. Every account created after that becomes a learner account.

### 5. Assign course access

Sign in using the first/admin account, open **Admin / Reports**, and assign course access to learner accounts. Learners cannot start courses until the admin assigns access.

### 6. Upload to GitHub Pages

Upload the files/folders inside this package to your GitHub repository:

```text
index.html
README.md
css/
js/
data/
assets/
supabase/
```

Then enable GitHub Pages from the repository settings.

## Security notes

- Learner records are protected using Supabase Row Level Security.
- Learners can only access their own profile, enrollment, progress, and certificate.
- Only the first `admin` profile can access full admin reports and account access controls.
- The first registered account becomes admin automatically.
- Only one admin account is allowed.
- Learners cannot self-enroll into courses; the admin assigns course access.
- Learners cannot promote themselves to admin because the schema includes role-protection policies and trigger logic.
- Learners cannot issue a certificate until all 14 modules are completed. The database also checks this, not only the frontend.
- Learners cannot mark a lesson complete unless there is a saved practice answer and a passing quiz score.
- The Supabase anon key is safe to use in frontend apps when RLS policies are enabled and properly configured.

## Access model

1. Run the schema first.
2. Register your account first. This becomes the admin.
3. Other people register their own learner accounts.
4. Admin opens Admin / Reports and assigns the correct course access.
5. Learners complete modules, practice tasks, quizzes, and certificates.

## Important limitation

Supabase Auth may keep a login session in the browser internally so users stay signed in. The app itself does not store course progress, quizzes, certificates, or reports in browser localStorage.


## Certificate signature update

The certificate now uses handwritten-style SVG digital signatures with subtle ink variation and signature flourishes, so the signatures look more natural and less like typed text.


## Certificate signature update

- Signature underline removed so the handwritten digital signatures appear cleaner and more natural.


## General Business Course Content Update

The course content has been revised to focus on general business situations instead of hotel-specific examples. Lessons now use practical business scenarios such as customer complaints, delayed orders, supplier follow-ups, staff scheduling, project blockers, admin records, invoices, meetings, stock/resource monitoring, and process improvement.

Each topic includes:

- A real-life general business problem
- Step-by-step teaching
- Practical AI-safe workflow guidance
- A workplace practice task
- Topic-specific quiz questions

The original course IDs are kept for Supabase compatibility, but the course titles and examples are now general business focused.


## Senior QA / Bug-Fix Update

This package has been re-audited for smoother production use. The latest update includes:

- Improved button loading states for login, course opening, practice saving, quiz submission, day completion, admin refresh, and course assignment.
- Safer certificate creation flow, including clearer error handling if enrollment completion cannot be updated.
- More reliable final-day completion logic by reloading progress before issuing certificates.
- Clipboard fallback for the “Copy AI Prompt” button when the site is not running on HTTPS/localhost.
- Safer admin CSV export handling when there is no report data yet.
- Stronger Supabase RLS protection so learners cannot freely change their enrollment status.
- Explicit Supabase grants for authenticated users after running the schema.
- Verified JavaScript syntax and course data structure for all 5 courses and 70 modules.

Recommended deployment: upload the folders exactly as provided (`css`, `js`, `data`, `assets`, `supabase`) plus `index.html` and `README.md` to GitHub Pages.

## Course content quality check

This package includes 5 general business courses with 70 total lessons. Each topic is now presented as a module. Every module has its own real-life business scenario, step-by-step teaching, practice activity, and unique multiple-choice quiz questions with no duplicate question text across the course set.

## Module and quiz update

This package uses a 14-module structure for each course. The database still uses the existing `day_number` field internally for compatibility, so the same Supabase schema continues to work. The frontend now displays the learner journey as modules instead of days.

Validation completed:

- 5 courses
- 70 total modules
- 210 total multiple-choice quiz questions
- 4 choices per quiz question
- 0 duplicate quiz questions
- 0 duplicate module/topic titles
