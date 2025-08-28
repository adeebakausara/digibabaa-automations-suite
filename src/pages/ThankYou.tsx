import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Mail, Phone, Calendar, FileText, MessageCircle } from "lucide-react";
import { BookConsultationButton } from "@/components/BookConsultationButton";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            {/* DigiBabaa Branding */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/0b295294-5b14-4405-b5ef-da41243c9f16.png" 
                alt="DigiBabaa Logo" 
                className="mx-auto h-16 mb-4"
              />
              <h1 className="text-3xl font-bold text-foreground mb-2">
                DigiBabaa
              </h1>
              <p className="text-muted-foreground">AI Automation Solutions</p>
            </div>

            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Thank You! 🎉
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Thank you so much for connecting with DigiBabaa! We're thrilled that you've taken the time to schedule a call and explore how our AI automation solutions can support your business growth. Your digital transformation journey starts here, and we're excited to help you succeed!
              </p>

              <div className="text-muted-foreground mb-8 p-4 bg-muted/50 rounded-lg">
                <p className="font-medium">From Akbar Hayat and the entire DigiBabaa team</p>
              </div>
              
              <div className="border rounded-xl p-6 mb-8 bg-card">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-semibold text-foreground">We'll Be In Touch Soon!</span>
                </div>
                <p className="text-muted-foreground">
                  Stay tuned for our email with more details about your booking and next steps. We look forward to discussing your AI automation needs!
                </p>
              </div>
            </div>
          </div>

          {/* What's Next Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-card border rounded-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Email Confirmation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">You'll receive a confirmation email with all the details about your scheduled call.</p>
              </div>
              <div className="text-center p-6 bg-card border rounded-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Preparation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Our team will prepare a customized strategy based on your needs and goals.</p>
              </div>
              <div className="text-center p-6 bg-card border rounded-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Discovery Call</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">We'll discuss your challenges and present tailored AI automation solutions.</p>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-4 text-foreground">
              While You Wait, Explore Our Resources
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Feel free to browse our resources or contact us if you need further assistance.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" size="lg" asChild className="h-auto p-6 flex-col bg-card">
                <Link to="/portfolio">
                  <FileText className="w-8 h-8 mb-3 text-primary" />
                  <span className="font-semibold mb-1">View Case Studies</span>
                  <span className="text-xs text-muted-foreground">See our success stories</span>
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="h-auto p-6 flex-col bg-card">
                <Link to="/how-it-works">
                  <Calendar className="w-8 h-8 mb-3 text-primary" />
                  <span className="font-semibold mb-1">How It Works</span>
                  <span className="text-xs text-muted-foreground">Learn our process</span>
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="h-auto p-6 flex-col bg-card">
                <Link to="/testimonials">
                  <MessageCircle className="w-8 h-8 mb-3 text-primary" />
                  <span className="font-semibold mb-1">Client Testimonials</span>
                  <span className="text-xs text-muted-foreground">What clients say</span>
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="h-auto p-6 flex-col bg-card">
                <Link to="/contact">
                  <Phone className="w-8 h-8 mb-3 text-primary" />
                  <span className="font-semibold mb-1">Need Help?</span>
                  <span className="text-xs text-muted-foreground">Contact us anytime</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="border rounded-xl p-8 bg-card">
              <h3 className="text-xl font-bold mb-4 text-foreground">Questions Before Our Call?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Don't hesitate to reach out if you have any questions or need immediate assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <BookConsultationButton variant="fixed" position="bottom-left" />
      <Footer />
    </div>
  );
};

export default ThankYou;