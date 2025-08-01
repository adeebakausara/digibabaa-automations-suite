import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Home,
  MessageSquare,
  Mic,
  Globe,
  TrendingUp,
  CheckCircle,
  Clock,
  Target,
  BarChart3
} from "lucide-react";
import automationImage from "@/assets/custom-automation.jpg";

const RealEstateCaseStudy = () => {
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
              🏠 Real Estate Case Study
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Real Estate Lead <span className="bg-gradient-primary bg-clip-text text-transparent">Generation Platform</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            PropertyPro Realty achieved 85% qualified leads and 200% agent productivity increase through our AI-powered real estate platform.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Badge variant="outline" className="px-4 py-2">
              <Globe className="h-4 w-4 mr-2" />
              Smart Website
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <MessageSquare className="h-4 w-4 mr-2" />
              Property Chatbot
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Mic className="h-4 w-4 mr-2" />
              Voice Follow-up
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Lead Qualification
            </Badge>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={automationImage} 
              alt="Real Estate AI Platform"
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
                PropertyPro Realty, a growing real estate agency, was struggling with lead quality issues, 
                slow response times to inquiries, and inefficient agent workflows. They needed a modern 
                solution to capture, qualify, and nurture leads while maximizing agent productivity.
              </p>
              <p className="text-muted-foreground mb-6">
                Our AI-powered real estate platform included an intelligent website with property search 
                capabilities, chatbot for instant property inquiries, voice follow-up system for leads, 
                and automated lead qualification workflows.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Client Information</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-medium w-24">Company:</span>
                  <span className="text-muted-foreground">PropertyPro Realty</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Industry:</span>
                  <span className="text-muted-foreground">Real Estate</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Size:</span>
                  <span className="text-muted-foreground">25-100 employees</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Timeline:</span>
                  <span className="text-muted-foreground">3.5 months implementation</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Results</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Lead Quality", value: "85%", change: "qualified leads", icon: Target },
                  { label: "Response Time", value: "<5 min", change: "average response", icon: Clock },
                  { label: "Agent Productivity", value: "200%", change: "increase", icon: TrendingUp },
                  { label: "Deal Closure", value: "35%", change: "faster transactions", icon: BarChart3 }
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
                {["React", "Node.js", "OpenAI API", "MLS Integration", "CRM API", "Twilio", "AWS"].map((tech, index) => (
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
                  "Low-quality leads wasting agent time",
                  "Slow response to property inquiries",
                  "Manual lead qualification process",
                  "Outdated website with poor search functionality",
                  "Inconsistent follow-up with prospects",
                  "Difficulty tracking lead sources and ROI"
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
                  "AI-powered lead qualification and scoring system",
                  "Instant chatbot responses to property inquiries",
                  "Intelligent property search with MLS integration",
                  "Automated voice follow-up for qualified leads",
                  "CRM integration for seamless lead management",
                  "Advanced analytics for lead source tracking"
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
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Smart Property Search",
                description: "AI-powered search with natural language queries and personalized recommendations"
              },
              {
                icon: MessageSquare,
                title: "Property Inquiry Bot",
                description: "Instant responses to property questions, scheduling, and virtual tour booking"
              },
              {
                icon: Target,
                title: "Lead Qualification",
                description: "Automated scoring based on budget, timeline, and property preferences"
              },
              {
                icon: Mic,
                title: "Voice Follow-up",
                description: "AI voice agent for personalized follow-up calls and appointment scheduling"
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                description: "Real-time insights on lead sources, conversion rates, and agent performance"
              },
              {
                icon: Globe,
                title: "CRM Integration",
                description: "Seamless integration with existing CRM systems and MLS databases"
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

      {/* Testimonial */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-8 bg-gradient-to-br from-card/50 to-muted/30">
            <CardContent>
              <blockquote className="text-xl italic mb-6">
                "The AI platform has completely transformed how we handle leads. Our agents are now focusing 
                on serious buyers instead of chasing unqualified prospects. Our closing rate has improved 
                dramatically, and our clients love the instant responses."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <p className="font-semibold">Jennifer Martinez</p>
                  <p className="text-sm text-muted-foreground">Broker Owner, PropertyPro Realty</p>
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
            Ready to Revolutionize Your Real Estate Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how AI can boost your lead generation and agent productivity
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

export default RealEstateCaseStudy;