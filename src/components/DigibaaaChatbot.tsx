import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MessageCircle, X, Send, Minimize2, Maximize2, ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface DigibaaaChatbotProps {
  embedded?: boolean;
  className?: string;
}

export const DigibaaaChatbot: React.FC<DigibaaaChatbotProps> = ({ 
  embedded = false, 
  className 
}) => {
  const [isOpen, setIsOpen] = useState(embedded);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollUp = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollBy({ top: -200, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollBy({ top: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !embedded) {
      // Add welcome message when chatbot opens (not for embedded version)
      if (messages.length === 0) {
        const welcomeMessage: Message = {
          id: Date.now().toString(),
          text: "Hello! I'm here to help you with any questions about Digibabaa's AI automation services. How can I assist you today?",
          isUser: false,
          timestamp: new Date()
        };
        setMessages([welcomeMessage]);
      }
    }
  }, [isOpen, embedded, messages.length]);

  // Function to process and format text with markdown-like formatting
  const processMessageText = (text: string): string => {
    if (!text) return '';
    
    let processedText = text
      // Handle bold text: **text** -> <strong>text</strong>
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Handle paragraph breaks: \n\n -> </p><p>
      .replace(/\n\n/g, '</p><p>')
      // Handle single line breaks: \n -> <br>
      .replace(/\n/g, '<br>')
      // Handle bullet points: • text -> <li>text</li>
      .replace(/^• (.+)$/gm, '<li>$1</li>')
      // Handle URLs: make them clickable
      .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>')
      // Handle email addresses
      .replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, '<a href="mailto:$1">$1</a>')
      // Handle phone numbers (basic pattern)
      .replace(/(\+?[\d\s\-\(\)]{10,})/g, '<a href="tel:$1">$1</a>');

    // Wrap with paragraphs if contains </p><p>
    if (processedText.includes('</p><p>')) {
      processedText = '<p>' + processedText + '</p>';
    }

    // Wrap isolated <li> elements with <ul> tags
    if (processedText.includes('<li>')) {
      processedText = processedText.replace(/(<li>.*?<\/li>)+/g, '<ul>$&</ul>');
    }

    return processedText;
  };

  const extractTextFromResponse = (response: any): string => {
    try {
      // If response is a string, try to parse it as JSON
      let parsedResponse = response;
      if (typeof response === 'string') {
        try {
          parsedResponse = JSON.parse(response);
        } catch (e) {
          // If JSON parsing fails, return the string as is
          return response;
        }
      }

      // Handle array responses with "output" property
      if (Array.isArray(parsedResponse) && parsedResponse.length > 0) {
        const firstItem = parsedResponse[0];
        if (firstItem && typeof firstItem === 'object' && firstItem.output) {
          return firstItem.output;
        }
      }

      // Handle direct object with "output" property
      if (parsedResponse && typeof parsedResponse === 'object' && parsedResponse.output) {
        return parsedResponse.output;
      }

      // Fallback to other common response formats
      if (typeof parsedResponse === 'string') return parsedResponse;
      if (parsedResponse.text) return parsedResponse.text;
      if (parsedResponse.message) return parsedResponse.message;
      if (parsedResponse.response) return parsedResponse.response;
      if (parsedResponse.data) return parsedResponse.data;

      // Last resort: stringify the response
      return JSON.stringify(parsedResponse);
    } catch (error) {
      // If all parsing fails, return the original response
      return typeof response === 'string' ? response : JSON.stringify(response);
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://adeeba12.app.n8n.cloud/webhook/24805e02-9cab-49ca-8611-f7f8ff3b2d33?message=${encodeURIComponent(userMessage.text)}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botText = extractTextFromResponse(data);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting. Please try again in a moment.",
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

  const handleToggle = () => {
    if (embedded) return;
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const handleMinimize = () => {
    if (embedded) return;
    setIsMinimized(!isMinimized);
  };

  if (embedded) {
    return (
      <div className={cn("flex flex-col h-full bg-background", className)}>
        <CardHeader className="flex-shrink-0 border-b bg-primary text-primary-foreground">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-foreground/10 rounded-full">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Digibabaa AI Assistant</h3>
              <p className="text-sm opacity-90">Ask me anything about our services</p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0 min-h-0 relative">
          {/* Scroll Buttons */}
          {messages.length > 5 && (
            <div className="absolute right-2 top-4 z-10 flex flex-col gap-1">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollUp}
                className="h-8 w-8 bg-background/80 backdrop-blur-sm shadow-sm"
              >
                <ChevronUp className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollDown}
                className="h-8 w-8 bg-background/80 backdrop-blur-sm shadow-sm"
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          )}
          
          {/* Messages Container - Fixed height with scrolling */}
          <div 
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 max-h-[400px]"
          >
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Start a conversation to see our AI in action!</p>
              </div>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.isUser ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-2 text-sm break-words chatbot-message",
                    message.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  )}
                  dangerouslySetInnerHTML={{
                    __html: message.isUser ? message.text : processMessageText(message.text)
                  }}
                />
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground rounded-2xl px-4 py-2 text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Fixed Input Area */}
          <div className="flex-shrink-0 border-t bg-background p-4">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                size="icon"
                className="flex-shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </div>
    );
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={handleToggle}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className={cn(
          "fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col transition-all duration-300",
          isMinimized && "h-16"
        )}>
          {/* Header */}
          <CardHeader className="flex-shrink-0 bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-foreground/10 rounded-full">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Digibabaa AI Assistant</h3>
                  {!isMinimized && (
                    <p className="text-xs opacity-90">Online now</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleMinimize}
                  className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleToggle}
                  className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {!isMinimized && (
            <CardContent className="flex-1 flex flex-col p-0 min-h-0 relative">
              {/* Scroll Buttons */}
              {messages.length > 5 && (
                <div className="absolute right-2 top-4 z-10 flex flex-col gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollUp}
                    className="h-6 w-6 bg-background/80 backdrop-blur-sm shadow-sm"
                  >
                    <ChevronUp className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollDown}
                    className="h-6 w-6 bg-background/80 backdrop-blur-sm shadow-sm"
                  >
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </div>
              )}
              
              {/* Messages Container - Fixed height with scrolling */}
              <div 
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 max-h-[420px]"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.isUser ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl px-3 py-2 text-sm break-words chatbot-message",
                        message.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      )}
                      dangerouslySetInnerHTML={{
                        __html: message.isUser ? message.text : processMessageText(message.text)
                      }}
                    />
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-2xl px-3 py-2 text-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Fixed Input Area */}
              <div className="flex-shrink-0 border-t bg-background p-4">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    size="icon"
                    className="flex-shrink-0"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      )}
    </>
  );
};