import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ExternalLink,
  MessageSquare,
  Mic,
  Zap,
  Globe,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign
} from "lucide-react";
import chatbotsImage from "@/assets/ai-chatbots.jpg";

const EcommerceCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" className="mr-4" asChild>
              <Link to="/portfolio">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
            <Badge variant="secondary">
              🛒 E-commerce Case Study
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            E-commerce Complete <span className="bg-gradient-primary bg-clip-text text-transparent">AI Solution</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            RetailMax Inc. achieved a 45% increase in sales conversion and 60% reduction in support costs through our comprehensive AI implementation.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Badge variant="outline" className="px-4 py-2">
              <MessageSquare className="h-4 w-4 mr-2" />
              AI Chatbot
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Mic className="h-4 w-4 mr-2" />
              Voice Ordering
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Globe className="h-4 w-4 mr-2" />
              Website Redesign
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Zap className="h-4 w-4 mr-2" />
              Process Automation
            </Badge>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={chatbotsImage} 
              alt="E-commerce AI Solution"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground mb-6">
                RetailMax Inc., a growing e-commerce retailer, was struggling with high customer support costs, 
                slow response times, and inefficient order processing. They needed a comprehensive solution to 
                modernize their operations and improve customer experience.
              </p>
              <p className="text-muted-foreground mb-6">
                Our full-stack AI implementation included a complete website redesign with AI-powered features, 
                intelligent chatbots for customer support, voice ordering capabilities, and automated workflows 
                for order processing and inventory management.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Client Information</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-medium w-24">Company:</span>
                  <span className="text-muted-foreground">RetailMax Inc.</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Industry:</span>
                  <span className="text-muted-foreground">E-commerce Retail</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Size:</span>
                  <span className="text-muted-foreground">50-200 employees</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Timeline:</span>
                  <span className="text-muted-foreground">3 months implementation</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Results</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Response Time", value: "2 minutes", change: "from 2 hours", icon: Clock },
                  { label: "Customer Satisfaction", value: "95%", change: "improved from 78%", icon: TrendingUp },
                  { label: "Cost Reduction", value: "60%", change: "in support costs", icon: DollarSign },
                  { label: "Conversion Rate", value: "45%", change: "increase in sales", icon: TrendingUp }
                ].map((result, index) => (
                  <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                    <CardContent className="p-4">
                      <result.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">{result.value}</div>
                      <div className="text-xs text-muted-foreground">{result.label}</div>
                      <div className="text-xs text-green-500 mt-1">{result.change}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "OpenAI API", "Stripe", "MongoDB", "AWS", "WebRTC"].map((tech, index) => (
                  <Badge key={index} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Challenges & Solutions</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-red-400">Challenges</h3>
              <div className="space-y-4">
                {[
                  "2-hour average response time for customer support",
                  "78% customer satisfaction due to slow service",
                  "Manual order processing causing delays",
                  "Outdated website with poor user experience",
                  "High operational costs with low efficiency",
                  "Inventory management inefficiencies"
                ].map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Solutions</h3>
              <div className="space-y-4">
                {[
                  "AI chatbot providing instant 24/7 customer support",
                  "Modern, responsive website with intuitive design",
                  "Voice ordering system for hands-free shopping",
                  "Automated order processing and fulfillment workflows",
                  "Real-time inventory management integration",
                  "Predictive analytics for demand forecasting"
                ].map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Implementation Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Phase 1",
                title: "Discovery & Planning",
                duration: "2 weeks",
                description: "Analysis of existing systems, user journey mapping, and technical requirements gathering."
              },
              {
                phase: "Phase 2", 
                title: "Development & Integration",
                duration: "8 weeks",
                description: "Website redesign, AI implementation, workflow automation, and system integrations."
              },
              {
                phase: "Phase 3",
                title: "Testing & Launch",
                duration: "2 weeks", 
                description: "Quality assurance, user acceptance testing, staff training, and gradual rollout."
              }
            ].map((phase, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4">{phase.phase}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-primary mb-4">{phase.duration}</p>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-8 bg-gradient-to-br from-card/50 to-muted/30">
            <CardContent>
              <blockquote className="text-xl italic mb-6">
                "The AI implementation has completely transformed our business. We're now serving customers 
                24/7 with instant responses, and our sales have increased by 45%. The ROI was evident within 
                the first month."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">CEO, RetailMax Inc.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ai">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your E-commerce Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can deliver similar results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcommerceCaseStudy;