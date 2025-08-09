import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, Download, Star, Search, Filter } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import NotesGrid from '../components/NotesGrid';
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

  // Fixed: Show all notes by default, filter only when search/filters are applied
  const filteredNotes = useMemo(() => {
    // If search term is provided, filter by search
    if (searchTerm.trim()) {
      return studyNotes.filter(note => 
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // If both branch and semester are selected, filter by both
    if (selectedBranch && selectedSemester) {
      return studyNotes.filter(note => 
        note.branch === selectedBranch && 
        note.semester === Number(selectedSemester)
      );
    }
    
    // Default: show all notes (fixes soft 404 issue)
    return studyNotes;
  }, [searchTerm, selectedBranch, selectedSemester]);

  // Set filtering state when filters change
  useEffect(() => {
    if (searchTerm.trim() || selectedBranch || selectedSemester) {
      setIsFiltering(true);
    }
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

  const hasActiveFilters = searchTerm.trim() || selectedBranch || selectedSemester;

  // Statistics for the hero section
  const stats = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      number: studyNotes.length,
      label: "Study Notes",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: branches.length,
      label: "Engineering Branches",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: <Download className="w-6 h-6" />,
      number: "1500+",
      label: "Downloads",
      color: "text-purple-600 dark:text-purple-400"
    }
  ];

  const featuredBranches = [
    { name: "Computer", count: studyNotes.filter(note => note.branch === "Computer").length },
    { name: "Information Technology", count: studyNotes.filter(note => note.branch === "Information Technology").length },
    { name: "AIML", count: studyNotes.filter(note => note.branch === "AIML").length },
  ];

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
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Maharashtra",
      "addressLocality": "Mumbai"
    }
  };

  return (
    <>
      <SEOHead
        title="Private Academy | Mumbai University Engineering Study Material Notes & Papers"
        description="Engineering study notes and previous year question papers for Mumbai University students. Browse by branch and semester - Computer, IT, AIML, Mechanical, Chemical engineering."
        keywords="Mumbai University, engineering notes, question papers, study material, computer engineering, information technology, AIML, mechanical engineering, chemical engineering, study notes, previous year papers"
        canonicalUrl="https://www.privateacademy.in/"
        structuredData={structuredData}
      />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <motion.section
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="main-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
            <span className="text-yellow-400">Private Academy</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl">Engineering Study Material Hub</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mb-8">
            Your one-stop destination for <span className="text-yellow-400 font-semibold">Mumbai University</span> engineering study materials. 
            Access comprehensive notes, previous year papers, and video tutorials for all engineering branches.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`${stat.color} mb-3 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Branches */}
        <motion.section
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white text-center mb-8">
            Popular Engineering Branches
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featuredBranches.map((branch, index) => (
              <motion.button
                key={branch.name}
                onClick={() => {
                  setSelectedBranch(branch.name);
                  setSelectedSemester(null);
                  setSearchTerm('');
                }}
                className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 
                  hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30
                  rounded-lg p-6 text-left transition-all duration-300 border border-blue-200 dark:border-blue-800"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                  {branch.name}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {branch.count} study notes available
                </p>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Search and Filter Section */}
        <motion.section
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                Find Your Study Materials
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-4 mb-6">
              <div className="w-full md:flex-1">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              </div>
            </div>

            <AnimatePresence>
              {(!isMobile || showMobileFilters) && (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
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

            {hasActiveFilters && (
              <motion.div 
                className="flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {filteredNotes.length} notes found
                </div>
                <button
                  onClick={resetFilters}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 
                    flex items-center"
                >
                  <Filter className="w-4 h-4 mr-1" />
                  Clear filters
                </button>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Study Notes Grid */}
        <section className="max-w-6xl mx-auto mb-12">
          {!hasActiveFilters && (
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                All Study Notes
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Browse through our complete collection of engineering study materials
              </p>
            </motion.div>
          )}
          
          <NotesGrid notes={filteredNotes} isFiltering={isFiltering} />
        </section>

        {/* Call to Action */}
        <motion.section
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <Star className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Join Thousands of Students
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Connect with fellow Mumbai University students, get instant updates on new study materials, 
              and never miss important announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/mumcomputer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Join Telegram Channel
              </a>
              <a
                href="https://www.instagram.com/privateacademy.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold 
                  hover:bg-white hover:text-blue-600 transition-colors"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Home;