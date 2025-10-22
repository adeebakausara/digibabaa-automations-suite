import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
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
  Cloud,
  CheckCircle,
  Workflow,
  Target
} from "lucide-react";
import { BookConsultationButton } from "@/components/BookConsultationButton";
import chatbotsImage from "@/assets/ai-chatbots.jpg";
import voiceImage from "@/assets/ai-voice-agents.jpg";
import automationImage from "@/assets/custom-automation.jpg";

const Portfolio = () => {
  // Demo templates from Demo page
  const demoTemplates = [
    {
      title: "AI Voice Agent Template Calls Customers, Confirms Appointments & Reduces No-Shows Automatically",
      videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Voice%20Agent%20Template%20Calls%20Customers,%20Confirms%20Appointments%20&%20Reduces%20No-Shows%20Automatically22.mp4",
      thumbnail: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Voice%20Agent%20Template%20Calls%20Customers,%20Confirms%20Appointments%20&%20Reduces%20No-Shows%20Automatically.jpg",
      description: {
        overview: "This AI agent calls your customers to remind them about appointments and confirms if they're still coming, reducing no-shows by up to 80%.",
        problem: "Most businesses lose $20,000+ yearly when customers forget appointments. This agent calls them automatically the day before, has natural conversations, and saves you from losing revenue.",
        integration: "The template uses Google Calendar and Google Sheets for logging, but can be integrated with other booking systems - you'd just connect them properly.",
        perfectFor: "Perfect for salons, clinics, repair shops, consultants with appointments, or agencies building voice AI solutions for service businesses."
      }
    },
    {
      title: "Building a Self-Learning AI Agent for Your Website",
      videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/Building%20a%20Self-Learning%20AI%20Agent%20for%20Your%20Website11.mp4",
      thumbnail: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/Building%20a%20Self-Learning%20AI%20Agent%20for%20Your%20Website.jpg",
      description: {
        overview: "This AI agent acts as your 24/7 sales assistant, helping website visitors find the right product, get instant answers, and receive direct purchase links, all while learning from every interaction.",
        process: "Once set up, visitors can simply start a chat on your website, ask about products, and the AI will answer their questions, recommend the best options, and remember past conversations to improve its responses over time."
      }
    },
    {
      title: "AI Agent Template Handles Product Inquiries, Checks Orders & Records Support Tickets via WhatsApp",
      videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20Handles%20Product%20Inquiries,%20Checks%20Orders%20&%20Records%20Support%20Tickets%20via%20WhatsApp.mp4",
      thumbnail: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20Handles%20Product%20Inquiries,%20Checks%20Orders%20&%20Records%20Support%20Tickets%20via%20WhatsApp.jpg",
      description: {
        overview: "This AI agent gets product information and links, checks order status, and records support tickets via WhatsApp, 24/7.",
        benefits: "Most businesses take hours to respond on WhatsApp. This agent responds instantly to all customer messages and saves 10-20+ hours per week handling repetitive tasks.",
        integration: "The template uses Google Sheets as Demo Database, but can be integrated with other ecommerce systems - you'd just connect them properly.",
        perfectFor: "Perfect for online shops, e-commerce stores, small businesses with customer service needs, or agencies building WhatsApp automation for clients."
      }
    },
    {
      title: "AI Agent Template WhatsApp Sales Assistant with Voice & Vision",
      videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20WhatsApp%20Sales%20Assistant%20with%20Voice%20&%20vision.mp4",
      thumbnail: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20WhatsApp%20Sales%20Assistant%20with%20Voice%20&%20vision.jpg",
      description: {
        problem: "Answering customer questions manually is a time-sucking nightmare.",
        solution: "This AI agent solves it by handling product questions on WhatsApp, sending purchase links, and even replying to voice messages with voice and understanding screenshots your customers upload.",
        experience: "It feels like a real person chatting with them 24/7, but it's fully automated, self-learning, and connects directly to your product database.",
        capabilities: "Customers can talk, type, or send images, and your AI agent listens, sees, replies, and sells."
      }
    },
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
  ];

  // Custom automation features
  const features = [
    "Tailored to your unique needs",
    "Automate workflows and customer interactions", 
    "Enhance efficiency, reduce costs",
    "Easy integration with your existing systems"
  ];

  // Projects data from existing portfolio
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

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "DigiBabaa Portfolio - AI Marketing Case Studies & Examples",
    "description": "See real AI automation examples and case studies across chatbots, voice agents, and custom workflows",
    "publisher": {
      "@type": "Organization",
      "name": "DigiBabaa"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Portfolio - AI Marketing Case Studies & Examples"
        description="Explore our portfolio of successful AI marketing implementations. Real-world examples of chatbots, voice agents, and automation solutions that drive results."
        keywords="AI marketing portfolio, chatbot examples, voice agent case studies, marketing automation examples, AI implementation success stories"
        schema={portfolioSchema}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            🎥 Video Samples
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Video Samples & <span className="bg-gradient-primary bg-clip-text text-transparent">Success Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our video samples: from ready-to-deploy AI agent templates to custom automation systems and real client success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => {
                const demoSection = document.getElementById('ai-agent-templates');
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Live Demos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const successSection = document.getElementById('success-stories');
                if (successSection) {
                  successSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Play className="mr-2 h-4 w-4" />
              Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* AI Agent Templates - Live Demos Section */}
      <section id="ai-agent-templates" className="py-16 bg-gradient-to-br from-background to-card/50">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {demoTemplates.map((template, index) => (
              <Card key={index} className="overflow-hidden flex flex-col h-full">
                <CardContent className="p-0 flex-1 flex flex-col">
                  {/* Template Title */}
                  <div className="p-6 pb-4">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-tight">
                      {template.title}
                    </h3>
                  </div>
                  
                  {/* Video */}
                  <div className="px-6 pb-4">
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
                  <div className="p-6 pt-2 flex-1">
                    <div className="prose prose-base max-w-none text-muted-foreground space-y-3">
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-ai">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's build AI solutions that transform your business operations and drive real results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">Start Your AI Journey</Link>
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

export default Portfolio;