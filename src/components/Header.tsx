import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Moon, Sun, Menu, X, GraduationCap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out",
          scrolled 
            ? 'bg-background/80 backdrop-blur-2xl shadow-2xl border-b border-border/50' 
            : 'bg-background/60 backdrop-blur-xl'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        {/* Gradient Border */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            {/* Enhanced Logo Section */}
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative group">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Main Logo Container */}
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                
                {/* Floating Sparkle */}
                <motion.div
                  className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                </motion.div>
              </div>
              
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Private Academy
                </h1>
                <p className="text-xs text-muted-foreground font-medium tracking-wide">
                  Engineering Excellence Hub
                </p>
              </div>
            </motion.div>


            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              
              {/* Desktop Navigation - Moved to right side */}
              <nav className="hidden lg:flex items-center">
                <div className="flex items-center space-x-2 bg-muted/50 backdrop-blur-sm rounded-2xl p-1 border border-border/50">
                  {navItems.map((item, index) => (
                    <div key={item.path} className="relative">
                      {item.isScroll ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleNavClick(item)}
                          className={cn(
                            "relative px-6 py-2 rounded-xl font-medium transition-all duration-300",
                            "hover:bg-primary/10 hover:text-primary"
                          )}
                        >
                          {item.label}
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className={cn(
                            "relative px-6 py-2 rounded-xl font-medium transition-all duration-300",
                            location.pathname === item.path
                              ? 'bg-primary text-primary-foreground shadow-lg'
                              : 'hover:bg-primary/10 hover:text-primary'
                          )}
                        >
                          <Link to={item.path}>
                            {item.label}
                            {location.pathname === item.path && (
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-xl -z-10"
                                layoutId="activeNavTab"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              />
                            )}
                          </Link>
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </nav>
              
              {/* Theme Toggle Button */}
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="relative w-11 h-11 rounded-xl border-2 border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/80 transition-all duration-300"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {theme === 'light' ? (
                      <motion.div
                        key="moon"
                        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <Moon className="h-5 w-5 text-primary" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sun"
                        initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <Sun className="h-5 w-5 text-yellow-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="icon"
                onClick={toggleMenu}
                className="lg:hidden w-11 h-11 rounded-xl border-2 border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/80 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {menuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <X className="h-5 w-5 text-primary" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Menu className="h-5 w-5 text-primary" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Button>
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            
            {/* Mobile Menu */}
            <motion.nav
              className="fixed top-20 right-4 left-4 bg-background/95 backdrop-blur-2xl 
                rounded-3xl shadow-2xl border border-border/50 z-50 lg:hidden overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Gradient Header */}
              <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
              
              <div className="p-8">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-3 shadow-lg">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Navigation
                  </span>
                </div>
                
                <div className="space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      {item.isScroll ? (
                        <Button
                          variant="ghost"
                          size="lg"
                          onClick={() => {
                            handleNavClick(item);
                            closeMenu();
                          }}
                          className="w-full justify-start text-left px-6 py-4 rounded-2xl font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary group"
                        >
                          <div className="w-3 h-3 rounded-full mr-4 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-110 transition-transform" />
                          <span className="text-lg">{item.label}</span>
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="lg"
                          asChild
                          className={cn(
                            "w-full justify-start text-left px-6 py-4 rounded-2xl font-medium transition-all duration-300 group",
                            location.pathname === item.path
                              ? 'bg-primary text-primary-foreground shadow-lg'
                              : 'hover:bg-primary/10 hover:text-primary'
                          )}
                        >
                          <Link to={item.path} onClick={closeMenu}>
                            <div className={cn(
                              "w-3 h-3 rounded-full mr-4 group-hover:scale-110 transition-transform",
                              location.pathname === item.path 
                                ? 'bg-primary-foreground' 
                                : 'bg-gradient-to-r from-blue-500 to-purple-500'
                            )} />
                            <span className="text-lg">{item.label}</span>
                          </Link>
                        </Button>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Menu Footer */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Engineering Excellence Hub
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-muted-foreground">
                        2.5K+ Active Students
                      </span>
                    </div>
                  </div>
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