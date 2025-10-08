import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, X, AlertCircle } from 'lucide-react';
import { StudyNote } from '../../types';

interface NoteFormProps {
  note?: StudyNote | null;
  onSave: (noteData: Omit<StudyNote, 'id'>) => Promise<void>;
  onCancel: () => void;
  loading: boolean;
  error: string | null;
  branches: string[];
  semesters: number[];
}

const NoteForm: React.FC<NoteFormProps> = ({
  note,
  onSave,
  onCancel,
  loading,
  error,
  branches,
  semesters
}) => {
  const [formData, setFormData] = useState({
    title: '',
    branch: '',
    semester: 1,
    downloadUrl: '',
    youtubeUrl: ''
  });

  useEffect(() => {
    if (note) {
      setFormData({
        title: note.title,
        branch: note.branch,
        semester: note.semester,
        downloadUrl: note.downloadUrl,
        youtubeUrl: note.youtubeUrl || ''
      });
    }
  }, [note]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const noteData = {
      ...formData,
      youtubeUrl: formData.youtubeUrl.trim() || undefined
    };
    
    await onSave(noteData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'semester' ? parseInt(value) : value
    }));
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-zinc-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {note ? 'Edit Note' : 'Add New Note'}
            </h2>
            <button
              onClick={onCancel}
              className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700"
              disabled={loading}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {error && (
            <motion.div
              className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-3 flex-shrink-0" />
              <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg 
                  bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter note title"
                required
                disabled={loading}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Branch *
                </label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg 
                    bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  disabled={loading}
                >
                  <option value="">Select Branch</option>
                  {branches.map(branch => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Semester *
                </label>
                <select
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg 
                    bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  disabled={loading}
                >
                  {semesters.map(semester => (
                    <option key={semester} value={semester}>Semester {semester}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Download URL *
              </label>
              <input
                type="url"
                name="downloadUrl"
                value={formData.downloadUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg 
                  bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com/file.pdf"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                YouTube URL (Optional)
              </label>
              <input
                type="url"
                name="youtubeUrl"
                value={formData.youtubeUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg 
                  bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://youtube.com/watch?v=..."
                disabled={loading}
              />
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t border-zinc-200 dark:border-zinc-700">
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 
                  border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700
                  transition-colors"
                disabled={loading}
              >
                Cancel
              </button>
              <motion.button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg 
                  transition-colors duration-200 flex items-center"
                disabled={loading || !formData.title.trim() || !formData.branch || !formData.downloadUrl.trim()}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5 mr-2" />
                    {note ? 'Update Note' : 'Create Note'}
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NoteForm;