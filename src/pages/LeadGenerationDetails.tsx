import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Mail, 
  BarChart3, 
  CheckCircle, 
  ArrowLeft,
  Zap,
  TrendingUp
} from "lucide-react";

const LeadGenerationDetails = () => {
  const features = [
    "Multi-source lead capture (web forms, social media, events)",
    "Real-time lead validation and scoring",
    "Seamless CRM integration with automatic data sync",
    "Intelligent lead routing based on criteria",
    "Automated email nurturing campaigns",
    "Lead behavior tracking and analytics",
    "A/B testing for optimization",
    "Custom lead scoring algorithms"
  ];

  const benefits = [
    "Increase lead conversion rates by 40-60%",
    "Reduce manual lead processing time by 80%",
    "Improve lead quality through intelligent scoring",
    "Enhance sales team productivity",
    "Accelerate sales cycle completion",
    "Gain deeper insights into lead behavior"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" className="mr-4" asChild>
              <Link to="/services/custom-ai-automation">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Automation
              </Link>
            </Button>
            <Badge variant="secondary">
              🎯 Lead Management
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Lead Generation & <span className="bg-gradient-primary bg-clip-text text-transparent">Management System</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Automates lead capture, validation, scoring, and nurturing workflows with seamless CRM integration and email automation. 
            Transform your sales funnel with intelligent automation that never misses an opportunity.
          </p>
        </div>
      </section>

      {/* Workflow Image */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">Automated Workflow Overview</h2>
            <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-xl overflow-hidden">
              <img 
                src="/lovable-uploads/cfc66a89-08a0-4f5e-a8d3-6e02a5a74b58.png" 
                alt="Lead Generation Workflow Diagram"
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Zap className="h-8 w-8 text-primary mr-3" />
                Key Features
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <TrendingUp className="h-8 w-8 text-primary mr-3" />
                Business Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Lead Capture", desc: "Automatically capture leads from multiple sources" },
              { icon: Target, title: "Lead Scoring", desc: "Intelligent scoring based on behavior and demographics" },
              { icon: Mail, title: "Nurturing", desc: "Automated email campaigns for lead engagement" },
              { icon: BarChart3, title: "Analytics", desc: "Track performance and optimize conversion rates" }
            ].map((step, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
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
            Ready to Transform Your Lead Generation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's implement this powerful automation system for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">Get Started Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/contact">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadGenerationDetails;