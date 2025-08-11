import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChatInterface } from "@/components/ChatInterface";
import { MessageCircle, Globe, Facebook, Instagram, MessageSquare, Phone, Calendar, Send } from "lucide-react";
import { BookConsultationButton } from "@/components/BookConsultationButton";
import { toast } from "sonner";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: string;
}

const AiChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! I'm DigiBabaa AI. How can I help you today?", isBot: true, timestamp: getCurrentTime() }
  ]);
  const [chatMessages, setChatMessages] = useState<Message[]>([
    { id: 1, text: "Hi! I'm DigiBabaa AI. How can I help you today?", isBot: true, timestamp: getCurrentTime() }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  const parseResponse = (response: any): string => {
    // Handle simple text response (ideal case)
    if (typeof response === 'string') {
      return response.trim();
    }
    
    // Handle JSON response from n8n webhook
    if (typeof response === 'object' && response !== null) {
      // Try to find the actual message in the complex structure
      const findTextInObject = (obj: any): string | null => {
        // Direct properties check
        if (obj.output) return obj.output;
        if (obj.message) return obj.message;
        if (obj.text) return obj.text;
        if (obj.response) return obj.response;
        
        // Search in arrays
        for (const key in obj) {
          if (Array.isArray(obj[key])) {
            for (const item of obj[key]) {
              if (typeof item === 'object' && item !== null) {
                const found = findTextInObject(item);
                if (found) return found;
              }
            }
          } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            const found = findTextInObject(obj[key]);
            if (found) return found;
          }
        }
        
        return null;
      };
      
      const foundText = findTextInObject(response);
      if (foundText) {
        return foundText.trim();
      }
    }
    
    return 'Sorry, I could not understand the response from the server.';
  };

  const sendToWebhook = async (message: string): Promise<string> => {
    try {
      const response = await fetch('https://adeebakausar292.app.n8n.cloud/webhook/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          timestamp: new Date().toISOString(),
          user: 'website-visitor'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return parseResponse(data);
    } catch (error) {
      console.error('Error sending to webhook:', error);
      return handleInternalResponse(message); // Fallback to internal responses
    }
  };

  const handleInternalResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('chatbot') || lowerMessage.includes('ai chat')) {
      return "Our AI Chatbots provide 24/7 customer support, lead generation, and instant responses. They integrate with your website, Facebook, Instagram, and WhatsApp. Would you like to learn more about implementation?";
    }
    
    if (lowerMessage.includes('voice') || lowerMessage.includes('call')) {
      return "Our AI Voice Agents can handle customer calls, schedule appointments, and provide phone support with human-like conversations. They're perfect for businesses that need to scale their phone operations.";
    }
    
    if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      return "We offer flexible pricing plans starting from $199/month for basic chatbot services. Enterprise solutions are custom-priced based on your needs. Would you like me to connect you with our sales team for a detailed quote?";
    }
    
    if (lowerMessage.includes('book') || lowerMessage.includes('consultation') || lowerMessage.includes('meeting') || lowerMessage.includes('demo')) {
      setTimeout(() => {
        window.location.href = '/book-consultation';
      }, 1500);
      return "Great! I'll redirect you to our consultation booking page where you can schedule a free 30-minute strategy session with our AI experts.";
    }
    
    if (lowerMessage.includes('automation') || lowerMessage.includes('custom')) {
      return "Our Custom AI Automation solutions streamline your business processes, reduce manual work, and integrate with your existing systems. We can automate everything from data entry to complex workflows.";
    }
    
    if (lowerMessage.includes('website') || lowerMessage.includes('design')) {
      return "Our AI Website Design service creates stunning, responsive websites optimized for conversions. The AI analyzes your business and generates custom designs that reflect your brand perfectly.";
    }
    
    if (lowerMessage.includes('portfolio') || lowerMessage.includes('examples') || lowerMessage.includes('case study')) {
      setTimeout(() => {
        window.location.href = '/portfolio';
      }, 1500);
      return "I'll show you our portfolio with real client case studies and results. Redirecting you now to see our success stories...";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('support') || lowerMessage.includes('help')) {
      setTimeout(() => {
        window.location.href = '/contact';
      }, 1500);
      return "I'll connect you with our support team. Redirecting to our contact page where you can reach us directly...";
    }
    
    if (lowerMessage.includes('services')) {
      setTimeout(() => {
        window.location.href = '/services';
      }, 1500);
      return "Let me show you all our AI services. Redirecting to our services page...";
    }
    
    // Default response
    return "I'm here to help you learn about our AI solutions! I can tell you about our chatbots, voice agents, automation services, pricing, or help you book a consultation. What interests you most?";
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage.trim();
    if (!textToSend) return;

    // Add user message
    const userMessage: Message = { 
      id: chatMessages.length + 1, 
      text: textToSend, 
      isBot: false, 
      timestamp: getCurrentTime() 
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Try webhook first, fallback to internal response
      const botResponse = await sendToWebhook(textToSend);
      
      const aiMessage: Message = {
        id: chatMessages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: getCurrentTime()
      };
      
      setChatMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      // Fallback to internal response
      const fallbackResponse = handleInternalResponse(textToSend);
      
      const aiMessage: Message = {
        id: chatMessages.length + 2,
        text: fallbackResponse,
        isBot: true,
        timestamp: getCurrentTime()
      };
      
      setChatMessages(prev => [...prev, aiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const integrations = [
    { name: "Website", icon: Globe, description: "Seamless website integration" },
    { name: "Facebook", icon: Facebook, description: "Facebook Messenger support" },
    { name: "Instagram", icon: Instagram, description: "Instagram DM automation" },
    { name: "WhatsApp", icon: MessageSquare, description: "WhatsApp Business API" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            AI Chatbot – Always On, Always Ready.
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Integrate seamlessly with your website, Facebook, Instagram, and WhatsApp. 
            Enhance customer engagement effortlessly.
          </p>
          
          
          {/* Live Chatbot Demo */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl overflow-hidden">
              {/* Chatbot Header */}
              <div className="bg-blue-500 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">DigiBabaa AI ✨</h3>
                    <p className="text-blue-100 text-sm">Business Intelligence Assistant</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-white text-sm">Online</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 bg-slate-800 min-h-[300px] max-h-[400px] overflow-y-auto">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`flex gap-3 ${!message.isBot ? 'justify-end' : ''}`}>
                    {message.isBot && (
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <div className={`rounded-lg p-4 max-w-xs ${
                      message.isBot 
                        ? 'bg-slate-700' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      <p className={message.isBot ? 'text-white' : 'text-white'}>{message.text}</p>
                      <span className={`text-xs mt-2 block ${
                        message.isBot ? 'text-slate-400' : 'text-blue-100'
                      }`}>
                        {message.timestamp}
                      </span>
                    </div>
                    {!message.isBot && (
                      <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-5 h-5 bg-slate-400 rounded-full"></div>
                      </div>
                    )}
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Quick Questions - Show only initially */}
                {chatMessages.length === 1 && (
                  <div className="pt-4">
                    <p className="text-slate-400 text-sm mb-3">Quick questions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-slate-600 text-slate-300 hover:bg-slate-600 text-xs"
                        onClick={() => handleQuickQuestion("Tell me about AI Chatbots")}
                      >
                        🤖 AI Chatbots
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-slate-600 text-slate-300 hover:bg-slate-600 text-xs"
                        onClick={() => handleQuickQuestion("What are Voice Agents?")}
                      >
                        🎤 Voice Agents
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-slate-600 text-slate-300 hover:bg-slate-600 text-xs"
                        onClick={() => handleQuickQuestion("What is your pricing?")}
                      >
                        💰 Pricing
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-slate-600 text-slate-300 hover:bg-slate-600 text-xs"
                        onClick={() => handleQuickQuestion("I want to book a call")}
                      >
                        📞 Book Call
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="bg-slate-700 p-4 border-t border-slate-600">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                    placeholder="Type your message..." 
                    className="flex-1 bg-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-2 border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    disabled={isLoading}
                  />
                  <Button 
                    size="sm" 
                    className="bg-blue-500 hover:bg-blue-600"
                    onClick={() => handleSendMessage()}
                    disabled={isLoading || !inputMessage.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-20">
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
              <a href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless Platform Integration
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Connect your AI chatbot across all major platforms to engage customers wherever they are.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((integration) => (
              <Card key={integration.name} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
                <CardContent className="pt-8 pb-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <integration.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{integration.name}</h3>
                  <p className="text-muted-foreground text-sm">{integration.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose Our AI Chatbot?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">24/7 Availability</h3>
              <p className="text-muted-foreground">Never miss a customer inquiry with round-the-clock automated responses.</p>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Multi-Platform</h3>
              <p className="text-muted-foreground">Consistent experience across website, social media, and messaging apps.</p>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Easy Setup</h3>
              <p className="text-muted-foreground">Quick integration with your existing systems and platforms.</p>
            </div>
          </div>
        </div>
      </section>

      <BookConsultationButton variant="fixed" position="bottom-left" />
      <Footer />
    </div>
  );
};

export default AiChatbot;