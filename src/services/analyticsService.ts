import { supabase } from '../lib/supabase';

export class AnalyticsService {
  private static readonly STORAGE_KEY = 'privateacademy_visitor_id';
  private static readonly ANALYTICS_TABLE = 'website_analytics';

  // Generate a unique visitor ID
  private static generateVisitorId(): string {
    return 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Get or create visitor ID
  private static getVisitorId(): string {
    let visitorId = localStorage.getItem(this.STORAGE_KEY);
    if (!visitorId) {
      visitorId = this.generateVisitorId();
      localStorage.setItem(this.STORAGE_KEY, visitorId);
    }
    return visitorId;
  }

  // Track a new visitor
  static async trackVisitor(): Promise<void> {
    try {
      const visitorId = this.getVisitorId();
      
      // Check if this visitor has already been tracked
      const { data: existingVisitor } = await supabase
        .from(this.ANALYTICS_TABLE)
        .select('id')
        .eq('visitor_id', visitorId)
        .maybeSingle();

      // Only track if this is a new visitor
      if (!existingVisitor) {
        const { error } = await supabase
          .from(this.ANALYTICS_TABLE)
          .insert({
            visitor_id: visitorId,
            visited_at: new Date().toISOString(),
            user_agent: navigator.userAgent,
            referrer: document.referrer || null,
            page_url: window.location.href
          });

        if (error) {
          console.error('Error tracking visitor:', error);
        }
      }
    } catch (error) {
      console.error('Error in trackVisitor:', error);
    }
  }

  // Get total visitor count
  static async getTotalVisitors(): Promise<number> {
    try {
      const { count, error } = await supabase
        .from(this.ANALYTICS_TABLE)
        .select('*', { count: 'exact', head: true });

      if (error) {
        console.error('Error getting visitor count:', error);
        return 0;
      }

      return count || 0;
    } catch (error) {
      console.error('Error in getTotalVisitors:', error);
      return 0;
    }
  }

  // Subscribe to real-time visitor count updates
  static subscribeToVisitorUpdates(callback: (count: number) => void): () => void {
    const channel = supabase
      .channel('visitor_updates')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: this.ANALYTICS_TABLE
        },
        async () => {
          // Get updated count when new visitor is added
          const count = await this.getTotalVisitors();
          callback(count);
        }
      )
      .subscribe();

    // Return unsubscribe function
    return () => {
      supabase.removeChannel(channel);
    };
  }

  // Get visitor count for today
  static async getTodayVisitors(): Promise<number> {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const { count, error } = await supabase
        .from(this.ANALYTICS_TABLE)
        .select('*', { count: 'exact', head: true })
        .gte('visited_at', today.toISOString());

      if (error) {
        console.error('Error getting today visitor count:', error);
        return 0;
      }

      return count || 0;
    } catch (error) {
      console.error('Error in getTodayVisitors:', error);
      return 0;
    }
  }

  // Get visitor count for this month
  static async getMonthlyVisitors(): Promise<number> {
    try {
      const firstDayOfMonth = new Date();
      firstDayOfMonth.setDate(1);
      firstDayOfMonth.setHours(0, 0, 0, 0);
      
      const { count, error } = await supabase
        .from(this.ANALYTICS_TABLE)
        .select('*', { count: 'exact', head: true })
        .gte('visited_at', firstDayOfMonth.toISOString());

      if (error) {
        console.error('Error getting monthly visitor count:', error);
        return 0;
      }

      return count || 0;
    } catch (error) {
      console.error('Error in getMonthlyVisitors:', error);
      return 0;
    }
  }
}