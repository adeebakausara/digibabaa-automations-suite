import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { MessageCircle, Globe, Facebook, Instagram, MessageSquare, Phone, Calendar } from "lucide-react";
import { BookConsultationButton } from "@/components/BookConsultationButton";
import { DigibaaaChatbot } from "@/components/DigibaaaChatbot";



const AiChatbot = () => {
  const integrations = [
    { name: "Website", icon: Globe, description: "Instant website chat support" },
    { name: "Facebook", icon: Facebook, description: "Auto-respond to messages" },
    { name: "Instagram", icon: Instagram, description: "Handle DMs automatically" },
    { name: "WhatsApp", icon: MessageSquare, description: "Business messaging made easy" }
  ];

  const chatbotSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AI Chatbot for Lead Generation",
    "description": "Intelligent AI chatbot for customer engagement, lead qualification, and automated support across website, WhatsApp, Facebook, and Instagram",
    "provider": {
      "@type": "Organization",
      "name": "DigiBabaa"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI Chatbots for Lead Generation | 24/7 Customer Engagement"
        description="Deploy intelligent AI chatbots across your website, WhatsApp, Facebook & Instagram. Automate customer support, qualify leads, and boost conversions 24/7."
        keywords="AI chatbot, lead generation chatbot, WhatsApp automation, website chatbot, customer support automation, AI chat marketing"
        schema={chatbotSchema}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Smart AI Chatbot Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform customer interactions with intelligent automation that works 24/7 across all your favorite platforms.
          </p>
          
          {/* CTA Section */}
          <div className="mb-20">
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
              <a href="/booking-calendar">
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
              Connect Everywhere Your Customers Are
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              One powerful chatbot that works seamlessly across all your business channels.
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
            Powerful Features That Deliver Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Always Available</h3>
              <p className="text-muted-foreground">Respond instantly to customers any time of day, boosting satisfaction and sales.</p>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Unified Experience</h3>
              <p className="text-muted-foreground">Consistent, smart responses across all platforms your customers use.</p>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Quick Implementation</h3>
              <p className="text-muted-foreground">Get up and running in minutes with our simple setup process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chatbot Demo */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Try It Right Now
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See our AI chatbot in action! Ask about services, get pricing info, or discover how we can transform your business.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="h-[700px] rounded-xl border border-border/50 bg-background shadow-lg overflow-hidden">
              <DigibaaaChatbot embedded={true} className="h-full" />
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