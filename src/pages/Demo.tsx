import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Play, 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  Zap, 
  Video,
  ExternalLink,
  Calendar,
  Download,
  CheckCircle
} from "lucide-react";

const Demo = () => {
  const demoVideos = [
    {
      title: "AI Chatbot in Action",
      description: "See how our AI chatbot handles customer inquiries with human-like responses",
      thumbnail: "/placeholder.svg",
      duration: "3:45",
      category: "Chatbot"
    },
    {
      title: "Voice Agent Demo",
      description: "Experience our AI voice agent managing customer calls and appointments",
      thumbnail: "/placeholder.svg", 
      duration: "5:20",
      category: "Voice"
    },
    {
      title: "Custom Automation Workflow",
      description: "Watch automated lead generation and CRM integration in real-time",
      thumbnail: "/placeholder.svg",
      duration: "4:15", 
      category: "Automation"
    }
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Interactive Chatbot Demo",
      description: "Chat with our AI assistant and experience the conversation flow"
    },
    {
      icon: Phone,
      title: "Voice Agent Simulation", 
      description: "Listen to sample calls and voice interactions"
    },
    {
      icon: Zap,
      title: "Automation Showcase",
      description: "See workflows and integrations in action"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            🎬 Live Demos & Previews
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            See Our AI Solutions{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              In Action
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the power of AI automation through interactive demos and real-world examples
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking-calendar">
              <Button variant="hero" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Start Interactive Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                <Calendar className="mr-2 h-4 w-4" />
                Book Live Demo Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Demo Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Try Our <span className="text-primary">Live Demos</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Interactive experiences you can try right now
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-elegant cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      {feature.description}
                    </p>
                    <Button variant="outline" className="group-hover:border-primary group-hover:text-primary">
                      Try Demo
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Videos */}
      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Watch <span className="text-primary">Demo Videos</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See real implementations and success stories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoVideos.map((video, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-elegant cursor-pointer">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                  <Badge variant="secondary" className="absolute top-4 left-4">
                    {video.category}
                  </Badge>
                  <Badge variant="outline" className="absolute top-4 right-4 bg-black/80 text-white border-white/20">
                    {video.duration}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {video.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Video className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-primary text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
            <CardContent className="p-12 text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want a Personalized Demo?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Schedule a live demo tailored to your specific business needs
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link to="/booking-calendar">
                  <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Live Demo
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => {
                    window.open('/portfolio', '_blank');
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Case Studies
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>30-minute session</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Customized to your needs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>No commitment required</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;