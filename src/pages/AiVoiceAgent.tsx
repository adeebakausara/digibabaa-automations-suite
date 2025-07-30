import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aiCallingAgentDemo from "@/assets/ai-calling-agent-demo.jpg";
import { 
  Mic, 
  Phone, 
  Headphones, 
  Zap, 
  ArrowRight,
  Play,
  Settings,
  Users
} from "lucide-react";

const AiVoiceAgent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            🎤 AI Voice Technology
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Voice Agent – Your <span className="bg-gradient-primary bg-clip-text text-transparent">24/7 Virtual Assistant</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Integrate seamlessly with your website, phone systems, and customer service tools. Improve customer interaction with smart voice responses.
          </p>
        </div>
      </section>

      {/* AI Calling Agent Demo Video Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience AI Voice in Action
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            See how our AI calling agent works in real customer interactions
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-8">
            <div className="relative w-full max-w-3xl mx-auto">
              <img 
                src={aiCallingAgentDemo}
                alt="AI Calling Agent Demo - How AI Voice Agents Work"
                className="w-full h-auto rounded-xl shadow-elegant"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="hero" size="lg" className="px-8 bg-primary/90 hover:bg-primary">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <p className="text-lg mt-6">Learn how AI calling agents handle customer inquiries automatically</p>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Seamless <span className="text-primary">Integrations</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Connect with your existing systems and platforms
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Website", icon: Settings, description: "Web Integration" },
              { name: "Phone Systems", icon: Phone, description: "IVR & Calling" },
              { name: "Zendesk", icon: Headphones, description: "Support Tools" },
              { name: "Salesforce", icon: Users, description: "CRM Systems" },
            ].map((integration, index) => (
              <Card key={index} className="hover:scale-105 transition-all duration-300 hover:shadow-elegant">
                <CardContent className="p-6 text-center">
                  <integration.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{integration.name}</h3>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ai">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Voice Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how AI voice agents can enhance your customer service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Get Your Voice Solution
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiVoiceAgent;