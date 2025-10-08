import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Moon, Sun, Menu, X, GraduationCap, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '#notes', label: 'Notes', isScroll: true },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleNavClick = (item: any) => {
    if (item.isScroll) {
      const element = document.getElementById('study-materials-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-xl border-b border-zinc-200/50 dark:border-zinc-700/50' 
            : 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            
            {/* Enhanced Logo Section */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-2 h-2 text-white" />
                </motion.div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Private Academy
                </h1>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                  Engineering Excellence
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.isScroll ? (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item)}
                    className="relative px-4 py-2 font-medium transition-all duration-300 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                      location.pathname === item.path
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                        : 'text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        layoutId="activeTab"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ x: '-50%' }}
                      />
                    )}
                  </Link>
                )
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              
              {/* Theme Toggle Button */}
              <motion.button
                className="relative p-3 rounded-xl bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 
                  text-zinc-700 dark:text-zinc-300 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <AnimatePresence mode="wait">
                  {theme === 'light' ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-3 rounded-xl bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 
                  text-zinc-700 dark:text-zinc-300 shadow-lg"
                onClick={toggleMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            
            {/* Mobile Menu */}
            <motion.nav
              className="fixed top-20 right-4 left-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl 
                rounded-2xl shadow-2xl border border-zinc-200/50 dark:border-zinc-700/50 z-50 md:hidden overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">Navigation</span>
                </div>
                
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.isScroll ? (
                        <button
                          onClick={() => {
                            handleNavClick(item);
                            closeMenu();
                          }}
                          className="w-full flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                          <div className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-blue-500 to-purple-500" />
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          to={item.path}
                          className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                            location.pathname === item.path
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                              : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                          }`}
                          onClick={closeMenu}
                        >
                          <div className={`w-2 h-2 rounded-full mr-3 ${
                            location.pathname === item.path 
                              ? 'bg-white' 
                              : 'bg-gradient-to-r from-blue-500 to-purple-500'
                          }`} />
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;