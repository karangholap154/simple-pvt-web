import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Cookie, Database, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const PrivacyPolicy: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Private Academy",
    "description": "Privacy Policy for Private Academy - How we collect, use, and protect your personal information",
    "publisher": {
      "@type": "Organization",
      "name": "Private Academy"
    }
  };

  return (
    <>
      <SEOHead
        title="Privacy Policy - Private Academy | Data Protection & Privacy"
        description="Learn how Private Academy collects, uses, and protects your personal information. Our commitment to your privacy and data security."
        keywords="privacy policy, data protection, personal information, cookies, Private Academy privacy"
        canonicalUrl="https://privateacademy.in/privacy-policy"
        structuredData={structuredData}
      />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.section
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="main-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 md:p-8 space-y-8">
            
            {/* Information We Collect */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  Information You Provide
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact information when you reach out to us (name, email address)</li>
                  <li>Feedback and messages you send through our contact forms</li>
                  <li>Any other information you voluntarily provide</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mt-6">
                  Information Automatically Collected
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>IP address (anonymized)</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website information</li>
                </ul>
              </div>
            </motion.section>

            {/* How We Use Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  How We Use Your Information
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide and maintain our educational services</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To improve our website and user experience</li>
                  <li>To analyze website usage and optimize content</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect against fraud and ensure website security</li>
                </ul>
              </div>
            </motion.section>

            {/* Cookies and Tracking */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <Cookie className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Cookies and Tracking Technologies
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>We use cookies and similar tracking technologies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences (like dark/light theme)</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve website functionality and user experience</li>
                  <li>Provide relevant content and advertisements</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
                </p>
              </div>
            </motion.section>

            {/* Information Sharing */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Information Sharing and Disclosure
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With trusted service providers who assist in website operations (under strict confidentiality agreements)</li>
                  <li>In case of business transfer or merger (users will be notified)</li>
                </ul>
              </div>
            </motion.section>

            {/* Data Security */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Data Security
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>We implement appropriate security measures to protect your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure hosting infrastructure</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Limited access to personal information</li>
                  <li>Data backup and recovery procedures</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </motion.section>

            {/* Your Rights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Your Rights and Choices
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access: Request a copy of your personal information</li>
                  <li>Correction: Request correction of inaccurate information</li>
                  <li>Deletion: Request deletion of your personal information</li>
                  <li>Portability: Request transfer of your data</li>
                  <li>Objection: Object to processing of your information</li>
                  <li>Withdrawal: Withdraw consent at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at privateacademy.in@gmail.com
                </p>
              </div>
            </motion.section>

            {/* Third-Party Services */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Third-Party Services
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                <p>Our website may contain links to third-party services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Google Analytics (for website analytics)</li>
                  <li>YouTube (for embedded videos)</li>
                  <li>Social media platforms (Instagram, Telegram, WhatsApp)</li>
                  <li>File hosting services (for study materials)</li>
                </ul>
                <p className="mt-4">
                  These services have their own privacy policies. We are not responsible for their privacy practices.
                </p>
              </div>
            </motion.section>

            {/* Children's Privacy */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Children's Privacy
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300">
                <p>
                  Our services are intended for students aged 18 and above. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us immediately.
                </p>
              </div>
            </motion.section>

            {/* Changes to Policy */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Changes to This Privacy Policy
                </h2>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
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
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privateacademy.in@gmail.com</p>
                  <p><strong>Website:</strong> privateacademy.in</p>
                  <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Google AdSense</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    This website uses Google AdSense to display advertisements. Google may use cookies and web beacons to serve ads based on your prior visits to this website or other websites. You can opt out of personalized advertising by visiting Google's Ads Settings.
                  </p>
                </div>
              </div>
            </motion.section>

          </div>
        </motion.section>
      </div>
    </>
  );
};

export default PrivacyPolicy;