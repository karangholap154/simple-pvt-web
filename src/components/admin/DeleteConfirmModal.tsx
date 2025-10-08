import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';
import { StudyNote } from '../../types';

interface DeleteConfirmModalProps {
  note: StudyNote | null;
  onConfirm: () => Promise<void>;
  onCancel: () => void;
  loading: boolean;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  note,
  onConfirm,
  onCancel,
  loading
}) => {
  if (!note) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white dark:bg-zinc-800 rounded-lg shadow-xl max-w-md w-full"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Delete Note
                </h2>
              </div>
              <button
                onClick={onCancel}
                className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700"
                disabled={loading}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                Are you sure you want to delete this note? This action cannot be undone.
              </p>
              <div className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4">
                <h3 className="font-medium text-zinc-900 dark:text-white mb-1">
                  {note.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {note.branch} • Semester {note.semester}
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={onCancel}
                className="px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 
                  border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700
                  transition-colors"
                disabled={loading}
              >
                Cancel
              </button>
              <motion.button
                onClick={onConfirm}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-medium rounded-lg 
                  transition-colors duration-200 flex items-center"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Deleting...
                  </>
                ) : (
                  'Delete Note'
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DeleteConfirmModal;