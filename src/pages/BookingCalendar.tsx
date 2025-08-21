import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BookingCalendar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/20 to-background">
      <Navigation />
      
      {/* Main Booking Section */}
      <section className="py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto">
          
          {/* Enhanced Calendar Widget */}
          <div className="max-w-full lg:max-w-6xl xl:max-w-7xl mx-auto">
            <div className="bg-background rounded-3xl shadow-elegant border-2 border-primary/20 overflow-hidden hover:shadow-glow hover:border-primary/30 transition-all duration-500">
              {/* Calendar Header */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b border-primary/20">
                <h2 className="text-2xl font-bold text-center text-primary">Select Your Consultation Time</h2>
                <p className="text-center text-muted-foreground mt-2 text-lg">All times shown in your local timezone</p>
              </div>
              
              {/* Calendar Container */}
              <div className="p-2 lg:p-4 bg-background">
                <iframe 
                  src="https://api.teamair.life/widget/booking/sf5ZeWALmqKvHoroSvTs" 
                  style={{
                    width: '100%', 
                    border: 'none', 
                    overflow: 'hidden',
                    minHeight: '900px',
                    height: '100vh',
                    maxHeight: '1200px'
                  }} 
                  scrolling="no" 
                  id="sf5ZeWALmqKvHoroSvTs_1754294861967"
                  className="w-full rounded-2xl"
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