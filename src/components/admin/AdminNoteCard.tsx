import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard as Edit, Trash2, Download, Youtube, BookOpen, Bookmark } from 'lucide-react';
import { StudyNote } from '../../types';

interface AdminNoteCardProps {
  note: StudyNote;
  onEdit: (note: StudyNote) => void;
  onDelete: (note: StudyNote) => void;
}

const AdminNoteCard: React.FC<AdminNoteCardProps> = ({ note, onEdit, onDelete }) => {
  return (
    <motion.div
      className="bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-zinc-200 dark:border-zinc-700"
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-1" />
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                {note.branch}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-white mb-2 line-clamp-2">
              {note.title}
            </h3>
            <div className="flex items-center">
              <Bookmark className="w-4 h-4 text-zinc-500 dark:text-zinc-400 mr-1" />
              <span className="text-sm text-zinc-600 dark:text-zinc-300">
                Semester {note.semester}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <a
              href={note.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 
                rounded-md text-sm hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
            >
              <Download className="w-4 h-4 mr-1" />
              Download
            </a>
            {note.youtubeUrl && (
              <a
                href={note.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 
                  rounded-md text-sm hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
              >
                <Youtube className="w-4 h-4 mr-1" />
                Video
              </a>
            )}
          </div>

          <div className="flex space-x-2">
            <motion.button
              onClick={() => onEdit(note)}
              className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Edit className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={() => onDelete(note)}
              className="p-2 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Trash2 className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminNoteCard;