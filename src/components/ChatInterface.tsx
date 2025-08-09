import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, Bot, User, Sparkles, Zap, Phone, Calendar, Globe, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

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
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar' | 'ur'>('en');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickSuggestions = [
    { icon: "🤖", text: "Tell me about AI Chatbots", category: "product" },
    { icon: "🎙️", text: "How do voice agents work?", category: "product" },
    { icon: "💰", text: "What are your pricing plans?", category: "pricing" },
    { icon: "📞", text: "Book a free consultation", category: "cta" },
    { icon: "🚀", text: "See a live demo", category: "cta" }
  ];

  const languageLabels = {
    en: "English",
    ar: "العربية", 
    ur: "اردو"
  };

  const greetings = {
    en: "Hello! ✨ I'm your AI assistant from DigiBabaa. I'm here to help you discover how our AI solutions can transform your business. Whether you want to know about our chatbots, voice agents, or custom automation - I've got you covered! What would you like to explore?",
    ar: "مرحباً! ✨ أنا مساعدك الذكي من ديجي بابا. أنا هنا لمساعدتك في اكتشاف كيف يمكن لحلولنا الذكية أن تحول عملك. سواء كنت تريد معرفة المزيد عن الشات بوت أو وكلاء الصوت أو الأتمتة المخصصة - لدي كل ما تحتاج إليه!",
    ur: "السلام علیکم! ✨ میں ڈیجی بابا کا AI اسسٹنٹ ہوں۔ میں آپ کو یہ دکھانے کے لیے یہاں ہوں کہ ہمارے AI حل آپ کے کاروبار کو کیسے تبدیل کر سکتے ہیں۔ چاہے آپ چیٹ بوٹس، وائس ایجنٹس، یا کسٹم آٹومیشن کے بارے میں جاننا چاہتے ہوں - میں آپ کی مدد کے لیے یہاں ہوں!"
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add animated welcome message when component mounts
    if (messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        const welcomeMessage: Message = {
          id: 'welcome',
          text: greetings[language],
          isUser: false,
          timestamp: new Date()
        };
        setMessages([welcomeMessage]);
        setIsTyping(false);
      }, 1500);
    }
  }, [language]);

  const handleSuggestionClick = (suggestion: string) => {
    setShowSuggestions(false);
    sendMessage(suggestion);
  };

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
    setShowSuggestions(false);

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
      const errorMessages = {
        en: "I'm experiencing some technical difficulties at the moment. 🔧 Please try again in a few seconds, or feel free to book a consultation for immediate assistance!",
        ar: "أواجه بعض الصعوبات التقنية في الوقت الحالي. 🔧 يرجى المحاولة مرة أخرى خلال ثوانٍ قليلة، أو لا تتردد في حجز استشارة للحصول على المساعدة الفورية!",
        ur: "فی الوقت میں کچھ تکنیکی مشکلات کا سامنا کر رہا ہوں۔ 🔧 براہ کرم کچھ سیکنڈ میں دوبارہ کوشش کریں، یا فوری مدد کے لیے مشاورت بک کرنے میں ہچکچاہٹ محسوس نہ کریں!"
      };
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorMessages[language],
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
    <div className="w-full h-full flex flex-col">
      <Card className="flex-1 h-full shadow-2xl border-0 bg-gradient-to-br from-background via-card/90 to-card/50 overflow-hidden relative rounded-2xl sm:rounded-3xl flex flex-col">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
        </div>

        <CardHeader className="relative p-4 sm:p-6 bg-gradient-primary text-white overflow-hidden rounded-t-3xl">
          {/* Floating particles effect */}
          <div className="absolute inset-0">
            <div className="absolute top-2 left-4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
            <div className="absolute top-6 right-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-3 left-1/3 w-1 h-1 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-4 w-0.5 h-0.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
                  <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-lg sm:text-xl">DigiBabaa AI</span>
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300 animate-pulse" />
                </div>
                <p className="text-white/90 text-xs sm:text-sm font-medium">Your Business Intelligence Assistant</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Language Selector */}
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'ar' | 'ur')}
                className="bg-white/20 text-white text-xs rounded-lg px-2 py-1 border border-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {Object.entries(languageLabels).map(([code, label]) => (
                  <option key={code} value={code} className="text-black">{label}</option>
                ))}
              </select>
              
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 sm:gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm text-white/90 font-medium">Online</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-3 w-3 text-yellow-300" />
                  <span className="text-xs text-white/80">Instant Responses</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col flex-1 p-0 relative min-h-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4 bg-gradient-to-b from-background/30 via-background/10 to-background/50 backdrop-blur-sm">
            {/* Welcome Animation */}
            {isTyping && (
              <div className="flex gap-3 sm:gap-4 justify-start animate-fade-in">
                <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-primary/20 shadow-md">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-card border border-border/30 p-3 sm:p-4 rounded-3xl rounded-bl-lg shadow-xl max-w-[250px]">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary/70 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">Getting ready...</span>
                  </div>
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex gap-3 sm:gap-4 animate-fade-in hover-scale ${message.isUser ? 'justify-end' : 'justify-start'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {!message.isUser && (
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-primary/20 shadow-md">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
                
                <div className={`max-w-[80%] sm:max-w-[75%] ${message.isUser ? 'order-first' : ''}`}>
                  <div
                    className={`p-3 sm:p-4 rounded-3xl shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 ${
                      message.isUser
                        ? 'bg-gradient-primary text-white rounded-br-lg shadow-primary/20'
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
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-400 flex items-center justify-center">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>

                {message.isUser && (
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-primary/20 shadow-md">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <User className="h-4 w-4 sm:h-5 sm:w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}

            {/* CTA Messages */}
            {messages.length > 0 && !isLoading && (
              <div className="flex gap-3 sm:gap-4 justify-start animate-fade-in">
                <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-primary/20 shadow-md">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 p-3 sm:p-4 rounded-3xl rounded-bl-lg shadow-xl max-w-[90%]">
                  <p className="text-sm font-medium text-foreground mb-3">Ready to transform your business? 🚀</p>
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      size="sm" 
                      className="bg-primary text-white hover:bg-primary/90 rounded-full text-xs"
                      onClick={() => window.open('/contact', '_blank')}
                    >
                      <Phone className="h-3 w-3 mr-1" />
                      Free Call
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="rounded-full text-xs border-primary text-primary hover:bg-primary/10"
                      onClick={() => window.open('/pricing', '_blank')}
                    >
                      <ArrowRight className="h-3 w-3 mr-1" />
                      See Pricing
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="rounded-full text-xs border-accent text-accent hover:bg-accent/10"
                      onClick={() => window.open('/demo', '_blank')}
                    >
                      <Globe className="h-3 w-3 mr-1" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {isLoading && (
              <div className="flex gap-3 sm:gap-4 justify-start animate-fade-in">
                <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-primary/20 shadow-md">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-card border border-border/30 p-3 sm:p-4 rounded-3xl rounded-bl-lg shadow-xl max-w-[200px]">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary/70 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {showSuggestions && messages.length <= 1 && (
            <div className="p-3 sm:p-4 border-t border-border/30 bg-background/50 backdrop-blur-sm flex-shrink-0">
              <p className="text-xs text-muted-foreground mb-2 sm:mb-3 font-medium">💬 Quick questions to get started:</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {quickSuggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="outline"
                    onClick={() => handleSuggestionClick(suggestion.text)}
                    className="rounded-full text-xs h-auto py-1.5 sm:py-2 px-2 sm:px-3 border-primary/30 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                  >
                    <span className="mr-1">{suggestion.icon}</span>
                    <span className="hidden sm:inline">{suggestion.text}</span>
                    <span className="sm:hidden">{suggestion.text.split(' ')[0]}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="relative border-t bg-card/80 backdrop-blur-md p-3 sm:p-4 flex-shrink-0">
            <form onSubmit={handleSubmit} className="flex gap-2 sm:gap-3">
              <div className="flex-1 relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="💬 Type your message here..."
                  disabled={isLoading}
                  className="pr-10 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-2 border-border/30 focus:border-primary/50 bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300 placeholder:text-muted-foreground/60 text-foreground min-h-[40px] sm:min-h-[44px]"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/40">
                  <MessageSquare className="h-4 w-4" />
                </div>
              </div>
              <Button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                size="lg"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-primary hover:bg-primary/90 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </form>
            <div className="flex items-center justify-center mt-2 gap-2 flex-wrap">
              <div className="flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-primary/60" />
                <p className="text-xs text-muted-foreground/80 font-medium hidden sm:inline">Press Enter to send</p>
                <p className="text-xs text-muted-foreground/80 font-medium sm:hidden">Enter to send</p>
              </div>
              <span className="text-muted-foreground/40 hidden sm:inline">•</span>
              <p className="text-xs text-muted-foreground/80 font-medium">Powered by DigiBabaa AI</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};