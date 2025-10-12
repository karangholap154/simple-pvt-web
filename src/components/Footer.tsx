import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTelegram, FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
import { Heart, BookOpen, Users, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const [currentName, setCurrentName] = useState<"Karan Gholap" | "Madhav">(
    "Karan Gholap"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentName((prev) =>
        prev === "Karan Gholap" ? "Madhav" : "Karan Gholap"
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      name: "Telegram",
      icon: <FaTelegram size={24} />,
      url: "https://t.me/mumcomputer",
      color: "hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20",
      description: "Join 2.5K+ members",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={24} />,
      url: "https://chat.whatsapp.com/EYeOgxDw8qp6oRMlnTjlfI",
      color:
        "hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20",
      description: "Study group chat",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={24} />,
      url: "https://www.youtube.com/@pvtacademy",
      color: "hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20",
      description: "Video tutorials",
      gradient: "from-red-500 to-pink-500",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/privateacademy.in",
      color: "hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20",
      description: "Updates & posts",
      gradient: "from-pink-500 to-purple-500",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Disclaimer", path: "/disclaimer" },
  ];

  const stats = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      label: "Study Notes",
      value: "500+",
    },
    { icon: <Users className="w-5 h-5" />, label: "Students", value: "2.5K+" },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Active Since",
      value: "2023",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-zinc-50 via-white to-blue-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 border-t border-zinc-200 dark:border-zinc-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Private Academy
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Engineering Excellence Hub
                  </p>
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                Empowering Mumbai University engineering students with
                comprehensive study materials, important questions, and video
                tutorials. Quality education accessible to all.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-3 bg-white/50 dark:bg-zinc-800/50 rounded-lg backdrop-blur-sm border border-white/50 dark:border-zinc-700/50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-blue-600 dark:text-blue-400 mb-1 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-lg font-bold text-zinc-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 
                      transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-3"></div>
                Legal
              </h4>
              <div className="space-y-3">
                {legalLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 
                      transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                Connect With Us
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center p-3 rounded-xl transition-all duration-300 group ${social.color} transform hover:scale-105`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-gradient-to-r ${social.gradient} text-white shadow-lg group-hover:shadow-xl transition-shadow`}
                      >
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-medium text-zinc-900 dark:text-white">
                          {social.name}
                        </div>
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">
                          {social.description}
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
              {/* Copyright with animated names */}
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Made with
                </span>
                <motion.div
                  className="mx-2"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  by
                </span>
                <div className="relative ml-2 h-5 w-28 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.a
                      key={currentName}
                      href="https://karangholap.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {currentName}
                    </motion.a>
                  </AnimatePresence>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-center md:justify-end space-x-6 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a
                    href="mailto:privateacademy.in@gmail.com"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    privateacademy.in@gmail.com
                  </a>
                </div>
                <div className="hidden sm:flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700 text-center">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                © 2024 Private Academy. All rights reserved. Made for Mumbai
                University Engineering Students.
                <a
                  href="/admin"
                  className="ml-2 text-xs text-zinc-400 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Admin
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
