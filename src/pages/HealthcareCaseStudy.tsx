import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Mic,
  MessageSquare,
  Calendar,
  Globe,
  TrendingUp,
  CheckCircle,
  Clock,
  Users,
  Heart
} from "lucide-react";
import voiceImage from "@/assets/ai-voice-agents.jpg";

const HealthcareCaseStudy = () => {
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
              🏥 Healthcare Case Study
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Healthcare AI Voice & <span className="bg-gradient-primary bg-clip-text text-transparent">Booking System</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            MedCare Clinics achieved 80% automated scheduling and 92% patient satisfaction through our comprehensive healthcare AI solution.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Badge variant="outline" className="px-4 py-2">
              <Mic className="h-4 w-4 mr-2" />
              AI Voice Agent
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Calendar className="h-4 w-4 mr-2" />
              Smart Booking
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Globe className="h-4 w-4 mr-2" />
              Patient Portal
            </Badge>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={voiceImage} 
              alt="Healthcare AI Voice System"
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
                MedCare Clinics, a multi-location healthcare provider, was facing challenges with appointment 
                scheduling inefficiencies, patient communication gaps, and staff burnout from repetitive tasks. 
                They needed a modern solution to streamline operations while maintaining high-quality patient care.
              </p>
              <p className="text-muted-foreground mb-6">
                Our comprehensive healthcare solution included AI voice agents for appointment scheduling, 
                patient pre-screening capabilities and a custom 
                website with integrated patient portal functionality.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Client Information</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-medium w-24">Company:</span>
                  <span className="text-muted-foreground">MedCare Clinics</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Industry:</span>
                  <span className="text-muted-foreground">Healthcare Services</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Size:</span>
                  <span className="text-muted-foreground">100-500 employees</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Timeline:</span>
                  <span className="text-muted-foreground">4 months implementation</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Results</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Automated Scheduling", value: "80%", change: "of appointments", icon: Calendar },
                  { label: "Patient Satisfaction", value: "92%", change: "approval rating", icon: Heart },
                  { label: "Staff Time Saved", value: "15 hrs", change: "per week", icon: Clock },
                  { label: "Online Bookings", value: "85%", change: "of appointments", icon: TrendingUp }
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
                {["React", "Node.js", "OpenAI API", "Twilio", "PostgreSQL", "AWS", "HIPAA Compliant"].map((tech, index) => (
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
                  "Manual appointment scheduling consuming staff time",
                  "Patients calling outside business hours",
                  "Repetitive patient inquiries overwhelming staff",
                  "Paper-based patient information systems",
                  "Poor patient communication and follow-up",
                  "HIPAA compliance concerns with digital systems"
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
                  "AI voice agent handling appointments 24/7",
                  "Intelligent patient pre-screening workflows",
                  "HIPAA-compliant FAQ system for common inquiries",
                  "Integrated patient portal with secure access",
                  "Automated appointment reminders and follow-ups",
                  "Real-time calendar synchronization across locations"
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

      {/* Features Breakdown */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">System Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "AI Voice Scheduling",
                description: "Natural language processing for appointment booking via phone calls"
              },
              {
                icon: MessageSquare,
                title: "Patient Portal", 
                description: "HIPAA-compliant system answering common medical and administrative questions"
              },
              {
                icon: Calendar,
                title: "Smart Calendar",
                description: "Intelligent scheduling that considers doctor availability and patient preferences"
              },
              {
                icon: Users,
                title: "Patient Portal",
                description: "Secure online portal for medical records, appointments, and communication"
              },
              {
                icon: Heart,
                title: "Health Screening",
                description: "Pre-visit health questionnaires and symptom assessment tools"
              },
              {
                icon: Clock,
                title: "Automated Reminders",
                description: "SMS and email reminders for appointments, medications, and follow-ups"
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
                "The AI voice system has revolutionized our patient scheduling process. Our staff can now 
                focus on patient care instead of administrative tasks, and our patients love the 24/7 
                availability for appointments."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <p className="font-semibold">Dr. Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Medical Director, MedCare Clinics</p>
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
            Ready to Modernize Your Healthcare Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how AI can improve your patient care and operational efficiency
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

export default HealthcareCaseStudy;