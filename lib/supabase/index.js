/* eslint-disable import/no-extraneous-dependencies */
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_ANON_KEY,
);

export default supabase;
