import { supabase } from '../lib/supabase';
import { StudyNote } from '../types';

export class AdminService {
  // Create a new study note
  static async createNote(noteData: Omit<StudyNote, 'id'>): Promise<StudyNote> {
    const { data, error } = await supabase
      .from('study_notes')
      .insert({
        title: noteData.title,
        branch: noteData.branch,
        semester: noteData.semester,
        download_url: noteData.downloadUrl,
        youtube_url: noteData.youtubeUrl || null,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating note:', error);
      throw new Error(`Failed to create note: ${error.message}`);
    }

    return this.transformNote(data);
  }

  // Update an existing study note
  static async updateNote(id: string, noteData: Partial<Omit<StudyNote, 'id'>>): Promise<StudyNote> {
    const updateData: any = {};
    
    if (noteData.title !== undefined) updateData.title = noteData.title;
    if (noteData.branch !== undefined) updateData.branch = noteData.branch;
    if (noteData.semester !== undefined) updateData.semester = noteData.semester;
    if (noteData.downloadUrl !== undefined) updateData.download_url = noteData.downloadUrl;
    if (noteData.youtubeUrl !== undefined) updateData.youtube_url = noteData.youtubeUrl || null;

    const { data, error } = await supabase
      .from('study_notes')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating note:', error);
      throw new Error(`Failed to update note: ${error.message}`);
    }

    return this.transformNote(data);
  }

  // Delete a study note
  static async deleteNote(id: string): Promise<void> {
    const { error } = await supabase
      .from('study_notes')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting note:', error);
      throw new Error(`Failed to delete note: ${error.message}`);
    }
  }

  // Get a single note by ID
  static async getNoteById(id: string): Promise<StudyNote | null> {
    const { data, error } = await supabase
      .from('study_notes')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null; // Note not found
      }
      console.error('Error fetching note:', error);
      throw new Error(`Failed to fetch note: ${error.message}`);
    }

    return this.transformNote(data);
  }

  // Check if current user is admin
  static async isAdmin(): Promise<boolean> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) return false;
    
    // Check if user email is in admin list
    const adminEmail = 'admin@privateacademy.in';
    
    return user.email === adminEmail;
  }

  // Sign in admin user
  static async signIn(email: string, password: string): Promise<void> {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(`Sign in failed: ${error.message}`);
    }

    // Check if user is admin after sign in
    const isAdminUser = await this.isAdmin();
    if (!isAdminUser) {
      await supabase.auth.signOut();
      throw new Error('Access denied. Admin privileges required.');
    }
  }

  // Sign out admin user
  static async signOut(): Promise<void> {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(`Sign out failed: ${error.message}`);
    }
  }

  // Get current user
  static async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
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