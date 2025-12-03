import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Target, Heart, Award, Zap, ArrowRight, Star, GraduationCap, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SEOHead from '../components/SEOHead';

const About: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Private Academy",
    "description": "Learn about Private Academy's mission to provide engineering study materials for Mumbai University students, founded and developed by Karan Gholap.",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "Private Academy",
      "foundingDate": "2023",
      "mission": "Making quality educational resources accessible to all engineering students",
      "founder": {
        "@type": "Person",
        "name": "Karan Gholap",
        "jobTitle": "Founder & Developer",
        "sameAs": [
          "https://linkedin.com/in/karangholap",
          "https://x.com/TheKaranGholap",
          "https://peerlist.io/karangholap"
        ]
      }
    }
  };

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Quality Content",
      description: "Meticulously curated study notes from top engineering programs, ensuring you have access to high-quality learning materials.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Access for All",
      description: "We believe education should be accessible to everyone, which is why all our resources are available with no login required.",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Organized Collection",
      description: "Our materials are neatly organized by branch and semester, making it easy for you to find exactly what you need.",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    }
  ];

  const values = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Excellence",
      description: "We strive for the highest quality in every study material we provide"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Accessibility",
      description: "Education should be accessible to all students"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Innovation",
      description: "Constantly improving our platform with new features and content"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Impact",
      description: "Helping thousands of students achieve their academic goals"
    }
  ];

  const stats = [
    { number: "2500+", label: "Students Helped", icon: <GraduationCap className="w-5 h-5" /> },
    { number: "50K+", label: "Downloads", icon: <BookOpen className="w-5 h-5" /> },
    { number: "5", label: "Engineering Branches", icon: <Target className="w-5 h-5" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Star className="w-5 h-5" /> }
  ];

  return (
    <>
      <SEOHead
        title="About Private Academy - Engineering Study Materials"
        description="Learn about Private Academy's mission to provide engineering study notes and question papers for Mumbai University students. Quality education accessible to all."
        keywords="about private academy, engineering education, Mumbai University, study materials, educational mission"
        canonicalUrl="https://privateacademy.in/about"
        structuredData={structuredData}
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
                <Heart className="w-4 h-4 mr-2" />
                About Our Mission
              </Badge>
              
              <h1 className="main-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Empowering Students
                </span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-medium">
                  Through Quality Education
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Our mission is to make quality educational resources accessible to all engineering students. 
                All study materials are provided exclusively for{' '}
                <Badge variant="outline" className="mx-1">Mumbai University students</Badge>
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="text-primary mb-2 flex justify-center">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Private Academy?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to providing the best educational experience for Mumbai University engineering students
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className={`h-full hover:shadow-lg transition-all duration-300 ${feature.bgColor}`}>
                    <CardContent className="p-6 text-center">
                      <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto shadow-lg`}>
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Our Core Values
                </h2>
                <p className="text-lg text-muted-foreground">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6 flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {value.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      Meet the Founder
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        Karan Gholap
                      </h3>
                      <Badge variant="secondary" className="mb-4">
                        Founder & Developer
                      </Badge>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Karan created Private Academy to help Mumbai University engineering students access 
                        high-quality notes and question papers in one place. His vision is to democratize 
                        education and make quality learning resources available to all students.
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Outside of building Private Academy, Karan actively shares his work, projects and 
                        learnings across different platforms, contributing to the developer and education community.
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        <Button variant="default" size="sm" asChild>
                          <a
                            href="https://linkedin.com/in/karangholap"
                            target="_blank"
                            rel="noreferrer"
                          >
                            LinkedIn
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://x.com/TheKaranGholap"
                            target="_blank"
                            rel="noreferrer"
                          >
                            X (Twitter)
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://peerlist.io/karangholap"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Peerlist
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="text-center lg:text-right">
                      <div className="w-48 h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto lg:ml-auto lg:mr-0 flex items-center justify-center shadow-2xl">
                        <div className="w-44 h-44 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-20 h-20 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
                    <h2 className="text-3xl font-bold mb-4">
                      Need Specialized Content?
                    </h2>
                    <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                      We're constantly expanding our library! If you're looking for specific notes or resources, let us know.
                    </p>
                    
                    <Button
                      variant="secondary"
                      size="lg"
                      asChild
                      className="group"
                    >
                      <a href="mailto:privateacademy.in@gmail.com">
                        Contact Us
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>

                    <div className="mt-8 flex flex-wrap justify-center gap-2">
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

export default About;