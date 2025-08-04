import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Mail, Phone, Calendar, FileText, MessageCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-8 shadow-glow-primary">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
              Thank You!
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Thank you so much for connecting with us! We're thrilled that you've taken the time to schedule a call and explore how we can support your growth. Your journey starts here, and we're excited to help you succeed!
              </p>
              
              <div className="bg-gradient-ai/10 border border-primary/20 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary mr-2" />
                  <span className="text-lg font-semibold text-foreground">Check Your Email</span>
                </div>
                <p className="text-muted-foreground">
                  Check your email for more details about your booking and next steps. We look forward to speaking with you soon!
                </p>
              </div>
            </div>
          </div>

          {/* What's Next Section */}
          <Card className="mb-12 bg-gradient-to-r from-card to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground">What Happens Next?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">Email Confirmation</h3>
                  <p className="text-sm text-muted-foreground">You'll receive a confirmation email with all the details about your scheduled call.</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-ai rounded-full mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">Preparation</h3>
                  <p className="text-sm text-muted-foreground">Our team will prepare a customized strategy based on your needs and goals.</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-purple rounded-full mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">Discovery Call</h3>
                  <p className="text-sm text-muted-foreground">We'll discuss your challenges and present tailored AI automation solutions.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resources Section */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
                While You Wait, Explore Our Resources
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Feel free to browse our resources or contact us if you need further assistance.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" size="lg" asChild className="h-auto p-6 flex-col">
                  <Link to="/portfolio">
                    <FileText className="w-8 h-8 mb-2 text-primary" />
                    <span className="font-medium">View Case Studies</span>
                    <span className="text-sm text-muted-foreground">See our success stories</span>
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild className="h-auto p-6 flex-col">
                  <Link to="/how-it-works">
                    <Calendar className="w-8 h-8 mb-2 text-primary" />
                    <span className="font-medium">How It Works</span>
                    <span className="text-sm text-muted-foreground">Learn our process</span>
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild className="h-auto p-6 flex-col">
                  <Link to="/testimonials">
                    <MessageCircle className="w-8 h-8 mb-2 text-primary" />
                    <span className="font-medium">Client Testimonials</span>
                    <span className="text-sm text-muted-foreground">What clients say</span>
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild className="h-auto p-6 flex-col">
                  <Link to="/contact">
                    <Phone className="w-8 h-8 mb-2 text-primary" />
                    <span className="font-medium">Need Help?</span>
                    <span className="text-sm text-muted-foreground">Contact us anytime</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">Questions Before Our Call?</h3>
                <p className="text-muted-foreground mb-6">
                  Don't hesitate to reach out if you have any questions or need immediate assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">Contact Our Team</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;