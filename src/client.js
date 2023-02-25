
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://tkfvyhlcgeztralhytlm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrZnZ5aGxjZ2V6dHJhbGh5dGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0Mjk1ODUsImV4cCI6MTk5MjAwNTU4NX0.FZjjUd0hls47lN9ZwC5ApI16Nai5rNiyf6Ar-VXzYq0'

 export const supabase = createClient(supabaseUrl, supabaseKey);

