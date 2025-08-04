import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  MessageSquare, 
  Phone, 
  Zap, 
  Palette,
  Clock,
  Users,
  BarChart3
} from "lucide-react";

const GetStarted = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We'll understand your business needs and identify automation opportunities",
      duration: "30 mins",
      icon: Phone
    },
    {
      step: "02", 
      title: "Strategy Design",
      description: "Our experts create a custom AI automation roadmap for your business",
      duration: "2-3 days",
      icon: BarChart3
    },
    {
      step: "03",
      title: "Implementation",
      description: "We build and deploy your AI solutions with full testing and optimization",
      duration: "1-2 weeks",
      icon: Zap
    },
    {
      step: "04",
      title: "Launch & Support", 
      description: "Go live with ongoing support, training, and performance monitoring",
      duration: "Ongoing",
      icon: CheckCircle
    }
  ];

  const services = [
    {
      title: "Voice Agents",
      description: "AI-powered voice solutions for calls and customer interactions", 
      icon: Phone,
      link: "/services/ai-voice-agent"
    },
    {
      title: "Custom Automation",
      description: "Tailored workflows for lead generation and business processes",
      icon: Zap,
      link: "/services/custom-ai-automation"
    },
    {
      title: "AI Website Design",
      description: "Intelligent website creation with AI-powered design recommendations",
      icon: Palette,
      link: "/services/ai-website-design"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            🚀 Get Started with AI Automation
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From discovery to deployment, we'll guide you through every step of your AI automation journey
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Book Discovery Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Proven Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A systematic approach to AI automation success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="relative hover:scale-105 transition-all duration-300 hover:shadow-elegant">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <Badge variant="outline" className="mb-2">
                      Step {step.step}
                    </Badge>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-primary">
                      <Clock className="h-4 w-4" />
                      {step.duration}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="text-primary">AI Solution</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Select the perfect automation solution for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link key={index} to={service.link}>
                  <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50 hover:border-primary/30 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-auto flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of businesses already automating their success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                Book Free Discovery Call
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStarted;