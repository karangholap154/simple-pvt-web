import React from 'react';
import { BookOpen, Users, FolderTree } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const About: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Private Academy",
    "description": "Learn about Private Academy's mission to provide free engineering study materials for Mumbai University students",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "Private Academy",
      "foundingDate": "2023",
      "mission": "Making quality educational resources accessible to all engineering students"
    }
  };

  return (
    <>
      <SEOHead
        title="About Private Academy - Free Engineering Study Materials"
        description="Learn about Private Academy's mission to provide free engineering study notes and question papers for Mumbai University students. Quality education accessible to all."
        keywords="about private academy, engineering education, Mumbai University, free study materials, educational mission"
        canonicalUrl="https://www.privateacademy.in/about"
        structuredData={structuredData}
      />
      
      <section id="about" className="py-8 pt-24 bg-background min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="main-heading text-xl sm:text-2xl md:text-3xl font-bold text-purple-dark mb-4">About Private Academy</h1>
            <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-sm sm:text-base md:text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
              Our mission is to make quality educational resources accessible to all engineering students. All notes and resources are provided exclusively for <span className="text-blue-600 dark:text-blue-400 font-medium">Mumbai University students</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            <div className="bg-white dark:bg-zinc-800 p-4 sm:p-5 rounded-md shadow-md border border-zinc-100 dark:border-zinc-700 transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center min-h-[210px]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-zinc-900 dark:text-white mb-2">Quality Content</h2>
              <p className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
                Meticulously curated study notes from top engineering programs, ensuring you have access to high-quality learning materials.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 sm:p-5 rounded-md shadow-md border border-zinc-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center min-h-[210px]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-zinc-900 dark:text-white mb-2">Access for All</h2>
              <p className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
                We believe education should be accessible to everyone, which is why all our resources are available with no login required.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 sm:p-5 rounded-md shadow-md border border-zinc-100 dark:border-zinc-700 transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center min-h-[210px]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <FolderTree className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-zinc-900 dark:text-white mb-2">Organized Collection</h2>
              <p className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
                Our materials are neatly organized by branch and semester, making it easy for you to find exactly what you need.
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 bg-blue-50 dark:bg-blue-900/20 p-4 sm:p-6 rounded-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0 md:mr-6 text-center md:text-left">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-zinc-900 dark:text-white mb-2">Need more specialized content?</h2>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base">
                  We're constantly expanding our library! If you're looking for specific notes or resources, let us know.
                </p>
              </div>
              <a 
                href="mailto:privateacademy.in@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 sm:py-2.5 sm:px-5 rounded-md transition-all duration-300 shadow-sm hover:shadow-md text-center whitespace-nowrap block md:inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;