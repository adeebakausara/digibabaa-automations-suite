import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Quote, Play, TrendingUp, Users, Award, Edit, Video, Brain, Calendar, Sparkles, Eye, Clock, ArrowRight } from "lucide-react";
import { useTestimonials } from "@/hooks/useTestimonials";
import TestimonialEditModal from "@/components/TestimonialEditModal";
import AIVideoGenerator from "@/components/AIVideoGenerator";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const { videoTestimonials, writtenTestimonials, loading, error } = useTestimonials();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("testimonials");

  // Update local state when data changes
  useEffect(() => {
    setTestimonials([...videoTestimonials, ...writtenTestimonials]);
  }, [videoTestimonials, writtenTestimonials]);

  const handleEditClick = (testimonial: any) => {
    setSelectedTestimonial(testimonial);
    setEditModalOpen(true);
  };

  const handleTestimonialUpdate = (updatedTestimonial: any) => {
    // Update local state immediately for UI responsiveness
    setTestimonials(prev => 
      prev.map(t => t.id === updatedTestimonial.id ? updatedTestimonial : t)
    );
  };

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

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 md:h-32 md:w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-muted-foreground">Loading testimonials...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <p className="text-lg md:text-xl text-destructive mb-4">Error loading testimonials: {error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CalendlyButton />
      
      {/* Clean Hero Section */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-6 md:mb-8">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-xs md:text-sm font-medium">Success Stories</span>
              <Video className="h-4 w-4 text-secondary" />
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 leading-tight">
              Client <span className="bg-gradient-primary bg-clip-text text-transparent">Testimonials</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground mb-6 md:mb-8">
              Real Impact, Real Results
            </p>
            
            {/* Description */}
            <p className="text-base md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
              Discover how leading businesses leverage our AI automation solutions to achieve 
              extraordinary growth and operational excellence.
            </p>
            
            {/* Stats Grid - Mobile Optimized */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                { icon: Users, number: "200+", label: "Happy Clients" },
                { icon: Star, number: "4.9/5", label: "Avg Rating" },
                { icon: TrendingUp, number: "320%", label: "Avg ROI" },
                { icon: Video, number: "50+", label: "Video Stories" }
              ].map((stat, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg mb-2 md:mb-3">
                      <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                    <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8 md:mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2 bg-card/50 backdrop-blur-sm h-12">
                <TabsTrigger value="testimonials" className="data-[state=active]:bg-primary data-[state=active]:text-white text-sm">
                  <Eye className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">View Testimonials</span>
                  <span className="sm:hidden">Testimonials</span>
                </TabsTrigger>
                <TabsTrigger value="ai-generator" className="data-[state=active]:bg-secondary data-[state=active]:text-white text-sm">
                  <Brain className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">AI Generator</span>
                  <span className="sm:hidden">AI Video</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="testimonials" className="space-y-12 md:space-y-20">
              {/* Video Testimonials */}
              {videoTestimonials.length > 0 && (
                <div>
                  <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                      Featured <span className="text-primary">Video Stories</span>
                    </h2>
                    <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                      Watch our clients share their transformation journeys
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    {/* Isabella Hawke */}
                    <Card className="group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl border-border/50 overflow-hidden relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                        <Badge className="bg-gradient-primary text-white px-3 py-1 text-xs shadow-lg">
                          <Award className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                      
                      <div className="relative overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                          alt="Isabella Hawke"
                          className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <a 
                              href="https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos//isabella.mp4"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all"
                            >
                              <Play className="h-6 w-6 md:h-8 md:w-8 text-white ml-1" />
                            </a>
                          </div>
                        </div>
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary" className="bg-black/50 text-white backdrop-blur-sm text-xs">
                            VerdeVitae
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-4 md:p-6 bg-gradient-to-br from-card to-card/50">
                        <div className="flex mb-3 md:mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        
                        <Quote className="h-5 w-5 md:h-6 md:w-6 text-primary/40 mb-2 md:mb-3" />
                        <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 italic line-clamp-3">
                          "Their strategy boosted our customer retention rate significantly."
                        </p>
                        
                        <div className="border-t border-border pt-3 md:pt-4">
                          <p className="font-semibold text-base md:text-lg">Isabella Hawke</p>
                          <p className="text-xs md:text-sm text-primary font-medium">VerdeVitae</p>
                          <a 
                            href="https://verdevitaecorporate.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs md:text-sm text-blue-400 hover:text-blue-300 underline block"
                          >
                            VerdeVitae Corporate
                          </a>
                          <div className="mt-2">
                            <a 
                              href="https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos//isabella.mp4"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-muted-foreground hover:text-primary underline break-all"
                            >
                              Video URL: https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos//isabella.mp4
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Zahid */}
                    <Card className="group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl border-border/50 overflow-hidden relative">
                      <div className="relative overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                          alt="Zahid"
                          className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <a 
                              href="https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos//zahid.mp4"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all"
                            >
                              <Play className="h-6 w-6 md:h-8 md:w-8 text-white ml-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-4 md:p-6 bg-gradient-to-br from-card to-card/50">
                        <div className="flex mb-3 md:mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        
                        <Quote className="h-5 w-5 md:h-6 md:w-6 text-primary/40 mb-2 md:mb-3" />
                        <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 italic line-clamp-3">
                          "I was impressed by the quality and results in just weeks!"
                        </p>
                        
                        <div className="border-t border-border pt-3 md:pt-4">
                          <p className="font-semibold text-base md:text-lg">Zahid</p>
                          <div className="mt-2">
                            <a 
                              href="https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos//zahid.mp4"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-muted-foreground hover:text-primary underline break-all"
                            >
                              Video URL: https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos//zahid.mp4
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Zahid Ahmed */}
                    <Card className="group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl border-border/50 overflow-hidden relative">
                      <div className="relative overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                          alt="Zahid Ahmed"
                          className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <a 
                              href="https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos//zahid2.mp4"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all"
                            >
                              <Play className="h-6 w-6 md:h-8 md:w-8 text-white ml-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-4 md:p-6 bg-gradient-to-br from-card to-card/50">
                        <div className="flex mb-3 md:mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        
                        <Quote className="h-5 w-5 md:h-6 md:w-6 text-primary/40 mb-2 md:mb-3" />
                        <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 italic line-clamp-3">
                          "Professional, reliable, and absolutely worth it."
                        </p>
                        
                        <div className="border-t border-border pt-3 md:pt-4">
                          <p className="font-semibold text-base md:text-lg">Zahid Ahmed</p>
                          <div className="mt-2">
                            <a 
                              href="https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos//zahid2.mp4"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-muted-foreground hover:text-primary underline break-all"
                            >
                              Video URL: https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos//zahid2.mp4
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Written Testimonials */}
              {writtenTestimonials.length > 0 && (
                <div className="bg-gradient-to-br from-card/50 to-card/20 rounded-2xl md:rounded-3xl p-6 md:p-12">
                  <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                      Written <span className="text-primary">Success Stories</span>
                    </h2>
                    <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                      Detailed testimonials showcasing measurable business impact
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    {writtenTestimonials.map((testimonial, index) => (
                      <Card key={index} className="group hover:scale-[1.02] transition-all duration-500 hover:shadow-xl border-border/50 relative bg-gradient-to-br from-card to-card/50">
                        <CardContent className="p-6 md:p-8">
                          <div className="flex items-center justify-between mb-4 md:mb-6">
                            <div className="flex">
                              {[...Array(testimonial.rating || 5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
                              ))}
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="bg-secondary/20 text-secondary text-xs">
                                {testimonial.company || "Business"}
                              </Badge>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleEditClick(testimonial)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0 hover:bg-primary/10"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                         
                         <Quote className="h-6 w-6 md:h-8 md:w-8 text-primary/40 mb-3 md:mb-4" />
                         <p className="text-muted-foreground mb-4 md:mb-6 italic text-sm md:text-lg leading-relaxed">
                           "{testimonial.quote}"
                         </p>
                         
                         {testimonial.results && (
                           <div className="mb-4 md:mb-6">
                             <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-400/30 px-2 py-1 md:px-3 text-xs">
                               <TrendingUp className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                               {testimonial.results}
                             </Badge>
                           </div>
                         )}
                         
                         <div className="border-t border-border pt-4 md:pt-6">
                           <p className="font-bold text-base md:text-lg">{testimonial.name}</p>
                           <p className="text-sm md:text-base text-muted-foreground">{testimonial.role}</p>
                           <p className="text-sm md:text-base text-primary font-semibold">{testimonial.company}</p>
                         </div>
                       </CardContent>
                     </Card>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="ai-generator" className="mt-8 md:mt-12">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                  AI Video <span className="text-secondary">Generator</span>
                </h2>
                <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                  Create professional testimonial videos instantly using advanced AI technology
                </p>
              </div>
              
              <AIVideoGenerator />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-card/50 via-card/30 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 shadow-2xl overflow-hidden">
            <CardContent className="p-6 md:p-12 text-center">
              <div className="mb-6 md:mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  <span className="text-xs md:text-sm font-medium text-primary">Join 200+ Success Stories</span>
                </div>
                
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Transform</span>
                  <br />
                  Your Business?
                </h2>
                
                <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                  Join hundreds of successful businesses that have revolutionized their operations 
                  with our AI automation solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg w-full sm:w-auto">
                  <Sparkles className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Start Your Success Story
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
                
                <Button variant="outline" size="lg" className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg border-2 w-full sm:w-auto">
                  <Video className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Generate AI Video
                </Button>
              </div>
              
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs md:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Instant Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span>Guaranteed Results</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      
      {/* Edit Modal */}
      <TestimonialEditModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        testimonial={selectedTestimonial}
        onUpdate={handleTestimonialUpdate}
      />
    </div>
  );
};

export default Testimonials;