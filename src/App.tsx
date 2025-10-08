import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Disclaimer from './pages/Disclaimer';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleRightClick = (e: MouseEvent) => {
      e.preventDefault();
      setPosition({ x: e.pageX, y: e.pageY });
      setShowMessage(true);
      setFadeOut(false);

      // Start fade out after 1.5 seconds
      setTimeout(() => {
        setFadeOut(true);
      }, 1500);

      // Fully hide after 2 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    };

    document.addEventListener('contextmenu', handleRightClick);

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ThemeProvider>
          <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            {showMessage && (
              <div
                className='main-heading'
                style={{
                  position: 'absolute',
                  top: position.y,
                  left: position.x,
                  background: '#ebebeb',
                  color: 'black',
                  fontSize: '9px',
                  fontStyle: 'italic',
                  padding: '5px 10px',
                  borderRadius: '2px',
                  transform: 'translate(-50%, -100%) scale(1)',
                  pointerEvents: 'none',
                  opacity: fadeOut ? 0 : 1,
                  transition: 'opacity 0.5s ease, transform 0.3s ease',
                  zIndex: 9999,
                }}
              >
                Share this website with your friends!✌️
              </div>
            )}
          </div>
          <Footer />
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;