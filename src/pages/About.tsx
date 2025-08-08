import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Zap
} from "lucide-react";
import { BookConsultationButton } from "@/components/BookConsultationButton";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay at the forefront of AI technology to deliver cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results and building long-term partnerships."
    },
    {
      icon: Shield,
      title: "Trust & Security", 
      description: "We prioritize data privacy, security, and compliance with GDPR and other regulations in all our solutions."
    },
    {
      icon: Heart,
      title: "Human-Centric AI",
      description: "Our AI solutions enhance human capabilities rather than replace them, creating better experiences for everyone."
    }
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "CEO & Founder",
      expertise: "AI Strategy, Business Development",
      experience: "10+ years in AI and automation"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      expertise: "Machine Learning, System Architecture",
      experience: "8+ years in AI development"
    },
    {
      name: "Marcus Johnson",
      role: "Head of Solutions",
      expertise: "Integration, Customer Success",
      experience: "12+ years in enterprise solutions"
    },
    {
      name: "Elena Petrov",
      role: "Lead AI Engineer",
      expertise: "NLP, Voice Recognition",
      experience: "6+ years in AI research"
    }
  ];

  const stats = [
    { number: "500+", label: "Businesses Automated" },
    { number: "2M+", label: "Conversations Handled" },
    { number: "85%", label: "Average Cost Reduction" },
    { number: "99.9%", label: "System Uptime" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            🚀 About DigiBabaa
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pioneering the Future of{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Automation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're on a mission to democratize AI automation, making advanced technology 
            accessible to businesses of all sizes to drive growth and efficiency.
          </p>
          <Button variant="hero" size="lg">
            Join Our Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <Card className="text-center hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses worldwide with intelligent automation solutions 
                  that enhance productivity, improve customer experiences, and drive sustainable growth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-ai rounded-full mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-aqua">Our Vision</h3>
                <p className="text-muted-foreground">
                  To create a world where AI seamlessly integrates with human expertise, 
                  enabling businesses to focus on innovation while AI handles routine operations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-purple rounded-full mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-start">Our Values</h3>
                <p className="text-muted-foreground">
                  Built on innovation, integrity, and impact. We believe technology should 
                  serve humanity, creating solutions that are ethical, transparent, and beneficial.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect our commitment to client success
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our <span className="text-primary">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry veterans with deep expertise in AI, automation, and business transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground mb-2">{member.expertise}</p>
                  <p className="text-xs text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">Privacy</span> & Security
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your data security and privacy are our top priorities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "GDPR Compliant",
                description: "Full compliance with GDPR and international data protection regulations"
              },
              {
                icon: Award,
                title: "SOC 2 Certified",
                description: "Industry-standard security controls and auditing procedures"
              },
              {
                icon: CheckCircle,
                title: "End-to-End Encryption",
                description: "All data transmission and storage protected with enterprise-grade encryption"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ai">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Zap className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how DigiBabaa can transform your business with AI automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <BookConsultationButton variant="fixed" position="bottom-left" />
      <Footer />
    </div>
  );
};

export default About;