import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Settings, 
  Rocket, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Target
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your processes and identify opportunities.",
      icon: MessageSquare,
      duration: "1-2 weeks"
    },
    {
      step: "02", 
      title: "Planning",
      description: "Strategy and roadmap tailored to your needs.",
      icon: Settings,
      duration: "1 week"
    },
    {
      step: "03",
      title: "Integration",
      description: "Seamless implementation with minimal disruption.",
      icon: Rocket,
      duration: "2-3 weeks"
    },
    {
      step: "04",
      title: "Launch",
      description: "Go live with training and support.",
      icon: Users,
      duration: "1 week"
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuous improvement and scaling.",
      icon: BarChart3,
      duration: "Ongoing"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate tasks"
    },
    {
      icon: Target,
      title: "Increase Accuracy",
      description: "Reduce errors"
    },
    {
      icon: Users,
      title: "Scale Operations",
      description: "Handle more work"
    },
    {
      icon: BarChart3,
      title: "Improve ROI",
      description: "Measurable results"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            How <span className="bg-gradient-primary bg-clip-text text-transparent">It Works</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Simple 5-step process for AI automation success
          </p>
        </div>
      </section>

      {/* Process Steps - Clean Minimalist Design */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Number & Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
                
                {/* Step Content */}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                <Badge variant="outline" className="text-xs">
                  {step.duration}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Minimalist */}
      <section className="py-20 bg-card/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why It <span className="text-primary">Works</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Clean */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss your automation needs
          </p>
          <Button variant="hero" size="lg">
            Book Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;