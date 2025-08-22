import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BookingCalendar = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Booking Section */}
      <main className="pt-8 pb-16 px-4 md:pt-12 lg:pt-16">
        <div className="mx-auto max-w-[640px] md:max-w-[520px] lg:max-w-[640px]">
          
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Book Your Free Consultation
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Select your preferred date and time for a personalized AI strategy discussion
            </p>
          </div>

          {/* Calendar Card */}
          <div className="bg-card rounded-2xl shadow-elegant border border-border/50 overflow-hidden animate-fade-in">
            
            {/* Calendar Header */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-6 py-4 border-b border-border/30">
              <h2 className="text-lg font-semibold text-center text-primary mb-1">
                Select Your Consultation Time
              </h2>
              <p className="text-center text-muted-foreground text-sm">
                All times shown in your local timezone
              </p>
            </div>
            
            {/* Calendar Container - preserving original calendar styling */}
            <div className="p-0">
              <iframe 
                src="https://api.teamair.life/widget/booking/sf5ZeWALmqKvHoroSvTs" 
                style={{
                  width: '100%', 
                  border: 'none', 
                  overflow: 'hidden',
                  minHeight: '700px',
                  height: '80vh',
                  maxHeight: '900px'
                }} 
                scrolling="no" 
                id="sf5ZeWALmqKvHoroSvTs_1754294861967"
                className="w-full"
                title="Book Consultation Calendar - Select your preferred date and time"
                aria-label="Booking calendar widget for scheduling consultation appointments"
              />
            </div>
            
          </div>

          {/* Support Section */}
          <div className="mt-12 text-center">
            <div className="bg-card/50 rounded-xl p-6 md:p-8 border border-border/30">
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Need Help Booking?
              </h3>
              <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                Having trouble with the calendar or need to schedule outside available times? 
                Contact us directly and we'll arrange a suitable time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <a 
                  href="mailto:info@digibabaa.com" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-glow-primary min-h-[44px]"
                  aria-label="Send us an email at info@digibabaa.com"
                >
                  📧 Email Us
                </a>
                <a 
                  href="https://wa.me/923216666856" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 hover:shadow-glow-accent min-h-[44px]"
                  aria-label="Message us on WhatsApp"
                >
                  💬 WhatsApp
                </a>
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