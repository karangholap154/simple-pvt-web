import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Users, AlertTriangle, Mail, Scale } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const TermsConditions: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions - Private Academy",
    "description": "Terms and conditions for using Private Academy educational platform and study materials",
    "publisher": {
      "@type": "Organization",
      "name": "Private Academy"
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15"
  };

  return (
    <>
      <SEOHead
        title="Terms and Conditions - Private Academy | Usage Guidelines"
        description="Read the terms and conditions for using Private Academy's educational platform, study materials, and services. Understand your rights and responsibilities as a user."
        keywords="terms and conditions, usage guidelines, Private Academy terms, educational platform rules, user agreement, study materials terms"
        canonicalUrl="https://privateacademy.in/terms-conditions"
        structuredData={structuredData}
      />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <motion.section
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <header className="text-center mb-12">
            <h1 className="main-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our educational platform and services.
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
              Last updated: January 15, 2024
            </p>
          </header>

          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 md:p-8 space-y-8">
            
            {/* Acceptance of Terms */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Acceptance of Terms
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>
                  By accessing and using Private Academy's website and services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </motion.section>

            {/* Use License */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Use License
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>Permission is granted to temporarily download one copy of the materials on Private Academy's website for personal, non-commercial transitory viewing only.</p>
                <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
                <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Private Academy at any time.</p>
              </div>
            </motion.section>

            {/* Educational Purpose */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Educational Purpose
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>Private Academy is an educational platform designed to help Mumbai University engineering students with their studies.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All materials are provided for educational purposes only</li>
                  <li>Students are encouraged to use these materials as supplementary study aids</li>
                  <li>Materials should not replace official university curriculum or textbooks</li>
                  <li>Users are responsible for verifying the accuracy of information</li>
                </ul>
              </div>
            </motion.section>

            {/* User Responsibilities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  User Responsibilities
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>As a user of Private Academy, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the platform and materials responsibly and ethically</li>
                  <li>Not share, redistribute, or sell any downloaded materials</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not engage in any activity that could harm the website or other users</li>
                  <li>Provide accurate information when contacting us</li>
                  <li>Not use automated tools to scrape or download content in bulk</li>
                </ul>
              </div>
            </motion.section>

            {/* Content Accuracy */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Content Accuracy and Disclaimer
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>While we strive to provide accurate and up-to-date study materials:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We do not guarantee the accuracy, completeness, or reliability of any content</li>
                  <li>Materials may contain errors or outdated information</li>
                  <li>Users should verify information with official university sources</li>
                  <li>We are not responsible for any academic consequences resulting from the use of our materials</li>
                </ul>
              </div>
            </motion.section>

            {/* Prohibited Uses */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Prohibited Uses
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>You may not use our platform for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>Violating any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>Infringing upon or violating our intellectual property rights or the intellectual property rights of others</li>
                  <li>Harassing, abusing, insulting, harming, defaming, slandering, disparaging, intimidating, or discriminating</li>
                  <li>Submitting false or misleading information</li>
                  <li>Uploading or transmitting viruses or any other type of malicious code</li>
                </ul>
              </div>
            </motion.section>

            {/* Termination */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Termination
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>
                  We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p>
                  Upon termination, your right to use the service will cease immediately.
                </p>
              </div>
            </motion.section>

            {/* Changes to Terms */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Changes to Terms
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300">
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Contact Us
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300">
                <p className="mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privateacademy.in@gmail.com</p>
                  <p><strong>Website:</strong> privateacademy.in</p>
                  <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </motion.section>

          </div>
        </motion.section>
      </main>
    </>
  );
};

export default TermsConditions;