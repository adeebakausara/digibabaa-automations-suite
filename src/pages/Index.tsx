import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookConsultationButton } from "@/components/BookConsultationButton";
import { Link } from "react-router-dom";
import { 
  Bot, 
  Mic, 
  Zap, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Star, 
  ArrowRight,
  CheckCircle,
  Play,
  Quote,
  Phone,
  Cog,
  Palette,
  Calendar,
  Clock
} from "lucide-react";
import heroImage from "@/assets/hero-ai-automation.jpg";
import chatbotsImage from "@/assets/ai-chatbots.jpg";
import voiceImage from "@/assets/ai-voice-agents.jpg";
import automationImage from "@/assets/custom-automation.jpg";
import { useServices } from "@/hooks/useServices";
import { useTestimonials } from "@/hooks/useTestimonials";

const Index = () => {
  const { services, loading: servicesLoading } = useServices();
  const { testimonials, loading: testimonialsLoading } = useTestimonials();

  // Icon mapping for services
  const iconMap: { [key: string]: any } = {
    'MessageCircle': MessageSquare,
    'Phone': Phone,
    'Cog': Zap,
    'Palette': BarChart3
  };

  // Service URL mapping
  const serviceUrlMap: { [key: string]: string } = {
    "AI Chatbots": "/services/ai-chatbot",
    "Voice Agents": "/services/ai-voice-agent",
    "AI Voice Agents": "/services/ai-voice-agent", 
    "Custom Automation": "/services/custom-ai-automation",
    "Custom AI Automation": "/services/custom-ai-automation",
    "AI Website Design": "/services/ai-website-design"
  };

  // Fallback static services data
  const fallbackServices = [
    {
      id: '1',
      title: "AI Chatbots",
      description: "Intelligent conversational agents for websites, WhatsApp, and social platforms",
      image_url: chatbotsImage,
      icon: 'MessageCircle'
    },
    {
      id: '2', 
      title: "Voice Agents",
      description: "AI-powered voice solutions for IVR, customer support, and sales automation",
      image_url: voiceImage,
      icon: 'Phone'
    },
    {
      id: '3',
      title: "Custom Automation", 
      description: "Tailored AI workflows for lead generation, email outreach, and CRM management",
      image_url: automationImage,
      icon: 'Cog'
    },
    {
      id: '4',
      title: "AI Website Design",
      description: "Create stunning, AI-powered websites with intelligent design recommendations and responsive layouts",
      image_url: heroImage,
      icon: 'Palette'
    }
  ];

  // Fallback static testimonials data
  const fallbackTestimonials = [
    {
      id: "fallback-1",
      quote: "DigiBabaa's AI chatbot increased our customer engagement by 300% and reduced response time to under 2 minutes.",
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      rating: 5
    },
    {
      id: "fallback-2",
      quote: "The voice agent integration transformed our customer support. We now handle 5x more calls with better satisfaction scores.",
      name: "Michael Chen",
      role: "Operations Director",
      company: "ServicePro",
      rating: 5
    },
    {
      id: "fallback-3",
      quote: "Custom automation workflows saved us 20 hours per week on lead generation. ROI was visible within the first month.",
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      company: "GrowthCorp",
      rating: 5
    }
  ];

  const displayServices = servicesLoading ? fallbackServices : (services.length > 0 ? services : fallbackServices);
  const displayTestimonials = testimonialsLoading ? fallbackTestimonials : (testimonials.length > 0 ? testimonials.slice(0, 3) : fallbackTestimonials);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <BookConsultationButton variant="fixed" position="bottom-left" />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-card/30">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="AI Automation Technology Background" 
            className="w-full h-full object-cover opacity-30 blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" />
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float" />
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-purple rounded-full opacity-15 animate-float animation-delay-500" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-ai rounded-full opacity-20 animate-float animation-delay-1000" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Enhanced Badge */}
          <div className="mb-8 animate-fade-in">
            <Badge variant="secondary" className="relative px-6 py-2 bg-primary/10 border border-primary/20 backdrop-blur-sm hover:bg-primary/15 transition-all duration-300">
              <Zap className="mr-2 h-4 w-4 text-primary animate-glow-pulse" />
              AI-Powered Business Automation
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-lg -z-10" />
            </Badge>
          </div>
          
          {/* Enhanced Headlines */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up leading-tight tracking-tight">
            Transform Your Business with{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-shimmer">
                Intelligent Automation
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary opacity-30 blur-sm" />
            </span>
          </h1>
          
          {/* Enhanced Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto animate-fade-in leading-relaxed font-light">
            Unlock the power of <span className="text-primary font-medium">AI chatbots</span>, 
            <span className="text-aqua font-medium"> voice agents</span>, and 
            <span className="text-purple-start font-medium"> custom automation</span> to 
            streamline operations and boost productivity across all platforms.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Link to="/get-started">
              <Button 
                variant="hero" 
                size="lg" 
                className="group relative overflow-hidden px-8 py-4 text-lg font-semibold bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
              >
                <span className="relative z-10">Start Automating Today</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </Button>
            </Link>
            
            <Link to="/demo">
              <Button 
                variant="outline" 
                size="lg" 
                className="group px-8 py-4 text-lg border-2 border-primary/30 bg-background/50 backdrop-blur-sm hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
              >
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </Link>
            
            <Link to="/booking-calendar">
              <Button 
                variant="secondary" 
                size="lg" 
                className="px-8 py-4 text-lg bg-gradient-ai text-white font-semibold hover:shadow-glow-accent transition-all duration-300"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Free Consultation
              </Button>
            </Link>
          </div>
          
          {/* Enhanced Platform Integrations */}
          <div className="animate-fade-in">
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              <span className="text-lg font-medium text-muted-foreground">Trusted by businesses worldwide:</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {["WhatsApp", "Zapier", "Shopify", "Zoho", "Google Sheets", "Slack"].map((platform, index) => (
                <Badge 
                  key={platform} 
                  variant="secondary" 
                  className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="font-medium">{platform}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Overview */}
      <section className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-primary/10 border border-primary/20">
              <Bot className="mr-2 h-4 w-4" />
              Our Solutions
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Core Services</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI solutions designed to <span className="text-foreground font-medium">revolutionize</span> your business operations and drive <span className="text-primary font-medium">measurable growth</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {displayServices.map((service, index) => {
              const IconComponent = service.icon ? iconMap[service.icon] || MessageSquare : MessageSquare;
              const gradients = ["bg-gradient-primary", "bg-gradient-ai", "bg-gradient-purple", "bg-gradient-chat"];
              const glows = ["shadow-glow-primary", "shadow-glow-accent", "shadow-elegant", "shadow-glow-primary"];
              const images = [chatbotsImage, voiceImage, automationImage, heroImage];
              const serviceUrl = serviceUrlMap[service.title] || "/services";
              
              return (
                <Link key={service.id || index} to={serviceUrl} className="block group">
                  <Card className="relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant hover:scale-[1.02] transition-all duration-500 hover:bg-card/70">
                    <CardContent className="p-0">
                      {/* Enhanced Image Section */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={service.image_url || images[index % images.length]} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 ${gradients[index % gradients.length]} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                        
                        {/* Floating Icon */}
                        <div className="absolute top-4 right-4">
                          <div className={`p-3 rounded-xl bg-background/20 backdrop-blur-md border border-white/10 group-hover:${glows[index % glows.length]} transition-all duration-300`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        
                        {/* Service Badge */}
                        <div className="absolute bottom-4 left-4">
                          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs">
                            {index === 0 ? "Most Popular" : index === 1 ? "Enterprise" : index === 2 ? "Custom" : "Trending"}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Enhanced Content Section */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        
                        {/* Call to Action */}
                        <div className="flex items-center justify-between">
                          <span className="text-primary font-medium text-sm group-hover:text-primary/80 transition-colors">
                            Learn More
                          </span>
                          <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </CardContent>
                    
                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300" />
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Video Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              What Our <span className="text-primary">Customers Are Saying</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our service has transformed real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Isabella Hawke - VerdeVitae */}
            <Card className="hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    preload="metadata"
                  >
                    <source src="https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos//isabella.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <Quote className="h-6 w-6 text-primary/30 mb-3" />
                  <p className="text-muted-foreground mb-4 italic">
                    "Their strategy boosted our customer retention rate significantly."
                  </p>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-semibold">Isabella Hawke</p>
                      <p className="text-sm text-muted-foreground">VerdeVitae</p>
                      <a 
                        href="https://verdevitaecorporate.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        verdevitaecorporate.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Zahid Testimonial 1 */}
            <Card className="hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    preload="metadata"
                  >
                    <source src="https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos//zahid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <Quote className="h-6 w-6 text-primary/30 mb-3" />
                  <p className="text-muted-foreground mb-4 italic">
                    "I was impressed by the quality and results in just weeks!"
                  </p>
                  <div>
                    <p className="font-semibold">Zahid</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Zahid Ahmed Testimonial */}
            <Card className="hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    preload="metadata"
                  >
                    <source src="https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos//zahid2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <Quote className="h-6 w-6 text-primary/30 mb-3" />
                  <p className="text-muted-foreground mb-4 italic">
                    "Professional, reliable, and absolutely worth it."
                  </p>
                  <div>
                    <p className="font-semibold">Zahid Ahmed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Text Testimonials Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from businesses that transformed with DigiBabaa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayTestimonials.map((testimonial, index) => (
              <Card key={testimonial.id || index} className="hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role} {testimonial.company && `, ${testimonial.company}`}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Enhanced CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background with Enhanced Visuals */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-electric-blue to-aqua" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/15 rounded-full animate-float animation-delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/20 rounded-full animate-float animation-delay-500" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2">
              <Zap className="mr-2 h-4 w-4" />
              Ready to Get Started?
            </Badge>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join <span className="font-semibold">500+ businesses</span> already automating their success with DigiBabaa's cutting-edge AI solutions
          </p>
          
          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            <Link to="/get-started">
              <Button 
                variant="secondary" 
                size="lg" 
                className="px-8 py-4 text-lg bg-white text-primary hover:bg-white/90 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <span>Get Started Today</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/booking-calendar">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">30-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>


      {/* Calendar Booking Section */}
      <section id="book-consultation" className="py-16 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-primary">Book Your</span> Free Consultation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Schedule a call with our AI automation experts to discuss your business needs
            </p>
          </div>
          
          <div className="bg-background rounded-2xl shadow-elegant border border-border/50 overflow-hidden hover:shadow-glow transition-all duration-300">
            <div className="p-1">
              <iframe 
                src="https://api.teamair.life/widget/booking/sf5ZeWALmqKvHoroSvTs" 
                style={{width: '100%', border:'none', overflow: 'hidden'}} 
                scrolling="no" 
                id="sf5ZeWALmqKvHoroSvTs_1754294861967"
                className="w-full min-h-[800px] rounded-xl"
              />
            </div>
            <script src="https://api.teamair.life/js/form_embed.js" type="text/javascript"></script>
          </div>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl shadow-[0_0_40px] shadow-blue-500/10 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Image - Left on desktop, top on mobile */}
              <div className="order-1 lg:order-1">
                <img 
                  src="https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/testimonials/Akbar%20Hayat%20founder%20.jpg"
                  alt="Akbar Hayat, Founder of DigiBabaa"
                  className="rounded-xl object-cover h-64 w-auto mx-auto lg:mx-0"
                />
              </div>
              
              {/* Text Content - Right on desktop, bottom on mobile */}
              <div className="order-2 lg:order-2 text-center lg:text-left">
                <p className="text-lg text-gray-400 italic mb-4 font-light">
                  Hey, I'm Akbar.
                </p>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                  I'm here to make AI automation accessible and ROI-driven.
                </h3>
                
                <p className="text-gray-300 text-base leading-relaxed">
                  Thank you for visiting DigiBabaa. My mission is to help businesses unlock growth through intelligent automation—simple, practical, and profitable. Let's build the future of automation together.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default Index;