import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { FaInstagram, FaTelegram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "privateacademy.in@gmail.com",
      link: "mailto:privateacademy.in@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Mumbai, Maharashtra, India",
      link: null
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Response Time",
      content: "Within 24 hours",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram size={32} />,
      url: "https://www.instagram.com/privateacademy.in",
      color: "hover:text-pink-500",
      description: "Follow us for updates and educational content"
    },
    {
      name: "Telegram",
      icon: <FaTelegram size={32} />,
      url: "https://t.me/mumcomputer",
      color: "hover:text-blue-500",
      description: "Join our Telegram channel for instant updates"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={32} />,
      url: "https://chat.whatsapp.com/EYeOgxDw8qp6oRMlnTjlfI",
      color: "hover:text-green-500",
      description: "Join our WhatsApp group for discussions"
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={32} />,
      url: "https://www.youtube.com/@pvtacademy",
      color: "hover:text-red-500",
      description: "Subscribe for video tutorials and explanations"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Private Academy",
    "description": "Get in touch with Private Academy for engineering study materials and support",
    "mainEntity": {
      "@type": "Organization",
      "name": "Private Academy",
      "email": "privateacademy.in@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Maharashtra",
        "addressLocality": "Mumbai"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us - Private Academy | Get in Touch"
        description="Contact Private Academy for engineering study materials, support, or feedback. We're here to help Mumbai University students with their academic needs."
        keywords="contact private academy, engineering support, Mumbai University help, study materials contact, academic assistance"
        canonicalUrl="https://www.privateacademy.in/contact"
        structuredData={structuredData}
      />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.section
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="main-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Have questions about our study materials? Need help with specific subjects? 
            We're here to support your academic journey.
          </p>
        </motion.section>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-md mb-8"
          >
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 text-center">
              Get in Touch
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600 dark:text-blue-400">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-zinc-600 dark:text-zinc-300">
                      {info.content}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-md"
          >
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 text-center">
              Connect With Us
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`text-zinc-600 dark:text-zinc-400 ${social.color} transition-colors mb-3`}>
                    {social.icon}
                  </div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                    {social.name}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
                    {social.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Need Specific Study Materials?
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              If you're looking for specific notes or resources that aren't available on our website, 
              feel free to reach out to us through any of the above channels. We're constantly expanding 
              our library based on student needs.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="bg-white dark:bg-zinc-800 px-3 py-1 rounded-full">Computer Engineering</span>
              <span className="bg-white dark:bg-zinc-800 px-3 py-1 rounded-full">Information Technology</span>
              <span className="bg-white dark:bg-zinc-800 px-3 py-1 rounded-full">AIML</span>
              <span className="bg-white dark:bg-zinc-800 px-3 py-1 rounded-full">Mechanical</span>
              <span className="bg-white dark:bg-zinc-800 px-3 py-1 rounded-full">Chemical</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;