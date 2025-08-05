import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, Bot, User, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add welcome message when component mounts
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        text: "Hello! ✨ I'm your AI assistant from DigiBabaa. I'm here to help you discover how our AI solutions can transform your business. Whether you want to know about our chatbots, voice agents, or custom automation - I've got you covered! What would you like to explore?",
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, []);

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
      const response = await fetch(`https://adeebakausar292.app.n8n.cloud/webhook/chatbot?message=${encodeURIComponent(text.trim())}`, {
        method: 'GET'
      });

      const data = await response.json();
      const botResponse = data.reply || data.message || JSON.stringify(data);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm experiencing some technical difficulties at the moment. 🔧 Please try again in a few seconds, or feel free to book a consultation for immediate assistance!",
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="h-[650px] shadow-2xl border-0 bg-gradient-to-br from-white via-background to-card/50 overflow-hidden relative">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
        </div>

        <CardHeader className="relative p-6 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
          {/* Floating particles effect */}
          <div className="absolute inset-0">
            <div className="absolute top-2 left-4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
            <div className="absolute top-6 right-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-3 left-1/3 w-1 h-1 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-4 w-0.5 h-0.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-xl">AI Assistant</span>
                  <Sparkles className="h-4 w-4 text-yellow-300 animate-pulse" />
                </div>
                <p className="text-white/90 text-sm font-medium">Powered by DigiBabaa Intelligence</p>
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-white/90 font-medium">Online</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3 text-yellow-300" />
                <span className="text-xs text-white/80">Instant Responses</span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col h-[550px] p-0 relative">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-background/30 via-background/10 to-background/50 backdrop-blur-sm">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex gap-4 animate-fade-in hover-scale ${message.isUser ? 'justify-end' : 'justify-start'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {!message.isUser && (
                  <Avatar className="w-10 h-10 border-2 border-primary/20 shadow-md">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
                
                <div className={`max-w-[75%] ${message.isUser ? 'order-first' : ''}`}>
                  <div
                    className={`p-4 rounded-3xl shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground rounded-br-lg shadow-primary/20'
                        : 'bg-card border border-border/30 text-card-foreground rounded-bl-lg shadow-xl'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">{message.text}</p>
                  </div>
                  <div className={`flex items-center gap-2 mt-2 px-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <p className="text-xs text-muted-foreground">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                    {message.isUser && (
                      <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>

                {message.isUser && (
                  <Avatar className="w-10 h-10 border-2 border-primary/20 shadow-md">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-4 justify-start animate-fade-in">
                <Avatar className="w-10 h-10 border-2 border-primary/20 shadow-md">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-card border border-border/30 p-4 rounded-3xl rounded-bl-lg shadow-xl max-w-[200px]">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-primary/70 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-3 h-3 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="relative border-t bg-card/80 backdrop-blur-md p-6">
            <form onSubmit={handleSubmit} className="flex gap-4">
              <div className="flex-1 relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here..."
                  disabled={isLoading}
                  className="pr-12 py-4 text-base rounded-2xl border-2 border-border/30 focus:border-primary/50 bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300 placeholder:text-muted-foreground/60 text-foreground"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/40">
                  <MessageSquare className="h-4 w-4" />
                </div>
              </div>
              <Button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                size="lg"
                className="h-14 w-14 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
            <div className="flex items-center justify-center mt-3 gap-2">
              <div className="flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-primary/60" />
                <p className="text-xs text-muted-foreground/80 font-medium">Press Enter to send</p>
              </div>
              <span className="text-muted-foreground/40">•</span>
              <p className="text-xs text-muted-foreground/80 font-medium">Powered by DigiBabaa AI</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};