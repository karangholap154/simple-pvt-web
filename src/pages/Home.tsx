import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, Download, Star, Search, Filter, GraduationCap, TrendingUp, Award, Zap, ArrowRight, Play, FileText, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import SEOHead from '../components/SEOHead';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import NotesGrid from '../components/NotesGrid';
import { NotesService } from '../services/notesService';
import { StudyNote } from '../types';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [isFiltering, setIsFiltering] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [studyNotes, setStudyNotes] = useState<StudyNote[]>([]);
  const [branches, setBranches] = useState<string[]>([]);
  const [semesters, setSemesters] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notesCountByBranch, setNotesCountByBranch] = useState<Record<string, number>>({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [notesData, branchesData, semestersData, countsData] = await Promise.all([
          NotesService.getAllNotes(),
          NotesService.getBranches(),
          NotesService.getSemesters(),
          NotesService.getNotesCountByBranch()
        ]);
        
        setStudyNotes(notesData);
        setBranches(branchesData);
        setSemesters(semestersData);
        setNotesCountByBranch(countsData);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load study notes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Load filtered data when filters change
  useEffect(() => {
    const loadFilteredData = async () => {
      if (!searchTerm.trim() && !selectedBranch && !selectedSemester) {
        // No filters applied, use all notes
        const allNotes = await NotesService.getAllNotes();
        setStudyNotes(allNotes);
        return;
      }

      try {
        setIsFiltering(true);
        let filteredNotes: StudyNote[] = [];

        if (searchTerm.trim()) {
          filteredNotes = await NotesService.searchNotes(searchTerm);
        } else if (selectedBranch && selectedSemester) {
          filteredNotes = await NotesService.getNotesByBranchAndSemester(selectedBranch, selectedSemester);
        } else if (selectedBranch) {
          filteredNotes = await NotesService.getNotesByBranch(selectedBranch);
        } else if (selectedSemester) {
          filteredNotes = await NotesService.getNotesBySemester(selectedSemester);
        }

        setStudyNotes(filteredNotes);
      } catch (err) {
        console.error('Error filtering data:', err);
        setError('Failed to filter study notes. Please try again.');
      } finally {
        setTimeout(() => setIsFiltering(false), 600);
      }
    };

    const debounceTimer = setTimeout(() => {
      loadFilteredData();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, selectedBranch, selectedSemester]);

  // Fixed: Show all notes by default, filter only when search/filters are applied
  const filteredNotes = useMemo(() => {
    // Return current studyNotes (already filtered by useEffect)
    return studyNotes;
  }, [studyNotes]);

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

  const scrollToNotes = () => {
    const notesSection = document.getElementById('study-materials-section');
    if (notesSection) {
      notesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const hasActiveFilters = searchTerm.trim() || selectedBranch || selectedSemester;

  // Enhanced statistics for the hero section
  const stats = [
    {
      icon: <FileText className="w-7 h-7" />,
      number: studyNotes.length,
      label: "Study Notes",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      number: branches.length,
      label: "Engineering Branches",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      number: "2500+",
      label: "Happy Students",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      icon: <Award className="w-7 h-7" />,
      number: "98%",
      label: "Success Rate",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
    }
  ];

  const featuredBranches = [
    { 
      name: "Computer", 
      count: notesCountByBranch["Computer"] || 0,
      icon: "💻",
      description: "Software Development & Programming",
      gradient: "from-blue-500 to-purple-600"
    },
    { 
      name: "Information Technology", 
      count: notesCountByBranch["Information Technology"] || 0,
      icon: "🌐",
      description: "Networks & System Administration",
      gradient: "from-green-500 to-teal-600"
    },
    { 
      name: "AIML", 
      count: notesCountByBranch["AIML"] || 0,
      icon: "🤖",
      description: "Artificial Intelligence & Machine Learning",
      gradient: "from-purple-500 to-pink-600"
    },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Access",
      description: "Download notes immediately without any registration"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Always Updated",
      description: "Latest syllabus and exam patterns covered"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Exam Focused",
      description: "Curated content for maximum exam preparation"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "WebSite"],
    "name": "Private Academy",
    "alternateName": "Private Academy Mumbai University",
    "description": "Engineering study notes, question papers, and video tutorials for Mumbai University students across all branches and semesters",
    "url": "https://privateacademy.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://privateacademy.in/logo.png",
      "width": 512,
      "height": 512
    },
    "image": "https://privateacademy.in/og-image.png",
    "foundingDate": "2023",
    "email": "privateacademy.in@gmail.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "privateacademy.in@gmail.com",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.instagram.com/privateacademy.in",
      "https://t.me/mumcomputer",
      "https://www.youtube.com/@pvtacademy",
      "https://chat.whatsapp.com/EYeOgxDw8qp6oRMlnTjlfI"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra", 
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Mumbai, Maharashtra, India"
    },
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "Engineering Students"
    },
    "educationalCredentialAwarded": "Study Materials",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Engineering Study Materials",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Computer Engineering Notes",
          "description": "Study materials for Computer Engineering students"
        },
        {
          "@type": "Course",
          "name": "Information Technology Notes", 
          "description": "Study materials for IT students"
        },
        {
          "@type": "Course",
          "name": "AIML Engineering Notes",
          "description": "Study materials for AI/ML students"
        }
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://privateacademy.in/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  if (loading) {
    return (
      <>
        <SEOHead
          title="Private Academy | Mumbai University Engineering Study Material Notes & Papers"
          description="Engineering study notes and previous year question papers for Mumbai University students. Browse by branch and semester - Computer, IT, AIML, Mechanical, Chemical engineering."
          keywords="Mumbai University, engineering notes, question papers, study material, computer engineering, information technology, AIML, mechanical engineering, chemical engineering, study notes, previous year papers"
          canonicalUrl="https://www.privateacademy.in/"
          structuredData={structuredData}
        />
        
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800">
          <div className="container mx-auto px-4 pt-24 pb-12">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                  Loading Study Materials
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Preparing your personalized learning experience...
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <SEOHead
          title="Private Academy | Mumbai University Engineering Study Material Notes & Papers"
          description="Engineering study notes and previous year question papers for Mumbai University students. Browse by branch and semester - Computer, IT, AIML, Mechanical, Chemical engineering."
          keywords="Mumbai University, engineering notes, question papers, study material, computer engineering, information technology, AIML, mechanical engineering, chemical engineering, study notes, previous year papers"
          canonicalUrl="https://www.privateacademy.in/"
          structuredData={structuredData}
        />
        
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800">
          <div className="container mx-auto px-4 pt-24 pb-12">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center max-w-md">
                <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Oops! Something went wrong
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-6">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Private Academy - Engineering Study Notes & Question Papers for Mumbai University Students"
        description="Get engineering study notes, question papers, and video tutorials for Mumbai University. Download Computer, IT, AIML, Mechanical & Chemical engineering materials for all semesters."
        keywords="Mumbai University, engineering notes, question papers, study material, computer engineering, information technology, AIML, mechanical engineering, chemical engineering, study notes, previous year papers"
        canonicalUrl="https://privateacademy.in/"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800">
        {/* Hero Section with Enhanced Design */}
        <section className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container mx-auto px-4 pt-32 pb-20 relative">
            <motion.div
              className="max-w-6xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Heading */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  Mumbai University's #1 Study Platform
                </div>
                
                <h1 className="main-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Private Academy
                  </span>
                  <br />
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-medium">
                    Engineering Excellence Hub
                  </span>
                </h1>
              </motion.div>

              {/* Explore Notes Button */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Button
                  onClick={scrollToNotes}
                  size="lg"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Explore Notes
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Enhanced Description */}
              <motion.p
                className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform your engineering journey with our comprehensive collection of 
                <span className="font-semibold text-primary"> study materials</span>, 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> important questions</span>, and 
                <span className="font-semibold text-pink-600 dark:text-pink-400"> video tutorials </span> 
                designed specifically for Mumbai University students.
              </motion.p>

              {/* Enhanced Statistics Grid */}
              <motion.div
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {stats.map((stat, index) => (
                  <Card
                    key={stat.label}
                    className={cn(stat.bgColor, "transition-all duration-300 hover:shadow-lg")}
                    asChild
                  >
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                      <CardContent className="p-6 text-center">
                        <div className={`bg-gradient-to-r ${stat.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 mx-auto shadow-lg`}>
                          {stat.icon}
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-2">
                          {stat.number}
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </motion.div>
                  </Card>
                ))}
              </motion.div>

              {/* Features Section */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {features.map((feature, index) => (
                  <Card
                    key={feature.title}
                    className="backdrop-blur-sm"
                    asChild
                  >
                    <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                      <CardContent className="p-6">
                        <div className="text-primary mb-3">
                          {feature.icon}
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardContent>
                    </motion.div>
                  </Card>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Search and Filter Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card
              className="max-w-5xl mx-auto backdrop-blur-sm"
              asChild
            >
              <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <CardContent className="p-8">
                <CardHeader className="text-center mb-8 p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">
                    Find Your Perfect Study Materials
                  </CardTitle>
                  <CardDescription>
                    Search through our extensive collection or filter by your preferences
                  </CardDescription>
                </CardHeader>

                <div className="space-y-6">
                  {/* Search Bar */}
                  <div className="relative">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                  </div>

                  {/* Filters */}
                  <AnimatePresence>
                    {(!isMobile || showMobileFilters) && (
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
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

                  {/* Filter Results */}
                  {hasActiveFilters && (
                    <Card
                      className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                      asChild
                    >
                      <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                        <CardContent className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                              {filteredNotes.length} notes found
                            </span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={resetFilters}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                          >
                            <Filter className="w-4 h-4 mr-1" />
                            Clear all filters
                          </Button>
                        </CardContent>
                      </motion.div>
                    </Card>
                  )}
                </div>
              </CardContent>
            </motion.div>
            </Card>
          </div>
        </section>

        {/* Enhanced Study Notes Grid */}
        <section id="study-materials-section" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {!hasActiveFilters && (
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Complete Study Materials Collection
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Explore our comprehensive library of engineering study materials, 
                    carefully curated for Mumbai University students
                  </p>
                </motion.div>
              )}
              
              <NotesGrid notes={filteredNotes} isFiltering={isFiltering} />
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card
              className="max-w-4xl mx-auto overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border-0"
              asChild
            >
              <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <CardContent className="relative p-12">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>

                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-10 h-10" />
                  </motion.div>
                  
                  <CardTitle className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                    Join Our Growing Community
                  </CardTitle>
                  <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Connect with thousands of Mumbai University students, get instant updates on new study materials, 
                    participate in discussions, and never miss important announcements.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      asChild
                      variant="secondary"
                      size="lg"
                      className="group bg-white text-blue-600 hover:bg-blue-50"
                    >
                      <a
                        href="https://t.me/mumcomputer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Join Telegram Channel
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600"
                    >
                      <a
                        href="https://www.instagram.com/privateacademy.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Star className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Follow on Instagram
                      </a>
                    </Button>
                  </div>

                  <div className="mt-8 flex items-center justify-center space-x-8 text-blue-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold">2.5K+</div>
                      <div className="text-sm">Telegram Members</div>
                    </div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">50K+</div>
                      <div className="text-sm">Downloads</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </motion.div>
            </Card>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;