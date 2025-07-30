import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Settings, 
  BarChart3, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Workflow,
  Target
} from "lucide-react";

const CustomAiAutomation = () => {
  const features = [
    "Tailored to your unique needs",
    "Automate workflows and customer interactions", 
    "Enhance efficiency, reduce costs",
    "Easy integration with your existing systems"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            🔧 Custom Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Customized AI Automation – <span className="bg-gradient-primary bg-clip-text text-transparent">Tailored to Your Business</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Streamline processes, improve efficiency, and elevate your operations with AI designed for your business.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-primary">Custom AI Automation</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-card rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See Custom Automation in Action
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explore how our tailored AI solutions can transform your specific business processes
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                <Workflow className="h-12 w-12 text-primary" />
              </div>
            </div>
            <p className="text-lg mb-6">Discover custom automation solutions designed for your industry</p>
            <Button variant="hero" size="lg" className="px-8">
              <Target className="mr-2 h-5 w-5" />
              See It in Action
            </Button>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Enterprise <span className="text-primary">Integrations</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Connect seamlessly with your existing business systems
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Salesforce", icon: BarChart3, description: "CRM Integration" },
              { name: "HubSpot", icon: Settings, description: "Marketing Hub" },
              { name: "AWS", icon: Cloud, description: "Cloud Platform" },
              { name: "Custom APIs", icon: Zap, description: "API Integration" },
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
            Ready for Your Custom AI Solution?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's build automation that perfectly fits your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">Get Your Custom AI Solution</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomAiAutomation;