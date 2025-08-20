import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BookingCalendar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/20 to-background">
      <Navigation />
      
      {/* Main Booking Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your <span className="text-primary">Free Consultation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schedule a call with our AI automation experts to discuss your business needs
            </p>
          </div>
          
          {/* Calendar Widget */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-background rounded-2xl shadow-elegant border border-border/50 overflow-hidden hover:shadow-glow transition-all duration-300">
              <div className="p-1">
                <iframe 
                  src="https://api.teamair.life/widget/booking/sf5ZeWALmqKvHoroSvTs" 
                  style={{width: '100%', border:'none', overflow: 'hidden'}} 
                  scrolling="no" 
                  id="sf5ZeWALmqKvHoroSvTs_1754294861967"
                  className="w-full min-h-[800px] rounded-xl"
                  title="Book Consultation Calendar"
                />
              </div>
              <script src="https://api.teamair.life/js/form_embed.js" type="text/javascript"></script>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <div className="bg-card/50 rounded-lg p-6 border border-border/30">
              <h3 className="text-lg font-semibold mb-3 text-primary">What to Expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div>
                  <div className="font-medium text-foreground mb-1">📅 30-60 Minutes</div>
                  <div>Dedicated consultation time</div>
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">💡 Free Insights</div>
                  <div>Actionable automation strategies</div>
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">🚀 No Pressure</div>
                  <div>Just valuable advice for your business</div>
                </div>
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