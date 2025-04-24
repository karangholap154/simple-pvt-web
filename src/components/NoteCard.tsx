import React from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen, Bookmark } from 'lucide-react';
import { StudyNote } from '../types';

interface NoteCardProps {
  note: StudyNote;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  return (
    <motion.div
      className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between">
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
            <div className="flex items-center mt-3">
              <Bookmark className="w-4 h-4 text-zinc-500 dark:text-zinc-400 mr-1" />
              <span className="text-sm text-zinc-600 dark:text-zinc-300">
                Semester {note.semester}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 pt-0">
        <a
          href={note.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 
            text-white font-medium rounded-md transition-colors duration-200"
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </a>
      </div>
    </motion.div>
  );
};

export default NoteCard;