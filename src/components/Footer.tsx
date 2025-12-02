import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTelegram, FaWhatsapp, FaYoutube, FaInstagram, FaLinkedin, FaUsers } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Heart, BookOpen, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/company/privateacademy/",
      color: "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20",
      description: "Professional network",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      name: "X (Twitter)",
      icon: <FaSquareXTwitter size={24} />,
      url: "https://x.com/PVTAcademyEdu",
      color: "hover:text-black hover:bg-zinc-100 dark:hover:bg-zinc-700 dark:hover:text-white",
      description: "Latest updates",
      gradient: "from-zinc-800 to-zinc-900",
    },
    {
      name: "Peerlist",
      icon: <FaUsers size={24} />,
      url: "https://peerlist.io/company/privateacademy",
      color: "hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20",
      description: "Professional community",
      gradient: "from-indigo-500 to-purple-600",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Private Academy
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        Engineering Excellence Hub
                      </Badge>
                    </div>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Empowering Mumbai University engineering students with
                    comprehensive study materials, important questions, and video
                    tutorials. Quality education accessible to all.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                    Quick Links
                  </h4>
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <Button
                        key={link.path}
                        variant="ghost"
                        size="sm"
                        asChild
                        className="w-full justify-start h-auto p-2 text-left"
                      >
                        <Link to={link.path}>
                          {link.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-3"></div>
                    Legal
                  </h4>
                  <div className="space-y-2">
                    {legalLinks.map((link) => (
                      <Button
                        key={link.path}
                        variant="ghost"
                        size="sm"
                        asChild
                        className="w-full justify-start h-auto p-2 text-left"
                      >
                        <Link to={link.path}>
                          {link.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Social Links Section */}
          <motion.div
            className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  Connect With Us
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-wrap xl:justify-center gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className="w-full sm:w-auto xl:flex-shrink-0"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className={cn(
                          "w-full h-auto p-3 flex items-center justify-start space-x-3",
                          "hover:scale-105 transition-all duration-300",
                          "bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm",
                          social.color
                        )}
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div
                            className={cn(
                              "w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                              "bg-gradient-to-r text-white shadow-lg group-hover:shadow-xl transition-shadow",
                              social.gradient
                            )}
                          >
                            {social.icon}
                          </div>
                          <div className="min-w-0 flex-1 text-left">
                            <div className="font-medium text-zinc-900 dark:text-white text-xs sm:text-sm">
                              {social.name}
                            </div>
                            <div className="text-xs text-zinc-600 dark:text-zinc-400 hidden sm:block">
                              {social.description}
                            </div>
                          </div>
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <Card className="rounded-none border-x-0 border-b-0 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm">
          <CardContent className="p-0">
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
                    <Button
                      variant="link"
                      size="sm"
                      asChild
                      className="absolute inset-0 p-0 h-auto"
                    >
                      <motion.a
                      key={currentName}
                      href="https://admin.privateacademy.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      >
                      {currentName}
                      </motion.a>
                    </Button>
                  </AnimatePresence>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-center md:justify-end space-x-6 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <Button
                    variant="link"
                    size="sm"
                    asChild
                    className="p-0 h-auto text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <a href="mailto:privateacademy.in@gmail.com">
                      privateacademy.in@gmail.com
                    </a>
                  </Button>
                </div>
                <div className="hidden sm:flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <Badge variant="outline" className="text-xs">
                    Mumbai, India
                  </Badge>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700 text-center">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                © {new Date().getFullYear()} Private Academy. All rights reserved.
                <Button
                  variant="link"
                  size="sm"
                  asChild
                  className="ml-2 p-0 h-auto text-xs text-zinc-400 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <a href="/admin">Admin</a>
                </Button>
              </p>
            </div>
          </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;