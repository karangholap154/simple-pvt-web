import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, BookOpen, Shield, Info, Mail, FileText } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Disclaimer: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Disclaimer - Private Academy",
    "description": "Important disclaimer regarding the use of Private Academy's educational content and study materials",
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
        title="Disclaimer - Private Academy | Educational Content Notice"
        description="Important disclaimer about Private Academy's educational content, study materials accuracy, and usage guidelines for Mumbai University students."
        keywords="disclaimer, educational content, study materials notice, Private Academy disclaimer, content accuracy, educational purpose"
        canonicalUrl="https://privateacademy.in/disclaimer"
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
              Disclaimer
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Important information regarding the use of our educational content and study materials.
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
              Last updated: January 15, 2024
            </p>
          </header>

          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 md:p-8 space-y-8">
            
            {/* General Disclaimer */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  General Disclaimer
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Private Academy:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Excludes all representations and warranties relating to this website and its contents</li>
                  <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
                  <li>Does not guarantee the accuracy, completeness, or reliability of any content</li>
                  <li>Reserves the right to modify or discontinue services without notice</li>
                </ul>
              </div>
            </motion.section>

            {/* Educational Purpose */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Educational Purpose Only
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>
                  All study materials, notes, and resources provided on Private Academy are intended solely for educational purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Materials are meant to supplement, not replace, official university curriculum</li>
                  <li>Content should be used as study aids and reference materials only</li>
                  <li>Students are encouraged to verify information with official university sources</li>
                  <li>We do not guarantee that our materials align with current university syllabi</li>
                  <li>Academic success depends on individual effort and official coursework</li>
                </ul>
              </div>
            </motion.section>

            {/* Content Accuracy */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Content Accuracy and Updates
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>
                  While we strive to provide accurate and up-to-date information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Information may become outdated due to curriculum changes</li>
                  <li>We cannot guarantee the accuracy of all content at all times</li>
                  <li>Users should cross-reference information with official sources</li>
                  <li>We are not responsible for any errors or omissions in the content</li>
                  <li>Content is updated on a best-effort basis</li>
                </ul>
              </div>
            </motion.section>

            {/* Academic Responsibility */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Academic Responsibility
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>
                  Private Academy is not responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Academic performance or examination results</li>
                  <li>Decisions made based on the information provided</li>
                  <li>Any consequences arising from the use of our materials</li>
                  <li>Compatibility with specific university requirements</li>
                  <li>Meeting individual learning needs or expectations</li>
                </ul>
                <p className="mt-4">
                  Students are solely responsible for their academic progress and should consult with their professors and official university resources for authoritative information.
                </p>
              </div>
            </motion.section>

            {/* Third-Party Content */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Third-Party Content and Links
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>
                  Our website may contain links to third-party websites and services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We do not control or endorse third-party content</li>
                  <li>External links are provided for convenience only</li>
                  <li>We are not responsible for the content or practices of linked sites</li>
                  <li>Users access third-party content at their own risk</li>
                  <li>Third-party sites have their own terms and privacy policies</li>
                </ul>
              </div>
            </motion.section>

            {/* Intellectual Property */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Intellectual Property Notice
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>
                  Regarding intellectual property and content usage:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We respect intellectual property rights and expect users to do the same</li>
                  <li>If you believe any content infringes your rights, please contact us immediately</li>
                  <li>We will investigate and take appropriate action for valid claims</li>
                  <li>Users should not redistribute or commercialize downloaded materials</li>
                  <li>Content is provided for personal educational use only</li>
                </ul>
              </div>
            </motion.section>

            {/* Limitation of Liability */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Limitation of Liability
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>
                  To the maximum extent permitted by applicable law, Private Academy shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Any direct, indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or other intangible losses</li>
                  <li>Damages resulting from the use or inability to use our services</li>
                  <li>Any errors or omissions in the content</li>
                  <li>Any unauthorized access to or alteration of your data</li>
                </ul>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Questions or Concerns
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300">
                <p className="mb-4">
                  If you have any questions about this disclaimer or our content, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privateacademy.in@gmail.com</p>
                  <p><strong>Website:</strong> privateacademy.in</p>
                  <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
                </div>
                <p className="mt-4 text-sm">
                  We are committed to addressing any concerns and improving our services for the benefit of all students.
                </p>
              </div>
            </motion.section>

          </div>
        </motion.section>
      </main>
    </>
  );
};

export default Disclaimer;