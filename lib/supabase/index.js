/* eslint-disable import/no-extraneous-dependencies */
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_ANON_KEY,
);

const getProjects = async () => {
    const projects = await supabase.from('projects').select('*');
    return projects;
};

export default supabase;

export { getProjects };
