import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      <div className="container mx-auto border-b border-zinc-200 dark:border-zinc-800 md:px-8 px-4 py-4 md:py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-yellow-400 dark:text-yellow-500" />
          <h1 className="text-xl sm:text-xl font-bold text-zinc-800 dark:text-white">
            Private Academy
          </h1>
        </div>

        <div className="flex items-center space-x-6">
          {/* Hamburger Menu Button */}
          <button
            className="md:hidden order-2 p-2 rounded-full ml-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
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
              to="/question-papers"
              className={`text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                location.pathname === '/question-papers' ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
              }`}
            >
              Question Papers
            </Link>
            <Link
              to="/about"
              className={`text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                location.pathname === '/about' ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                location.pathname === '/contact' ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Theme Toggle Button */}
          <motion.button
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="h-6 w-6" />
            ) : (
              <Sun className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.nav
          className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to="/"
              className={`text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                location.pathname === '/' ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/question-papers"
              className={`text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                location.pathname === '/question-papers' ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
              }`}
              onClick={toggleMenu}
            >
              Question Papers
            </Link>
            <Link
              to="/about"
              className={`text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                location.pathname === '/about' ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                location.pathname === '/contact' ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;