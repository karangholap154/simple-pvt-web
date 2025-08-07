import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, BookOpen, Users, Filter } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FilterDropdown from '../components/FilterDropdown';
import { questionPapers } from '../data/questionPapersData';
import { branches, semesters } from '../data/notesData';

const QuestionPapers: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);

  const filteredPapers = useMemo(() => {
    // Show all papers by default when no filters are applied
    if (!selectedBranch && !selectedSemester) {
      return questionPapers;
    }
    
    // Filter by both branch and semester if both are selected
    if (selectedBranch && selectedSemester) {
      return questionPapers.filter(paper => 
        paper.branch === selectedBranch && 
        paper.semester === selectedSemester
      );
    }
    
    // Filter by branch only
    if (selectedBranch) {
      return questionPapers.filter(paper => paper.branch === selectedBranch);
    }
    
    // Filter by semester only
    if (selectedSemester) {
      return questionPapers.filter(paper => paper.semester === selectedSemester);
    }
    
    return questionPapers;
  }, [selectedBranch, selectedSemester]);

  // Group papers by subject
  const groupedPapers = useMemo(() => {
    const groups = new Map();
    
    filteredPapers.forEach(paper => {
      if (!groups.has(paper.title)) {
        groups.set(paper.title, []);
      }
      groups.get(paper.title).push(paper);
    });

    return Array.from(groups.entries()).map(([title, papers]) => ({
      title,
      papers: papers.sort((a, b) => {
        // Define the order of months
        const monthOrder = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
    
        // Sort by year descending, then by month order
        if (b.date.year !== a.date.year) {
          return b.date.year - a.date.year;
        }
        return monthOrder.indexOf(a.date.month) - monthOrder.indexOf(b.date.month);
      }),
    }));
  }, [filteredPapers]);

  const resetFilters = () => {
    setSelectedBranch(null);
    setSelectedSemester(null);
  };

  const hasActiveFilters = selectedBranch || selectedSemester;

  // Statistics for the hero section
  const stats = [
    {
      icon: <FileText className="w-6 h-6" />,
      number: questionPapers.length,
      label: "Question Papers",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: new Set(questionPapers.map(p => p.branch)).size,
      label: "Engineering Branches",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      number: new Set(questionPapers.map(p => p.semester)).size,
      label: "Semesters Covered",
      color: "text-purple-600 dark:text-purple-400"
    }
  ];

  const availableBranches = [...new Set(questionPapers.map(p => p.branch))];
  const availableSemesters = [...new Set(questionPapers.map(p => p.semester))].sort((a, b) => a - b);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Previous Year Question Papers",
    "description": "Download previous year question papers for Mumbai University engineering branches",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Engineering Question Papers",
      "description": "Collection of previous year question papers for all engineering branches and semesters",
      "numberOfItems": questionPapers.length
    }
  };

  return (
    <>
      <SEOHead
        title="Previous Year Question Papers | Mumbai University Engineering"
        description="Download previous year question papers for Mumbai University engineering branches - Computer, IT, AIML, Mechanical, Chemical. Free PDF downloads for all semesters."
        keywords="Mumbai University question papers, engineering previous year papers, computer engineering papers, IT question papers, AIML papers, mechanical engineering papers, chemical engineering papers, free download"
        canonicalUrl="https://www.privateacademy.in/question-papers"
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
            <span className="text-yellow-400">Previous Year</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl">Question Papers</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mb-8">
            Access comprehensive collection of <span className="text-yellow-400 font-semibold">Mumbai University</span> engineering 
            question papers. Download PDFs for all branches and semesters.
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

        {/* Available Branches */}
        <motion.section
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white text-center mb-8">
            Available Engineering Branches
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableBranches.map((branch, index) => {
              const branchPapers = questionPapers.filter(p => p.branch === branch);
              return (
                <motion.button
                  key={branch}
                  onClick={() => {
                    setSelectedBranch(branch);
                    setSelectedSemester(null);
                  }}
                  className={`p-4 rounded-lg text-left transition-all duration-300 border ${
                    selectedBranch === branch
                      ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-500 dark:border-blue-400'
                      : 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30 border-blue-200 dark:border-blue-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                    {branch}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {branchPapers.length} question papers available
                  </p>
                </motion.button>
              );
            })}
          </div>
        </motion.section>

        {/* Filter Section */}
        <motion.section
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-center mb-6">
              <Filter className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                Filter Question Papers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FilterDropdown
                label="Branch"
                options={availableBranches}
                value={selectedBranch}
                onChange={(value) => setSelectedBranch(value as string)}
              />
              <FilterDropdown
                label="Semester"
                options={availableSemesters}
                value={selectedSemester}
                onChange={(value) => setSelectedSemester(value as number)}
              />
            </div>

            {hasActiveFilters && (
              <motion.div 
                className="flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {filteredPapers.length} question papers found
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

        {/* Question Papers Display */}
        <section className="max-w-6xl mx-auto">
          {!hasActiveFilters && (
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                All Question Papers
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Browse through our complete collection of previous year question papers
              </p>
            </motion.div>
          )}

          {filteredPapers.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <FileText className="w-16 h-16 mx-auto text-zinc-400 dark:text-zinc-600 mb-4" />
              <h3 className="text-xl font-medium text-zinc-700 dark:text-zinc-300">
                No question papers found
              </h3>
              <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                Try adjusting your filters or check back later for more papers
              </p>
            </motion.div>
          ) : (
            <div className="space-y-8">
              {groupedPapers.map(({ title, papers }, groupIndex) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: groupIndex * 0.1 }}
                  className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-md"
                >
                  <div className="p-4 bg-zinc-50 dark:bg-zinc-700 border-b border-zinc-200 dark:border-zinc-600">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                      {title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                      {papers.length} paper{papers.length > 1 ? 's' : ''} available
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <div className="hidden md:block">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-zinc-100 dark:bg-zinc-700 border-b border-zinc-200 dark:border-zinc-600">
                            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">
                              Branch
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">
                              Semester
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">
                              Year
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">
                              Month
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">
                              Download
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-600">
                          {papers.map((paper, paperIndex) => (
                            <motion.tr 
                              key={`${paper.id}-${paper.date.month}-${paper.date.year}`}
                              className="hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: (groupIndex * 0.1) + (paperIndex * 0.05) }}
                            >
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                  {paper.branch}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100">
                                Sem {paper.semester}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100">
                                {paper.date.year}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100">
                                {paper.date.month}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                <a
                                  href={paper.pdfFile}
                                  download
                                  className="inline-flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 
                                    text-white text-sm font-medium rounded-md transition-colors duration-200"
                                >
                                  <Download className="w-4 h-4 mr-1" />
                                  Download
                                </a>
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile Card Layout */}
                    <div className="md:hidden space-y-1">
                      {papers.map((paper, paperIndex) => (
                        <motion.div
                          key={`${paper.id}-${paper.date.month}-${paper.date.year}`}
                          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 
                            rounded-sm p-5 border border-blue-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: (groupIndex * 0.1) + (paperIndex * 0.05) }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex flex-col space-y-3">
                            {/* Header with Branch Tag */}
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-sm">
                                {paper.branch}
                              </span>
                              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                                Sem {paper.semester}
                              </div>
                            </div>
                            
                            {/* Date Information */}
                            <div className="flex items-center justify-center bg-white dark:bg-zinc-800 rounded-lg py-2 px-3 border border-zinc-200 dark:border-zinc-700">
                              <div className="text-center">
                                <div className="text-lg font-bold text-zinc-900 dark:text-white">
                                  {paper.date.year}
                                </div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                                  {paper.date.month}
                                </div>
                              </div>
                            </div>
                            
                            {/* Download Button */}
                            <a
                              href={paper.pdfFile}
                              download
                              className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
                                hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-200 
                                shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                              <Download className="w-5 h-5 mr-2" />
                              Download PDF
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Call to Action */}
        <motion.section
          className="max-w-4xl mx-auto mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <FileText className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Need More Question Papers?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Can't find the question paper you're looking for? We're constantly updating our collection. 
              Contact us and we'll try to add it to our database.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/mumcomputer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Request on Telegram
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold 
                  hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default QuestionPapers;