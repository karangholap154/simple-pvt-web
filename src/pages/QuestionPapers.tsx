import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import FilterDropdown from '../components/FilterDropdown';
import { questionPapers } from '../data/questionPapersData';
import { branches, semesters } from '../data/notesData';

const QuestionPapers: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);

  const filteredPapers = useMemo(() => {
    if (!selectedBranch || !selectedSemester) {
      return [];
    }
    
    return questionPapers.filter(paper => 
      paper.branch === selectedBranch && 
      paper.semester === selectedSemester
    );
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
        // Sort by year descending, then by month (May before December)
        if (b.date.year !== a.date.year) {
          return b.date.year - a.date.year;
        }
        return a.date.month === 'May' ? -1 : 1;
      })
    }));
  }, [filteredPapers]);

  const resetFilters = () => {
    setSelectedBranch(null);
    setSelectedSemester(null);
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <motion.section
        className="max-w-4xl mx-auto text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="main-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
          Previous Year Question Papers
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
          Access previous year question papers for <span className="text-yellow-400 font-semibold">Mumbai University</span> engineering branches.
        </p>
      </motion.section>

      <section className="max-w-5xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
        </div>

        {(selectedBranch !== null || selectedSemester !== null) && (
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

      <section className="max-w-6xl mx-auto">
        {!selectedBranch || !selectedSemester ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <FileText className="w-16 h-16 mx-auto text-zinc-400 dark:text-zinc-600 mb-4" />
            <h3 className="text-xl font-medium text-zinc-700 dark:text-zinc-300">
              Select Branch and Semester
            </h3>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
              Please select both branch and semester to view question papers
            </p>
          </motion.div>
        ) : filteredPapers.length === 0 ? (
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
              No question papers available for the selected branch and semester
            </p>
          </motion.div>
        ) : (
          <div className="space-y-8">
            {groupedPapers.map(({ title, papers }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-md"
              >
                <div className="p-4 bg-zinc-200 dark:bg-zinc-700 border-b border-zinc-300 dark:border-zinc-900">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                    {title}
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-zinc-200 dark:bg-zinc-700 border-b border-zinc-300 dark:border-zinc-700">
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
                      {papers.map((paper) => (
                        <tr 
                          key={`${paper.id}-${paper.date.month}-${paper.date.year}`}
                          className="hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors"
                        >
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
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default QuestionPapers;