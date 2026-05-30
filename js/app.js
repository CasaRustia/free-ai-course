'use strict';

const app = document.getElementById('app');
const courses = Array.isArray(window.TCR_COURSES) ? window.TCR_COURSES : [];
const PASS_SCORE = 70;
const DAY_COUNT = 14;
const MIN_PRACTICE_CHARS = 20;

let sb = null;
let session = null;
let profile = null;
let enrollments = [];
let progressRows = [];
let certificates = [];
let adminRows = [];
let adminProfiles = [];
let loading = true;
let route = { view: 'home', courseId: null, day: 1 };

function esc(str=''){
  return String(str ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}
function attr(str=''){ return esc(str).replace(/\n/g, ' '); }
function uid(){
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return 'id_' + Date.now() + '_' + Math.random().toString(16).slice(2);
}
function validDay(day){ return Math.min(DAY_COUNT, Math.max(1, Number(day) || 1)); }
function asArray(value){ return Array.isArray(value) ? value : []; }
function readErrorMessage(err, fallback='Something went wrong. Please try again.'){ return err?.message || err?.error_description || fallback; }
function setButtonBusy(button, busy, label='Please wait...'){
  if (!button) return;
  if (busy) {
    if (!button.dataset.originalText) button.dataset.originalText = button.textContent;
    button.textContent = label; button.disabled = true; button.setAttribute('aria-busy', 'true');
  } else {
    button.textContent = button.dataset.originalText || button.textContent;
    button.disabled = false; button.removeAttribute('aria-busy');
  }
}
function safePercent(done, total){ return total ? Math.min(100, Math.max(0, Math.round((Number(done||0)/total)*100))) : 0; }
function canUseClipboard(){ return Boolean(navigator.clipboard && window.isSecureContext); }
function courseById(id){ return courses.find(c => c.id === id) || null; }
function safeCourseById(id){ return courseById(id) || courses[0] || null; }
function lessonByDay(course, day){ return course?.days?.find(x => Number(x.day) === Number(day)); }
function isAdmin(){ return profile?.role === 'admin'; }
function canAccessAdmin(){ return isAdmin(); }
function currentUserId(){ return session?.user?.id || null; }
function currentEmail(){ return session?.user?.email || profile?.email || ''; }
function assignedCourse(){
  const first = enrollments[0];
  if (first) return safeCourseById(first.course_id);
  return canAccessAdmin() ? (courses[0] || null) : null;
}
function enrollmentFor(courseId){ return enrollments.find(e => e.course_id === courseId) || null; }
function progressFor(courseId, day){
  return progressRows.find(r => r.course_id === courseId && Number(r.day_number) === Number(day)) || null;
}
function certificateFor(courseId){ return certificates.find(c => c.course_id === courseId) || null; }
function courseProgress(courseId){
  const c = safeCourseById(courseId);
  const rows = progressRows.filter(r => r.course_id === c.id && r.completed);
  const done = rows.length;
  const total = c?.days?.length || DAY_COUNT;
  return { done, total, pct: safePercent(done, total) };
}
function certId(courseId, userId){
  const year = new Date().getFullYear();
  const c = String(courseId||'course').replace(/[^a-z0-9]/gi,'').toUpperCase() || 'COURSE';
  const u = String(userId||'user').replace(/-/g,'').slice(-6).toUpperCase();
  return `TCR-${c}-${year}-${u}`;
}

function initSupabase(){
  let url = String(window.TCR_SUPABASE_URL||'').trim().replace(/\/rest\/v1\/?$/,'');
  const key = String(window.TCR_SUPABASE_ANON_KEY||'').trim();
  if (!url||!key||url.includes('PASTE_')||key.includes('PASTE_')) return null;
  if (!window.supabase?.createClient) return null;
  return window.supabase.createClient(url, key, {auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
}
function setRoute(view, courseId=null, day=1){
  if (view==='admin' && !canAccessAdmin()){alert('Admin panel is restricted.');view='home';}
  route={view,courseId,day:validDay(day)};render();window.scrollTo({top:0,behavior:'smooth'});
}
async function boot(){
  try {
    sb=initSupabase();
    if(!sb){loading=false;renderSetupMissing();return;}
    const {data,error}=await sb.auth.getSession();
    if(error) throw error;
    session=data.session;
    if(session) await loadAll();
    loading=false;render();
    sb.auth.onAuthStateChange(async(_event,newSession)=>{
      try {
        session=newSession;
        profile=null;enrollments=[];progressRows=[];certificates=[];adminRows=[];adminProfiles=[];
        if(session) await loadAll();render();
      } catch(err){
        console.error('Auth state load failed:',err);
        app.innerHTML=`<main class="main"><div class="empty"><h2>Unable to load your account</h2><p>${esc(readErrorMessage(err))}</p><button onclick="signOut()">Sign out and try again</button></div></main>`;
      }
    });
  } catch(err){
    loading=false;
    app.innerHTML=`<main class="main"><div class="empty"><h2>Startup error</h2><p>${esc(err.message)}</p></div></main>`;
  }
}
function renderSetupMissing(){
  app.innerHTML=`<main class="main singlePage"><section class="hero"><div><p class="eyebrow">Setup Required</p><h1>Connect Supabase first</h1><p>Open <b>js/supabase-config.js</b> and add your Supabase Project URL and anon public key, then run <b>supabase/schema.sql</b> in your Supabase SQL Editor.</p></div><div class="heroCard"><h3>Files to set up</h3><ul><li>supabase/schema.sql</li><li>js/supabase-config.js</li><li>README.md</li></ul></div></section></main>`;
}
async function loadAll(){
  await ensureProfile();
  await Promise.all([loadEnrollments(),loadProgress(),loadCertificates()]);
  if(canAccessAdmin()) await Promise.all([loadAdminRows(),loadAdminProfiles()]);
}
async function ensureProfile(){
  if(!session?.user) return;
  const user=session.user;
  const email=String(user.email||'').toLowerCase();
  const metadataName=user.user_metadata?.full_name||user.user_metadata?.name||email.split('@')[0];
  const {data:existing,error:readError}=await sb.from('tcr_profiles').select('*').eq('id',user.id).maybeSingle();
  if(readError) throw readError;
  if(existing){profile=existing;return;}
  const {data,error}=await sb.from('tcr_profiles').insert({id:user.id,full_name:metadataName,email,role:'learner'}).select('*').single();
  if(error) throw error;
  profile=data;
}
async function loadEnrollments(){
  const {data,error}=await sb.from('tcr_enrollments').select('*').eq('learner_id',currentUserId()).order('enrolled_at',{ascending:true});
  if(error) throw error; enrollments=data||[];
}
async function loadProgress(){
  const {data,error}=await sb.from('tcr_lesson_progress').select('*').eq('learner_id',currentUserId()).order('day_number',{ascending:true});
  if(error) throw error; progressRows=data||[];
}
async function loadCertificates(){
  const {data,error}=await sb.from('tcr_certificates').select('*').eq('learner_id',currentUserId()).order('issued_at',{ascending:false});
  if(error) throw error; certificates=data||[];
}
async function loadAdminRows(){
  const {data,error}=await sb.from('tcr_admin_report').select('*').order('created_at',{ascending:false});
  if(error){console.warn('Admin report load failed:',error);adminRows=[];return;} adminRows=data||[];
}
async function loadAdminProfiles(){
  const {data,error}=await sb.from('tcr_profiles').select('*').order('created_at',{ascending:true});
  if(error){console.warn('Admin profiles load failed:',error);adminProfiles=[];return;} adminProfiles=data||[];
}

function layout(content){
  const userName=profile?.full_name||currentEmail();
  const showAdmin=canAccessAdmin();
  return `
    <aside class="sidebar">
      <div class="brand"><div class="logoMark">TCR</div><div><strong>Team Casa Rustia</strong><span>AI Workplace Skills for Everyone</span></div></div>
      <button onclick="setRoute('home')" class="navBtn ${route.view==='home'?'active':''}">Dashboard</button>
      <button onclick="setRoute('toolpicker')" class="navBtn ${route.view==='toolpicker'?'active':''}">AI Tool Picker</button>
      ${showAdmin?`<button onclick="setRoute('admin')" class="navBtn ${route.view==='admin'?'active':''}">Admin / Reports</button>`:''}
      <button onclick="setRoute('help')" class="navBtn ${route.view==='help'?'active':''}">About / How It Works</button>
      <div class="userBox">
        ${session?`<b>${esc(userName)}</b><span>${esc(currentEmail())}</span><span>Access: ${esc(profile?.role||'learner')}</span><button class="ghost small" onclick="signOut()">Sign out</button>`:`<span>Not signed in</span>`}
      </div>
    </aside>
    <main class="main">${content}</main>`;
}
function render(){
  if(loading){app.innerHTML=`<main class="main"><div class="empty"><h2>Loading...</h2><p>Connecting to Supabase.</p></div></main>`;return;}
  try {
    if(!courses.length) throw new Error('No courses loaded.');
    if(!session){app.innerHTML=renderAuth();app.classList.add('is-login');return;}
    app.classList.remove('is-login');
    if(route.view==='course') app.innerHTML=layout(renderCourse(route.courseId));
    else if(route.view==='lesson') app.innerHTML=layout(renderLesson(route.courseId,route.day));
    else if(route.view==='certificate') app.innerHTML=layout(renderCertificate(route.courseId));
    else if(route.view==='toolpicker') app.innerHTML=layout(renderToolPicker());
    else if(route.view==='admin') app.innerHTML=layout(renderAdmin());
    else if(route.view==='help') app.innerHTML=layout(renderHelp());
    else app.innerHTML=layout(renderHome());
  } catch(err){
    console.error(err);
    app.innerHTML=`<main class="main"><div class="empty"><h2>Something went wrong</h2><p>${esc(err.message)}</p><button onclick="setRoute('home')">Back to Dashboard</button></div></main>`;
  }
}

function renderAuth(){
  return `<main class="loginPageSimple"><div class="loginSimpleBrand"><div class="loginLogo">TCR</div><p class="eyebrow">Public AI Workplace Skills Training</p><h1>Team Casa Rustia AI Workplace Skills Hub</h1><p>Helping everyday people, beginners, job seekers, employees, freelancers, and career shifters catch up and work confidently in a fast-paced AI-powered world.</p></div><div class="loginSimpleCard"><h2 id="authHeading">Welcome back</h2><p id="authSubtitle">Sign in to continue your course, or create a new account.</p><div class="authBtns"><button id="loginTab" class="authBtnActive" onclick="switchAuthMode('login')">Log In</button><button id="signupTab" class="authBtnOutline" onclick="switchAuthMode('signup')">Create Account</button></div><div class="formStack"><label>Full name <small id="nameHint">optional for sign in</small><input id="authName" placeholder="Your full name" autocomplete="name" /></label><label>Email<input id="authEmail" type="email" placeholder="name@email.com" autocomplete="email" /></label><label>Password<input id="authPassword" type="password" placeholder="Minimum 6 characters" autocomplete="current-password" onkeydown="if(event.key==='Enter') submitAuth()" /></label><button onclick="submitAuth(this)" id="authSubmit">Log In</button><small id="authModeNote">Use the email and password you registered with.</small></div></div></main>`;
}
let authMode='login';
function switchAuthMode(mode){
  authMode=mode==='signup'?'signup':'login';
  const isSignup=authMode==='signup';
  const submit=document.getElementById('authSubmit');
  const note=document.getElementById('authModeNote');
  const nameHint=document.getElementById('nameHint');
  document.getElementById('loginTab')?.classList.toggle('authBtnActive',!isSignup);
  document.getElementById('loginTab')?.classList.toggle('authBtnOutline',isSignup);
  document.getElementById('signupTab')?.classList.toggle('authBtnActive',isSignup);
  document.getElementById('signupTab')?.classList.toggle('authBtnOutline',!isSignup);
  const heading=document.getElementById('authHeading');
  const subtitle=document.getElementById('authSubtitle');
  if(heading) heading.textContent=isSignup?'Create your account':'Welcome back';
  if(subtitle) subtitle.textContent=isSignup?'Register to start your learning journey.':'Sign in to continue your course.';
  if(submit) submit.textContent=isSignup?'Create account':'Sign in';
  if(nameHint) nameHint.textContent=isSignup?'required':'optional';
  if(note) note.textContent=isSignup?'Create your account. If email confirmation is enabled, check your inbox before signing in.':'Use the email and password you registered with.';
  const password=document.getElementById('authPassword');
  if(password) password.autocomplete=isSignup?'new-password':'current-password';
}
async function submitAuth(button=null){
  const email=document.getElementById('authEmail')?.value.trim();
  const password=document.getElementById('authPassword')?.value;
  const fullName=document.getElementById('authName')?.value.trim();
  if(!email||!/^\S+@\S+\.\S+$/.test(email)) return alert('Please enter a valid email.');
  if(!password||password.length<6) return alert('Please enter a password with at least 6 characters.');
  try {
    setButtonBusy(button||document.getElementById('authSubmit'),true,authMode==='signup'?'Creating...':'Signing in...');
    if(authMode==='signup'){
      if(!fullName) return alert('Please enter your full name.');
      const {data,error}=await sb.auth.signUp({email,password,options:{data:{full_name:fullName}}});
      if(error) throw error;
      session=data.session;
      if(!session){alert('Account created. Please check your email to confirm your account, then sign in.');return;}
      await ensureProfile();await updateProfileName(fullName);await loadAll();render();
    } else {
      const {data,error}=await sb.auth.signInWithPassword({email,password});
      if(error) throw error;session=data.session;await loadAll();render();
    }
  } catch(err){alert(readErrorMessage(err,'Unable to sign in.'));}
  finally{setButtonBusy(button||document.getElementById('authSubmit'),false);}
}
async function updateProfileName(fullName){
  if(!fullName||!currentUserId()) return;
  const {data,error}=await sb.from('tcr_profiles').update({full_name:fullName}).eq('id',currentUserId()).select('*').single();
  if(error) throw error; profile=data;
}
async function signOut(){
  try{await sb?.auth?.signOut();}
  finally{session=null;profile=null;enrollments=[];progressRows=[];certificates=[];adminRows=[];adminProfiles=[];render();}
}

async function enrollInCourse(courseId){
  if(!canAccessAdmin()) throw new Error('Only the admin can assign course access.');
  const c=safeCourseById(courseId);
  if(!c||!currentUserId()) return;
  const {data,error}=await sb.from('tcr_enrollments').upsert({learner_id:currentUserId(),course_id:c.id,status:'active'},{onConflict:'learner_id,course_id'}).select('*').single();
  if(error) throw error;
  const idx=enrollments.findIndex(e=>e.learner_id===data.learner_id&&e.course_id===data.course_id);
  if(idx>=0) enrollments[idx]=data; else enrollments.push(data);
  return data;
}
function renderHome(){
  const assigned=assignedCourse();
  return `<section class="hero"><div><p class="eyebrow">14-Module AI Workplace Skills Training</p><h1>Team Casa Rustia AI Workplace Skills Hub</h1><p>Helping everyday people, beginners, job seekers, employees, freelancers, and career shifters catch up and work confidently in a fast-paced AI-powered world.</p>${assigned?`<div class="quickStart"><b>Continue:</b> ${esc(assigned.title)}<br/><button class="secondary" onclick="openCourse('${assigned.id}', this)">Continue Course</button></div>`:`<div class="quickStart"><b>No course access assigned yet.</b><br/>Your account is ready. Please wait for the admin to assign your course access.</div>`}</div><div class="heroCard"><h3>Learner Account</h3><p>Signed in as <b>${esc(profile?.full_name||currentEmail())}</b>.</p><p>Access level: <b>${esc(profile?.role||'learner')}</b></p><button onclick="signOut()" class="secondary">Sign out</button></div></section><section class="aboutBlock"><div><p class="eyebrow">About Team Casa Rustia</p><h2>Practical learning for everyone in modern working life</h2><p>Team Casa Rustia helps people adapt to the fast-paced changes in modern work. Our goal is to make practical AI and workplace skills accessible to everybody.</p></div><div><h3>What learners practise</h3><ul><li>Choosing the right AI tool for the task</li><li>Writing better emails, reports, SOPs, and updates</li><li>Using AI safely without inventing facts or exposing private information</li><li>Turning daily work into clearer actions, trackers, and decisions</li></ul></div></section><section class="sectionTitle"><h2>Courses</h2><p>Each course has 14 practical modules with real examples, AI prompts, practice tasks, multiple-choice quizzes, progress tracking, and a final certificate.</p></section><div class="grid courses">${courses.map(c=>renderCourseCard(c)).join('')}</div>`;
}
function renderCourseCard(c){
  const p=courseProgress(c.id);
  const enrolled=Boolean(enrollmentFor(c.id));
  const admin=canAccessAdmin();
  const label=enrolled?'Enrolled':(admin?'Admin Preview':'Access Required');
  const btn=enrolled?(p.done?'Continue Course':'Start Course'):(admin?'Open / Assign to Self':'Locked');
  return `<article class="courseCard ${enrolled?'assigned':''}"><div class="pill">${label}</div><h3>${esc(c.title)}</h3><p>${esc(c.description)}</p><div class="progress"><span style="width:${p.pct}%"></span></div><small>${p.done}/${p.total} modules completed</small><button onclick="openCourse('${c.id}', this)" ${(!enrolled&&!admin)?'disabled':''}>${btn}</button></article>`;
}
async function openCourse(courseId, button=null){
  const c=courseById(courseId);
  if(!c) return alert('Course not found.');
  if(!session) return alert('Please sign in first.');
  if(!enrollmentFor(c.id)){
    if(!canAccessAdmin()) return alert('You do not have access to this course yet. Please wait for the admin to assign your course access.');
    if(!confirm('Assign this course to your admin account so you can preview/test it?')) return;
    try{setButtonBusy(button,true,'Opening...');await enrollInCourse(c.id);await loadAll();}
    catch(err){alert(readErrorMessage(err));return;}
    finally{setButtonBusy(button,false);}
  }
  setRoute('course',c.id);
}
function hasCourseAccess(courseId){ return Boolean(enrollmentFor(courseId)||canAccessAdmin()); }
function renderCourse(courseId){
  const c=safeCourseById(courseId||assignedCourse()?.id);
  if(!c) return `<div class="empty"><h2>No courses available</h2><p>Please check data/courses.js.</p></div>`;
  if(!hasCourseAccess(c.id)) return `<div class="empty"><h2>Course locked</h2><p>Your account does not have access to this course yet.</p><button onclick="setRoute('home')">Back to Dashboard</button></div>`;
  const p=courseProgress(c.id);
  return `<section class="topbar"><button class="ghost" onclick="setRoute('home')">← Back</button><button onclick="setRoute('certificate','${c.id}')" ${p.done<DAY_COUNT?'disabled title="Complete all 14 modules first"':''}>View Certificate</button></section><section class="courseHeader"><div><p class="eyebrow">${esc(c.role)}</p><h1>${esc(c.title)}</h1><p>${esc(c.description)}</p></div><div class="stat"><b>${p.pct}%</b><span>${p.done}/14 modules complete</span></div></section><div class="progress large"><span style="width:${p.pct}%"></span></div><section class="outcomes"><h3>Learning Outcomes</h3><ul>${(c.outcomes||[]).map(o=>`<li>${esc(o)}</li>`).join('')}</ul></section><div class="lessonList">${c.days.map(d=>{const pr=progressFor(c.id,d.day);const done=Boolean(pr?.completed);const status=done?'Completed \u2713':(pr?.practice_answer||pr?.quiz_score?'In progress':'Open');return `<button class="lessonRow ${done?'done':''}" onclick="setRoute('lesson','${c.id}',${d.day})"><span>Module ${d.day}</span><b>${esc(d.title)}</b><em>${status}</em></button>`;}).join('')}</div>`;
}

// ── AI Tool Metadata ─────────────────────────────────────────────────────────
const AI_TOOL_META = {
  'ChatGPT':       {icon:'\u{1F916}',cat:'Writing & Chat AI',   url:'https://chat.openai.com',desc:'Best for drafting emails, reports, summaries, SOPs, and creative workplace writing.'},
  'Claude':        {icon:'\u2728',   cat:'Writing & Chat AI',   url:'https://claude.ai',desc:'Best for nuanced writing, long documents, policy analysis, and careful reasoning.'},
  'Gemini':        {icon:'\u{1F537}',cat:'Writing & Chat AI',   url:'https://gemini.google.com',desc:'Google AI integrated with Docs, Sheets, and Gmail for seamless workplace use.'},
  'Perplexity':    {icon:'\u{1F50D}',cat:'Research AI',         url:'https://www.perplexity.ai',desc:'Best for real-time web research, fact-checking vendors, market data, and sourced answers.'},
  'Copilot':       {icon:'\u{1FA9F}',cat:'Microsoft AI',        url:'https://copilot.microsoft.com',desc:'Microsoft AI embedded in Word, Excel, Teams, and Outlook for Office users.'},
  'Notion AI':     {icon:'\u{1F4D3}',cat:'Docs & Knowledge',    url:'https://www.notion.so/product/ai',desc:'Write, summarise, and organise notes, wikis, project docs, and SOPs in Notion.'},
  'Canva':         {icon:'\u{1F3A8}',cat:'Design & Visuals',    url:'https://www.canva.com',desc:'Create posters, certificates, reports, social graphics, and presentations visually.'},
  'Airtable AI':   {icon:'\u{1F4CA}',cat:'Data & Tracking',     url:'https://www.airtable.com',desc:'AI-powered database for tracking tasks, projects, HR records, and inventory.'},
  'Google Docs':   {icon:'\u{1F4C4}',cat:'Office & Documents',  url:'https://docs.google.com',desc:'Collaborative documents for SOPs, reports, meeting notes, and training guides.'},
  'Google Sheets': {icon:'\u{1F4CA}',cat:'Office & Documents',  url:'https://sheets.google.com',desc:'Spreadsheets for tracking tasks, budgets, schedules, and operational data.'},
  'Zapier':        {icon:'\u26A1',   cat:'Automation',          url:'https://zapier.com',desc:'Connect apps and automate workflows: forms to sheets to emails, no coding needed.'},
  'Make':          {icon:'\u{1F517}',cat:'Automation',          url:'https://www.make.com',desc:'Visual automation builder for complex multi-step business workflows.'},
  'n8n':           {icon:'\u{1F527}',cat:'Automation',          url:'https://n8n.io',desc:'Open-source workflow automation for technical teams wanting full control.'},
  'Fireflies':     {icon:'\u{1F399}',cat:'Meetings & Notes',    url:'https://fireflies.ai',desc:'Auto-transcribes and summarises meetings; extracts action items from calls.'},
  'Otter.ai':      {icon:'\u{1F9A6}',cat:'Meetings & Notes',    url:'https://otter.ai',desc:'Real-time meeting transcription and notes; great for interviews and calls.'},
  'Asana AI':      {icon:'\u{1F5C2}',cat:'Project Management',  url:'https://asana.com',desc:'AI-powered task and project management with automated workflows and status updates.'},
  'ClickUp AI':    {icon:'\u2705',   cat:'Project Management',  url:'https://clickup.com',desc:'All-in-one project management with AI writing, task automation, and reporting.'},
  'Monday AI':     {icon:'\u{1F4C5}',cat:'Project Management',  url:'https://monday.com',desc:'Visual work OS with AI for task creation, timeline planning, and team tracking.'},
  'Greenhouse AI': {icon:'\u{1F331}',cat:'HR & Recruiting',     url:'https://www.greenhouse.com',desc:'Applicant tracking system with AI scoring, pipeline management, and structured hiring.'},
  'Workable AI':   {icon:'\u{1F465}',cat:'HR & Recruiting',     url:'https://www.workable.com',desc:'AI-assisted job posting, candidate screening, interview scheduling, and onboarding.'},
  'Zendesk AI':    {icon:'\u{1F4AC}',cat:'Customer Support',    url:'https://www.zendesk.com',desc:'AI-powered customer support ticketing, auto-replies, and escalation routing.'},
  'Excel Copilot': {icon:'\u{1F4D7}',cat:'Microsoft AI',        url:'https://www.microsoft.com/en-us/microsoft-365/excel',desc:'AI in Excel for formula help, data analysis, pivot tables, and chart generation.'},
  'Slack AI':      {icon:'\u{1F4AC}',cat:'Communication',       url:'https://slack.com',desc:'Team messaging with AI summaries, channel digests, and workflow automation.'},
  'Grammarly':     {icon:'\u270D',   cat:'Writing & Chat AI',   url:'https://www.grammarly.com',desc:'Grammar, tone, and clarity checker for professional emails and documents.'},
  'Loom':          {icon:'\u{1F3A5}',cat:'Communication',       url:'https://www.loom.com',desc:'Record quick video walkthroughs for training, handovers, and async updates.'},
  'Email':         {icon:'\u{1F4E7}',cat:'Communication',       url:'',desc:'Email platform for formal business communication and documented decisions.'},
  'Calendar':      {icon:'\u{1F4C5}',cat:'Communication',       url:'',desc:'Calendar tool for scheduling, deadlines, meeting coordination, and reminders.'},
  'Task tracker':  {icon:'\u2705',   cat:'Communication',       url:'',desc:'Simple task tracker for daily action management and team visibility.'},
};

// ── AI Workflows (unique per lesson) ─────────────────────────────────────────
const AI_WORKFLOWS = {
  'Start-of-Day Business Control':{intro:'Use AI as your morning co-pilot: it turns a chaotic inbox into a structured priority list in under five minutes.',steps:['Collect all open items from email, chat, task tracker, and yesterday\'s handover into one place.','Paste the raw list into ChatGPT or Claude and ask it to sort by customer impact, deadline risk, and cost impact.','Review the AI-organised list and remove any item based on assumption rather than confirmed fact.','Use Google Sheets or Airtable AI to create a daily control tracker with owner, status, and next-action columns.','Send a brief morning update to the team using the AI draft — verify names, dates, and figures before sending.'],tools:['ChatGPT','Claude','Google Sheets','Airtable AI','Email'],tip:'Never let AI invent status updates. Only paste confirmed facts and let it organise, not create, the information.'},
  'Prioritising Urgent Business Issues':{intro:'AI helps you rank competing issues by actual impact, not just urgency — so you stop firefighting and start managing.',steps:['List all active issues with a one-line description of the problem, who it affects, and the financial or reputational risk.','Use Claude or ChatGPT to score each issue on a priority matrix: high/medium/low for urgency and impact.','Cross-check the AI ranking against your own knowledge — adjust any item you know is misjudged.','Assign an owner and a specific next action to each top-priority item using ClickUp AI or Asana AI.','Set a 2-hour review reminder in Calendar to check whether the priority order has shifted.'],tools:['Claude','ChatGPT','ClickUp AI','Asana AI','Calendar'],tip:'Use AI to debate the ranking with you — ask it "What is the risk if I delay item 3?" to pressure-test your decisions.'},
  'Handling a Customer Complaint':{intro:'AI drafts a calm, professional response in seconds — but a person must verify the facts and make the final call.',steps:['Read the full complaint and write down the confirmed facts: what happened, when, what the customer expected.','Paste the facts (not personal data) into Claude or ChatGPT.','Ask AI to draft three response tones: empathetic apology, neutral acknowledgment, and next-steps-focused.','Choose the most appropriate tone, personalise with the correct name and date, remove any invented details.','Log the complaint and resolution in Zendesk AI or your CRM tracker for future pattern analysis.'],tools:['Claude','ChatGPT','Zendesk AI','Email','Airtable AI'],tip:'Never paste a customer\'s full name, address, or account number into a public AI tool. Use placeholders like [Customer Name].'},
  'Shift or Daily Handover':{intro:'AI converts messy shift notes into a structured handover that the next team can act on immediately.',steps:['Gather all shift events: completed tasks, open issues, customer contacts, stock changes, and team notes.','Use ChatGPT or Claude to restructure notes into: Done, Pending, Watch, and Needs Decision sections.','Verify each item is accurate — AI can reorder but must not invent what happened during the shift.','Record the handover in Google Docs or Notion AI for a searchable, timestamped record.','Send via Email or Slack AI to the next team with a clear subject line: "Handover [Date] [Shift Time]".'],tools:['ChatGPT','Claude','Google Docs','Notion AI','Slack AI'],tip:'A good handover has exactly one "Needs Decision" item so the next shift knows what to escalate immediately.'},
  'Incident Documentation':{intro:'AI formats raw incident notes into a compliant, fact-based report — saving time while ensuring nothing is missed.',steps:['Record the raw facts immediately after the incident: time, location, people involved, what was observed.','Use Claude or ChatGPT to structure it into: Date/Time, Description, Impact, Immediate Action Taken, Follow-Up Required.','Remove any speculative language the AI may add — write "Staff member slipped" not "possibly due to negligence".','Store the documented incident in Google Docs or Notion AI with restricted access.','Use Zapier or Make to auto-notify the relevant manager when a new incident report is filed.'],tools:['Claude','ChatGPT','Google Docs','Notion AI','Zapier'],tip:'Incident reports must state facts, not blame. Ask AI to flag any sentence that includes an opinion or assumption.'},
  'Supplier and Vendor Follow-Up':{intro:'AI helps you write clear, firm follow-up messages and track vendor responses — so nothing slips through the cracks.',steps:['List all outstanding supplier items: unpaid invoices, delayed deliveries, unanswered quotes, or broken commitments.','Use Perplexity to verify vendor contact details, company status, or market alternatives if needed.','Paste the context into ChatGPT or Claude and request a professional follow-up email — firm but not aggressive.','Set a follow-up date in Calendar or Asana AI so every vendor item has a deadline for a response.','Track all vendor communications in Airtable AI or Google Sheets to spot patterns of delay.'],tools:['ChatGPT','Claude','Perplexity','Airtable AI','Calendar'],tip:'Always include the original agreement date and the specific outstanding item in your follow-up — vague messages get vague replies.'},
  'Stock and Resource Monitoring':{intro:'AI analyses your stock data and flags risk items before they become shortages — turning reactive ordering into proactive planning.',steps:['Export current stock levels into Google Sheets or Airtable AI with columns for item, quantity, reorder point, and lead time.','Use Excel Copilot or Gemini to write a formula that highlights items below the reorder threshold in red.','Ask ChatGPT or Claude to analyse the data and identify which items will run out within the next 7 days.','Generate a prioritised reorder list and draft supplier purchase requests using AI-written emails.','Set automated low-stock alerts using Zapier to notify the team when a quantity drops below the threshold.'],tools:['Google Sheets','Airtable AI','Excel Copilot','Gemini','Zapier'],tip:'AI forecasting is only as good as your data entry. Verify stock counts manually before trusting AI reorder recommendations.'},
  'Quality Control Before Delivery':{intro:'AI generates a checklist tailored to your product or service so nothing is missed before it reaches the customer.',steps:['Describe your product or service type and the most common quality failures to ChatGPT or Claude.','Request a quality control checklist specific to your delivery process — not a generic template.','Add the checklist to Notion AI or Google Docs so the whole team uses the same version.','Use Canva to create a visual quality card that staff can keep at the workstation or attach to shipments.','Log each completed QC check in Airtable AI to track pass/fail rates and identify recurring failures.'],tools:['ChatGPT','Claude','Notion AI','Canva','Airtable AI'],tip:'Ask AI: "What are the top five quality failures for [your product type]?" to make your checklist genuinely risk-based.'},
  'SOP Creation for Repeated Tasks':{intro:'AI turns bullet-point notes into a clear, numbered SOP in minutes — so any team member can follow the process.',steps:['Write rough notes about the task: what triggers it, resources needed, the steps in order, and the final outcome.','Paste the notes into Claude or ChatGPT and request a numbered SOP with a clear title, purpose, and step-by-step instructions.','Review the SOP for accuracy — remove any step the AI invented that is not part of your actual process.','Format and design the SOP in Google Docs or Notion AI with version control and a last-reviewed date.','Use Loom to record a short video walkthrough of the SOP so new staff can see and read the process.'],tools:['Claude','ChatGPT','Google Docs','Notion AI','Loom'],tip:'Always end your SOP with a "What to do if something goes wrong" section — this is what AI most often forgets to include.'},
  'Performance and Accountability Tracking':{intro:'AI helps you design fair tracking systems and write objective performance notes — without bias or vague language.',steps:['Define the measurable behaviours or outputs you need to track (e.g. response time, task completion, error rate).','Use ChatGPT or Claude to draft objective performance criteria — ask it to avoid vague terms like "attitude" or "effort".','Build a performance tracker in Google Sheets or Airtable AI with columns for staff name, metric, target, and actual.','Use Excel Copilot or Gemini to create a monthly summary chart showing individual and team trends.','Write performance notes using Claude to ensure the language is factual, professional, and legally appropriate.'],tools:['ChatGPT','Claude','Google Sheets','Airtable AI','Excel Copilot'],tip:'Performance notes should describe what was observed, not inferred. Ask AI to flag any sentence that includes an assumption about intent.'},
  'Risk Escalation':{intro:'AI helps you write a clear escalation message that gives decision-makers exactly the information they need — fast.',steps:['Define the risk in one sentence: what is happening, how severe it is, and when a decision is needed.','Use ChatGPT or Claude to draft an escalation message with: Risk Description, Impact if Unresolved, Options Available, and Recommended Action.','Remove any AI language that sounds speculative — escalations must be fact-based.','Send via Email with a clear subject line: "ESCALATION: [Risk Name] — Action Required by [Date]".','Log the escalation in Asana AI or ClickUp AI so there is a trackable record of when it was raised and resolved.'],tools:['ChatGPT','Claude','Email','Asana AI','ClickUp AI'],tip:'Always include a recommended action in your escalation — a decision-maker needs options, not just a problem description.'},
  'Weekly Operations Report':{intro:'AI structures your raw data and notes into a professional weekly report that managers can read in under two minutes.',steps:['Collect the week\'s data: completed tasks, open issues, KPI metrics, customer feedback, and team notes.','Use Claude or ChatGPT to structure the data into: Highlights, Challenges, Key Metrics, and Next Week\'s Priorities.','Verify every metric against your actual tracking data — AI cannot generate numbers it was not given.','Format the report in Google Docs or Notion AI with a consistent weekly template.','Use Zapier or Make to auto-send the report to the relevant team at the same time each week.'],tools:['Claude','ChatGPT','Google Docs','Notion AI','Zapier'],tip:'A great weekly report has fewer than 200 words per section. Use AI to compress — then verify before sending.'},
  'Continuous Improvement':{intro:'AI helps you identify patterns in data and write improvement proposals — turning gut feelings into evidence-based actions.',steps:['Gather data on the process you want to improve: frequency of errors, time taken, customer complaints, team feedback.','Paste the data summary into Claude or ChatGPT and ask for a root-cause analysis using the "5 Whys" method.','Ask AI to suggest three practical improvements ranked by effort and impact.','Draft an improvement proposal in Notion AI or Google Docs with the current state, proposed change, and expected benefit.','Track the implementation progress in Asana AI or ClickUp AI with milestones and a review date.'],tools:['Claude','ChatGPT','Notion AI','Google Docs','Asana AI'],tip:'Ask AI: "What data would I need to prove this improvement worked?" — this forces you to define success before you start.'},
  'AI-Assisted Operations Safely':{intro:'This module helps you build an AI use policy that protects your team, data, and customers while maximising AI benefits.',steps:['List all the current tasks in your operations where AI is being used or considered.','Use Claude or ChatGPT to draft an AI use policy covering: what AI is permitted for, what data must not be shared, and how outputs must be reviewed.','Cross-check the policy against your industry\'s data privacy rules — AI cannot advise on local law.','Store the policy in Notion AI or Google Docs and make it accessible to the whole team.','Create a simple AI Dos and Don\'ts card in Canva and display it where staff work.'],tools:['Claude','ChatGPT','Notion AI','Google Docs','Canva'],tip:'Your AI policy should answer one question clearly: "Would I be comfortable if a customer or regulator saw this AI output?" If not, do not send it.'},
  'Project Goal and Scope':{intro:'AI helps you write a sharp project charter that aligns the team on what is — and what is not — in scope from day one.',steps:['Describe the project in plain language: what problem it solves, who benefits, and what success looks like.','Use ChatGPT or Claude to draft a project charter with Goal, Scope, Out of Scope, Stakeholders, and Success Metrics.','Run a scope review: ask AI to identify any item that sounds like a deliverable but has not been explicitly approved.','Store the charter in Notion AI or Google Docs and share with all stakeholders for sign-off.','Create a one-page scope summary in Canva for visual presentations to leadership.'],tools:['ChatGPT','Claude','Notion AI','Google Docs','Canva'],tip:'The "Out of Scope" section is as important as the scope itself. Ask AI to draft it — teams often forget to define what they are NOT doing.'},
  'Stakeholder Mapping':{intro:'AI helps you identify hidden stakeholders and draft personalised communication plans for each group.',steps:['List everyone affected by the project: internal teams, customers, suppliers, regulators, and leadership.','Use ChatGPT or Claude to categorise stakeholders by influence (high/low) and interest (high/low) on a 2x2 matrix.','For each high-influence stakeholder, draft a tailored communication message addressing their specific concerns.','Build a stakeholder register in Airtable AI or Google Sheets with columns for name, role, interest, preferred contact, and update frequency.','Use Monday AI or Asana AI to schedule regular stakeholder check-ins as recurring tasks.'],tools:['ChatGPT','Claude','Airtable AI','Google Sheets','Asana AI'],tip:'Ask AI: "Who might oppose this project and why?" — this helps you map resistors early and plan how to address their concerns.'},
  'Work Breakdown':{intro:'AI decomposes a complex project into a structured task list with dependencies — turning a big goal into manageable steps.',steps:['Describe the project goal and the major deliverables to ChatGPT or Claude.','Ask AI to create a Work Breakdown Structure (WBS) with up to three levels: Phase, Deliverable, Task.','Review each task and estimate the effort in hours or days — AI cannot do this for you; use your team\'s experience.','Enter the task breakdown into Asana AI, ClickUp AI, or Monday AI with owners and due dates.','Identify dependencies: which tasks must finish before others can start, and mark them in the project tool.'],tools:['ChatGPT','Claude','Asana AI','ClickUp AI','Monday AI'],tip:'A good WBS task is specific enough that one person can own it and complete it independently. Ask AI to rewrite any task that is too vague.'},
  'Timeline Planning':{intro:'AI helps you create a realistic project timeline by accounting for dependencies, risks, and resource availability.',steps:['List all project tasks with estimated duration, assigned owner, and dependencies from your Work Breakdown Structure.','Use ChatGPT or Claude to draft a milestone timeline showing critical path items.','Enter the timeline into Monday AI or Asana AI with Gantt chart visualisation.','Ask AI to identify which tasks are on the critical path — any delay in these directly delays the project end date.','Set automated milestone reminders in Calendar or the project tool so the team is alerted before deadlines hit.'],tools:['ChatGPT','Claude','Monday AI','Asana AI','Calendar'],tip:'Add 20% buffer time to your AI-generated timeline — AI does not know your team\'s actual capacity, meeting load, or holiday schedule.'},
  'Project Risk Register':{intro:'AI generates a risk list you would likely miss — helping you plan mitigations before a risk becomes a project crisis.',steps:['Describe the project type, team size, timeline, and key dependencies to Claude or ChatGPT.','Ask AI to generate a risk register with Likelihood (1-5), Impact (1-5), Risk Score, and Mitigation Strategy for each risk.','Add your own domain-specific risks that AI may not know about.','Store the risk register in Airtable AI or Notion AI and assign an owner to each risk.','Review the top five risks in every status meeting and update the register when risk levels change.'],tools:['Claude','ChatGPT','Airtable AI','Notion AI','Google Sheets'],tip:'Ask AI: "What risks are project managers most commonly surprised by in [your industry type]?" — this reveals blind spots in your initial list.'},
  'Budget and Resource Planning':{intro:'AI helps you build a budget template, forecast resource needs, and write clear resource requests for approval.',steps:['List all project phases and the resources needed: people, tools, equipment, third-party services, and contingency.','Use ChatGPT or Claude to draft a budget breakdown with estimated costs and a contingency reserve (typically 10-15%).','Build the budget tracker in Google Sheets or Excel Copilot with formulas for running totals and variance tracking.','Use Gemini or Copilot to analyse the budget for gaps or items that appear underestimated.','Draft a resource approval request using Claude — clear, concise, and linked to specific project deliverables.'],tools:['ChatGPT','Claude','Google Sheets','Excel Copilot','Gemini'],tip:'Always build in a contingency budget line. Ask AI: "What budget items do project managers typically underestimate for this type of project?"'},
  'Status Reporting':{intro:'AI transforms your raw project data into a polished status report that keeps stakeholders informed and confident.',steps:['Collect this week\'s actuals: tasks completed, tasks delayed, budget spent, and risks that changed status.','Use Claude or ChatGPT to format the data into: RAG Status (Red/Amber/Green), Accomplishments, Issues, Next Steps.','Verify every fact — AI cannot see your project data; it can only organise what you give it.','Format the status report in Google Docs or Notion AI using a consistent weekly template.','Send via Email with the project name and date in the subject line; use Slack AI for team-level summaries.'],tools:['Claude','ChatGPT','Google Docs','Notion AI','Email'],tip:'A RAG status report should always explain WHY something is Red — without a cause, stakeholders cannot make decisions.'},
  'Managing Blockers':{intro:'AI helps you diagnose blockers faster and draft clear unblocking requests so the right person acts immediately.',steps:['Write down the blocker in one sentence: what is stuck, who owns the dependency, and what happens if it stays blocked.','Use ChatGPT or Claude to draft an unblocking request that explains the impact and requests a specific action by a specific date.','Log the blocker in ClickUp AI or Asana AI so there is a visible, time-stamped record of when it was raised.','Escalate to the project sponsor using AI-drafted email if the blocker is not resolved within 48 hours.','Use Monday AI to display all open blockers in a shared dashboard so the whole team can see what is slowing progress.'],tools:['ChatGPT','Claude','ClickUp AI','Asana AI','Monday AI'],tip:'Frame every unblocking request as: "I need X from Y by Z date, or the project will slip by N days." Specificity forces action.'},
  'Scope Change Control':{intro:'AI drafts scope change requests and impact assessments — so every change is documented, evaluated, and approved before it is done.',steps:['Document the requested change: what is being added or changed, who is requesting it, and why.','Use Claude or ChatGPT to draft a Change Request form with: Description, Reason, Impact on Scope/Timeline/Budget, and Recommendation.','Assess the impact yourself — AI can structure the analysis but cannot know your actual project constraints.','Store the approved or rejected change request in Notion AI or Google Docs as a project record.','Update the project plan in Asana AI or Monday AI only after formal approval.'],tools:['Claude','ChatGPT','Notion AI','Google Docs','Asana AI'],tip:'Unapproved scope additions are the number-one cause of project overruns. Every change — no matter how small — needs a written record.'},
  'Meeting and Decision Management':{intro:'AI turns meeting notes into structured decision logs — so every meeting produces a clear action, not just a conversation.',steps:['Use Fireflies or Otter.ai to auto-transcribe the meeting in real time.','After the meeting, paste the transcript or key notes into Claude or ChatGPT.','Ask AI to extract: Decisions Made, Action Items (owner + deadline), Open Questions, and Next Meeting date.','Store the meeting record in Notion AI or Google Docs with a searchable title and date.','Send action items to owners via Email or Slack AI immediately after the meeting — same day.'],tools:['Fireflies','Otter.ai','Claude','Notion AI','Slack AI'],tip:'A meeting without a written decision log is just a conversation. Use AI to make every meeting produce at least one documented decision.'},
  'Testing and Acceptance':{intro:'AI generates test cases you might miss and helps you document acceptance criteria that both the team and client agree on.',steps:['Describe the deliverable and its expected behaviour to ChatGPT or Claude.','Ask AI to generate a test case list covering: normal use, edge cases, error scenarios, and user acceptance criteria.','Run each test case manually — AI cannot test for you; it can only design the test plan.','Log test results in Airtable AI or Google Sheets with pass/fail status and notes for each case.','Draft an Acceptance Sign-Off document using Claude and get stakeholder approval before go-live.'],tools:['ChatGPT','Claude','Airtable AI','Google Sheets','Notion AI'],tip:'Ask AI: "What are the most common failure modes for this type of deliverable?" — this reveals test cases that standard testing misses.'},
  'Launch Planning':{intro:'AI helps you build a launch checklist and communications plan that makes go-live day smooth and controlled.',steps:['List every task that must be completed before, during, and after the launch.','Use ChatGPT or Claude to organise the list into a Launch Runbook: Pre-Launch, Launch Day, and Post-Launch sections.','Assign owners and specific times to every Launch Day task — not just "responsible team".','Draft stakeholder communications (internal announcement, customer notification) using Claude.','Set automated reminders for each Launch Day milestone in Calendar or Zapier.'],tools:['ChatGPT','Claude','Google Docs','Calendar','Zapier'],tip:'Build a Launch Rollback Plan alongside your Launch Plan. Ask AI: "What would need to happen for us to reverse this launch safely?"'},
  'Project Closeout':{intro:'AI helps you document lessons learned and write a project closure report that the organisation can learn from.',steps:['Collect feedback from the project team: what went well, what was difficult, and what would you do differently.','Use Claude or ChatGPT to structure the feedback into a Lessons Learned report with themes and actionable recommendations.','Complete a formal Project Closure Report covering: Objectives Achieved, Budget vs Actual, Risks That Occurred, and Recommendations.','Archive all project documents in Notion AI or Google Docs in a clearly named, dated folder.','Send a project completion announcement to stakeholders using a Claude-drafted email.'],tools:['Claude','ChatGPT','Notion AI','Google Docs','Email'],tip:'The most valuable part of a project closeout is the honest "What would we do differently?" section. Ask AI to help write it without softening the feedback.'},
  'AI for Project Managers':{intro:'This module helps you build a personalised AI toolkit for your project management workflow — from planning to closeout.',steps:['Map your project management workflow from initiation to closeout and identify where you spend the most time.','Use ChatGPT or Claude to identify which AI tools would save the most time in each phase.','Test Asana AI for task management, Monday AI for visual planning, and Fireflies for meeting documentation.','Create a personal AI prompt library in Notion AI for the project management tasks you repeat most often.','Draft an AI use agreement for your project team using Claude — covering what AI is approved for and what requires human verification.'],tools:['ChatGPT','Claude','Asana AI','Monday AI','Fireflies'],tip:'The best project AI use is invisible — it saves time without anyone noticing. Focus on making your planning, reporting, and communication 50% faster.'},
  'Coordinator Role Clarity':{intro:'AI helps you write a clear role description and boundary document — so the team knows exactly what a coordinator does and does not own.',steps:['List all the tasks you currently perform as a coordinator and categorise them by frequency and importance.','Use ChatGPT or Claude to draft a Coordinator Role Description with: Core Responsibilities, Decision Authority, Escalation Path, and Key Relationships.','Identify role overlaps with team members, managers, or project leads and ask AI to help you draft boundary agreements.','Store the role description in Notion AI or Google Docs and share with the whole team for alignment.','Review and update the role description every quarter — coordinator roles evolve as projects change.'],tools:['ChatGPT','Claude','Notion AI','Google Docs','Email'],tip:'The most common coordinator problem is unclear authority. Your role description should explicitly state what decisions you can make independently.'},
  'Task Tracker Setup':{intro:'AI helps you design a task tracker that your whole team will actually use — not just the one who set it up.',steps:['Define what the tracker needs to show: task name, owner, due date, status, priority, and dependencies.','Use ChatGPT or Claude to recommend the best tool for your team size and project complexity.','Set up the tracker in Airtable AI, ClickUp AI, or Google Sheets with the recommended structure.','Use AI to write a quick team guide (one page) explaining how to use the tracker and update it daily.','Automate status update reminders using Zapier or Make so the tracker stays current without manual chasing.'],tools:['ChatGPT','Claude','Airtable AI','ClickUp AI','Zapier'],tip:'A tracker no one updates is worse than no tracker. Keep it to five columns maximum — complexity kills adoption.'},
  'Follow-Up Messages':{intro:'AI drafts professional follow-up messages that are firm without being rude — increasing your response rate significantly.',steps:['Identify what you are following up on: an unanswered email, a missed deadline, an unconfirmed meeting, or a pending decision.','Use Claude or ChatGPT to draft a follow-up with a specific call to action and a clear deadline for response.','Choose the right tone — first follow-up should be friendly, second should be firmer, third should involve escalation.','Send via Email with a clear subject line referencing the original thread.','Log all follow-up attempts in Airtable AI or Google Sheets so you have a record of who was contacted and when.'],tools:['Claude','ChatGPT','Email','Airtable AI','Google Sheets'],tip:'The single most effective follow-up improvement: always end with a specific question, not a vague "please let me know."'},
  'Meeting Preparation':{intro:'AI builds a structured meeting agenda in minutes — so every meeting has a clear purpose and everyone comes prepared.',steps:['List the meeting\'s purpose, participants, time available, and the decisions that need to be made.','Use ChatGPT or Claude to draft an agenda with timed sections, a pre-reading list, and expected outcomes for each item.','Send the agenda via Email at least 24 hours before the meeting with any background documents attached.','Use Notion AI or Google Docs to store meeting agendas in a consistent, searchable format.','Set a Calendar reminder for all participants 30 minutes before the meeting with the agenda link.'],tools:['ChatGPT','Claude','Google Docs','Notion AI','Calendar'],tip:'Never schedule a meeting without a written agenda. Ask AI: "What decision does this meeting need to produce?" — if you can\'t answer, cancel the meeting.'},
  'Meeting Minutes':{intro:'AI converts your rough meeting notes or transcript into clean, professional minutes that participants actually read.',steps:['Use Fireflies or Otter.ai to transcribe the meeting automatically, or take structured notes in real time.','After the meeting, paste the transcript or notes into Claude or ChatGPT.','Ask AI to extract: Attendees, Decisions Made, Action Items (owner + deadline), and Parking Lot (deferred items).','Review and correct the AI output — verify names, dates, and decision wording before publishing.','Distribute minutes via Email within 24 hours and store in Notion AI or Google Docs.'],tools:['Fireflies','Otter.ai','Claude','ChatGPT','Notion AI'],tip:'Good meeting minutes have one thing great meeting minutes lack: a written record of what was NOT decided and why.'},
  'Document Control':{intro:'AI helps you build a document naming and version control system — so the team always uses the right version of every file.',steps:['List all document types your team uses and identify the most common version control problems (e.g. multiple "final" files).','Use ChatGPT or Claude to draft a Document Control Policy with naming conventions, version numbering, and approval processes.','Set up a master document library in Notion AI or Google Docs with clear folders for each document category.','Create a Document Register in Airtable AI or Google Sheets tracking: document name, owner, version, review date, and status.','Use Zapier to automate notifications when a document reaches its review date.'],tools:['ChatGPT','Claude','Notion AI','Airtable AI','Zapier'],tip:'The best document naming convention is the one everyone follows. Keep it simple: [ProjectName]_[DocumentType]_v[Number]_[Date].'},
  'Dependency Tracking':{intro:'AI helps you map task dependencies and identify the critical path — so you know which delays will cascade into project slippage.',steps:['List all project tasks and identify for each: what must be completed before this task can start.','Use ChatGPT or Claude to map the dependency chain and identify the critical path.','Enter dependencies into Monday AI, Asana AI, or ClickUp AI so the tool can visualise the dependency map.','Flag all critical-path tasks with a red indicator and assign a senior owner to each.','Review dependency status in every project status meeting — one late task on the critical path delays the whole project.'],tools:['ChatGPT','Claude','Monday AI','Asana AI','ClickUp AI'],tip:'Ask AI: "If Task X is delayed by 3 days, which other tasks are affected and by how much?" — this pressure-tests your dependency mapping.'},
  'Issue Log Management':{intro:'AI helps you maintain a well-structured issue log — turning a chaotic problems list into a managed, prioritised action register.',steps:['Capture every issue with: description, date raised, severity (High/Medium/Low), owner, and target resolution date.','Use ChatGPT or Claude to assess issue severity based on customer impact, financial risk, and likelihood of escalation.','Build the issue log in Airtable AI or Google Sheets with colour-coded severity and auto-calculated "days open" column.','Review all High-severity issues in every weekly meeting and update the status in real time.','Use Zapier to automatically alert the relevant owner when an issue has been open for more than 5 business days without resolution.'],tools:['ChatGPT','Claude','Airtable AI','Google Sheets','Zapier'],tip:'An issue log only works if it is reviewed regularly. Set a recurring Calendar reminder to review and close resolved issues weekly.'},
  'Stakeholder Update Coordination':{intro:'AI helps you create a stakeholder communication schedule and draft tailored updates for each audience — saving hours of rewriting.',steps:['List all stakeholders and their preferred communication frequency and format (executive brief, detailed report, Slack message).','Use ChatGPT or Claude to draft a Communication Plan matrix: who, what, when, how, and who sends it.','For each stakeholder group, draft a template update in Claude — customised to their level of detail and interest.','Schedule updates using Calendar or Zapier so communication is consistent and not reactive.','Store all sent stakeholder updates in Notion AI or Google Docs as a communication audit trail.'],tools:['ChatGPT','Claude','Calendar','Notion AI','Zapier'],tip:'Different stakeholders need different levels of detail. Ask AI: "Rewrite this project update for a senior executive who has 60 seconds to read it."'},
  'Deadline Monitoring':{intro:'AI helps you set up a proactive deadline monitoring system — so you are warned about at-risk deadlines before they are missed.',steps:['List all active deadlines: project milestones, regulatory submissions, customer commitments, and internal targets.','Enter all deadlines into Google Sheets or Airtable AI with columns for deadline date, owner, status, and risk level.','Use Excel Copilot or Gemini to create a formula that calculates days remaining and highlights at-risk items in red.','Set automated deadline reminders using Zapier to notify owners 7 days, 3 days, and 1 day before the deadline.','Review the deadline dashboard in every team meeting and escalate any item showing red status.'],tools:['Google Sheets','Airtable AI','Excel Copilot','Gemini','Zapier'],tip:'The best deadline system has three alerts: an early warning (7 days), a reminder (3 days), and a final alert (1 day). AI-automated reminders remove the human error.'},
  'Proof of Completion':{intro:'AI helps you design a consistent proof-of-completion process — so every finished task or deliverable has a verified, documented record.',steps:['Define what "proof of completion" looks like for each deliverable type: photo, sign-off, timestamp, export, or test result.','Use ChatGPT or Claude to draft a Completion Checklist specific to your most common deliverable types.','Store completion records in Airtable AI or Google Sheets with a date, owner, and attached evidence link.','Use Canva to create a professional Completion Certificate template for major project milestones.','Set up a Zapier workflow to automatically notify the project sponsor when a milestone completion is recorded.'],tools:['ChatGPT','Claude','Airtable AI','Canva','Zapier'],tip:'Never mark a task complete without evidence. The standard question is: "What would I show a client if they asked for proof this was done?"'},
  'Escalation Support':{intro:'AI helps you write escalation messages that are clear, professional, and actually get actioned by busy decision-makers.',steps:['Define the escalation: what is the issue, what decision is needed, who needs to make it, and what happens if they do not.','Use Claude or ChatGPT to draft the escalation message in SBAR format: Situation, Background, Assessment, Recommendation.','Remove any emotional language — escalations must be factual and solution-focused.','Send via Email with "ESCALATION" clearly in the subject line and a specific response deadline.','Log the escalation in ClickUp AI or Asana AI and follow up if there is no response within 24 hours.'],tools:['Claude','ChatGPT','Email','ClickUp AI','Asana AI'],tip:'SBAR is the gold standard for escalation communication. Ask AI to format every escalation in SBAR — it forces clarity and gets faster decisions.'},
  'Coordinator Daily Summary':{intro:'AI transforms your end-of-day notes into a structured daily summary that keeps your manager and team informed without meetings.',steps:['At the end of each day, write bullet notes of: completed tasks, open issues, blockers, and tomorrow\'s priorities.','Paste the notes into Claude or ChatGPT and ask it to restructure into a professional Daily Summary format.','Review for accuracy and remove any AI-added assumptions or speculative language.','Send the summary via Email or Slack AI to the relevant manager before end of business day.','Keep a running weekly log of daily summaries in Notion AI or Google Docs for accountability and reference.'],tools:['Claude','ChatGPT','Email','Slack AI','Notion AI'],tip:'A great daily summary has exactly three priorities for tomorrow. If you list more than three, ask AI to help you rank and cut.'},
  'AI for Coordinators':{intro:'This module builds your personal AI workflow for coordinator tasks — making follow-up, tracking, and communication 50% faster.',steps:['List your top five most time-consuming coordinator tasks and estimate how much time each takes per week.','Use ChatGPT or Claude to identify which AI tool would reduce effort the most for each task.','Create a coordinator prompt library in Notion AI with ready-to-use AI prompts for: follow-ups, status updates, meeting agendas, and escalations.','Test Fireflies for meeting transcription and ClickUp AI for task management this week.','Set a monthly review in Calendar to assess which AI tools are saving time and which are not worth the effort.'],tools:['ChatGPT','Claude','Notion AI','Fireflies','ClickUp AI'],tip:'The best AI tools for a coordinator are the ones you use every day without thinking. Start with the task you hate most and automate it first.'},
  'Job Requirement Clarification':{intro:'AI helps you write clear, unbiased job requirements — so you attract the right candidates and avoid legal risk.',steps:['Interview the hiring manager to understand the actual day-to-day work, not just the job title.','Use ChatGPT or Claude to draft job requirements that separate "must have" from "nice to have" skills.','Ask AI to flag any requirement that could be discriminatory, exclusionary, or unnecessarily restrictive.','Review the requirements with the hiring team before posting — AI flags issues but humans make the final call.','Store the approved job requirements in Notion AI or Google Docs as the master reference for all hiring decisions.'],tools:['ChatGPT','Claude','Notion AI','Google Docs','Workable AI'],tip:'Ask AI: "Does any requirement in this job description potentially exclude qualified candidates unfairly?" — this is the most important compliance check.'},
  'Job Advertisement Writing':{intro:'AI writes compelling job ads that attract top candidates — while you ensure accuracy, fairness, and brand alignment.',steps:['Provide the job requirements, company culture description, and salary range to Claude or ChatGPT.','Ask AI to write three versions of the job ad: formal, conversational, and brief (for social media).','Check the ad for unconscious bias: gendered language, unnecessary degree requirements, or exclusionary tone.','Use Grammarly to review grammar, tone, and clarity before publishing.','Post via Workable AI or Greenhouse AI to distribute across multiple job boards automatically.'],tools:['Claude','ChatGPT','Grammarly','Workable AI','Greenhouse AI'],tip:'Ask AI: "Does this job ad use any language that research shows reduces applications from women or minorities?" — a small wording change can double your applicant pool.'},
  'Candidate Screening':{intro:'AI helps you screen CVs faster and more consistently — but every final decision must involve a human reviewing the full application.',steps:['Define your screening criteria clearly: must-have skills, minimum experience, and essential qualifications.','Use Workable AI or Greenhouse AI to auto-score incoming applications against your criteria.','Manually review all applications flagged as borderline — AI scoring has blind spots, especially for non-traditional backgrounds.','Use ChatGPT or Claude to draft a standardised screening question set for phone screens.','Log all screening decisions in Airtable AI with a brief rationale for each outcome.'],tools:['Workable AI','Greenhouse AI','ChatGPT','Claude','Airtable AI'],tip:'AI screening should never be the final decision — it is a filter, not a judge. Always review rejected applications before closing a role.'},
  'Interview Questions':{intro:'AI generates competency-based interview questions that are legally safe, role-specific, and free of bias.',steps:['List the three to five core competencies required for the role (e.g. communication, problem-solving, resilience).','Use Claude or ChatGPT to generate behavioural interview questions using the STAR format for each competency.','Ask AI to flag any question that could be considered discriminatory or legally problematic in your country.','Create a standardised question set in Notion AI or Google Docs so every interviewer asks the same questions.','Add a scoring rubric to each question so interviewers rate answers consistently, not subjectively.'],tools:['Claude','ChatGPT','Notion AI','Google Docs','Workable AI'],tip:'The best interview questions start with "Tell me about a time when..." — behavioural questions reveal real capability, not just what candidates say they would do.'},
  'Reference and Background Checks':{intro:'AI helps you design a structured reference check process and draft professional reference request messages.',steps:['Define what you need to verify: employment dates, role responsibilities, performance, conduct, and reason for leaving.','Use ChatGPT or Claude to draft a reference check question guide with open-ended questions for each verification area.','Send reference requests via Email using a professional, clear template drafted by AI.','Log all reference check outcomes in Airtable AI or Google Sheets with dates and responses.','Review all references before making a job offer — never skip this step even if the candidate seems perfect.'],tools:['ChatGPT','Claude','Email','Airtable AI','Workable AI'],tip:'The most revealing reference check question is: "Would you rehire this person?" A hesitation or "no" is more informative than anything else they say.'},
  'Offer and Acceptance Process':{intro:'AI helps you draft professional offer letters and manage the acceptance process smoothly and efficiently.',steps:['Confirm the final offer details: role title, salary, start date, reporting line, and any conditions.','Use Claude or ChatGPT to draft a formal offer letter with all required legal elements for your region.','Have the offer letter reviewed by HR or legal before sending — AI cannot advise on employment law.','Send the offer via Email with a clear acceptance deadline and counter-signature instructions.','Log the offer status in Workable AI or Airtable AI and follow up within 48 hours if there is no response.'],tools:['Claude','ChatGPT','Email','Workable AI','Airtable AI'],tip:'Always include a verbal offer before sending the written letter — a candidate who is surprised by the written offer is a candidate who may decline it.'},
  'Onboarding Plan':{intro:'AI builds a structured 30/60/90 day onboarding plan that gives every new hire a clear path to productivity.',steps:['Define what the new hire should know, be able to do, and have completed at 30, 60, and 90 days.','Use ChatGPT or Claude to draft a role-specific onboarding plan with daily activities for week one and weekly milestones for months one to three.','Add team introductions, system access, training sessions, and check-in meetings to the plan.','Store the onboarding plan in Notion AI and share with the new hire before their first day.','Use Asana AI or ClickUp AI to track onboarding task completion and flag any step that is delayed.'],tools:['ChatGPT','Claude','Notion AI','Asana AI','ClickUp AI'],tip:'The single most important onboarding moment is day one. Ask AI to design a day-one schedule that makes the new hire feel welcomed, informed, and clear on their first tasks.'},
  'Training and Assessment':{intro:'AI helps you design effective training content and assessment questions — turning knowledge into measurable workplace capability.',steps:['Define the training objective: what should the learner be able to do after the training?','Use ChatGPT or Claude to draft training content using the "explain, demonstrate, practise, assess" learning model.','Create assessment questions using Claude — include scenario-based questions, not just recall questions.','Build the training module in Notion AI or Google Docs with embedded checklists and self-assessment tools.','Use Loom to record video explanations for complex processes that are hard to describe in text.'],tools:['ChatGPT','Claude','Notion AI','Google Docs','Loom'],tip:'The best assessment question presents a real workplace scenario and asks what the learner would do — not what the correct answer is in a textbook.'},
  'Attendance and Schedule Issues':{intro:'AI helps you document attendance patterns objectively and draft fair, professional conversations about schedule concerns.',steps:['Record attendance data factually: dates absent, times late, patterns, and any reasons provided by the employee.','Use ChatGPT or Claude to analyse the attendance record and identify patterns without making assumptions about cause.','Draft a professional conversation guide using Claude that addresses the facts, not the speculation.','Log all attendance discussions in Airtable AI or Google Sheets with dates and outcomes.','Use Google Sheets or Excel Copilot to create an attendance tracker that auto-calculates monthly absence rates.'],tools:['ChatGPT','Claude','Airtable AI','Google Sheets','Excel Copilot'],tip:'Attendance conversations must separate fact from assumption. Ask AI to rewrite any note that says "seems to be" or "appears to" — use only confirmed observations.'},
  'Performance Notes':{intro:'AI helps you write legally sound, factual performance notes that describe behaviour objectively — without bias or ambiguity.',steps:['Write down the specific behaviour or outcome you observed: what happened, when, in what context, and what the impact was.','Use Claude or ChatGPT to restructure your notes into the SBI format: Situation, Behaviour, Impact.','Ask AI to flag any language that is subjective, emotional, or legally risky (e.g. "bad attitude", "difficult personality").','Store performance notes in a confidential HR file in Notion AI or Google Docs — never in shared team folders.','Review performance notes with HR before they are used in any formal process.'],tools:['Claude','ChatGPT','Notion AI','Google Docs','Email'],tip:'The SBI format (Situation-Behaviour-Impact) is the safest way to write performance notes. Ask AI to rewrite any note not in SBI format before saving it.'},
  'Feedback Conversations':{intro:'AI helps you prepare for feedback conversations — so you deliver clear, constructive feedback that people can act on.',steps:['Write the specific feedback you need to give: what was observed, what the expected standard is, and what needs to change.','Use Claude or ChatGPT to draft a feedback conversation guide using the SBI model and a solution-focused closing.','Practise the conversation by asking Claude to role-play as the employee and respond to your opening statement.','Prepare two or three specific examples of the behaviour — one example can be dismissed; multiple examples show a pattern.','After the conversation, document the key points and agreed actions in Notion AI or Google Docs.'],tools:['Claude','ChatGPT','Notion AI','Google Docs','Email'],tip:'The best feedback conversation ends with the employee stating their own next steps — not just agreeing to the manager\'s instructions.'},
  'Policy Communication':{intro:'AI rewrites complex policy documents into clear, plain-English summaries that employees actually understand and follow.',steps:['Identify the policy or rule change that needs to be communicated and who needs to receive it.','Use Claude or ChatGPT to rewrite the policy in plain English — aim for a maximum of a Grade 8 reading level.','Ask AI to generate an FAQ section covering the most common questions employees will have about the policy.','Create a visual policy summary in Canva — a one-page infographic that employees can keep for reference.','Distribute via Email and store the official policy document in Notion AI or Google Docs with a version number and effective date.'],tools:['Claude','ChatGPT','Canva','Email','Notion AI'],tip:'Always test your policy communication by asking: "Could someone misunderstand this?" Ask AI: "What are the three ways someone might misread this policy?"'},
  'Staff Concern Handling':{intro:'AI helps you document staff concerns fairly and draft appropriate responses — while preserving confidentiality and trust.',steps:['Record the concern factually: what was raised, by whom (if not confidential), when, and the initial response.','Use Claude or ChatGPT to draft an acknowledgment response that confirms the concern has been received and will be reviewed.','Assess the severity: is this a formal grievance, an informal concern, or a workplace wellbeing issue?','Store the concern record in a confidential file in Notion AI — never in a shared team space.','Draft the formal or informal resolution response using Claude and review with HR before sending.'],tools:['Claude','ChatGPT','Notion AI','Google Docs','Email'],tip:'The first response to any staff concern is the most important — it sets the tone for whether the person feels heard or dismissed. Use AI to draft it, then personalise it.'},
  'AI in HR Safely':{intro:'AI can transform HR efficiency — but without guardrails, it introduces legal, ethical, and privacy risks that HR must manage.',steps:['Map every HR process where AI is currently used or being considered: job ads, screening, performance notes, communications.','Use Claude or ChatGPT to draft an HR AI Policy covering: approved uses, prohibited uses, data privacy rules, and human review requirements.','Ensure all AI-assisted hiring decisions are reviewed by a human before action — AI cannot make final employment decisions legally.','Create a training session for HR staff on AI limitations: bias, hallucination, confidentiality risks, and data privacy.','Store the AI policy in Notion AI and review it quarterly as AI tools and regulations evolve.'],tools:['Claude','ChatGPT','Notion AI','Google Docs','Canva'],tip:'The three things AI must never do in HR without human review: reject a candidate, issue a disciplinary action, or access confidential personnel files. Build these as hard rules in your policy.'},
  'Admin Daily Priorities':{intro:'AI turns your morning task backlog into a structured daily priority list — so you spend the day doing the right things in the right order.',steps:['At the start of each day, list all tasks, requests, and deadlines in a single document or chat with Claude or ChatGPT.','Ask AI to organise the list by urgency (must do today), importance (adds real value), and routine (can be batched).','Identify the three most important tasks for the day and commit to completing them before 12pm.','Use Google Sheets or Airtable AI to track daily task completion over time — this reveals your personal productivity patterns.','Set end-of-day Calendar reminders to review what was completed and prepare tomorrow\'s priority list.'],tools:['ChatGPT','Claude','Google Sheets','Airtable AI','Calendar'],tip:'The hardest part of admin priority is saying no to low-value requests. Ask AI: "Is this task urgent, important, both, or neither?" — the answer tells you where it goes.'},
  'Professional Email Handling':{intro:'AI drafts clear, professional emails in seconds — and helps you manage your inbox strategically rather than reactively.',steps:['Use Claude or ChatGPT to draft emails for complex situations: complaints, requests, follow-ups, or sensitive topics.','For every email you draft with AI, verify the recipient name, key facts, dates, and figures before sending.','Use Grammarly to check grammar and professional tone — particularly for external emails.','Set up Zapier or Make to auto-sort and label incoming emails by type: urgent, action required, for information, routine.','Process your inbox using the "4 Ds": Do it now, Delegate it, Defer it, or Delete it — AI can help you triage.'],tools:['Claude','ChatGPT','Grammarly','Zapier','Email'],tip:'Never send an AI-drafted email without reading it out loud. You will catch the errors that your eyes skip over when reading silently.'},
  'Calendar and Scheduling':{intro:'AI helps you optimise your calendar — blocking time for deep work, batching meetings, and protecting your most productive hours.',steps:['Map your current week in Calendar and identify where the biggest time gaps and conflicts are.','Use ChatGPT or Claude to draft a weekly calendar template that protects focused work time and batches similar tasks.','Set up recurring calendar blocks for: daily priorities, weekly reviews, team check-ins, and email processing.','Use Zapier to connect your Calendar to your task tracker so new tasks automatically become calendar events.','Review your calendar every Friday to plan the following week — ask AI to help you rank competing priorities.'],tools:['ChatGPT','Claude','Calendar','Zapier','Google Sheets'],tip:'Time block your hardest task first each morning. Research shows most people do their best work before 11am — protect that window.'},
  'Data Entry Accuracy':{intro:'AI helps you design data entry workflows that minimise errors — and catch mistakes before they propagate through your systems.',steps:['Identify the most common data entry errors in your current processes: wrong formats, missing fields, transposed numbers.','Use ChatGPT or Claude to design a Data Entry Quality Checklist specific to your forms or systems.','Use Excel Copilot or Google Sheets with data validation rules to prevent common entry errors at the source.','Set up a spot-check process: use AI to randomly sample 10% of entries weekly and flag outliers for human review.','Use Zapier to auto-validate critical data entries — for example, flagging if a phone number has the wrong format.'],tools:['ChatGPT','Claude','Excel Copilot','Google Sheets','Zapier'],tip:'The best data entry quality check is a second-person review of a random sample. Even 10 minutes of spot-checking weekly prevents hours of error correction later.'},
  'File and Folder Organisation':{intro:'AI helps you design a logical file structure that the whole team follows — so nothing is ever lost or duplicated again.',steps:['List all the types of files your team creates and stores: reports, templates, contracts, photos, correspondence.','Use ChatGPT or Claude to design a folder hierarchy with clear, consistent naming conventions.','Create the folder structure in Google Drive or a shared drive and migrate existing files using the new naming convention.','Use Notion AI to document the file organisation system with examples so new team members can follow it immediately.','Archive old files in a clearly named "Archive_[Year]" folder — never delete, but keep the active workspace clean.'],tools:['ChatGPT','Claude','Notion AI','Google Docs','Airtable AI'],tip:'If you can\'t find a file in under 30 seconds, your folder structure is broken. Test your system with someone new — if they struggle, redesign it.'},
  'Customer Support Admin':{intro:'AI helps you manage customer enquiries faster, draft consistent responses, and build a knowledge base that reduces repeat questions.',steps:['Categorise the most common customer enquiries your team receives: billing, product questions, complaints, returns, delays.','Use Claude or ChatGPT to draft a standard response template for each enquiry category.','Store all templates in Notion AI as a Customer Response Library — update them monthly based on new enquiry patterns.','Use Zendesk AI to auto-route incoming enquiries to the correct team and suggest template responses.','Track response time, resolution rate, and satisfaction scores in Airtable AI or Google Sheets to identify improvement areas.'],tools:['Claude','ChatGPT','Zendesk AI','Notion AI','Airtable AI'],tip:'The best customer support is proactive — answer the question before the customer asks it. Ask AI: "What question will this customer ask next?" and address it in your first reply.'},
  'Basic Report Preparation':{intro:'AI helps you structure and write professional reports — turning raw data and notes into a document that informs decisions.',steps:['Define the report\'s purpose: who reads it, what decision it supports, and what data it needs to include.','Use ChatGPT or Claude to create a report outline: Executive Summary, Context, Findings, Analysis, Recommendations, Appendix.','Fill each section with your actual data and verified facts — AI provides structure, not content.','Use Gemini or Copilot to check the report for logical consistency and suggest improvements to the analysis section.','Format the final report in Google Docs and export as PDF for distribution.'],tools:['ChatGPT','Claude','Gemini','Copilot','Google Docs'],tip:'Write the Executive Summary last — it should summarise the Recommendations, not the process. Ask AI to draft it from your completed report.'},
  'Expense and Invoice Admin':{intro:'AI helps you process expenses faster, spot anomalies, and create professional invoices — reducing errors and processing time.',steps:['Collect all expense receipts, invoices, and purchase orders for the period.','Use Excel Copilot or Google Sheets to categorise and total expenses by type: travel, supplies, contractor, software.','Use Gemini or ChatGPT to cross-check totals for anomalies — amounts that seem unusually high compared to previous periods.','Generate professional invoices using Canva templates or a Zapier-connected invoicing workflow.','Store all processed expense and invoice records in Airtable AI or Google Sheets with status: submitted, approved, paid.'],tools:['Excel Copilot','Google Sheets','Gemini','ChatGPT','Canva'],tip:'Set a consistent monthly expense processing day. Batch processing is 3x faster than processing expenses as they arrive.'},
  'CRM or Tracker Updates':{intro:'AI helps you keep CRM records accurate and complete — and automates the routine update tasks that slow down sales and account teams.',steps:['Identify which CRM fields are most often incomplete or out of date: contact details, deal stage, last contact date, next action.','Use Zapier or Make to auto-update CRM records when specific triggers occur: email sent, meeting booked, document signed.','Use ChatGPT or Claude to draft a CRM data quality policy: what fields are mandatory and how often each record must be reviewed.','Run a monthly data quality check in Airtable AI or your CRM to identify records with missing or outdated information.','Use Gemini or Copilot to analyse CRM data and identify patterns: which customer types convert fastest, which deals stall most.'],tools:['Zapier','Make','ChatGPT','Airtable AI','Gemini'],tip:'A CRM is only as good as the data in it. Set a team rule: every customer interaction is logged within 24 hours, or it does not count.'},
  'Phone and Message Notes':{intro:'AI helps you capture phone and message notes accurately — so nothing discussed verbally is ever lost or misremembered.',steps:['Immediately after every call or message thread, write brief bullet notes: who called, what was discussed, what was agreed, and what the next action is.','Use Otter.ai to transcribe important calls in real time, or use Fireflies for recorded team calls.','Paste your bullet notes into Claude or ChatGPT and ask it to format them into a professional call summary.','Log the call summary in Airtable AI, your CRM, or Notion AI linked to the relevant contact or project.','Send a brief follow-up email to the caller summarising the conversation and confirmed next steps.'],tools:['Otter.ai','Fireflies','Claude','Airtable AI','Email'],tip:'A call summary email is the single most professional habit you can develop. It confirms agreements, prevents misunderstandings, and creates a written record.'},
  'Task Request Clarification':{intro:'AI helps you draft clarifying questions that get the information you need — without sounding incompetent or difficult.',steps:['When you receive a vague task request, write down what you do know and list the specific gaps in the information.','Use Claude or ChatGPT to draft a clarification message that asks the most important questions clearly and professionally.','Limit your clarification to three questions maximum — more questions signals poor understanding; fewer is more effective.','Send the clarification via Email or Slack AI and set a reminder in Calendar to follow up if there is no response.','Once clarified, confirm your understanding of the task in writing before starting work — this prevents scope creep.'],tools:['Claude','ChatGPT','Email','Slack AI','Calendar'],tip:'The best clarification question is: "Help me make sure I deliver exactly what you need — can you describe what the finished output looks like?" One question, complete clarity.'},
  'Confidential Information Handling':{intro:'AI helps you design safe information handling processes — ensuring confidential data is protected at every step of your workflow.',steps:['Map all the types of confidential information your role handles: personal data, financial records, HR files, client data.','Use Claude or ChatGPT to draft a Confidential Information Handling Policy for your team.','Set up access controls in Google Docs or Notion AI so confidential files can only be viewed by authorised users.','Create a Data Handling Checklist in Canva — a simple visual reminder of what can and cannot be shared.','Use Zapier to trigger an alert when a confidential document is accessed or downloaded outside working hours.'],tools:['Claude','ChatGPT','Notion AI','Google Docs','Canva'],tip:'The most important rule for AI and confidential data: never paste a real person\'s name, ID number, salary, or health information into a public AI tool. Use placeholders.'},
  'Admin Process Improvement':{intro:'AI helps you identify the highest-value admin processes to improve — and design practical solutions that save the most time.',steps:['List all recurring admin tasks and estimate how much time each takes per week.','Use ChatGPT or Claude to identify which tasks are best candidates for AI assistance, automation, or elimination.','Pick the single highest-value improvement and design a simple new process using Make or Zapier for automation.','Document the improved process in Notion AI or Google Docs with a before/after comparison.','Measure the time saved after one month and report the improvement to your manager with data.'],tools:['ChatGPT','Claude','Make','Zapier','Notion AI'],tip:'The most valuable admin improvements are invisible — they happen automatically without anyone noticing. Focus on automating the tasks that are most repetitive first.'},
  'AI for Admin Work':{intro:'This module builds your complete AI admin toolkit — covering the tools, habits, and safeguards for using AI effectively every day.',steps:['List every admin task you do in a week and mark each as: write (drafting), organise (tracking), communicate (send/receive), or automate (recurring).','Assign the best AI tool to each category: Claude/ChatGPT for writing, Airtable/Sheets for organising, Grammarly for communicating, Zapier for automating.','Create an AI prompt library in Notion AI with your most-used prompts for emails, summaries, checklists, and reports.','Build one Zapier or Make automation this week that saves you at least 30 minutes per week.','Set a monthly review reminder in Calendar to assess your AI toolkit and replace tools that are not saving time.'],tools:['Claude','ChatGPT','Airtable AI','Grammarly','Zapier'],tip:'The goal is not to use more AI tools — it is to use fewer tools better. Focus on mastering three tools completely before adding a fourth.'},
};

// ── AI How-To Section Renderer ─────────────────────────────────────────────
function getAIWorkflow(title){
  return AI_WORKFLOWS[title] || {
    intro:`Use AI to assist with ${title} — organise information, draft communications, and structure your workflow while verifying all outputs against real data.`,
    steps:['Gather all confirmed facts relevant to this task before engaging any AI tool.','Use ChatGPT or Claude to organise, draft, or structure the work based on the information you provide.','Review the AI output carefully and remove any invented details, assumptions, or incorrect information.','Share the verified output with the relevant person or store it in the appropriate tracking system.','Record the outcome and schedule a follow-up action to ensure the task is fully resolved.'],
    tools:['ChatGPT','Claude','Google Docs','Google Sheets','Email'],
    tip:'AI is a first-draft tool, not a final-decision tool. Always verify facts, names, dates, and figures before acting on AI output.',
  };
}

function renderAIHowToSection(title){
  const wf=getAIWorkflow(title);
  const toolBadges=(wf.tools||[]).map(t=>{
    const meta=AI_TOOL_META[t]||{icon:'🔧',url:'',desc:t};
    const inner=`${meta.icon?`<span class="aiToolBadgeIcon">${meta.icon}</span>`:''}<span>${esc(t)}</span>`;
    return meta.url
      ?`<a href="${esc(meta.url)}" target="_blank" rel="noopener" class="aiToolBadge" title="${esc(meta.desc)}">${inner}</a>`
      :`<span class="aiToolBadge" title="${esc(meta.desc)}">${inner}</span>`;
  }).join('');
  return `<section class="aiHowToSection">
  <div class="aiHowToHeader"><span class="aiHowToIcon">🤖</span><h3>How to Use AI for: ${esc(title)}</h3></div>
  <p class="aiHowToIntro">${esc(wf.intro)}</p>
  <ol class="aiWorkflowSteps">${(wf.steps||[]).map(s=>`<li>${esc(s)}</li>`).join('')}</ol>
  <div class="aiHowToToolRow"><span class="aiHowToToolLabel">Recommended tools:</span><div class="aiToolBadges">${toolBadges}</div></div>
  ${wf.tip?`<div class="aiProTip"><span class="aiProTipIcon">💡</span><span><strong>Pro tip:</strong> ${esc(wf.tip)}</span></div>`:''}
</section>`;
}

function renderTopicAITools(tools){
  if(!tools||!tools.length) return '';
  const cards=tools.map(t=>{
    const meta=AI_TOOL_META[t]||{icon:'🔧',cat:'Tool',url:'',desc:'AI productivity tool.'};
    const inner=`<div class="aiToolCardIcon">${meta.icon||'🔧'}</div><div class="aiToolCardBody"><strong>${esc(t)}</strong><span class="aiToolCardCat">${esc(meta.cat||'')}</span><p>${esc(meta.desc||'')}</p></div>`;
    return meta.url
      ?`<a href="${esc(meta.url)}" target="_blank" rel="noopener" class="aiToolCard">${inner}</a>`
      :`<div class="aiToolCard">${inner}</div>`;
  }).join('');
  return `<section class="lessonExtra"><h3>Recommended AI Tools for This Topic</h3><div class="aiToolGrid">${cards}</div></section>`;
}

// ── Lesson Render ─────────────────────────────────────────────────────────
function renderLesson(courseId, day){
  const c=safeCourseById(courseId);
  const d=lessonByDay(c,day);
  if(!c||!d) return `<div class="empty"><h2>Module not found</h2><button onclick="setRoute('home')">Back</button></div>`;
  const pr=progressFor(c.id,day)||{};
  const saved=pr.practice_answer||'';
  const hasQuizResult=asArray(pr.quiz_answers).length>0||Number(pr.quiz_total||0)>0;
  const qr=hasQuizResult?{answers:asArray(pr.quiz_answers).map(Number),score:Number(pr.quiz_score||0)}:null;
  return `<section class="topbar"><button class="ghost" onclick="setRoute('course','${c.id}')">← Course</button><span class="pill">Module ${d.day} of 14</span></section>
<article class="lessonPanel">
  <p class="eyebrow">${esc(c.title)}</p>
  <h1>${esc(d.title)}</h1>
  <h3>Objective</h3><p>${esc(d.objective)}</p>
  <h3>Key Learning</h3><ul>${(d.content||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
  ${renderAIHowToSection(d.title)}
  ${renderLessonSection('Step-by-Step Workflow',d.steps,true)}
  ${renderPromptExamples(d.prompts)}
  ${renderWorkplaceExample(d.example)}
  ${renderTopicAITools(d.tools)}
  <div class="practiceBox">
    <h3>Practice Task</h3><p>${esc(d.practice)}</p>
    ${d.practiceGuide?`<div class="miniGuide"><b>What to include:</b><ul>${d.practiceGuide.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:''}
    <textarea id="practiceAnswer" placeholder="Type your answer here..." oninput="showUnsaved()">${esc(saved)}</textarea>
    <div class="row"><button onclick="savePractice('${c.id}',${d.day}, this)">Save Practice</button><button class="secondary" onclick="copyAIPrompt('${c.id}',${d.day}, this)">Copy AI Prompt</button><small id="saveStatus">${saved?'Saved in Supabase.':'Not saved yet.'}</small></div>
  </div>
  <div class="quizBox">
    <h3>Quiz</h3>${renderQuiz(d,qr)}
    <button onclick="submitQuiz('${c.id}',${d.day}, this)">Submit Quiz</button>
    <div id="quizScore">${qr?`<p class="score ${qr.score>=PASS_SCORE?'pass':'fail'}">Score: ${qr.score}% ${qr.score>=PASS_SCORE?'✓ Passed':'✗ Try again'}</p>`:''}</div>
  </div>
  <div class="completeBox" id="completeBox">${completeBoxInner(c,d,pr)}</div>
  <div class="lessonNav noPrint">
    <button class="ghost" onclick="setRoute('lesson','${c.id}',${Math.max(1,d.day-1)})" ${d.day===1?'disabled':''}>← Previous Module</button>
    <button class="ghost" onclick="setRoute('lesson','${c.id}',${Math.min(DAY_COUNT,d.day+1)})" ${d.day===DAY_COUNT?'disabled':''}>Next Module →</button>
  </div>
</article>`;
}

function completeBoxInner(c,d,pr={}){
  const done=Boolean(pr.completed);
  if(done) return '<b>Completed \u2713</b>';
  const saved=pr.practice_answer||'';
  const canComplete=saved.trim().length>=MIN_PRACTICE_CHARS&&Number(pr.quiz_score||0)>=PASS_SCORE;
  return `<button onclick="completeDay('${c.id}',${d.day}, this)" ${canComplete?'':'disabled'}>Mark Module Complete</button><small>${canComplete?'Requirements met. You can complete this module.':`You need a saved practice answer of at least ${MIN_PRACTICE_CHARS} characters and a quiz score of at least ${PASS_SCORE}%.`}</small>`;
}
function refreshLessonState(courseId,day){
  const c=safeCourseById(courseId);const d=lessonByDay(c,day);if(!c||!d) return;
  const pr=progressFor(c.id,day)||{};
  const cb=document.getElementById('completeBox');
  if(cb) cb.innerHTML=completeBoxInner(c,d,pr);
  const hasQuiz=asArray(pr.quiz_answers).length>0||Number(pr.quiz_total||0)>0;
  const score=Number(pr.quiz_score||0);
  const sc=document.getElementById('quizScore');
  if(sc) sc.innerHTML=hasQuiz?`<p class="score ${score>=PASS_SCORE?'pass':'fail'}">Score: ${score}% ${score>=PASS_SCORE?'\u2713 Passed':'\u2717 Try again'}</p>`:'';
}

function renderLessonSection(title,items,ordered=false){
  if(!items||!items.length) return '';
  const tag=ordered?'ol':'ul';
  return `<section class="lessonExtra"><h3>${esc(title)}</h3><${tag}>${items.map(x=>`<li>${esc(x)}</li>`).join('')}</${tag}></section>`;
}
function renderPromptExamples(prompts){
  if(!prompts||!prompts.length) return '';
  return `<section class="lessonExtra"><h3>AI Prompt Examples</h3><div class="promptList">${prompts.map(p=>`<div class="promptBox"><p>${esc(p)}</p></div>`).join('')}</div></section>`;
}
function renderWorkplaceExample(ex){
  if(!ex) return '';
  return `<section class="lessonExtra"><h3>Workplace Example</h3><div class="exampleBox"><div class="exampleBefore"><b>Before:</b><p>${esc(ex.before||'')}</p></div><div class="exampleAfter"><b>After:</b><p>${esc(ex.after||'')}</p></div></div></section>`;
}
function renderQuiz(d,qr){
  return (d.quiz||[]).map((q,qi)=>
    `<div class="q"><p><b>${qi+1}. ${esc(q.q)}</b></p>${q.options.map((o,oi)=>
      `<label class="choice"><input type="radio" name="q${qi}" value="${oi}" ${Number(qr?.answers?.[qi])===oi?'checked':''}/> ${esc(o)}</label>`
    ).join('')}</div>`
  ).join('');
}

// ── Certificate ──────────────────────────────────────────────────────────
function renderCertificate(courseId){
  const c=safeCourseById(courseId);
  if(!c) return `<div class="empty"><h2>Course not found</h2></div>`;
  const p=courseProgress(c.id);
  if(p.done<DAY_COUNT) return `<div class="empty"><h2>Certificate Locked</h2><p>Complete all 14 modules to unlock your certificate.</p><button onclick="setRoute('course','${c.id}')">Back to Course</button></div>`;
  const cert=certificateFor(c.id);
  const code=cert?.certificate_code||certId(c.id,currentUserId());
  return `<section class="topbar noPrint"><button class="ghost" onclick="setRoute('course','${c.id}')">← Back</button><button onclick="window.print()">Print Certificate</button></section>
<div class="certWrap"><div class="cert">
  <div class="certLogoRow"><div class="certLogo">TCR</div></div>
  <p class="certEyebrow">Team Casa Rustia — Certificate of Completion</p>
  <h2>This is to certify that</h2>
  <h1 class="certName">${esc(profile?.full_name||currentEmail())}</h1>
  <p>has successfully completed all 14 modules of</p>
  <h3 class="certCourse">${esc(c.title)}</h3>
  <p class="certDate">Completed: ${new Date().toLocaleDateString('en-AU',{day:'numeric',month:'long',year:'numeric'})}</p>
  <div class="certCode">Certificate ID: ${esc(code)}</div>
</div></div>`;
}
async function issueCertificate(courseId){
  const c=safeCourseById(courseId);
  if(!c||!currentUserId()) return;
  const existing=certificateFor(c.id);
  if(existing) return;
  const enrollment=enrollmentFor(c.id);
  if(!enrollment?.id) throw new Error('No enrollment found for this course, so a certificate cannot be issued yet.');
  const code=certId(c.id,currentUserId());
  const learnerName=profile?.full_name||currentEmail()||'Learner';
  const {data,error}=await sb.from('tcr_certificates').insert({learner_id:currentUserId(),enrollment_id:enrollment.id,course_id:c.id,certificate_code:code,learner_name:learnerName,course_title:c.title}).select('*').single();
  if(error) throw error;
  certificates.push(data);
}

// ── Progress / Quiz / Practice ────────────────────────────────────────────
async function upsertProgress(courseId,day,updates={}){
  const enrollment=enrollmentFor(courseId);
  if(!enrollment?.id) throw new Error('No course access found. Please ask the admin to assign this course before saving progress.');
  const existing=progressFor(courseId,day);
  const base={learner_id:currentUserId(),enrollment_id:enrollment.id,course_id:courseId,day_number:Number(day),completed:existing?.completed??false,practice_answer:existing?.practice_answer??null,quiz_answers:existing?.quiz_answers??[],quiz_score:Number(existing?.quiz_score||0),quiz_correct:Number(existing?.quiz_correct||0),quiz_total:Number(existing?.quiz_total||0)};
  const merged={...base,...updates};
  const {data,error}=await sb.from('tcr_lesson_progress').upsert(merged,{onConflict:'learner_id,course_id,day_number'}).select('*').single();
  if(error) throw error;
  const idx=progressRows.findIndex(r=>r.course_id===courseId&&Number(r.day_number)===Number(day));
  if(idx>=0) progressRows[idx]=data; else progressRows.push(data);
  return data;
}
function showUnsaved(){const el=document.getElementById('saveStatus');if(el) el.textContent='Unsaved changes.';}
async function savePractice(courseId,day,button=null){
  const val=document.getElementById('practiceAnswer')?.value.trim();
  if(!val) return alert('Please type your practice answer first.');
  if(val.length<MIN_PRACTICE_CHARS) return alert(`Please write a more complete practice answer (at least ${MIN_PRACTICE_CHARS} characters).`);
  try{setButtonBusy(button,true,'Saving...');await upsertProgress(courseId,day,{practice_answer:val});const el=document.getElementById('saveStatus');if(el) el.textContent='Saved in Supabase.';refreshLessonState(courseId,day);}
  catch(err){alert(readErrorMessage(err,'Unable to save practice.'));}
  finally{setButtonBusy(button,false);}
}
async function submitQuiz(courseId,day,button=null){
  const c=safeCourseById(courseId);const d=lessonByDay(c,day);
  if(!d?.quiz?.length) return alert('No quiz is available for this module.');
  const answers=d.quiz.map((q,qi)=>{const selected=document.querySelector(`input[name="q${qi}"]:checked`);return selected?Number(selected.value):null;});
  if(answers.some(a=>a===null)) return alert('Please answer all quiz questions.');
  const correct=answers.filter((a,i)=>a===d.quiz[i].answer).length;
  const score=Math.round((correct/d.quiz.length)*100);
  try{setButtonBusy(button,true,'Submitting...');await upsertProgress(courseId,day,{quiz_answers:answers,quiz_score:score,quiz_correct:correct,quiz_total:d.quiz.length});refreshLessonState(courseId,day);}
  catch(err){alert(readErrorMessage(err,'Unable to save quiz.'));}
  finally{setButtonBusy(button,false);}
}
async function completeDay(courseId,day,button=null){
  const pr=progressFor(courseId,day);
  if(!pr?.practice_answer||pr.practice_answer.trim().length<MIN_PRACTICE_CHARS) return alert(`Please save a practice answer of at least ${MIN_PRACTICE_CHARS} characters first.`);
  if(Number(pr.quiz_score||0)<PASS_SCORE) return alert(`Please pass the quiz first with at least ${PASS_SCORE}%.`);
  try{setButtonBusy(button,true,'Completing...');await upsertProgress(courseId,day,{completed:true});await loadProgress();const p=courseProgress(courseId);if(p.done>=DAY_COUNT) await issueCertificate(courseId);render();}
  catch(err){alert(readErrorMessage(err,'Unable to complete module.'));}
  finally{setButtonBusy(button,false);}
}
async function copyAIPrompt(courseId,day,button=null){
  const c=safeCourseById(courseId);const d=lessonByDay(c,day);if(!c||!d) return;
  const text=buildAIPrompt(c,d);
  try{setButtonBusy(button,true,'Copying...');if(canUseClipboard()){await navigator.clipboard.writeText(text);alert('AI prompt copied to clipboard. Paste it into ChatGPT, Claude, Gemini, or Perplexity to get started.');}else{prompt('Copy the text below:',text);}}
  catch(err){prompt('Copy the text below:',text);}
  finally{setButtonBusy(button,false);}
}
function buildAIPrompt(c,d){
  return `Act as a practical workplace AI trainer. Help me complete this Team Casa Rustia training task clearly and professionally.\n\nTeam Casa Rustia helps everyday people, beginners, job seekers, employees, freelancers, and career shifters learn practical AI workplace skills for a fast-paced working world.\nCourse: ${c.title}\nModule ${d.day}: ${d.title}\nTask: ${d.practice}\n\nUse simple workplace language, bullet points, and a format I can copy into a report, training document, tracker, or professional message. Keep the final answer realistic for real working life. Do not invent facts. Include a reminder to review the output before using it.`;
}

// ── AI Tool Picker ────────────────────────────────────────────────────────
const TOOL_PICKER_TASKS=[
  {task:'Write professional emails, announcements, or HR messages',tools:['Claude','ChatGPT','Grammarly'],note:'Best for polished, professional tone with grammar checking.'},
  {task:'Summarise long reports, meeting transcripts, or documents',tools:['Claude','ChatGPT','Gemini'],note:'Best for extracting key points from large text — verify outputs.'},
  {task:'Research vendors, market rates, or industry information',tools:['Perplexity','Gemini','Copilot'],note:'Best for real-time, sourced web research with citations.'},
  {task:'Create posters, certificates, or visual communications',tools:['Canva'],note:'Best for designed visuals, certificates, infographics, and reports.'},
  {task:'Track tasks, projects, and team progress',tools:['Airtable AI','Asana AI','ClickUp AI'],note:'Choose based on team size — Airtable for data, Asana/ClickUp for projects.'},
  {task:'Automate recurring workflows, reminders, and form processing',tools:['Zapier','Make','n8n'],note:'Zapier/Make for no-code; n8n for technical teams needing full control.'},
  {task:'Transcribe and summarise meetings, calls, and interviews',tools:['Fireflies','Otter.ai'],note:'Both auto-transcribe; Fireflies integrates with more platforms.'},
  {task:'Build SOPs, wikis, guides, and knowledge bases',tools:['Notion AI','Google Docs','Claude'],note:'Notion AI for team knowledge; Google Docs for simple sharing.'},
  {task:'Analyse spreadsheet data, build formulas, and create charts',tools:['Excel Copilot','Gemini','Google Sheets'],note:'Excel Copilot for Microsoft; Gemini integrates natively with Sheets.'},
  {task:'Manage HR hiring, screening, and onboarding workflows',tools:['Workable AI','Greenhouse AI'],note:'Both handle full-cycle recruiting — choose based on team size and budget.'},
  {task:'Handle customer support tickets and enquiry routing',tools:['Zendesk AI','Claude'],note:'Zendesk AI for volume; Claude for drafting individual complex responses.'},
  {task:'Manage visual project timelines and team workloads',tools:['Monday AI','Asana AI','ClickUp AI'],note:'Monday AI for visual Gantt; Asana for structured task management.'},
];
const AI_CATEGORIES=[
  {label:'Writing & Chat AI',tools:['ChatGPT','Claude','Gemini','Grammarly']},
  {label:'Research',tools:['Perplexity']},
  {label:'Microsoft AI',tools:['Copilot','Excel Copilot']},
  {label:'Docs & Knowledge',tools:['Notion AI','Google Docs','Google Sheets']},
  {label:'Design & Visuals',tools:['Canva','Loom']},
  {label:'Data & Tracking',tools:['Airtable AI']},
  {label:'Automation',tools:['Zapier','Make','n8n']},
  {label:'Meetings & Notes',tools:['Fireflies','Otter.ai']},
  {label:'Project Management',tools:['Asana AI','ClickUp AI','Monday AI']},
  {label:'HR & Recruiting',tools:['Greenhouse AI','Workable AI']},
  {label:'Customer Support',tools:['Zendesk AI']},
  {label:'Communication',tools:['Slack AI','Email','Calendar','Task tracker']},
];
function renderToolPicker(){
  const taskCards=TOOL_PICKER_TASKS.map(item=>{
    const badges=item.tools.map(t=>{const meta=AI_TOOL_META[t]||{icon:'🔧',url:''};const inner=`${meta.icon?`<span>${meta.icon}</span>`:''} ${esc(t)}`;return meta.url?`<a href="${esc(meta.url)}" target="_blank" rel="noopener" class="toolPickerBadge">${inner}</a>`:`<span class="toolPickerBadge">${inner}</span>`;}).join('');
    return `<div class="toolPickerCard"><h3>${esc(item.task)}</h3><div class="toolPickerBadges">${badges}</div><p class="toolGridNote">${esc(item.note)}</p></div>`;
  }).join('');
  const directoryGroups=AI_CATEGORIES.map(cat=>{
    const cards=cat.tools.map(t=>{const meta=AI_TOOL_META[t]||{icon:'🔧',url:'',desc:''};const inner=`<div class="aiDirIcon">${meta.icon||'🔧'}</div><div><strong>${esc(t)}</strong><p>${esc(meta.desc||'')}</p></div>`;return meta.url?`<a href="${esc(meta.url)}" target="_blank" rel="noopener" class="aiDirectoryCard">${inner}</a>`:`<div class="aiDirectoryCard">${inner}</div>`;}).join('');
    return `<div class="aiCategoryGroup"><h4 class="aiCategoryTitle">${esc(cat.label)}</h4><div class="aiDirectoryGrid">${cards}</div></div>`;
  }).join('');
  return `<section class="sectionTitle"><h1>AI Tool Picker</h1><p>Find the right AI tool for every workplace task. Click any tool to open it. Always review AI output before sending, publishing, or saving it as final.</p></section>
<section class="toolPickerSection"><h2>Match Task to Tool</h2><p>Find the best AI tool for your specific task below.</p><div class="toolPickerGrid">${taskCards}</div></section>
<section class="toolPickerSection"><h2>Full AI Tool Directory</h2><p>Browse all recommended AI tools by category. Click any tool to open it in a new tab.</p>${directoryGroups}</section>`;
}

// ── Admin ─────────────────────────────────────────────────────────────────
function renderAdmin(){
  if(!canAccessAdmin()) return `<div class="empty"><h2>Restricted</h2><p>Only the admin account can access reports and account access controls.</p></div>`;
  const rows=adminRows||[];const people=adminProfiles||[];
  const courseOptions=courses.map(c=>`<option value="${attr(c.id)}">${esc(c.title)}</option>`).join('');
  return `<section class="sectionTitle"><h1>Admin / Reports</h1><p>Only the first admin account can access this page.</p></section>
<div class="adminActions"><button onclick="refreshAdmin(this)">Refresh</button><button class="secondary" onclick="exportAdminCsv()">Export Progress CSV</button></div>
<section class="adminPanel"><h2>Account Access</h2><div class="tableWrap"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Assign Course Access</th><th>Current Courses</th></tr></thead><tbody>${people.map(u=>{const userRows=rows.filter(r=>r.learner_id===u.id);return `<tr><td>${esc(u.full_name)}</td><td>${esc(u.email)}</td><td><b>${esc(u.role)}</b></td><td><div class="inlineControls"><select id="courseFor_${attr(u.id)}">${courseOptions}</select><button class="small" onclick="adminAssignCourse('${attr(u.id)}', this)">Give Access</button></div></td><td>${userRows.length?userRows.map(r=>esc(safeCourseById(r.course_id)?.title||r.course_id)).join('<br>'):'<em>No course assigned yet</em>'}</td></tr>`;}).join('')||'<tr><td colspan="5">No accounts yet.</td></tr>'}</tbody></table></div></section>
<section class="adminPanel"><h2>Learner Progress Report</h2><div class="tableWrap"><table><thead><tr><th>Learner</th><th>Email</th><th>Course</th><th>Completed Modules</th><th>Progress</th><th>Certificate</th><th>Joined</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(r.full_name)}</td><td>${esc(r.email||'-')}</td><td>${esc(safeCourseById(r.course_id)?.title||r.course_id)}</td><td>${Number(r.completed_days||0)}/14</td><td>${Number(r.progress_percent||0)}%</td><td>${esc(r.certificate_code||'Locked')}</td><td>${esc(new Date(r.created_at).toLocaleDateString())}</td></tr>`).join('')||'<tr><td colspan="7">No learner progress yet.</td></tr>'}</tbody></table></div></section>`;
}
async function refreshAdmin(button=null){
  try{setButtonBusy(button,true,'Refreshing...');await Promise.all([loadAdminRows(),loadAdminProfiles()]);render();}
  catch(err){alert(readErrorMessage(err));}
  finally{setButtonBusy(button,false);}
}
async function adminAssignCourse(userId,button=null){
  if(!canAccessAdmin()) return alert('Only the admin account can assign access.');
  const sel=document.getElementById(`courseFor_${userId}`);const courseId=sel?.value;
  if(!userId||!courseId) return alert('Please choose an account and course.');
  try{setButtonBusy(button,true,'Assigning...');const {error}=await sb.from('tcr_enrollments').upsert({learner_id:userId,course_id:courseId,status:'active'},{onConflict:'learner_id,course_id'});if(error) throw error;await loadEnrollments();await refreshAdmin();alert('Course access assigned.');}
  catch(err){alert(readErrorMessage(err,'Unable to assign course access.'));}
  finally{setButtonBusy(button,false);}
}
function csvCell(value){return '"'+String(value??'').replace(/"/g,'""')+'"';}
function exportAdminCsv(){
  if(!adminRows.length) return alert('There is no progress data to export yet.');
  const lines=[['Learner','Email','Course','Completed Modules','Progress %','Certificate','Joined']];
  adminRows.forEach(r=>lines.push([r.full_name,r.email||'',safeCourseById(r.course_id)?.title||r.course_id,r.completed_days||0,r.progress_percent||0,r.certificate_code||'',r.created_at||'']));
  downloadBlob(new Blob(['\ufeff'+lines.map(row=>row.map(csvCell).join(',')).join('\n')],{type:'text/csv;charset=utf-8'}),'team-casa-rustia-progress-report.csv');
}
function downloadBlob(blob,filename){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;document.body.appendChild(a);a.click();URL.revokeObjectURL(a.href);a.remove();}

function renderHelp(){
  return `<section class="sectionTitle"><h1>About / How It Works</h1><p>Team Casa Rustia provides practical AI workplace courses for everybody, not only internal staff.</p></section><div class="helpGrid"><div class="toolCard"><h3>For Learners</h3><p>Register, wait for admin-assigned course access, complete 14 practical modules, save practice answers, pass quizzes, and unlock a certificate.</p></div><div class="toolCard"><h3>For Admin</h3><p>Only the first registered account becomes admin and can access Admin / Reports. The admin can assign course access to learner accounts.</p></div><div class="toolCard"><h3>Data Storage</h3><p>Progress, quiz scores, practice answers, certificates, and reports are saved in Supabase Database. The app does not use browser localStorage for training records.</p></div></div>`;
}

// ── Global exports ────────────────────────────────────────────────────────
window.switchAuthMode=switchAuthMode;window.submitAuth=submitAuth;window.signOut=signOut;window.setRoute=setRoute;window.openCourse=openCourse;window.savePractice=savePractice;window.submitQuiz=submitQuiz;window.completeDay=completeDay;window.copyAIPrompt=copyAIPrompt;window.showUnsaved=showUnsaved;window.refreshAdmin=refreshAdmin;window.adminAssignCourse=adminAssignCourse;window.exportAdminCsv=exportAdminCsv;window.issueCertificate=issueCertificate;window.loadAll=loadAll;window.render=render;window.readErrorMessage=readErrorMessage;

boot();
