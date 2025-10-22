import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
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
      name: "Akbar Hayat",
      role: "Founder & Visionary Leader",
      image: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/testimonials/Akbar%20Hayat%20founder1.jpg"
    },
    {
      name: "Tanveer Ahmad",
      role: "Cofounder & Strategy Head",
      image: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/testimonials/Tanveer.jpg"
    },
    {
      name: "M. Abdullah",
      role: "AI Solutions Architect",
      image: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/testimonials/Abdulllah.jpg"
    },
    {
      name: "Fahad Khan",
      role: "Automation Specialist",
      image: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/testimonials/fahad.png"
    },
    {
      name: "M. Athar",
      role: "Creative Developer",
      image: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/testimonials/athar.png"
    },
    {
      name: "Umar Farooq",
      role: "Innovation & Research Lead",
      image: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/testimonials/umar.png"
    }
  ];

  const stats = [
    { number: "500+", label: "Businesses Automated" },
    { number: "2M+", label: "Conversations Handled" },
    { number: "85%", label: "Average Cost Reduction" },
    { number: "99.9%", label: "System Uptime" }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "DigiBabaa",
      "description": "Leading AI Marketing agency specializing in chatbots, voice agents, and intelligent automation solutions",
      "foundingDate": "2023",
      "founder": {
        "@type": "Person",
        "name": "Akbar Hayat"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us - Leading AI Marketing Agency"
        description="Learn about DigiBabaa's mission to revolutionize marketing with AI. Expert team delivering chatbots, voice agents, and automation solutions that drive real results."
        keywords="AI marketing agency, about DigiBabaa, AI automation experts, marketing automation company, AI chatbot agency"
        schema={aboutSchema}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            🚀 About DigiBabaa
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Leading the Future of{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Marketing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            DigiBabaa is an innovative AI Marketing agency that helps businesses generate more leads, 
            engage customers, and drive revenue through intelligent automation. We combine cutting-edge 
            AI technology with proven marketing strategies to deliver measurable growth.
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
                  To empower businesses with AI-powered marketing solutions that generate qualified leads, 
                  increase customer engagement, and drive sustainable revenue growth through intelligent automation.
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
                  To be the world's most trusted AI Marketing agency, where businesses of all sizes 
                  leverage intelligent automation to compete, scale, and win in the digital marketplace.
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
                  Results-driven, innovative, and client-focused. We deliver AI marketing solutions 
                  that are measurable, transparent, and designed to maximize ROI for our clients.
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
              At DigiBabaa, we believe great innovation comes from great people. Our passionate team brings together vision, creativity, and technical brilliance to deliver AI automation that transforms businesses. Together, we're not just building technology—we're shaping the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-primary">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-primary rounded-full flex items-center justify-center"><svg class="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/></svg></div>';
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
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
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how DigiBabaa can scale your marketing with AI automation
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