import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import NotesGrid from '../components/NotesGrid';
import Sitemap from '../components/Sitemap';
import { studyNotes, branches, semesters } from '../data/notesData';
import '../index.css'

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [isFiltering, setIsFiltering] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredNotes = useMemo(() => {
    setIsFiltering(true);
    
    if (searchTerm.trim()) {
      return studyNotes.filter(note => 
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedBranch && selectedSemester) {
      return studyNotes.filter(note => 
        note.branch === selectedBranch && 
        note.semester === Number(selectedSemester)
      );
    }
    
    return [];
  }, [searchTerm, selectedBranch, selectedSemester]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFiltering(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, [filteredNotes]);

  useEffect(() => {
    if (selectedBranch && isMobile) {
      setShowMobileFilters(true);
    }
  }, [selectedBranch, isMobile]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedBranch(null);
    setSelectedSemester(null);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Private Academy",
    "description": "Engineering study notes and question papers for Mumbai University students",
    "url": "https://www.privateacademy.in",
    "sameAs": [
      "https://www.instagram.com/privateacademy.in",
      "https://t.me/mumcomputer",
      "https://www.youtube.com/@pvtacademy"
    ],
    "offers": {
      "@type": "Course",
      "name": "Engineering Study Materials",
      "description": "Free study notes and question papers for all engineering branches",
      "provider": {
        "@type": "Organization",
        "name": "Private Academy"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Private Academy | Mumbai University Engineering Study Material Notes & Papers"
        description="Free engineering study notes and previous year question papers for Mumbai University students. Browse by branch and semester - Computer, IT, AIML, Mechanical, Chemical engineering."
        keywords="Mumbai University, engineering notes, question papers, study material, computer engineering, information technology, AIML, mechanical engineering, chemical engineering, free notes, previous year papers"
        canonicalUrl="https://www.privateacademy.in/"
        structuredData={structuredData}
      />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.section
          className="max-w-4xl mx-auto text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="main-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            <span className="text-yellow-400">PA</span> Engineering Study Notes
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            <span className="hidden sm:inline">
              Browse and download study notes for all engineering branches and semesters. Study notes are for <span className="text-yellow-400 font-semibold">Mumbai University</span> Students.
            </span>
            <span className="sm:hidden">
              Browse study notes for <span className="text-yellow-400 font-semibold">Mumbai University</span> engineering students.
            </span>
          </p>
        </motion.section>

        <section className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <div className="w-full md:flex-1">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
          </div>

          <AnimatePresence>
            {(!isMobile || showMobileFilters) && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            )}
          </AnimatePresence>

          {(selectedBranch !== null || selectedSemester !== null || searchTerm !== '') && (
            <motion.div 
              className="flex justify-end mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={resetFilters}
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </section>

        <section className="max-w-6xl mx-auto mb-12">
          <NotesGrid notes={filteredNotes} isFiltering={isFiltering} />
        </section>
      </div>
    </>
  );
};

export default Home;