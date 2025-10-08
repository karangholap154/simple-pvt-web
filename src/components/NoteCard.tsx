import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, BookOpen, Bookmark, Youtube, ExternalLink, Play } from 'lucide-react';
import { StudyNote } from '../types';

interface NoteCardProps {
  note: StudyNote;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div
      className="group bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-white/50 dark:border-zinc-700/50"
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient Header */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
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

      <div className="p-6 flex-1 relative">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-20 h-20 opacity-5 dark:opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full transform rotate-12"></div>
        </div>
        
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-2">
                <BookOpen className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                {note.branch}
              </span>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {note.title}
            </h3>
            <div className="flex items-center">
              <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-md flex items-center justify-center mr-2">
                <Bookmark className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                Semester {note.semester}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 pt-0 flex gap-3">
        <a
          href={note.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
            text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
        >
          <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Download
          <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        {note.youtubeUrl && (
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 
              text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
            aria-label="Toggle video preview"
          >
            {showVideo ? (
              <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
            ) : (
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default NoteCard;