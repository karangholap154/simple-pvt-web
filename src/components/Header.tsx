import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-zinc-900 shadow-md' 
          : 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container border-b border-zinc-200 dark:border-zinc-800 mx-auto px-4 py-4 md:py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-yellow-400 dark:text-yellow-500" />
          <h1 className="text-xl sm:text-xl font-bold text-zinc-800 dark:text-white">
            Private Academy
          </h1>
        </div>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className={`text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                location.pathname === '/' ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                location.pathname === '/about' ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
              }`}
            >
              About
            </Link>
          </nav>
          
          <motion.button
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;