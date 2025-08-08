import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  ArrowRight, 
  MessageSquare, 
  Mic, 
  Zap, 
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  Play
} from "lucide-react";
import { BookConsultationButton } from "@/components/BookConsultationButton";
import chatbotsImage from "@/assets/ai-chatbots.jpg";
import voiceImage from "@/assets/ai-voice-agents.jpg";
import automationImage from "@/assets/custom-automation.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Complete AI Solution",
      client: "RetailMax Inc.",
      industry: "E-commerce",
      image: chatbotsImage,
      description: "Full-stack AI implementation including website redesign, AI chatbots for customer support, voice ordering system, and automated workflow for order processing and inventory management.",
      results: {
        "Response Time": "2 minutes (from 2 hours)",
        "Customer Satisfaction": "95% (improved from 78%)",
        "Cost Reduction": "60% in support costs",
        "Conversion Rate": "45% increase in sales"
      },
      services: ["AI Website Design", "AI Chatbot", "AI Voice Agent", "Custom Workflow"],
      icon: MessageSquare,
      demoAvailable: true
    },
    {
      title: "Healthcare AI Voice & Booking System",
      client: "MedCare Clinics",
      industry: "Healthcare",
      image: voiceImage,
      description: "Comprehensive healthcare solution with AI voice agents for appointment scheduling, patient pre-screening, chatbot for FAQ, and custom website with patient portal integration.",
      results: {
        "Appointment Efficiency": "80% automated scheduling",
        "Patient Satisfaction": "92% approval rating",
        "Staff Time Saved": "15 hours per week",
        "Online Bookings": "85% of appointments"
      },
      services: ["AI Voice Agent", "AI Website Design", "AI Chatbot", "Custom Workflow"],
      icon: Mic,
      demoAvailable: true
    },
    {
      title: "Real Estate Lead Generation Platform",
      client: "PropertyPro Realty",
      industry: "Real Estate",
      image: automationImage,
      description: "AI-powered real estate platform with intelligent website design, chatbot for property inquiries, voice follow-up system, and automated lead qualification workflow.",
      results: {
        "Lead Quality": "85% qualified leads",
        "Response Time": "Under 5 minutes",
        "Agent Productivity": "200% increase",
        "Deal Closure": "35% faster transactions"
      },
      services: ["AI Website Design", "AI Chatbot", "AI Voice Agent", "Custom Workflow"],
      icon: BarChart3,
      demoAvailable: true
    },
    {
      title: "Restaurant Chain AI Automation",
      client: "FoodieChain",
      industry: "Food & Beverage",
      image: chatbotsImage,
      description: "Multi-location restaurant solution with AI website, voice ordering system, chatbot for reservations, and automated workflow for inventory and order management across all locations.",
      results: {
        "Order Accuracy": "99.2% accuracy rate",
        "Order Processing": "50% faster fulfillment",
        "Customer Experience": "90% satisfaction score",
        "Revenue Growth": "30% increase in orders"
      },
      services: ["AI Voice Agent", "AI Chatbot", "Custom Workflow", "AI Website Design"],
      icon: Zap,
      demoAvailable: true
    },
    {
      title: "Financial Services Digital Transformation",
      client: "FinanceFirst Bank",
      industry: "Financial Services",
      image: voiceImage,
      description: "Complete digital overhaul with modern AI website, chatbot for customer queries, voice banking system, and automated workflow for loan processing and customer onboarding.",
      results: {
        "Onboarding Time": "Reduced from 5 days to 2 hours",
        "Customer Queries": "90% resolved by AI",
        "Processing Speed": "70% faster loan approvals",
        "Customer Satisfaction": "88% positive feedback"
      },
      services: ["AI Website Design", "AI Chatbot", "AI Voice Agent", "Custom Workflow"],
      icon: TrendingUp,
      demoAvailable: false
    },
    {
      title: "SaaS Platform AI Integration",
      client: "CloudTech Solutions",
      industry: "B2B SaaS",
      image: automationImage,
      description: "Comprehensive SaaS enhancement with redesigned AI-powered website, intelligent chatbot for technical support, voice-activated features, and custom automation workflows for user onboarding.",
      results: {
        "User Adoption": "90% increase in daily active users",
        "Support Resolution": "75% automated",
        "Onboarding Speed": "60% faster user setup",
        "Customer Retention": "85% improvement"
      },
      services: ["AI Website Design", "AI Chatbot", "Custom Workflow", "AI Voice Agent"],
      icon: Users,
      demoAvailable: true
    },
    {
      title: "EdTech AI Learning Ecosystem",
      client: "SmartLearn Academy",
      industry: "Education",
      image: chatbotsImage,
      description: "AI-powered educational platform with adaptive website design, tutoring chatbot, voice-based learning assistant, and automated workflow for student progress tracking and personalized curriculum delivery.",
      results: {
        "Learning Outcomes": "65% improvement in test scores",
        "Student Engagement": "180% increase in course completion",
        "Teacher Efficiency": "40% time saved on administrative tasks",
        "Platform Usage": "300% growth in active users"
      },
      services: ["AI Website Design", "AI Chatbot", "AI Voice Agent", "Custom Workflow"],
      icon: MessageSquare,
      demoAvailable: true
    },
    {
      title: "Manufacturing AI Operations Hub",
      client: "IndustriPro Manufacturing",
      industry: "Manufacturing",
      image: voiceImage,
      description: "Industrial AI solution with operations dashboard website, chatbot for employee queries, voice-controlled equipment interface, and custom workflow automation for production scheduling and quality control.",
      results: {
        "Production Efficiency": "45% increase in output",
        "Error Reduction": "80% fewer quality issues",
        "Employee Training": "50% faster onboarding",
        "Operational Costs": "35% reduction"
      },
      services: ["AI Website Design", "AI Chatbot", "AI Voice Agent", "Custom Workflow"],
      icon: BarChart3,
      demoAvailable: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            📁 Our Work
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Success Stories & <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how we've transformed businesses across industries with our AI automation solutions. Real results, real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo Reel
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50 hover:border-primary/30 overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{project.industry}</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  {project.demoAvailable && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500/20 text-green-400 border-green-400/30">
                        <Play className="h-3 w-3 mr-1" />
                        Demo Available
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{project.client}</Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  {/* Services Used */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Services Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-aqua">Key Results:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(project.results).map(([metric, value], idx) => (
                        <div key={idx} className="text-center p-3 bg-card/50 rounded-lg border border-border/50">
                          <div className="text-sm font-semibold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground">{metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1" 
                      asChild
                    >
                      <Link 
                        to={
                          index === 0 ? "/case-study/ecommerce" :
                          index === 1 ? "/case-study/healthcare" :
                          index === 2 ? "/case-study/real-estate" :
                          index === 3 ? "/case-study/restaurant" :
                          "/contact"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Case Study
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                    {project.demoAvailable && (
                      <Button variant="accent" size="sm">
                        <Play className="h-3 w-3 mr-1" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Collective <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The combined results from our portfolio of AI automation projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                metric: "Average ROI",
                value: "320%",
                description: "Return on investment within first year"
              },
              {
                icon: Clock,
                metric: "Time Saved",
                value: "500+",
                description: "Hours saved per client per month"
              },
              {
                icon: Users,
                metric: "Customer Satisfaction",
                value: "92%",
                description: "Average satisfaction score improvement"
              },
              {
                icon: BarChart3,
                metric: "Cost Reduction",
                value: "65%",
                description: "Average operational cost savings"
              }
            ].map((stat, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <h3 className="text-lg font-semibold mb-2">{stat.metric}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Workflow Samples */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sample <span className="text-primary">Automation Workflows</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get a glimpse of how our AI automation workflows operate in real business scenarios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lead Capture to Conversion",
                steps: [
                  "Visitor lands on website",
                  "AI chatbot engages automatically",
                  "Qualified lead data captured",
                  "CRM entry created instantly",
                  "Personalized follow-up sequence",
                  "Sales team notification"
                ],
                color: "border-primary/30"
              },
              {
                title: "Customer Support Flow",
                steps: [
                  "Customer sends inquiry",
                  "AI classifies issue type",
                  "Knowledge base search",
                  "Instant response provided",
                  "Escalation if needed",
                  "Follow-up satisfaction survey"
                ],
                color: "border-aqua/30"
              },
              {
                title: "Voice Order Processing",
                steps: [
                  "Customer calls voice line",
                  "AI agent takes order",
                  "Inventory check in real-time",
                  "Payment processing",
                  "Order confirmation sent",
                  "Fulfillment team notified"
                ],
                color: "border-purple-start/30"
              }
            ].map((workflow, index) => (
              <Card key={index} className={`hover:scale-105 transition-all duration-300 hover:shadow-elegant ${workflow.color} border-2`}>
                <CardHeader>
                  <CardTitle className="text-lg">{workflow.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workflow.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-xs font-semibold text-primary">{idx + 1}</span>
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can deliver similar results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>

      <BookConsultationButton variant="fixed" position="bottom-left" />
      <Footer />
    </div>
  );
};

export default Portfolio;