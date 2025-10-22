import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import VideoUpload from "@/components/VideoUpload";
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
import { BookConsultationButton } from "@/components/BookConsultationButton";

const AiVoiceAgent = () => {
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");

  const handleVideoUploaded = (videoUrl: string, fileName: string) => {
    setCurrentVideoUrl(videoUrl);
  };

  const voiceAgentSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AI Voice Agent for Business",
    "description": "Advanced AI voice automation for phone systems, IVR, appointment scheduling, and customer service calls with human-like conversations",
    "provider": {
      "@type": "Organization",
      "name": "DigiBabaa"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI Voice Agents | Automate Phone Calls & Customer Service"
        description="Transform your phone system with AI voice agents. Automate appointment booking, customer inquiries, and sales calls with natural conversations. Reduce costs by 70%."
        keywords="AI voice agent, automated phone calls, voice automation, AI phone system, appointment scheduling automation, IVR automation"
        schema={voiceAgentSchema}
      />
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

      {/* AI Voice Demo Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience AI Voice in Action
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Watch our AI calling agent in action - confirming appointments and reducing no-shows automatically
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <div className="relative w-full max-w-3xl mx-auto">
              {!currentVideoUrl ? (
                <div className="relative group cursor-pointer" onClick={() => setCurrentVideoUrl("https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Voice%20Agent%20Template%20Calls%20Customers,%20Confirms%20Appointments%20&%20Reduces%20No-Shows%20Automatically22.mp4")}>
                  <img 
                    src="https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Voice%20Agent%20Template%20Calls%20Customers,%20Confirms%20Appointments%20&%20Reduces%20No-Shows%20Automatically.jpg"
                    alt="AI Voice Agent Demo - Calls Customers & Confirms Appointments"
                    className="w-full h-auto rounded-xl shadow-elegant"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
                    <div className="bg-white/90 rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-12 w-12 text-primary fill-primary ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <video 
                  src={currentVideoUrl}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-xl shadow-elegant"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold mb-2">AI Voice Agent Template</h3>
              <p className="text-muted-foreground">Calls customers, confirms appointments & reduces no-shows automatically</p>
              {currentVideoUrl && (
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setCurrentVideoUrl("")}
                >
                  View Thumbnail Again
                </Button>
              )}
            </div>
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
              <Link to="/booking-calendar">Book a Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Get Your Voice Solution
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <BookConsultationButton variant="fixed" position="bottom-left" />
      <Footer />
    </div>
  );
};

export default AiVoiceAgent;