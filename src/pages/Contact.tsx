import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Users, Clock, Send, Heart, Star, ArrowRight } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import SEOHead from '../components/SEOHead';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "privateacademy.in@gmail.com",
      link: "mailto:privateacademy.in@gmail.com",
      description: "Get in touch for any queries or support",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Mumbai, Maharashtra, India (Remote)",
      link: null,
      description: "Serving Mumbai University students",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      content: "Within 24 hours",
      link: null,
      description: "We respond to all queries promptly",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    }
  ];

  const socialLinks = [
    {
      name: "Telegram",
      icon: <FaTelegram size={24} />,
      url: "https://t.me/mumcomputer",
      color: "hover:text-blue-500",
      description: "Join 2.5K+ members for instant updates",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      members: "2.5K+ Members"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={24} />,
      url: "https://chat.whatsapp.com/EYeOgxDw8qp6oRMlnTjlfI",
      color: "hover:text-green-500",
      description: "Join our study group for discussions",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      members: "Active Group"
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={24} />,
      url: "https://www.youtube.com/@pvtacademy",
      color: "hover:text-red-500",
      description: "Subscribe for video tutorials",
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
      members: "Video Content"
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/privateacademy.in",
      color: "hover:text-pink-500",
      description: "Follow for updates and posts",
      gradient: "from-pink-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20",
      members: "Daily Updates"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/company/privateacademy/",
      color: "hover:text-blue-600",
      description: "Connect professionally",
      gradient: "from-blue-600 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
      members: "Professional"
    },
    {
      name: "X (Twitter)",
      icon: <FaSquareXTwitter size={24} />,
      url: "https://x.com/PVTAcademyEdu",
      color: "hover:text-black dark:hover:text-white",
      description: "Follow for latest news",
      gradient: "from-zinc-800 to-zinc-900",
      bgColor: "bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900/20 dark:to-zinc-800/20",
      members: "Latest News"
    }
  ];

  const quickActions = [
    {
      title: "Need Specific Notes?",
      description: "Looking for materials not available on our website?",
      action: "Request Notes",
      icon: <MessageCircle className="w-5 h-5" />,
      link: "mailto:privateacademy.in@gmail.com?subject=Note Request"
    },
    {
      title: "Report an Issue",
      description: "Found a broken link or incorrect information?",
      action: "Report Issue",
      icon: <Star className="w-5 h-5" />,
      link: "mailto:privateacademy.in@gmail.com?subject=Issue Report"
    },
    {
      title: "Suggest Improvements",
      description: "Have ideas to make our platform better?",
      action: "Share Ideas",
      icon: <Heart className="w-5 h-5" />,
      link: "mailto:privateacademy.in@gmail.com?subject=Suggestion"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["ContactPage", "WebPage"],
    "name": "Contact Private Academy",
    "description": "Contact Private Academy for engineering study materials support, feedback, or queries. Multiple ways to reach us including email, social media, and community channels.",
    "url": "https://privateacademy.in/contact",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Private Academy",
      "url": "https://privateacademy.in"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Private Academy",
      "email": "privateacademy.in@gmail.com",
      "url": "https://privateacademy.in",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": "privateacademy.in@gmail.com",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"],
          "areaServed": "Mumbai, Maharashtra, India"
        },
        {
          "@type": "ContactPoint",
          "url": "https://t.me/mumcomputer",
          "contactType": "customer service",
          "name": "Telegram Community"
        },
        {
          "@type": "ContactPoint",
          "url": "https://www.instagram.com/privateacademy.in",
          "contactType": "customer service",
          "name": "Instagram"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Maharashtra",
        "addressLocality": "Mumbai"
      },
      "sameAs": [
        "https://www.instagram.com/privateacademy.in",
        "https://t.me/mumcomputer",
        "https://www.youtube.com/@pvtacademy",
        "https://chat.whatsapp.com/EYeOgxDw8qp6oRMlnTjlfI",
        "https://www.linkedin.com/company/privateacademy/",
        "https://x.com/PVTAcademyEdu"
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://privateacademy.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://privateacademy.in/contact"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Private Academy - Get Help & Support | Mumbai University Engineering Resources"
        description="Contact Private Academy for engineering study materials support, feedback, or queries. Join 2.5K+ Telegram members, email us, or connect via social media. We're here to help Mumbai University students succeed."
        keywords="contact Private Academy, Mumbai University engineering support, study materials help, academic assistance, engineering student support, Telegram community, email support, student queries, educational help"
        canonicalUrl="https://privateacademy.in/contact"
        structuredData={structuredData}
        breadcrumbs={[
          { name: "Home", url: "https://privateacademy.in/" },
          { name: "Contact", url: "https://privateacademy.in/contact" }
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-6 px-4 py-2">
                <Send className="w-4 h-4 mr-2" />
                Get in Touch
              </Badge>
              
              <h1 className="main-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Contact Us
                </span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-medium">
                  We're Here to Help
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Have questions about our study materials? Need help with specific subjects? 
                We're here to support your academic journey every step of the way.
              </p>

              <Button
                size="lg"
                asChild
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <a href="mailto:privateacademy.in@gmail.com">
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Send us an Email
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the method that works best for you
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className={cn("h-full hover:shadow-lg transition-all duration-300", info.bgColor)}>
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto shadow-lg`}>
                        {info.icon}
                      </div>
                      <CardTitle className="text-xl mb-2">{info.title}</CardTitle>
                      <CardDescription className="text-sm mb-3">
                        {info.description}
                      </CardDescription>
                      {info.link ? (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="font-medium"
                        >
                          <a href={info.link}>
                            {info.content}
                          </a>
                        </Button>
                      ) : (
                        <p className="font-medium text-foreground">
                          {info.content}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Quick Actions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Common reasons students contact us
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                          {action.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">
                            {action.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {action.description}
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="w-full"
                          >
                            <a href={action.link}>
                              {action.action}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Connect With Our Community
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of students across our social platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className={cn("h-full hover:shadow-lg transition-all duration-300", social.bgColor)}>
                    <CardContent className="p-6 text-center">
                      <div className={`w-14 h-14 bg-gradient-to-r ${social.gradient} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto shadow-lg`}>
                        {social.icon}
                      </div>
                      <CardTitle className="text-lg mb-2">{social.name}</CardTitle>
                      <Badge variant="secondary" className="mb-3">
                        {social.members}
                      </Badge>
                      <CardDescription className="text-sm mb-4">
                        {social.description}
                      </CardDescription>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full group"
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Join Now
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border-0">
                <CardContent className="p-8 text-center relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8" />
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">
                      Join Our Growing Community
                    </h2>
                    <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                      Connect with thousands of Mumbai University students and never miss important updates
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                      <Button
                        variant="secondary"
                        size="lg"
                        asChild
                        className="group"
                      >
                        <a
                          href="https://t.me/mumcomputer"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTelegram className="w-5 h-5 mr-2" />
                          Join Telegram
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600"
                      >
                        <a
                          href="mailto:privateacademy.in@gmail.com"
                        >
                          <Mail className="w-5 h-5 mr-2" />
                          Email Us
                        </a>
                      </Button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                      {['Computer Engineering', 'Information Technology', 'AIML', 'Mechanical', 'Chemical'].map((branch) => (
                        <Badge key={branch} variant="secondary" className="bg-white/20 text-white border-white/30">
                          {branch}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Contact;