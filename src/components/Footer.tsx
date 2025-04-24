import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const [currentName, setCurrentName] = useState<"Karan Gholap" | "Madhav">(
    "Karan Gholap"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentName((prev) =>
        prev === "Karan Gholap" ? "Madhav" : "Karan Gholap"
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram size={20} />,
      url: "https://www.instagram.com/privateacademy.in",
    },
    {
      name: "Telegram",
      icon: <FaTelegram size={20} />,
      url: "https://t.me/mumcomputer",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={20} />,
      url: "https://chat.whatsapp.com/EYeOgxDw8qp6oRMlnTjlfI",
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={20} />,
      url: "https://www.youtube.com/@pvtacademy",
    },
  ];

  return (
    <footer className="bg-white dark:bg-zinc-900 py-4 md:px-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
            <span className="text-zinc-700 dark:text-zinc-300">Made With</span>
            <motion.div
              className="mx-1 text-red-500"
              animate={{
                opacity: [0.7, 1, 0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              ❤️
            </motion.div>
            <span className="text-zinc-700 dark:text-zinc-300">By</span>
            <div className="relative ml-1 h-6 w-28 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.a
                  key={currentName}
                  href="https://karangholap.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 text-blue-600 dark:text-blue-400 font-medium whitespace-nowrap"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentName}
                </motion.a>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={link.name}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
