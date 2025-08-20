import { createClient } from "@supabase/supabase-js";

// Ambil dari Supabase Project Settings → API
const supabaseUrl = "https://gpjwdlxsodyiwmvljpmg.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwandkbHhzb2R5aXdtdmxqcG1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NDA0MzcsImV4cCI6MjA3MTAxNjQzN30.zN15C8NHVAOgvAaU_WwpKNNC3-qwjQq1dywW56mReOI";

export const supabase = createClient(supabaseUrl, supabaseKey);
