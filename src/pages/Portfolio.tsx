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
  Play,
  Settings,
  Cloud
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
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => {
                window.open('/portfolio', '_blank');
              }}
            >
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  // Scroll to portfolio section or navigate within same page
                  const portfolioSection = document.querySelector('section');
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
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

      {/* AI Agent Templates Demo Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              🤖 AI Agent Templates
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI Agent Templates –{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Live Demos
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See our pre-built AI agent templates in action. Each template is ready to deploy and customize for your specific business needs.
            </p>
          </div>
          
          <div className="space-y-16">
            {[
              {
                title: "AI Agent Template: Answers Any Question via WhatsApp From Your Documents & Saves 40+ Hours Monthly",
                videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20Answers%20Any%20Question%20via%20WhatsApp%20From%20Your%20Documents%20&%20Saves%2040+%20Hours%20Monthly.mp4",
                thumbnail: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20Answers%20Any%20Question%20via%20WhatsApp%20From%20Your%20Documents%20&%20Saves%2040+%20Hours%20Monthly.JPG",
                description: {
                  problem: "You spend 40–100+ hours monthly answering repetitive WhatsApp questions – the same product details, prices, and policies over and over.",
                  solution: "This AI agent reads your uploaded documents (PDFs, FAQs, price lists, websites) and automatically answers customer questions on WhatsApp using YOUR exact information.",
                  howItWorks: "Drag and drop any file into the system. The AI learns your content instantly. When customers message, it finds the answer in your documents and responds in seconds.",
                  bestFor: "Coaches, course creators, e-commerce stores, service businesses, or agencies offering WhatsApp automation."
                }
              },
              {
                title: "AI Agent Template: Books Appointments with Customers via WhatsApp",
                videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20Books%20Appointments%20with%20Customers%20via%20WhatsApp.mp4",
                thumbnail: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20Books%20Appointments%20with%20Customers%20via%20WhatsApp.jpg",
                description: {
                  overview: "This AI agent books appointments with customers via WhatsApp, 24/7.",
                  benefits: "Businesses can get 35–45% MORE customers when they offer WhatsApp booking instead of just phone calls. Plus can save $2k/m per month on staff costs.",
                  process: "When someone messages you OR clicks the WhatsApp link on your website, the AI replies instantly, asks what service they need, and checks available times.",
                  booking: "The customer picks their time, and the AI books it directly into your calendar with all their contact details. It also sends automatic SMS reminders before their appointment so they actually show up.",
                  perfectFor: "Any business that takes appointments – salons, clinics, restaurants, gyms, consultants."
                }
              },
              {
                title: "AI Agent Template: Instagram DMs to Sales Calls & Product Sales",
                videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20Instagram%20DMs%20to%20Sales%20Calls%20&%20Product%20Sales.mp4",
                thumbnail: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20Instagram%20DMs%20to%20Sales%20Calls%20&%20Product%20Sales.jpg",
                description: {
                  overview: "This AI automation turns every Instagram comment or DM into booked sales calls or product sales.",
                  workflow: "It starts when someone comments on any post or sends a DM. The AI replies instantly, asks a few smart qualifying questions to figure out what they need, and checks if they're a good fit for your offer.",
                  booking: "If yes, it collects their contact details, shows available time slots, and books the call right into your calendar.",
                  followUp: "If they don't book right away, it follows up automatically. It also sends SMS reminders so they actually show up.",
                  alternative: "And if they're not a fit for a call, it sends them straight to your entry level product."
                }
              },
              {
                title: "AI Agent Template: Your WhatsApp Sales Assistant",
                videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20Your%20WhatsApp%20Sales%20Assistant.mp4",
                thumbnail: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20Your%20WhatsApp%20Sales%20Assistant.jpg",
                description: {
                  overview: "Answering customer questions manually? This AI agent acts as your personal sales assistant, helping potential buyers find the right product, get instant answers, and receive direct purchase links, all through WhatsApp.",
                  process: "Once set up, customers can simply message your WhatsApp number, describe what they need, and the AI will recommend the best products, handle inquiries, and guide them to checkout – making sales effortless."
                }
              },
              {
                title: "AI Agent Template: WhatsApp AI Agent \"Appointment Setter\"",
                videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20WhatsApp%20AI%20Agent%20Appointment%20Setter.mp4",
                thumbnail: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20WhatsApp%20AI%20Agent%20Appointment%20Setter.jpg",
                description: {
                  overview: "Let people book appointments with you, just by messaging your AI assistant on WhatsApp.",
                  simplicity: "No booking links. No forms. No websites.",
                  functionality: "This AI agent chats with your clients or prospects via text or voice, checks your office hours and available time slots, converts to their time zone, and collects all the important info like their name, email, phone number, and even what they want to talk about.",
                  completion: "Once confirmed, it adds the appointment to your calendar, sends an email confirmation to both of you, and reminds them on WhatsApp one hour before the meeting – so they actually show up."
                }
              }
            ].map((template, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Template Title */}
                  <div className="p-8 pb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {template.title}
                    </h3>
                  </div>
                  
                  {/* Video */}
                  <div className="px-8 pb-6">
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                      <video 
                        controls 
                        className="w-full h-full object-cover"
                        preload="metadata"
                        poster={template.thumbnail}
                      >
                        <source src={template.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="p-8 pt-2">
                    <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                      {template.description.problem && (
                        <p>
                          <span className="font-bold text-foreground">The Problem:</span> {template.description.problem}
                        </p>
                      )}
                      {template.description.solution && (
                        <p>
                          <span className="font-bold text-foreground">What This Does:</span> {template.description.solution}
                        </p>
                      )}
                      {template.description.howItWorks && (
                        <p>
                          <span className="font-bold text-foreground">How It Works:</span> {template.description.howItWorks}
                        </p>
                      )}
                      {template.description.bestFor && (
                        <p>
                          <span className="font-bold text-foreground">Best For:</span> {template.description.bestFor}
                        </p>
                      )}
                      {template.description.overview && (
                        <p>{template.description.overview}</p>
                      )}
                      {template.description.benefits && (
                        <p>{template.description.benefits}</p>
                      )}
                      {template.description.process && (
                        <p>{template.description.process}</p>
                      )}
                      {template.description.workflow && (
                        <p>{template.description.workflow}</p>
                      )}
                      {template.description.booking && (
                        <p>{template.description.booking}</p>
                      )}
                      {template.description.followUp && (
                        <p>{template.description.followUp}</p>
                      )}
                      {template.description.alternative && (
                        <p>{template.description.alternative}</p>
                      )}
                      {template.description.perfectFor && (
                        <p>
                          <span className="font-bold text-foreground">Perfect For:</span> {template.description.perfectFor}
                        </p>
                      )}
                      {template.description.simplicity && (
                        <p>{template.description.simplicity}</p>
                      )}
                      {template.description.functionality && (
                        <p>{template.description.functionality}</p>
                      )}
                      {template.description.completion && (
                        <p>{template.description.completion}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom AI Automation Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              🔧 Custom Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Custom AI Automation Systems
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Explore our suite of AI-powered automation systems designed to streamline business operations, 
              increase efficiency, and enhance customer experience. Browse through our offerings and find the perfect fit for your needs.
            </p>
          </div>

          {/* Automation Workflow Cards Grid */}
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

          {/* Integrations Section */}
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Enterprise <span className="text-primary">Integrations</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-12">
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
                    <h4 className="font-semibold mb-2">{integration.name}</h4>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => {
                // Open portfolio page to view case studies
                const currentPath = window.location.pathname;
                if (currentPath === '/portfolio') {
                  // Scroll to top of current page
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  // Navigate to portfolio page
                  window.location.href = '/portfolio';
                }
              }}
            >
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