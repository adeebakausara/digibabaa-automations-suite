import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Mail, ExternalLink, CheckCircle, BarChart3, Zap, Users, Star } from "lucide-react";

const BookingCalendar = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Minimalist */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Book Your Free AI Strategy Session
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover how AI can transform your business in just 30 minutes
          </p>
          
          {/* Simple Trust Indicators */}
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-primary mr-2" />
              100% Free
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-primary mr-2" />
              No Sales Pitch
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-primary mr-2" />
              Instant Value
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section - Main Focus */}
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Calendar Container */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            
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

          {/* Simple Help Section */}
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Need Help?
            </h3>
            <p className="text-muted-foreground mb-6">
              Having trouble scheduling? Contact us directly
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                onClick={() => window.open('mailto:akbar@digibabaa.co')}
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.open('https://wa.link/6u8z8o', '_blank')}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
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