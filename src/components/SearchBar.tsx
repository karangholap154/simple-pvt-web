import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

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
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <Input
          type="text"
          placeholder="Search for study notes, subjects, or topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-3 text-base h-12"
        />
      </div>
    </motion.div>
  );
};

export default SearchBar;