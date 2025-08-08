import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChatInterface } from "@/components/ChatInterface";
import { MessageCircle, Globe, Facebook, Instagram, MessageSquare, Phone, Calendar } from "lucide-react";
import { BookConsultationButton } from "@/components/BookConsultationButton";

const AiChatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your AI assistant. How can I help you today?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = { id: messages.length + 1, text: inputMessage, isBot: false };
    setMessages([...messages, newMessage]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thanks for your message! I can help you with product information, booking appointments, and answering questions about our services. What would you like to know?",
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
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
          
          {/* Live Demo Section */}
          <div className="mb-12">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-primary text-white hover:bg-primary/90">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Try the Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    AI Chatbot Demo
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <ChatInterface />
                </div>
              </DialogContent>
            </Dialog>
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