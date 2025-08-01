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

      {/* AI Automation Workflows Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Customize AI Automation Systems
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Explore our suite of AI-powered automation systems designed to streamline business operations, 
              increase efficiency, and enhance customer experience. Browse through our offerings and find the perfect fit for your needs.
            </p>
          </div>

          {/* Workflow Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Lead Generation & Management",
                description: "Automates lead capture, validation, scoring, and nurturing workflows with seamless CRM integration and email automation.",
                image: "/lovable-uploads/cfc66a89-08a0-4f5e-a8d3-6e02a5a74b58.png",
                link: "/automation/lead-generation"
              },
              {
                title: "E-commerce Lead Automation", 
                description: "Streamlines e-commerce lead processing with automated routing, scoring, and multi-channel follow-up campaigns.",
                image: "/lovable-uploads/28284395-0823-47f7-9b9b-c697b37127a7.png",
                link: "/automation/ecommerce-lead"
              },
              {
                title: "Order Processing Automation",
                description: "Manages end-to-end order workflows from validation to fulfillment with automated routing and notification systems.",
                image: "/lovable-uploads/16d3eaf0-536d-4ef1-add3-daa4dd9dbe27.png",
                link: "/automation/order-processing"
              },
              {
                title: "Customer Support Automation",
                description: "Handles customer inquiries, order lookups, and return requests with intelligent routing and automated responses.",
                image: "/lovable-uploads/9a5c9675-1b5b-430f-a8ea-f1f92fa8c76a.png",
                link: "/automation/customer-support"
              },
              {
                title: "Customer Verification System",
                description: "Automates customer onboarding with identity verification, compliance screening, and approval workflows.",
                image: "/lovable-uploads/eee2d694-55fd-4edc-afd7-6ad6163fd127.png",
                link: "/automation/customer-verification"
              }
            ].map((workflow, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-elegant overflow-hidden">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                  <img 
                    src={workflow.image} 
                    alt={workflow.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{workflow.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{workflow.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link to={workflow.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Business with AI?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Discover how our custom automation systems can revolutionize your operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8" asChild>
                  <Link to="/contact">Get Started Today</Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8" asChild>
                  <Link to="/contact">Schedule a Demo</Link>
                </Button>
              </div>
            </div>
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