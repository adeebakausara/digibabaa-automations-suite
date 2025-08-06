import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Mic, 
  Zap, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Bot,
  Phone,
  Mail,
  ShoppingCart
} from "lucide-react";
import chatbotsImage from "@/assets/ai-chatbots.jpg";
import voiceImage from "@/assets/ai-voice-agents.jpg";
import automationImage from "@/assets/custom-automation.jpg";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      subtitle: "Intelligent Conversational Agents",
      description: "Deploy sophisticated AI chatbots across websites, WhatsApp, and social platforms to engage customers 24/7, answer queries, and drive conversions.",
      image: chatbotsImage,
      features: [
        "Website Live Chat Integration",
        "WhatsApp Business Automation",
        "Social Media Messaging",
        "Lead Qualification & Capture",
        "Multi-language Support",
        "Custom Knowledge Base Training"
      ],
      useCases: [
        "Customer Support Automation",
        "Lead Generation & Nurturing",
        "E-commerce Product Assistance",
        "FAQ & Information Delivery"
      ]
    },
    {
      icon: Mic,
      title: "AI Voice Agents",
      subtitle: "Advanced Voice Automation",
      description: "Transform your phone systems with AI-powered voice agents that handle customer inquiries, schedule appointments, and manage sales calls with human-like conversations.",
      image: voiceImage,
      features: [
        "IVR System Integration",
        "Appointment Scheduling",
        "Call Routing & Transfer",
        "Voice-to-Text Transcription",
        "Sentiment Analysis",
        "Real-time Call Analytics"
      ],
      useCases: [
        "Customer Service Hotlines",
        "Sales Call Automation",
        "Appointment Booking",
        "Survey & Feedback Collection"
      ]
    },
    {
      icon: Zap,
      title: "Custom AI Automation",
      subtitle: "Tailored Workflow Solutions",
      description: "Build custom AI-powered workflows for lead generation, email outreach, CRM management, and business process automation tailored to your specific needs.",
      image: automationImage,
      features: [
        "Lead Generation Automation",
        "Email Marketing Sequences",
        "CRM Data Management",
        "Social Media Automation",
        "Report Generation",
        "Task & Workflow Automation"
      ],
      useCases: [
        "Sales Pipeline Automation",
        "Marketing Campaign Management",
        "Data Entry & Processing",
        "Customer Onboarding"
      ]
    },
    {
      icon: BarChart3,
      title: "AI Website Design",
      subtitle: "Intelligent Web Development",
      description: "Create stunning, AI-powered websites with intelligent design recommendations, automated content generation, and responsive layouts that adapt to your brand and business needs.",
      image: automationImage,
      features: [
        "AI-Powered Design Generation",
        "Responsive Layout Creation",
        "Content Generation & Optimization",
        "Brand-Consistent Styling",
        "SEO-Optimized Structure",
        "Mobile-First Development"
      ],
      useCases: [
        "Business Website Creation",
        "E-commerce Store Design",
        "Landing Page Development",
        "Portfolio & Blog Sites"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            🚀 Complete AI Service Suite
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">AI Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive AI-powered automation solutions designed to transform your business operations and drive growth.
          </p>
          <Button variant="hero" size="lg">
            Start Your AI Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`mb-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:gap-12`}
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="relative overflow-hidden rounded-lg shadow-elegant">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <service.icon className="absolute bottom-4 right-4 h-12 w-12 text-primary" />
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-primary mr-3" />
                  <Badge variant="secondary">{service.subtitle}</Badge>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Key Features</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-aqua">Use Cases</h3>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <ArrowRight className="h-4 w-4 text-aqua mr-2 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Button variant="accent" size="lg" asChild>
                  <a href={
                    service.title === "AI Chatbots" ? "/services/ai-chatbot" :
                    service.title === "AI Voice Agents" ? "/services/ai-voice-agent" :
                    service.title === "Custom AI Automation" ? "/services/custom-ai-automation" :
                    service.title === "AI Website Design" ? "/services/ai-website-design" :
                    "#"
                  }>
                    Learn More About {service.title}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Platforms */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Seamless <span className="text-primary">Integrations</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect with your favorite tools and platforms for a unified automation experience
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "WhatsApp", icon: Phone },
              { name: "Zapier", icon: Zap },
              { name: "Shopify", icon: ShoppingCart },
              { name: "Zoho", icon: BarChart3 },
              { name: "Google Sheets", icon: BarChart3 },
              { name: "Email", icon: Mail },
            ].map((platform, index) => (
              <Card key={index} className="hover:scale-105 transition-all duration-300 hover:shadow-elegant">
                <CardContent className="p-6 text-center">
                  <platform.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="font-medium">{platform.name}</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss which AI services are right for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/pricing">View Pricing Plans</Link>
            </Button>
            <Button variant="default" size="lg" className="px-8" asChild>
              <Link to="/services/ai-chatbot">Try AI Chatbot Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;