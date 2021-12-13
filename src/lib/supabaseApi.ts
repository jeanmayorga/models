import { createClient } from '@supabase/supabase-js';
import { env } from '../config';

export const supabase = createClient(env.X_SUPABASE_URL, env.X_SUPABASE_KEY);
