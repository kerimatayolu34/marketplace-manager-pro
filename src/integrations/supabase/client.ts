// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vwuoqlfdkawnetbxgyvo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3dW9xbGZka2F3bmV0YnhneXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0NTU2MDYsImV4cCI6MjA1MjAzMTYwNn0.Yx0eajpaWYspN0h9bQYqMnzDsib59Bao-_wgt4iRj4U";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);