import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BookingCalendar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/20 to-background">
      <Navigation />
      
      {/* Main Booking Section */}
      <section className="py-2 px-2 sm:px-4">
        <div className="w-full">
          
          {/* Enhanced Calendar Widget */}
          <div className="w-full max-w-none">
            <div className="bg-gradient-to-br from-background via-card/10 to-background rounded-2xl shadow-2xl border border-primary/30 overflow-hidden animate-fade-in">
              {/* Calendar Header */}
              <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 px-4 py-3 border-b border-primary/30">
                <h1 className="text-xl sm:text-2xl font-bold text-center text-primary">Select Your Consultation Time</h1>
                <p className="text-center text-muted-foreground mt-1 text-sm sm:text-base">All times shown in your local timezone</p>
              </div>
              
              {/* Calendar Container */}
              <div className="p-0 bg-gradient-to-br from-background to-card/5">
                <iframe 
                  src="https://api.teamair.life/widget/booking/sf5ZeWALmqKvHoroSvTs" 
                  style={{
                    width: '100%', 
                    border: 'none', 
                    overflow: 'hidden',
                    minHeight: '800px',
                    height: '90vh',
                    maxHeight: '1000px'
                  }} 
                  scrolling="no" 
                  id="sf5ZeWALmqKvHoroSvTs_1754294861967"
                  className="w-full"
                  title="Book Consultation Calendar - Select your preferred date and time"
                />
              </div>
              <script src="https://api.teamair.life/js/form_embed.js" type="text/javascript"></script>
            </div>
          </div>
          
          {/* Contact Support */}
          <div className="mt-8 text-center">
            <div className="bg-muted/30 rounded-2xl p-8 max-w-4xl mx-auto border border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-primary">Need Help Booking?</h3>
              <p className="text-muted-foreground mb-6 text-lg">
                If you're having trouble with the calendar or need to schedule outside of available times, contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@digibabaa.com" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  📧 Email Us
                </a>
                <a 
                  href="https://wa.me/923216666856" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BookingCalendar;