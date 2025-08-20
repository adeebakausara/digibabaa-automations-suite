import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BookingCalendar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/20 to-background">
      <Navigation />
      
      {/* Main Booking Section */}
      <section className="py-8 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-normal sm:leading-tight">
              <span className="block">Book Your</span> 
              <span className="text-primary block mt-2">Free Consultation</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Schedule a call with our AI automation experts to discuss your business needs and discover how we can transform your operations
            </p>
            
            {/* Booking Instructions */}
            <div className="mt-8 bg-primary/10 border border-primary/20 rounded-xl p-6 max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-primary mb-3">📋 Quick Booking Guide</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base">
                <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                  <span className="text-2xl">1️⃣</span>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Select Date</div>
                    <div className="text-sm text-muted-foreground">Choose your preferred date</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                  <span className="text-2xl">2️⃣</span>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Pick Time</div>
                    <div className="text-sm text-muted-foreground">Select available time slot</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                  <span className="text-2xl">3️⃣</span>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Confirm</div>
                    <div className="text-sm text-muted-foreground">Complete your booking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
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
          
          {/* Enhanced Information Section */}
          <div className="mt-12 lg:mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* What to Expect */}
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/40 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-primary text-center">✨ What to Expect</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl">
                    <span className="text-3xl">📅</span>
                    <div>
                      <div className="font-semibold text-foreground text-lg mb-2">30-60 Minutes</div>
                      <div className="text-muted-foreground">Dedicated one-on-one consultation time to understand your specific business needs</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl">
                    <span className="text-3xl">💡</span>
                    <div>
                      <div className="font-semibold text-foreground text-lg mb-2">Free Expert Insights</div>
                      <div className="text-muted-foreground">Actionable automation strategies tailored to your industry and business model</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl">
                    <span className="text-3xl">🚀</span>
                    <div>
                      <div className="font-semibold text-foreground text-lg mb-2">No Pressure Approach</div>
                      <div className="text-muted-foreground">Just valuable advice and insights to help grow your business</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Benefits */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/30">
                <h3 className="text-2xl font-bold mb-6 text-primary text-center">🎯 Consultation Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-background/60 rounded-lg">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-foreground font-medium">Custom AI strategy roadmap</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background/60 rounded-lg">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-foreground font-medium">ROI analysis and projections</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background/60 rounded-lg">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-foreground font-medium">Implementation timeline</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background/60 rounded-lg">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-foreground font-medium">Technology recommendations</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background/60 rounded-lg">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-foreground font-medium">Risk assessment and mitigation</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Support */}
            <div className="mt-12 text-center">
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
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BookingCalendar;