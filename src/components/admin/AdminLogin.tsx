import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff, AlertCircle } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (email: string, password: string) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, loading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;
    
    await onLogin(email.trim(), password);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center px-4">
      <motion.div
        className="max-w-md w-full bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
            Admin Login
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Sign in to manage study notes
          </p>
        </div>

        {error && (
          <motion.div
            className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-3 flex-shrink-0" />
            <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg 
                  bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-colors"
                placeholder="Enter the admin email"
                required
                disabled={loading}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg 
                  bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-colors"
                placeholder="Enter your password"
                required
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                disabled={loading}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg 
              transition-colors duration-200 flex items-center justify-center"
            disabled={loading || !email.trim() || !password.trim()}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Only authorized administrators can access this panel
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;