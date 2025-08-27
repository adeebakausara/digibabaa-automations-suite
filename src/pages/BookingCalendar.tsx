import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Mail, ExternalLink, CheckCircle, BarChart3, Zap, Users, Star } from "lucide-react";

const BookingCalendar = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              🚀 Limited Time Offer
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-electric-blue to-primary bg-clip-text text-transparent">
              Transform Your Business with AI
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-4">
              Book Your <span className="text-primary font-semibold">FREE Strategy Session</span> & Get a Custom AI Roadmap Worth $2,500
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Join 500+ businesses that increased efficiency by 300% with our AI automation solutions
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-400">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-primary mr-2" />
              No Sales Pitch
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-primary mr-2" />
              100% Free Consultation
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-primary mr-2" />
              Custom AI Strategy
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-primary mr-2" />
              Instant ROI Analysis
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-electric-blue bg-clip-text text-transparent">
              Why Book Your Free Consultation Today?
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              In just 30 minutes, discover how AI automation can revolutionize your business operations and boost your revenue
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/20">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Instant ROI Calculator</h3>
              <p className="text-slate-300 text-sm">Get a detailed analysis of potential savings and revenue increase within the first year</p>
            </div>
            
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/20">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Custom AI Blueprint</h3>
              <p className="text-slate-300 text-sm">Receive a personalized AI automation roadmap tailored specifically to your industry and goals</p>
            </div>
            
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/20">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Expert Guidance</h3>
              <p className="text-slate-300 text-sm">Work directly with AI specialists who've helped 500+ businesses achieve measurable results</p>
            </div>
          </div>
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

          {/* Success Stories & Social Proof */}
          <div className="mt-16 mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-electric-blue bg-clip-text text-transparent">
                Join Successful Businesses Already Using AI
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                See how companies like yours achieved remarkable results with our AI automation solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/20 text-center">
                <div className="text-3xl font-bold text-primary mb-2">300%</div>
                <div className="text-sm text-slate-300">Increase in Customer Engagement</div>
              </div>
              <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/20 text-center">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-slate-300">Reduction in Response Time</div>
              </div>
              <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/20 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-slate-300">Businesses Transformed</div>
              </div>
            </div>
          </div>

          {/* Help Section - Redesigned */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Contact Options */}
              <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20">
                <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-primary to-electric-blue bg-clip-text text-transparent">
                  Need Assistance?
                </h3>
                <p className="text-muted-foreground mb-8 text-center text-sm leading-relaxed">
                  Having trouble with scheduling? Our team is here to help you 24/7
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
                    className="w-full h-12 border-primary text-primary hover:bg-primary/10"
                    onClick={() => window.open('https://wa.me/971501670273', '_blank')}
                  >
                    <MessageSquare className="h-4 w-4 mr-3" />
                    WhatsApp Support
                  </Button>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/20">
                <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-primary to-electric-blue bg-clip-text text-transparent">
                  Your 30-Minute Session Includes
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-white">Business Analysis & Gap Assessment</p>
                      <p className="text-muted-foreground text-xs">Identify automation opportunities in your current workflow</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-white">Custom AI Strategy Blueprint</p>
                      <p className="text-muted-foreground text-xs">Tailored roadmap with specific AI solutions for your business</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-white">ROI Projection & Timeline</p>
                      <p className="text-muted-foreground text-xs">Clear implementation plan with expected return on investment</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-white">Live Demo & Q&A Session</p>
                      <p className="text-muted-foreground text-xs">See AI solutions in action plus answers to all your questions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Urgency & Bonus */}
              <div className="bg-gradient-to-br from-primary/20 to-electric-blue/20 rounded-2xl p-8 border border-primary/30">
                <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-primary to-electric-blue bg-clip-text text-transparent">
                  Limited Time Bonus
                </h3>
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <Badge className="bg-primary text-primary-foreground mb-3">
                      🎁 FREE Bonus Worth $2,500
                    </Badge>
                    <p className="text-sm text-slate-300">Available for the next 24 hours only</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-3" />
                      <span className="text-sm text-white">Custom AI Automation Audit</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-3" />
                      <span className="text-sm text-white">Industry Benchmark Report</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-3" />
                      <span className="text-sm text-white">1-Hour Implementation Guide</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-primary/20">
                    <p className="text-center text-xs text-slate-400">
                      ⏰ <span className="text-primary font-semibold">Only 3 slots left</span> this week
                    </p>
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