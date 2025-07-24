import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Bot, 
  Mic, 
  Zap, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Star, 
  ArrowRight,
  CheckCircle,
  Play,
  Quote
} from "lucide-react";
import heroImage from "@/assets/hero-ai-automation.jpg";
import chatbotsImage from "@/assets/ai-chatbots.jpg";
import voiceImage from "@/assets/ai-voice-agents.jpg";
import automationImage from "@/assets/custom-automation.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="AI Automation" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 animate-fade-in">
            🚀 AI-Powered Business Automation
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Transform Your Business with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Intelligent Automation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Unlock the power of AI chatbots, voice agents, and custom automation 
            to streamline operations and boost productivity across all platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button variant="hero" size="lg" className="group">
              Start Automating
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
            <Button variant="accent" size="lg">
              Book Free Audit
            </Button>
          </div>
          
          {/* Platform Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 animate-fade-in">
            <span className="text-sm font-medium">Trusted Integrations:</span>
            {["WhatsApp", "Zapier", "Shopify", "Zoho", "Google Sheets"].map((platform) => (
              <Badge key={platform} variant="secondary" className="hover:scale-105 transition-transform">
                {platform}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Core Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI solutions designed to revolutionize your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "AI Chatbots",
                description: "Intelligent conversational agents for websites, WhatsApp, and social platforms",
                image: chatbotsImage,
                color: "text-primary"
              },
              {
                icon: Mic,
                title: "Voice Agents",
                description: "AI-powered voice solutions for IVR, customer support, and sales automation",
                image: voiceImage,
                color: "text-aqua"
              },
              {
                icon: Zap,
                title: "Custom Automation",
                description: "Tailored AI workflows for lead generation, email outreach, and CRM management",
                image: automationImage,
                color: "text-purple-start"
              },
              {
                icon: BarChart3,
                title: "Integrations",
                description: "Seamless connections with your existing tools and platforms",
                image: heroImage,
                color: "text-soft-teal"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <service.icon className={`absolute bottom-2 right-2 h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from businesses that transformed with DigiBabaa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "DigiBabaa's AI chatbot increased our customer engagement by 300% and reduced response time to under 2 minutes.",
                author: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                rating: 5
              },
              {
                quote: "The voice agent integration transformed our customer support. We now handle 5x more calls with better satisfaction scores.",
                author: "Michael Chen",
                role: "Operations Director, ServicePro",
                rating: 5
              },
              {
                quote: "Custom automation workflows saved us 20 hours per week on lead generation. ROI was visible within the first month.",
                author: "Emily Rodriguez",
                role: "Marketing Manager, GrowthCorp",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of businesses already automating their success with DigiBabaa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
