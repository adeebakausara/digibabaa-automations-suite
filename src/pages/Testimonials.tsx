import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Play, TrendingUp, Users, Award, Calendar, Sparkles, Video, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Floating Calendly Button
  const CalendlyButton = () => (
    <a 
      href="https://calendly.com/akbarhayat228/ai-automation-marketing-consultation"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-primary text-white px-4 py-3 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
    >
      <Calendar className="h-5 w-5" />
      <span className="hidden md:inline text-sm font-medium">Book Free Consultation</span>
      <span className="md:hidden text-sm font-medium">Book Call</span>
    </a>
  );

  const testimonials = [
    {
      id: 1,
      name: "Isabella Hawke",
      company: "VerdeVitae",
      website: "https://verdevitaecorporate.com/",
      websiteDisplay: "VerdeVitae Corporate",
      quote: "Their strategy boosted our customer retention rate significantly.",
      videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos//isabella.mp4",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      results: "300% ROI Increase"
    },
    {
      id: 2,
      name: "Zahid",
      company: "",
      quote: "I was impressed by the quality and results in just weeks!",
      videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos//zahid.mp4",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      results: "2 Week Delivery"
    },
    {
      id: 3,
      name: "Zahid Ahmed",
      company: "",
      quote: "Professional, reliable, and absolutely worth it.",
      videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos//zahid2.mp4",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      results: "5-Star Experience"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CalendlyButton />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 mb-8">
              <Video className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-medium">Real Client Stories</span>
              <Sparkles className="h-5 w-5 text-secondary" />
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              Success <span className="bg-gradient-primary bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-8">
              From Vision to Reality
            </p>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Watch how our AI automation solutions transformed businesses and delivered 
              <span className="text-primary font-semibold"> extraordinary results</span> in record time.
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Users, text: "200+ Happy Clients", color: "text-blue-400" },
                { icon: TrendingUp, text: "Average 300% ROI", color: "text-green-400" },
                { icon: CheckCircle, text: "100% Satisfaction", color: "text-purple-400" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-sm md:text-base">
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Client <span className="text-primary">Video Testimonials</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              See how our service has transformed real businesses
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className={`group relative overflow-hidden border-border/50 transition-all duration-500 cursor-pointer ${
                  hoveredCard === index ? 'scale-105 shadow-2xl shadow-primary/20' : 'hover:scale-[1.02] hover:shadow-xl'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Featured Badge */}
                {testimonial.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-primary text-white px-4 py-2 text-sm shadow-lg">
                      <Award className="h-4 w-4 mr-2" />
                      Featured Client
                    </Badge>
                  </div>
                )}
                
                {/* Video Thumbnail */}
                <div className="relative overflow-hidden aspect-video">
                  <video 
                    src={testimonial.videoUrl}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    preload="metadata"
                    muted
                  />
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a 
                      href={testimonial.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group-hover:scale-110 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/30 hover:bg-white/30 transition-all">
                        <Play className="h-10 w-10 text-white ml-1" />
                      </div>
                    </a>
                  </div>
                  
                  {/* Company Badge */}
                  {testimonial.company && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-black/50 text-white backdrop-blur-sm border border-white/20">
                        {testimonial.company}
                      </Badge>
                    </div>
                  )}
                  
                  {/* Results Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500/20 text-green-300 border-green-400/30 backdrop-blur-sm">
                      {testimonial.results}
                    </Badge>
                  </div>
                </div>
                
                {/* Content */}
                <CardContent className="p-8 bg-gradient-to-br from-card to-card/50">
                  {/* Stars */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="relative mb-8">
                    <Quote className="h-8 w-8 text-primary/40 mb-4" />
                    <p className="text-lg text-muted-foreground italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  {/* Client Info */}
                  <div className="space-y-3">
                    <div>
                      <p className="text-xl font-bold text-foreground">{testimonial.name}</p>
                      {testimonial.company && (
                        <p className="text-primary font-semibold">{testimonial.company}</p>
                      )}
                    </div>
                    
                    {/* Website Link */}
                    {testimonial.website && (
                      <a 
                        href={testimonial.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span className="text-sm underline">{testimonial.websiteDisplay}</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
                    
                    {/* Video Link */}
                    <div className="pt-4 border-t border-border">
                      <a 
                        href={testimonial.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                      >
                        <Video className="h-4 w-4" />
                        <span>Watch Full Testimonial</span>
                        <Play className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-card/90 to-card/50 border-border/50 shadow-2xl backdrop-blur-sm overflow-hidden">
            <CardContent className="p-12 md:p-16 text-center relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--primary)_1px,_transparent_1px)] bg-[length:24px_24px]" />
              </div>
              
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-8 py-4 mb-8">
                  <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                  <span className="text-lg font-semibold text-primary">Ready to Join Them?</span>
                </div>
                
                {/* Title */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  Your Success Story
                  <br />
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Starts Here</span>
                </h2>
                
                {/* Description */}
                <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join hundreds of businesses that transformed their operations with our 
                  AI automation solutions. Get your free consultation today.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-90 text-white px-10 py-6 text-xl font-semibold w-full sm:w-auto shadow-lg hover:shadow-xl transition-all"
                  >
                    <Calendar className="mr-3 h-6 w-6" />
                    Book Your Free Consultation
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="px-10 py-6 text-xl font-semibold border-2 w-full sm:w-auto hover:bg-card"
                  >
                    <Video className="mr-3 h-6 w-6" />
                    Watch More Stories
                  </Button>
                </div>
                
                {/* Trust Indicators */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                    <span>No Setup Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                    <span>Guaranteed Results</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;