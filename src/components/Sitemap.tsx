import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, FileText, Info, BookOpen } from 'lucide-react';

const Sitemap: React.FC = () => {
  const sitePages = [
    {
      title: 'Home',
      path: '/',
      icon: <Home className="w-5 h-5" />,
      description: 'Browse engineering study notes by branch and semester'
    },
    {
      title: 'About',
      path: '/about',
      icon: <Info className="w-5 h-5" />,
      description: 'Learn more about Private Academy and our mission'
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: <Info className="w-5 h-5" />,
      description: 'Get in touch with us for support and feedback'
    },
    {
      title: 'Privacy Policy',
      path: '/privacy-policy',
      icon: <Info className="w-5 h-5" />,
      description: 'Learn how we protect your privacy and data'
    }
  ];

  const studyMaterials = [
    'Computer Engineering Notes',
    'Information Technology Notes',
    'AIML Engineering Notes',
    'Mechanical Engineering Notes',
    'Chemical Engineering Notes'
  ];

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center">
        <BookOpen className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
        Site Navigation
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">Main Pages</h3>
          <div className="space-y-3">
            {sitePages.map((page, index) => (
              <motion.div
                key={page.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={page.path}
                  className="flex items-start p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 
                    hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors group"
                >
                  <div className="text-blue-600 dark:text-blue-400 mr-3 mt-0.5">
                    {page.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {page.title}
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                      {page.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">Study Materials</h3>
          <div className="space-y-2">
            {studyMaterials.map((material, index) => (
              <motion.div
                key={material}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-2 rounded border-l-4 border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20"
              >
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{material}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;