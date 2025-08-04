import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Utensils,
  MessageSquare,
  Mic,
  Globe,
  TrendingUp,
  CheckCircle,
  Clock,
  Star,
  ShoppingCart
} from "lucide-react";


const RestaurantCaseStudy = () => {
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
              🍽️ Restaurant Case Study
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Restaurant Chain <span className="bg-gradient-primary bg-clip-text text-transparent">AI Automation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            FoodieChain achieved 99.2% order accuracy and 30% revenue increase through our comprehensive multi-location restaurant automation solution.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Badge variant="outline" className="px-4 py-2">
              <Mic className="h-4 w-4 mr-2" />
              Voice Ordering
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <MessageSquare className="h-4 w-4 mr-2" />
              Reservation Bot
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Globe className="h-4 w-4 mr-2" />
              Multi-Location Web
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Order Management
            </Badge>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src="/placeholder.svg" 
              alt="Restaurant AI Automation System"
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
                FoodieChain, a rapidly growing restaurant chain with multiple locations, was facing challenges 
                with order accuracy, inconsistent customer service across locations, and inefficient inventory 
                management. They needed a unified solution to standardize operations while maintaining quality.
              </p>
              <p className="text-muted-foreground mb-6">
                Our comprehensive restaurant automation solution included AI-powered websites for each location, 
                voice ordering systems, chatbots for reservations and customer service, and automated workflows 
                for inventory and order management across all locations.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Client Information</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-medium w-24">Company:</span>
                  <span className="text-muted-foreground">FoodieChain</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Industry:</span>
                  <span className="text-muted-foreground">Food & Beverage</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Locations:</span>
                  <span className="text-muted-foreground">12 restaurant locations</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Timeline:</span>
                  <span className="text-muted-foreground">5 months implementation</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Results</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Order Accuracy", value: "99.2%", change: "accuracy rate", icon: CheckCircle },
                  { label: "Order Processing", value: "50%", change: "faster fulfillment", icon: Clock },
                  { label: "Customer Experience", value: "90%", change: "satisfaction score", icon: Star },
                  { label: "Revenue Growth", value: "30%", change: "increase in orders", icon: TrendingUp }
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
                {["React", "Node.js", "OpenAI API", "Square POS", "MongoDB", "Twilio", "AWS"].map((tech, index) => (
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
                  "Order errors leading to customer dissatisfaction",
                  "Inconsistent service quality across locations",
                  "Phone lines constantly busy during peak hours",
                  "Manual inventory tracking causing waste",
                  "Difficult reservation management across locations",
                  "Limited online ordering capabilities"
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
                  "AI voice ordering system with order confirmation",
                  "Standardized chatbot responses across all locations",
                  "Multi-location online ordering platform",
                  "Automated inventory management with POS integration",
                  "Intelligent reservation system with real-time availability",
                  "Centralized dashboard for multi-location management"
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

      {/* System Features */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">System Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "AI Voice Ordering",
                description: "Natural language voice ordering with menu recommendations and upselling"
              },
              {
                icon: MessageSquare,
                title: "Reservation Chatbot",
                description: "Intelligent reservation management with real-time table availability"
              },
              {
                icon: Globe,
                title: "Multi-Location Website",
                description: "Unified web platform with location-specific menus and ordering"
              },
              {
                icon: ShoppingCart,
                title: "Order Management",
                description: "Centralized order processing with kitchen integration and tracking"
              },
              {
                icon: Utensils,
                title: "Menu Intelligence",
                description: "Dynamic menu updates and personalized recommendations based on preferences"
              },
              {
                icon: TrendingUp,
                title: "Analytics Dashboard",
                description: "Real-time insights on sales, popular items, and customer satisfaction"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Implementation Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                phase: "Month 1",
                title: "Discovery & Design",
                description: "Menu analysis, workflow mapping, and system design for all locations"
              },
              {
                phase: "Month 2-3",
                title: "Development",
                description: "AI system development, POS integration, and testing across platforms"
              },
              {
                phase: "Month 4",
                title: "Pilot Testing",
                description: "Single location rollout, staff training, and system optimization"
              },
              {
                phase: "Month 5",
                title: "Full Deployment",
                description: "Chain-wide deployment, monitoring, and ongoing support setup"
              }
            ].map((phase, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4">{phase.phase}</Badge>
                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-8 bg-gradient-to-br from-card/50 to-muted/30">
            <CardContent>
              <blockquote className="text-xl italic mb-6">
                "The AI automation has standardized our operations across all locations while improving 
                customer experience. Our order accuracy is now near-perfect, and we've seen a significant 
                increase in revenue. The voice ordering system is a game-changer for our busy periods."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <p className="font-semibold">Marcus Thompson</p>
                  <p className="text-sm text-muted-foreground">Operations Director, FoodieChain</p>
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
            Ready to Revolutionize Your Restaurant Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how AI can improve your order accuracy and customer satisfaction
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

export default RestaurantCaseStudy;