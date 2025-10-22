import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  CheckCircle2, 
  Bell, 
  Truck, 
  CheckCircle, 
  ArrowLeft,
  Zap,
  TrendingUp
} from "lucide-react";

const OrderProcessingDetails = () => {
  const features = [
    "End-to-end order validation and processing",
    "Automated routing to appropriate restaurants/locations",
    "Real-time inventory management integration",
    "Multi-channel notification system (email, SMS, app)",
    "Order status tracking and updates",
    "Payment processing automation",
    "Exception handling and error recovery",
    "Performance analytics and reporting"
  ];

  const benefits = [
    "Reduce order processing time by 70-85%",
    "Minimize human errors in order handling",
    "Improve customer satisfaction with real-time updates",
    "Streamline operations across multiple locations",
    "Enhance order accuracy and fulfillment speed",
    "Scale operations without proportional staff increases"
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
              📦 Order Management
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Order Processing <span className="bg-gradient-primary bg-clip-text text-transparent">Automation System</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Manages end-to-end order workflows from validation to fulfillment with automated routing and notification systems. 
            Streamline your order operations with intelligent automation that ensures accuracy and speed.
          </p>
        </div>
      </section>

      {/* Workflow Image */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">Order Processing Workflow</h2>
            <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-xl overflow-hidden">
              <img 
                src="/lovable-uploads/16d3eaf0-536d-4ef1-add3-daa4dd9dbe27.png" 
                alt="Order Processing Automation Workflow Diagram"
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
              { icon: Package, title: "Order Validation", desc: "Automatically validate order details and payment" },
              { icon: CheckCircle2, title: "Smart Routing", desc: "Route orders to appropriate fulfillment centers" },
              { icon: Bell, title: "Real-time Updates", desc: "Send automated notifications at each stage" },
              { icon: Truck, title: "Fulfillment", desc: "Track delivery and provide completion confirmations" }
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
            Ready to Streamline Your Order Processing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Implement our order automation system and transform your fulfillment operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">Get Started Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/booking-calendar">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrderProcessingDetails;