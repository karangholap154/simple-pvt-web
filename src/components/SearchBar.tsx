import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <motion.div 
      className="relative w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
          <Search className="text-white" size={18} />
        </div>
        <input
          type="text"
          placeholder="Search for study notes, subjects, or topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-16 pr-6 py-4 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 
          bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm text-zinc-800 dark:text-zinc-200 text-lg
          focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400
          transition-all duration-300 shadow-lg hover:shadow-xl placeholder-zinc-500 dark:placeholder-zinc-400"
        />
      </div>
    </motion.div>
  );
};

export default SearchBar;