
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jfryngltrcyhfgyhatjx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmcnluZ2x0cmN5aGZneWhhdGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0NTE0MTgsImV4cCI6MjAzODAyNzQxOH0.gAwGtwfRGPT286KPtPzz6hByOZtQ-LiwYq_nrLJGVVE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;