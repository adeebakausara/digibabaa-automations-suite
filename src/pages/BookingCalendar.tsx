import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, ExternalLink } from "lucide-react";

const BookingCalendar = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section - Dark Blue Design */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Book Your Free Consultation
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a call with our AI automation experts to discuss your business needs
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <main className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          
          {/* Calendar Container - White Background */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Calendar Widget - Keep Same Size */}
            <div className="p-0">
              <iframe 
                src="https://api.teamair.life/widget/booking/sf5ZeWALmqKvHoroSvTs" 
                style={{
                  width: '100%', 
                  border: 'none', 
                  overflow: 'hidden',
                  minHeight: '1000px',
                  height: '95vh',
                  maxHeight: '1400px',
                  display: 'block'
                }} 
                scrolling="no" 
                id="sf5ZeWALmqKvHoroSvTs_calendar"
                className="w-full"
                title="Book Consultation Calendar - Select your preferred date and time"
                aria-label="Interactive booking calendar for scheduling consultation appointments"
              />
            </div>
            
          </div>

          {/* Help Section - Redesigned */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Contact Options */}
              <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20">
                <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
                  Need Assistance?
                </h3>
                <p className="text-muted-foreground mb-8 text-center text-sm leading-relaxed">
                  Having trouble with scheduling? Reach out to us directly
                </p>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open('mailto:akbar@digibabaa.co')}
                  >
                    <Mail className="h-4 w-4 mr-3" />
                    Email Us Directly
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full h-12 border-accent text-accent hover:bg-accent/10"
                    onClick={() => window.open('https://wa.me/923216666856', '_blank')}
                  >
                    <MessageSquare className="h-4 w-4 mr-3" />
                    WhatsApp Support
                  </Button>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/20">
                <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-sm">30-Minute Strategy Session</p>
                      <p className="text-muted-foreground text-xs">Personalized AI automation roadmap</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-sm">Custom Solution Design</p>
                      <p className="text-muted-foreground text-xs">Tailored to your business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-sm">Implementation Timeline</p>
                      <p className="text-muted-foreground text-xs">Clear next steps and delivery schedule</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-sm">No Commitment Required</p>
                      <p className="text-muted-foreground text-xs">Completely free consultation</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </main>
      
      <Footer />
      
      {/* Calendar embed script */}
      <script src="https://api.teamair.life/js/form_embed.js" type="text/javascript"></script>
    </div>
  );
};

export default BookingCalendar;