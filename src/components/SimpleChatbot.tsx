import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, Bot, User, X, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface SimpleChatbotProps {
  className?: string;
  embedded?: boolean;
}

export const SimpleChatbot = ({ className = "", embedded = false }: SimpleChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(embedded);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  }, [inputValue]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(`https://adeeba12.app.n8n.cloud/webhook/24805e02-9cab-49ca-8611-f7f8ff3b2d33?message=${encodeURIComponent(text.trim())}`, {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Webhook response:', data);
      
      // Parse the response - check all possible field names
      let botResponseText = '';
      
      if (data.output) {
        botResponseText = data.output;
      } else if (data.message) {
        botResponseText = data.message;
      } else if (data.reply) {
        botResponseText = data.reply;
      } else if (data.response) {
        botResponseText = data.response;
      } else if (data.text) {
        botResponseText = data.text;
      } else if (data.content) {
        botResponseText = data.content;
      } else if (typeof data === 'string') {
        botResponseText = data;
      } else {
        console.error('Unexpected response structure:', data);
        botResponseText = `Received response but couldn't parse it. Please check the webhook response format. Response: ${JSON.stringify(data)}`;
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting right now. Please try again in a moment.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  // Floating button when not embedded
  if (!embedded && !isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
          
          <Button
            onClick={toggleChat}
            className="relative h-14 w-14 rounded-full shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white transition-all duration-300 hover:scale-110 group"
            size="lg"
          >
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <MessageCircle className="h-7 w-7 relative z-10" />
          </Button>
        </div>
      </div>
    );
  }

  // Chat interface
  const chatInterface = (
    <Card className={`shadow-xl border-0 bg-background overflow-hidden transition-all duration-300 ${
      embedded 
        ? 'w-full h-full' 
        : isMinimized 
          ? 'w-80 h-16' 
          : 'w-80 h-[500px] sm:w-96 sm:h-[600px]'
    } ${className}`}>
      
      {/* Header */}
      <CardHeader className="p-3 sm:p-4 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white/30">
                <AvatarFallback className="bg-white/20 text-white">
                  <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <span className="font-semibold text-sm sm:text-base">AI Assistant</span>
              <p className="text-white/80 text-xs">Online • Ready to help</p>
            </div>
          </div>
          
          {!embedded && (
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={minimizeChat}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleChat}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardHeader>

      {/* Messages - only show if not minimized */}
      {(!isMinimized || embedded) && (
        <CardContent className="flex flex-col h-full p-0">
          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 bg-gradient-to-b from-background to-muted/10 min-h-0">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center py-8">
                <Bot className="h-12 w-12 text-primary/50 mb-4" />
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                  Welcome! How can I help you today?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ask me anything and I'll do my best to assist you.
                </p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 animate-fade-in ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!message.isUser && (
                  <Avatar className="w-8 h-8 border border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
                
                <div className={`max-w-[75%] ${message.isUser ? 'order-first' : ''}`}>
                  <div
                    className={`p-3 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md ${
                      message.isUser
                        ? 'bg-gradient-to-r from-primary to-primary/80 text-white rounded-br-lg'
                        : 'bg-card border border-border/50 text-foreground rounded-bl-lg'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{message.text}</p>
                  </div>
                  <div className={`flex items-center gap-2 mt-1 px-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <p className="text-xs text-muted-foreground">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>

                {message.isUser && (
                  <Avatar className="w-8 h-8 border border-primary/20">
                    <AvatarFallback className="bg-primary text-white">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start animate-fade-in">
                <Avatar className="w-8 h-8 border border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-card border border-border/50 p-3 rounded-2xl rounded-bl-lg shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary/70 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-muted-foreground">AI is typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="border-t bg-background/90 backdrop-blur-sm p-3 sm:p-4 space-y-3">
            <form onSubmit={handleSubmit} className="flex items-end gap-3">
              <div className="flex-1 relative">
                <Textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="min-h-[44px] max-h-[120px] resize-none rounded-2xl border-2 focus:border-primary/50 bg-background shadow-sm text-sm px-4 py-3 pr-12 leading-relaxed overflow-hidden"
                  rows={1}
                />
                <div className="absolute right-4 bottom-3 text-muted-foreground/40 pointer-events-none">
                  <MessageCircle className="h-4 w-4" />
                </div>
              </div>
              <Button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="h-11 w-11 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 flex-shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-muted-foreground/60 text-center">
              Press Enter to send • Shift+Enter for new line
            </p>
          </div>
        </CardContent>
      )}
    </Card>
  );

  // Return positioned interface for floating mode
  if (!embedded) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        {chatInterface}
      </div>
    );
  }

  // Return interface directly for embedded mode
  return chatInterface;
};