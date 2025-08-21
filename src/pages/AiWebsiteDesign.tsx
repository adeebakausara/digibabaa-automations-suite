import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Smartphone, 
  Zap, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Monitor,
  Sparkles,
  Search,
  ShoppingCart
} from "lucide-react";
import { BookConsultationButton } from "@/components/BookConsultationButton";

// Import portfolio images
import realEstatePortfolio from "@/assets/real-estate-portfolio.jpg";
import restaurantPortfolio from "@/assets/restaurant-portfolio.jpg";
import fintechPortfolio from "@/assets/fintech-portfolio.jpg";
import saasPortfolio from "@/assets/saas-portfolio.jpg";
import ecommercePortfolio from "@/assets/ecommerce-portfolio.jpg";

const AiWebsiteDesign = () => {
  const features = [
    "AI-driven, custom website designs tailored to your brand",
    "Fast, responsive, and mobile-friendly designs",
    "Seamless user experience (UX) and intuitive interfaces",
    "Automatically adapts to your business needs and user behavior"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            🎨 AI-Powered Design
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Website Design – <span className="bg-gradient-primary bg-clip-text text-transparent">Smart, Adaptive, Beautiful</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Harness the power of AI to create stunning, responsive, and adaptive websites tailored to your brand. Let AI handle the design so you can focus on your business.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-primary">AI Website Design</span>
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

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              🏆 Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-primary">AI Website Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore stunning AI-powered websites we've created for clients across various industries. Each project showcases our AI's ability to create beautiful, functional, and results-driven websites.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real Estate Lead Generation Platform",
                description: "An AI-powered platform that helps real estate agents generate qualified leads through smart data analysis, personalized property recommendations, and client tracking tools.",
                image: realEstatePortfolio,
                link: "#"
              },
              {
                title: "Restaurant Chain AI Automation",
                description: "AI-driven automation system for restaurant chains, featuring real-time order processing, automated reservations, and personalized customer insights.",
                image: restaurantPortfolio,
                link: "#"
              },
              {
                title: "Financial Services Digital Transformation",
                description: "An AI platform for financial services, offering predictive analytics, automated client engagement, and advanced reporting features for enhanced decision-making.",
                image: fintechPortfolio,
                link: "#"
              },
              {
                title: "SaaS Platform AI Integration",
                description: "Seamlessly integrates AI capabilities into SaaS platforms with real-time analytics, automated customer support, and personalized service recommendations.",
                image: saasPortfolio,
                link: "#"
              },
              {
                title: "E-commerce Complete AI Solution",
                description: "An AI-powered e-commerce platform that offers personalized shopping experiences, automated inventory management, and AI-driven customer engagement.",
                image: ecommercePortfolio,
                link: "#"
              }
            ].map((project, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-elegant overflow-hidden bg-card/50 backdrop-blur-sm border border-primary/10">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge variant="secondary" className="text-xs">
                      Live Project
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Live Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See AI Design in Action
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Watch our AI create beautiful, responsive websites in real-time
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                <Sparkles className="h-12 w-12 text-primary" />
              </div>
            </div>
            <p className="text-lg mb-6">Experience the power of AI-driven web design</p>
            <Button variant="hero" size="lg" className="px-8">
              <Monitor className="mr-2 h-5 w-5" />
              See It in Action
            </Button>
          </div>
        </div>
      </section>


      {/* Integrations Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Platform <span className="text-primary">Integrations</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Connect with your favorite tools and platforms
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "WordPress", icon: Palette, description: "CMS Integration" },
              { name: "Google Analytics", icon: BarChart3, description: "Analytics Tools" },
              { name: "Shopify", icon: ShoppingCart, description: "E-commerce" },
              { name: "SEO Tools", icon: Search, description: "SEO Integration" },
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
            Ready for Your AI-Designed Website?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let AI create a beautiful, responsive website tailored to your brand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">Get Your AI-Designed Website</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/booking-calendar">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <BookConsultationButton variant="fixed" position="bottom-left" />
      <Footer />
    </div>
  );
};

export default AiWebsiteDesign;