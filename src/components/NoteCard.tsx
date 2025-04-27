import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, BookOpen, Bookmark, Youtube } from 'lucide-react';
import { StudyNote } from '../types';

interface NoteCardProps {
  note: StudyNote;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full aspect-video bg-black"
          >
            <iframe
              src={note.youtubeUrl}
              className="w-full h-full"
              title={`${note.title} video preview`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="p-6 flex-1">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-1" />
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                {note.branch}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">
              {note.title}
            </h3>
            <div className="flex items-center mt-3">
              <Bookmark className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-1" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Semester {note.semester}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 pt-0 flex gap-2">
        <a
          href={note.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center py-2 px-4 bg-blue-600 hover:bg-blue-700 
            text-white font-medium rounded-md transition-colors duration-200"
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </a>
        {note.youtubeUrl && (
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="flex items-center justify-center p-2 bg-red-600 hover:bg-red-700 
              text-white font-medium rounded-md transition-colors duration-200"
            aria-label="Toggle video preview"
          >
            <Youtube className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default NoteCard;