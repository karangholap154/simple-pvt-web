import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      study_notes: {
        Row: {
          id: string;
          title: string;
          branch: string;
          semester: number;
          download_url: string;
          youtube_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          branch: string;
          semester: number;
          download_url: string;
          youtube_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          branch?: string;
          semester?: number;
          download_url?: string;
          youtube_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};