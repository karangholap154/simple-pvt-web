import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles, Zap } from 'lucide-react';
import { sendChatMessage } from '../services/chatbotService';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI-powered study assistant at Private Academy! 🤖✨\n\nI can help you with:\n🔍 Finding specific study materials\n📚 Subject and branch guidance\n🧭 Website navigation\n📄 Question paper recommendations\n📞 Contact information\n\nWhat would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await sendChatMessage(inputText.trim());
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble responding right now. Please try again later or contact us directly at privateacademy.in@gmail.com for immediate assistance.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: "Hi! I'm your AI-powered study assistant at Private Academy! 🤖✨\n\nI can help you with:\n🔍 Finding specific study materials\n📚 Subject and branch guidance\n🧭 Website navigation\n📄 Question paper recommendations\n📞 Contact information\n\nWhat would you like to know?",
        isUser: false,
        timestamp: new Date()
      }
    ]);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 
          hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl 
          transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6" />
              <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 z-[60] w-80 sm:w-96 h-[500px] bg-white dark:bg-zinc-800 
              rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold flex items-center">
                    PAE Ai Assistant
                    <Sparkles className="w-4 h-4 ml-1 text-yellow-300" />
                  </h3>
                  <p className="text-xs text-blue-100">Powered by AI • Always ready to help</p>
                </div>
              </div>
              <button
                onClick={clearChat}
                className="text-white/70 hover:text-white text-xs px-2 py-1 rounded hover:bg-white/10 transition-colors"
              >
                Clear
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex items-start space-x-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isUser 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    }`}>
                      {message.isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`rounded-xl p-3 ${
                      message.isUser
                        ? 'bg-blue-600 text-white'
                        : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100'
                    }`}>
                      <div className="text-sm whitespace-pre-wrap leading-relaxed">
                        {message.text.split('\n').map((line, index) => {
                          // Handle markdown-style formatting
                          if (line.startsWith('**') && line.endsWith('**')) {
                            return (
                              <div key={index} className="font-semibold mb-1">
                                {line.slice(2, -2)}
                              </div>
                            );
                          }
                          if (line.startsWith('🔍 **') || line.startsWith('📚 **') || line.startsWith('📄 **')) {
                            return (
                              <div key={index} className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                                {line.replace(/\*\*/g, '')}
                              </div>
                            );
                          }
                          if (line.startsWith('✅') || line.startsWith('📧') || line.startsWith('📱')) {
                            return (
                              <div key={index} className="mb-1">
                                {line}
                              </div>
                            );
                          }
                          return line && <div key={index} className="mb-1">{line}</div>;
                        })}
                      </div>
                      <p className={`text-xs mt-2 ${
                        message.isUser ? 'text-blue-100' : 'text-zinc-500 dark:text-zinc-400'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Loading Indicator */}
              {isLoading && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-start space-x-2 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-zinc-100 dark:bg-zinc-700 rounded-xl p-3">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 animate-pulse text-blue-600" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">Google AI is thinking...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Buttons */}
            <AnimatePresence>
              {showSuggestions && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 py-2 border-t border-zinc-200 dark:border-zinc-700 flex-shrink-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                      Quick suggestions:
                    </span>
                    <button
                      onClick={() => setShowSuggestions(false)}
                      className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 
                        px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                    >
                      Hide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Show me Machine Learning materials",
                      "How do I find Semester 6 notes?",
                      "What subjects are in Computer Engineering?"
                    ].map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => setInputText(suggestion)}
                        className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 
                          rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors flex-shrink-0"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Show Suggestions Button (when hidden) */}
            {!showSuggestions && (
              <div className="px-4 py-1 border-t border-zinc-200 dark:border-zinc-700 flex-shrink-0">
                <button
                  onClick={() => setShowSuggestions(true)}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 
                    px-2 py-1 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  Show suggestions
                </button>
              </div>
            )}

            {/* Input Area */}
            <div className="border-t border-zinc-200 dark:border-zinc-700 p-4 flex-shrink-0">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Private Academy..."
                  className="flex-1 px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl 
                    bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    text-sm placeholder-zinc-500 dark:placeholder-zinc-400"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!inputText.trim() || isLoading}
                  className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                    disabled:from-zinc-400 disabled:to-zinc-400 text-white rounded-xl transition-all duration-200 
                    flex items-center justify-center shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </motion.button>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 text-center">
                Powered by Google AI • Ask about study materials, subjects.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;