import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Target, 
  Mail, 
  BarChart3, 
  CheckCircle, 
  ArrowLeft,
  Zap,
  TrendingUp
} from "lucide-react";

const EcommerceLeadDetails = () => {
  const features = [
    "E-commerce platform integration (Shopify, WooCommerce, Magento)",
    "Real-time lead scoring based on shopping behavior",
    "Automated routing to sales teams by product category",
    "Multi-channel follow-up campaigns (email, SMS, social)",
    "Cart abandonment recovery automation",
    "Customer segmentation for targeted messaging",
    "Revenue attribution tracking",
    "Advanced analytics and reporting"
  ];

  const benefits = [
    "Increase e-commerce conversion rates by 35-50%",
    "Reduce cart abandonment by 25-40%",
    "Improve customer lifetime value",
    "Automate repetitive sales tasks",
    "Enhance customer experience with personalization",
    "Maximize ROI on marketing campaigns"
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
              🛒 E-commerce
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            E-commerce Lead <span className="bg-gradient-primary bg-clip-text text-transparent">Automation System</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Streamlines e-commerce lead processing with automated routing, scoring, and multi-channel follow-up campaigns. 
            Maximize your online sales potential with intelligent automation designed for e-commerce success.
          </p>
        </div>
      </section>

      {/* Workflow Image */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">E-commerce Automation Workflow</h2>
            <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-xl overflow-hidden">
              <img 
                src="/lovable-uploads/28284395-0823-47f7-9b9b-c697b37127a7.png" 
                alt="E-commerce Lead Automation Workflow Diagram"
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
              { icon: ShoppingCart, title: "Lead Capture", desc: "Track visitor behavior and capture leads automatically" },
              { icon: Target, title: "Behavior Scoring", desc: "Score leads based on shopping patterns and intent" },
              { icon: Mail, title: "Multi-Channel Follow-up", desc: "Automated campaigns across email, SMS, and social" },
              { icon: BarChart3, title: "Revenue Tracking", desc: "Monitor ROI and optimize conversion funnels" }
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
            Ready to Boost Your E-commerce Sales?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Implement our e-commerce automation system and watch your conversions soar
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

export default EcommerceLeadDetails;