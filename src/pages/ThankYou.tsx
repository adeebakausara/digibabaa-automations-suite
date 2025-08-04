import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Mail, Phone, Calendar, FileText, MessageCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-ai/5 rounded-full blur-3xl" />
      
      <Navigation />
      
      <main className="pt-40 pb-32 relative z-10">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-in">
            {/* DigiBabaa Branding */}
            <div className="mb-12 p-8 bg-gradient-to-r from-card/50 to-accent/5 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-elegant">
              <img 
                src="/lovable-uploads/0b295294-5b14-4405-b5ef-da41243c9f16.png" 
                alt="DigiBabaa Logo" 
                className="mx-auto h-20 md:h-24 mb-6 hover-scale"
              />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8 px-8 py-4 leading-relaxed">
                DigiBabaa
              </h1>
              <p className="text-xl text-muted-foreground font-medium">AI Automation Solutions</p>
            </div>

            <div className="mb-8">
              <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                Thank You! 🎉
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-muted-foreground mb-8 leading-relaxed px-4">
                Thank you so much for connecting with DigiBabaa! We're thrilled that you've taken the time to schedule a call and explore how our AI automation solutions can support your business growth. Your digital transformation journey starts here, and we're excited to help you succeed!
              </p>

              <div className="text-lg text-muted-foreground/90 mb-12 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
                <p className="font-medium">From Akbar Hayat and the entire DigiBabaa team</p>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 border border-primary/20 rounded-3xl p-8 mb-12 shadow-glow-primary/20 hover-scale">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-4 shadow-glow-primary">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-foreground">We'll Be In Touch Soon!</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Stay tuned for our email with more details about your booking and next steps. We look forward to discussing your AI automation needs!
                </p>
              </div>
            </div>
          </div>

          {/* What's Next Section */}
          <Card className="mb-16 bg-gradient-to-r from-card/80 to-accent/10 border-primary/20 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What Happens Next?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent hover-scale">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 shadow-glow-primary">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Email Confirmation</h3>
                  <p className="text-muted-foreground leading-relaxed">You'll receive a confirmation email with all the details about your scheduled call.</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent hover-scale">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-ai rounded-full mb-6 shadow-glow-primary">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Preparation</h3>
                  <p className="text-muted-foreground leading-relaxed">Our team will prepare a customized strategy based on your needs and goals.</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent hover-scale">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-purple rounded-full mb-6 shadow-glow-primary">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Discovery Call</h3>
                  <p className="text-muted-foreground leading-relaxed">We'll discuss your challenges and present tailored AI automation solutions.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resources Section */}
          <Card className="mb-16 bg-gradient-to-r from-card/80 to-primary/5 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-center mb-6 text-foreground">
                While You Wait, Explore Our Resources
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Feel free to browse our resources or contact us if you need further assistance.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Button variant="outline" size="lg" asChild className="h-auto p-8 flex-col hover-scale bg-gradient-to-b from-card to-accent/5 border-primary/20">
                  <Link to="/portfolio">
                    <FileText className="w-10 h-10 mb-4 text-primary" />
                    <span className="font-semibold text-lg mb-2">View Case Studies</span>
                    <span className="text-sm text-muted-foreground">See our success stories</span>
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild className="h-auto p-8 flex-col hover-scale bg-gradient-to-b from-card to-accent/5 border-primary/20">
                  <Link to="/how-it-works">
                    <Calendar className="w-10 h-10 mb-4 text-primary" />
                    <span className="font-semibold text-lg mb-2">How It Works</span>
                    <span className="text-sm text-muted-foreground">Learn our process</span>
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild className="h-auto p-8 flex-col hover-scale bg-gradient-to-b from-card to-accent/5 border-primary/20">
                  <Link to="/testimonials">
                    <MessageCircle className="w-10 h-10 mb-4 text-primary" />
                    <span className="font-semibold text-lg mb-2">Client Testimonials</span>
                    <span className="text-sm text-muted-foreground">What clients say</span>
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild className="h-auto p-8 flex-col hover-scale bg-gradient-to-b from-card to-accent/5 border-primary/20">
                  <Link to="/contact">
                    <Phone className="w-10 h-10 mb-4 text-primary" />
                    <span className="font-semibold text-lg mb-2">Need Help?</span>
                    <span className="text-sm text-muted-foreground">Contact us anytime</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-primary/15 via-accent/10 to-primary/5 border-primary/30 backdrop-blur-sm shadow-glow-primary/20">
              <CardContent className="p-12">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Questions Before Our Call?</h3>
                <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                  Don't hesitate to reach out if you have any questions or need immediate assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button variant="hero" size="lg" asChild className="hover-scale shadow-glow-primary">
                    <Link to="/contact">Contact Our Team</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="hover-scale border-primary/30">
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