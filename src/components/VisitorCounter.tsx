import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, TrendingUp, Eye, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { AnalyticsService } from '../services/analyticsService';

interface VisitorStats {
  total: number;
  today: number;
  monthly: number;
}

const VisitorCounter: React.FC = () => {
  const [stats, setStats] = useState<VisitorStats>({
    total: 0,
    today: 0,
    monthly: 0
  });
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  // Load initial stats
  useEffect(() => {
    const loadStats = async () => {
      try {
        setLoading(true);
        const [total, today, monthly] = await Promise.all([
          AnalyticsService.getTotalVisitors(),
          AnalyticsService.getTodayVisitors(),
          AnalyticsService.getMonthlyVisitors()
        ]);

        setStats({ total, today, monthly });
      } catch (error) {
        console.error('Error loading visitor stats:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  // Subscribe to real-time updates
  useEffect(() => {
    const unsubscribe = AnalyticsService.subscribeToVisitorUpdates(async (newTotal) => {
      setIsLive(true);
      
      // Update all stats when new visitor arrives
      const [today, monthly] = await Promise.all([
        AnalyticsService.getTodayVisitors(),
        AnalyticsService.getMonthlyVisitors()
      ]);

      setStats({ total: newTotal, today, monthly });

      // Reset live indicator after animation
      setTimeout(() => setIsLive(false), 2000);
    });

    return unsubscribe;
  }, []);

  // Track current visitor
  useEffect(() => {
    AnalyticsService.trackVisitor();
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const counterStats = [
    {
      icon: <Users className="w-5 h-5" />,
      label: "Total Visitors",
      value: stats.total,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      label: "Today",
      value: stats.today,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "This Month",
      value: stats.monthly,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    }
  ];

  if (loading) {
    return (
      <Card className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border-zinc-200/50 dark:border-zinc-700/50">
        <CardContent className="p-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="relative overflow-hidden bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border-zinc-200/50 dark:border-zinc-700/50">
      {/* Live indicator */}
      <AnimatePresence>
        {isLive && (
          <motion.div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                Live Stats
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Real-time visitors
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <Badge variant="secondary" className="text-xs px-2 py-0.5">
              Live
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {counterStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={cn(
                "p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 transition-all duration-300 hover:shadow-sm",
                stat.bgColor
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`bg-gradient-to-r ${stat.color} w-6 h-6 rounded-md flex items-center justify-center text-white shadow-sm`}>
                  <div className="scale-75">{stat.icon}</div>
                </div>
                <AnimatePresence mode="wait">
                  {isLive && index === 0 && (
                    <motion.div
                      className="text-xs text-green-600 dark:text-green-400 font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      +1
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={stat.value}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {formatNumber(stat.value)}
                  </motion.span>
                </AnimatePresence>
              </div>
              
              <div className="text-xs text-zinc-600 dark:text-zinc-400 font-medium truncate">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center justify-center">
            <span className="mr-1">🔥</span>
            Trusted by thousands of students
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisitorCounter;