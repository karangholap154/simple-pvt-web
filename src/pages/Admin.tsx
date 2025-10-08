import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, LogOut, Search, Filter, BookOpen, Users, Download } from 'lucide-react';
import AdminLogin from '../components/admin/AdminLogin';
import NoteForm from '../components/admin/NoteForm';
import AdminNoteCard from '../components/admin/AdminNoteCard';
import DeleteConfirmModal from '../components/admin/DeleteConfirmModal';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import SEOHead from '../components/SEOHead';
import { AdminService } from '../services/adminService';
import { NotesService } from '../services/notesService';
import { StudyNote } from '../types';

const Admin: React.FC = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Notes management state
  const [notes, setNotes] = useState<StudyNote[]>([]);
  const [branches, setBranches] = useState<string[]>([]);
  const [semesters, setSemesters] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // UI state
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [editingNote, setEditingNote] = useState<StudyNote | null>(null);
  const [deletingNote, setDeletingNote] = useState<StudyNote | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);

  // Check authentication on mount
  useEffect(() => {
    checkAuth();
  }, []);

  // Load data when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  // Filter notes based on search and filters
  const filteredNotes = notes.filter(note => {
    const matchesSearch = !searchTerm.trim() || 
      note.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = !selectedBranch || note.branch === selectedBranch;
    const matchesSemester = !selectedSemester || note.semester === selectedSemester;
    
    return matchesSearch && matchesBranch && matchesSemester;
  });

  const checkAuth = async () => {
    try {
      const user = await AdminService.getCurrentUser();
      if (user) {
        const isAdmin = await AdminService.isAdmin();
        setIsAuthenticated(isAdmin);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setAuthLoading(false);
    }
  };

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [notesData, branchesData, semestersData] = await Promise.all([
        NotesService.getAllNotes(),
        NotesService.getBranches(),
        NotesService.getSemesters()
      ]);
      
      setNotes(notesData);
      setBranches(branchesData);
      setSemesters(semestersData);
    } catch (err) {
      console.error('Error loading data:', err);
      setError('Failed to load data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      setLoginLoading(true);
      setLoginError(null);
      
      await AdminService.signIn(email, password);
      setIsAuthenticated(true);
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : 'Login failed');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await AdminService.signOut();
      setIsAuthenticated(false);
      setNotes([]);
      setBranches([]);
      setSemesters([]);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleCreateNote = async (noteData: Omit<StudyNote, 'id'>) => {
    try {
      setError(null);
      const newNote = await AdminService.createNote(noteData);
      setNotes(prev => [newNote, ...prev]);
      setShowNoteForm(false);
      
      // Refresh branches and semesters if new ones were added
      const [newBranches, newSemesters] = await Promise.all([
        NotesService.getBranches(),
        NotesService.getSemesters()
      ]);
      setBranches(newBranches);
      setSemesters(newSemesters);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to create note');
      throw error;
    }
  };

  const handleUpdateNote = async (noteData: Omit<StudyNote, 'id'>) => {
    if (!editingNote) return;
    
    try {
      setError(null);
      const updatedNote = await AdminService.updateNote(editingNote.id, noteData);
      setNotes(prev => prev.map(note => 
        note.id === editingNote.id ? updatedNote : note
      ));
      setEditingNote(null);
      setShowNoteForm(false);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to update note');
      throw error;
    }
  };

  const handleDeleteNote = async () => {
    if (!deletingNote) return;
    
    try {
      setError(null);
      await AdminService.deleteNote(deletingNote.id);
      setNotes(prev => prev.filter(note => note.id !== deletingNote.id));
      setDeletingNote(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to delete note');
    }
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedBranch(null);
    setSelectedSemester(null);
  };

  const hasActiveFilters = searchTerm.trim() || selectedBranch || selectedSemester;

  // Statistics
  const stats = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      number: notes.length,
      label: "Total Notes",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: branches.length,
      label: "Branches",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: <Download className="w-6 h-6" />,
      number: filteredNotes.length,
      label: "Filtered Results",
      color: "text-purple-600 dark:text-purple-400"
    }
  ];

  if (authLoading) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-zinc-600 dark:text-zinc-300">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <SEOHead
          title="Admin Login - Private Academy"
          description="Admin panel for managing Private Academy study notes and materials"
          canonicalUrl="https://privateacademy.in/admin"
        />
        <AdminLogin 
          onLogin={handleLogin} 
          loading={loginLoading} 
          error={loginError} 
        />
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Admin Panel - Private Academy"
        description="Admin panel for managing Private Academy study notes and materials"
        canonicalUrl="https://www.privateacademy.in/admin"
      />
      
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
                Admin Panel
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                Manage study notes and materials
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <motion.button
                onClick={() => setShowNoteForm(true)}
                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Note
              </motion.button>
              <motion.button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 
                  border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </motion.button>
            </div>
          </motion.div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`${stat.color} mb-3 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-zinc-900 dark:text-white mb-1 text-center">
                  {stat.number}
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Search and Filters */}
          <motion.div
            className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                Search & Filter Notes
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-4 mb-4">
              <div className="w-full md:flex-1">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FilterDropdown
                label="Branch"
                options={branches}
                value={selectedBranch}
                onChange={(value) => setSelectedBranch(value as string)}
              />
              <FilterDropdown
                label="Semester"
                options={semesters}
                value={selectedSemester}
                onChange={(value) => setSelectedSemester(value as number)}
              />
            </div>

            {hasActiveFilters && (
              <div className="flex justify-between items-center">
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {filteredNotes.length} of {notes.length} notes shown
                </div>
                <button
                  onClick={resetFilters}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 
                    flex items-center"
                >
                  <Filter className="w-4 h-4 mr-1" />
                  Clear filters
                </button>
              </div>
            )}
          </motion.div>

          {/* Error Display */}
          {error && (
            <motion.div
              className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-red-700 dark:text-red-300">{error}</p>
            </motion.div>
          )}

          {/* Notes Grid */}
          <div className="mb-8">
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-zinc-600 dark:text-zinc-300">Loading notes...</p>
                </div>
              </div>
            ) : filteredNotes.length === 0 ? (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3 className="text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  {hasActiveFilters ? 'No notes match your filters' : 'No notes found'}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-4">
                  {hasActiveFilters 
                    ? 'Try adjusting your search or filters' 
                    : 'Get started by adding your first note'
                  }
                </p>
                {!hasActiveFilters && (
                  <motion.button
                    onClick={() => setShowNoteForm(true)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Plus className="w-5 h-5 mr-2 inline" />
                    Add First Note
                  </motion.button>
                )}
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNotes.map((note) => (
                  <AdminNoteCard
                    key={note.id}
                    note={note}
                    onEdit={(note) => {
                      setEditingNote(note);
                      setShowNoteForm(true);
                    }}
                    onDelete={setDeletingNote}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modals */}
        <AnimatePresence>
          {showNoteForm && (
            <NoteForm
              note={editingNote}
              onSave={editingNote ? handleUpdateNote : handleCreateNote}
              onCancel={() => {
                setShowNoteForm(false);
                setEditingNote(null);
                setError(null);
              }}
              loading={loading}
              error={error}
              branches={branches}
              semesters={semesters}
            />
          )}
        </AnimatePresence>

        <DeleteConfirmModal
          note={deletingNote}
          onConfirm={handleDeleteNote}
          onCancel={() => setDeletingNote(null)}
          loading={loading}
        />
      </div>
    </>
  );
};

export default Admin;