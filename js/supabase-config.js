/*
  Team Casa Rustia Supabase Configuration
  Public anon key is safe to use in the browser when Row Level Security is enabled.
  Never place the service_role key in this frontend file.
*/
window.TCR_SUPABASE_URL = 'https://jjtwnschkvgjwozkcnkv.supabase.co';
window.TCR_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqdHduc2Noa3Znandvemtjbmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxMzExMjAsImV4cCI6MjA5NTcwNzEyMH0.HtravqYNF-rxSYUci26hDHFHstgV-JIDMInxjttetMo';

/*
  Real admin access is controlled by role='admin' in public.tcr_profiles.
  The first account registered after running schema.sql becomes the only admin.
*/
window.TCR_ADMIN_EMAILS = [];