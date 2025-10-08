import { supabase } from '../lib/supabase';
import { StudyNote } from '../types';

export class NotesService {
  // Get all study notes
  static async getAllNotes(): Promise<StudyNote[]> {
    const { data, error } = await supabase
      .from('study_notes')
      .select('*')
      .order('semester', { ascending: true })
      .order('title', { ascending: true });

    if (error) {
      console.error('Error fetching notes:', error);
      throw new Error('Failed to load study notes. Please try again later.');
    }

    return data?.map(this.transformNote) || [];
  }

  // Get notes filtered by branch
  static async getNotesByBranch(branch: string): Promise<StudyNote[]> {
    const { data, error } = await supabase
      .from('study_notes')
      .select('*')
      .eq('branch', branch)
      .order('semester', { ascending: true })
      .order('title', { ascending: true });

    if (error) {
      console.error('Error fetching notes by branch:', error);
      throw new Error('Failed to load study notes. Please try again later.');
    }

    return data?.map(this.transformNote) || [];
  }

  // Get notes filtered by semester
  static async getNotesBySemester(semester: number): Promise<StudyNote[]> {
    const { data, error } = await supabase
      .from('study_notes')
      .select('*')
      .eq('semester', semester)
      .order('branch', { ascending: true })
      .order('title', { ascending: true });

    if (error) {
      console.error('Error fetching notes by semester:', error);
      throw new Error('Failed to load study notes. Please try again later.');
    }

    return data?.map(this.transformNote) || [];
  }

  // Get notes filtered by both branch and semester
  static async getNotesByBranchAndSemester(branch: string, semester: number): Promise<StudyNote[]> {
    const { data, error } = await supabase
      .from('study_notes')
      .select('*')
      .eq('branch', branch)
      .eq('semester', semester)
      .order('title', { ascending: true });

    if (error) {
      console.error('Error fetching notes by branch and semester:', error);
      throw new Error('Failed to load study notes. Please try again later.');
    }

    return data?.map(this.transformNote) || [];
  }

  // Search notes by title
  static async searchNotes(searchTerm: string): Promise<StudyNote[]> {
    const { data, error } = await supabase
      .from('study_notes')
      .select('*')
      .ilike('title', `%${searchTerm}%`)
      .order('semester', { ascending: true })
      .order('title', { ascending: true });

    if (error) {
      console.error('Error searching notes:', error);
      throw new Error('Failed to search study notes. Please try again later.');
    }

    return data?.map(this.transformNote) || [];
  }

  // Get unique branches
  static async getBranches(): Promise<string[]> {
    const { data, error } = await supabase
      .from('study_notes')
      .select('branch')
      .order('branch', { ascending: true });

    if (error) {
      console.error('Error fetching branches:', error);
      throw new Error('Failed to load branches. Please try again later.');
    }

    const uniqueBranches = [...new Set(data?.map(item => item.branch) || [])];
    return uniqueBranches;
  }

  // Get unique semesters
  static async getSemesters(): Promise<number[]> {
    const { data, error } = await supabase
      .from('study_notes')
      .select('semester')
      .order('semester', { ascending: true });

    if (error) {
      console.error('Error fetching semesters:', error);
      throw new Error('Failed to load semesters. Please try again later.');
    }

    const uniqueSemesters = [...new Set(data?.map(item => item.semester) || [])];
    return uniqueSemesters;
  }

  // Get notes count by branch
  static async getNotesCountByBranch(): Promise<Record<string, number>> {
    const { data, error } = await supabase
      .from('study_notes')
      .select('branch');

    if (error) {
      console.error('Error fetching notes count:', error);
      return {};
    }

    const counts: Record<string, number> = {};
    data?.forEach(item => {
      counts[item.branch] = (counts[item.branch] || 0) + 1;
    });

    return counts;
  }

  // Transform database row to StudyNote interface
  private static transformNote(dbNote: any): StudyNote {
    return {
      id: dbNote.id,
      title: dbNote.title,
      branch: dbNote.branch,
      semester: dbNote.semester,
      downloadUrl: dbNote.download_url,
      youtubeUrl: dbNote.youtube_url,
    };
  }
}