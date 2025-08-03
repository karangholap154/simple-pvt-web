import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const NotFound: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found - Private Academy",
    "description": "The page you're looking for doesn't exist. Return to Private Academy homepage for engineering study materials."
  };

  const quickLinks = [
    {
      title: "Browse Study Notes",
      description: "Find notes for your branch and semester",
      icon: <BookOpen className="w-6 h-6" />,
      path: "/",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    },
    {
      title: "Question Papers",
      description: "Download previous year papers",
      icon: <Search className="w-6 h-6" />,
      path: "/question-papers",
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
    },
    {
      title: "About Us",
      description: "Learn more about Private Academy",
      icon: <Home className="w-6 h-6" />,
      path: "/about",
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <>
      <SEOHead
        title="Page Not Found (404) - Private Academy"
        description="The page you're looking for doesn't exist. Return to Private Academy homepage for Mumbai University engineering study materials and notes."
        keywords="404, page not found, Private Academy, engineering notes, Mumbai University"
        canonicalUrl="https://www.privateacademy.in/404"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center px-4 pt-16">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="text-8xl md:text-9xl font-bold text-zinc-200 dark:text-zinc-800 mb-4">
              404
            </div>
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-6xl mb-4"
            >
              📚
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="main-heading text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-2">
              The page you're looking for seems to have gone missing.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400">
              Don't worry, let's get you back to studying! 📖
            </p>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 
                text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">
              Or explore these popular sections:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    className="block p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg 
                      transition-all duration-200 border border-zinc-200 dark:border-zinc-700"
                  >
                    <div className={`w-12 h-12 rounded-full ${link.color} flex items-center justify-center mx-auto mb-4`}>
                      {link.icon}
                    </div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                      {link.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {link.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800"
          >
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Need help?</strong> If you think this is an error, please{' '}
              <Link to="/contact" className="underline hover:no-underline">
                contact us
              </Link>{' '}
              and let us know what you were looking for.
            </p>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default NotFound;