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
import chatbotsImage from "@/assets/ai-chatbots.jpg";
import voiceImage from "@/assets/ai-voice-agents.jpg";
import automationImage from "@/assets/custom-automation.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "AI-Powered E-commerce Website",
      client: "ModernShop Co.",
      industry: "E-commerce",
      image: chatbotsImage,
      description: "Designed and developed a responsive e-commerce website with AI-powered product recommendations, smart search, and personalized user experiences.",
      results: {
        "Conversion Rate": "45% increase",
        "Page Load Speed": "2.1s (50% faster)",
        "User Engagement": "75% longer sessions",
        "Mobile Experience": "98% mobile optimization score"
      },
      services: ["AI Website Design", "Responsive Design", "UX/UI Optimization"],
      icon: MessageSquare,
      demoAvailable: true
    },
    {
      title: "SaaS Platform Interface Design",
      client: "CloudTech Solutions",
      industry: "B2B SaaS",
      image: voiceImage,
      description: "Created an intuitive AI-enhanced dashboard interface for a cloud management platform with smart data visualization and predictive analytics.",
      results: {
        "User Adoption": "90% increase in daily active users",
        "Task Completion": "60% faster user workflows",
        "Support Tickets": "40% reduction in UI-related issues",
        "Customer Satisfaction": "94% positive feedback"
      },
      services: ["AI Website Design", "Dashboard UI", "Data Visualization"],
      icon: BarChart3,
      demoAvailable: true
    },
    {
      title: "Healthcare Practice Website",
      client: "WellCare Medical Group",
      industry: "Healthcare",
      image: automationImage,
      description: "Developed a HIPAA-compliant website with AI-powered appointment booking, patient portal, and telemedicine integration.",
      results: {
        "Online Bookings": "80% of appointments now online",
        "Patient Portal Usage": "95% patient adoption",
        "Administrative Time": "50% reduction",
        "Patient Satisfaction": "92% improvement rating"
      },
      services: ["AI Website Design", "Patient Portal", "HIPAA Compliance"],
      icon: Mic,
      demoAvailable: false
    },
    {
      title: "Real Estate AI Website Platform",
      client: "PremierHomes Realty",
      industry: "Real Estate",
      image: chatbotsImage,
      description: "Built an AI-driven real estate website with smart property matching, virtual tours, and automated lead qualification system.",
      results: {
        "Lead Quality": "85% qualified leads",
        "Virtual Tour Engagement": "200% increase",
        "Property Matching Accuracy": "92% success rate",
        "Agent Productivity": "150% improvement"
      },
      services: ["AI Website Design", "Virtual Tours", "Lead Qualification"],
      icon: BarChart3,
      demoAvailable: true
    },
    {
      title: "FinTech Dashboard Redesign",
      client: "InvestSmart Capital",
      industry: "Financial Services",
      image: voiceImage,
      description: "Redesigned investment platform with AI-powered portfolio insights, risk assessment tools, and personalized financial recommendations.",
      results: {
        "User Engagement": "120% increase in daily usage",
        "Investment Accuracy": "78% better outcomes",
        "Client Retention": "95% retention rate",
        "Platform Performance": "3x faster load times"
      },
      services: ["AI Website Design", "Financial UI", "Data Analytics"],
      icon: TrendingUp,
      demoAvailable: true
    },
    {
      title: "EdTech Learning Platform",
      client: "SmartLearn Academy",
      industry: "Education",
      image: automationImage,
      description: "Created an adaptive learning platform with AI-powered personalized curricula, progress tracking, and interactive content delivery.",
      results: {
        "Learning Outcomes": "65% improvement in test scores",
        "Student Engagement": "180% increase in course completion",
        "Teacher Efficiency": "40% time saved on grading",
        "Platform Usage": "300% growth in active users"
      },
      services: ["AI Website Design", "Learning Management", "Adaptive UI"],
      icon: Users,
      demoAvailable: true
    },
    {
      title: "Restaurant Chain Order Management",
      client: "FoodieChain",
      industry: "Food & Beverage",
      image: chatbotsImage,
      description: "Integrated AI chatbots with voice ordering for multi-location restaurant chain with real-time inventory management.",
      results: {
        "Order Accuracy": "99.2% accuracy rate",
        "Order Processing": "50% faster fulfillment",
        "Customer Experience": "90% satisfaction score",
        "Revenue Growth": "30% increase in orders"
      },
      services: ["Voice Ordering", "Inventory Integration", "Multi-location Setup"],
      icon: BarChart3,
      demoAvailable: true
    },
    {
      title: "Financial Services Customer Onboarding",
      client: "FinanceFirst Bank",
      industry: "Financial Services",
      image: voiceImage,
      description: "Automated customer onboarding process with AI chatbots for document collection, verification, and account setup.",
      results: {
        "Onboarding Time": "Reduced from 5 days to 2 hours",
        "Document Processing": "95% automated verification",
        "Customer Satisfaction": "88% positive feedback",
        "Compliance Score": "100% regulatory compliance"
      },
      services: ["Document AI", "Compliance Automation", "Identity Verification"],
      icon: MessageSquare,
      demoAvailable: false
    },
    {
      title: "Real Estate Lead Qualification System",
      client: "PropertyPro Realty",
      industry: "Real Estate",
      image: automationImage,
      description: "Built comprehensive lead qualification system with chatbots, voice follow-ups, and automated property matching.",
      results: {
        "Lead Response": "Under 5 minutes",
        "Qualification Rate": "75% pre-qualified leads",
        "Agent Productivity": "200% increase",
        "Deal Closure": "35% faster transactions"
      },
      services: ["Lead Qualification", "Property Matching", "Agent Integration"],
      icon: BarChart3,
      demoAvailable: true
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
                    <Button variant="outline" size="sm" className="flex-1">
                      View Case Study
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

      {/* Featured Workflow */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              🔥 Featured Workflow
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">E-commerce Customer Support Automation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive automation workflow that handles customer inquiries, order lookups, return requests, and support ticket creation with intelligent routing and notifications.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
              <div className="p-8">
                <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/c46b64bf-41c9-42f4-a2a6-862b87aaccdd.png" 
                    alt="E-commerce Customer Support Automation Workflow"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50">
                    <div className="text-2xl font-bold text-primary mb-1">8</div>
                    <div className="text-sm text-muted-foreground">Automation Steps</div>
                  </div>
                  <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50">
                    <div className="text-2xl font-bold text-aqua mb-1">5</div>
                    <div className="text-sm text-muted-foreground">Integration Points</div>
                  </div>
                  <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50">
                    <div className="text-2xl font-bold text-purple-start mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Availability</div>
                  </div>
                  <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50">
                    <div className="text-2xl font-bold text-primary mb-1">95%</div>
                    <div className="text-sm text-muted-foreground">Automation Rate</div>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Key Features:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Intelligent order inquiry handling
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-aqua rounded-full mr-3"></div>
                        Automated return request processing
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-start rounded-full mr-3"></div>
                        Support ticket creation & routing
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Multi-channel notifications (Email & Slack)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-aqua">Business Impact:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        85% reduction in response time
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        70% decrease in manual workload
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        98% accuracy in order processing
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        24/7 customer support coverage
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg">
                    Build Similar Workflow
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    View Technical Details
                  </Button>
                </div>
              </div>
            </Card>
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

      <Footer />
    </div>
  );
};

export default Portfolio;