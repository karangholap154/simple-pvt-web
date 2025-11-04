import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, BookOpen, Bookmark, Youtube, ExternalLink, Play } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { StudyNote } from '../types';

interface NoteCardProps {
  note: StudyNote;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Card
      className="group overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-lg"
      asChild
    >
      <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient Header */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full aspect-video bg-black"
          >
            <iframe
              src={note.youtubeUrl}
              className="w-full h-full"
              title={`${note.title} video preview`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CardContent className="p-6 flex-1 relative">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-20 h-20 opacity-5 dark:opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full transform rotate-12"></div>
        </div>
        
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <Badge variant="secondary" className="mr-2">
                <BookOpen className="w-3 h-3 mr-1" />
                {note.branch}
              </Badge>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
              {note.title}
            </h3>
            <div className="flex items-center">
              <Badge variant="outline">
                <Bookmark className="w-3 h-3 mr-1" />
                Semester {note.semester}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-3">
        <Button
          asChild
          className="flex-1"
        >
          <a
            href={note.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Download
            <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </Button>
        {note.youtubeUrl && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowVideo(!showVideo)}
            aria-label="Toggle video preview"
          >
            {showVideo ? (
              <Youtube className="w-4 h-4 text-red-500" />
            ) : (
              <Play className="w-4 h-4 text-red-500" />
            )}
          </Button>
        )}
      </CardFooter>
    </motion.div>
    </Card>
  );
};

export default NoteCard;