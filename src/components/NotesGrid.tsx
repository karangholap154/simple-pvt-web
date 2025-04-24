import React from 'react';
import { motion } from 'framer-motion';
import NoteCard from './NoteCard';
import { StudyNote } from '../types';

interface NotesGridProps {
  notes: StudyNote[];
  isFiltering: boolean;
}

const NotesGrid: React.FC<NotesGridProps> = ({ notes, isFiltering }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      {notes.length === 0 ? (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-medium text-zinc-700 dark:text-zinc-300">
            No study notes found
          </h3>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Try adjusting your search or filters
          </p>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
          key={isFiltering ? 'filtering' : 'not-filtering'}
        >
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </motion.div>
      )}
    </>
  );
};

export default NotesGrid;