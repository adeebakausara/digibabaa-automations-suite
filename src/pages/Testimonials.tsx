import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Quote, Play, ArrowRight, TrendingUp, Users, Award, Edit, Video, Sparkles, Brain, Eye, Download, Clock } from "lucide-react";
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

  // Fallback data for industry stats (can be made dynamic later)
  const industryStats = [
    { industry: "E-commerce", satisfaction: "96%", projects: "45+" },
    { industry: "Healthcare", satisfaction: "94%", projects: "32+" },
    { industry: "Financial Services", satisfaction: "98%", projects: "28+" },
    { industry: "Real Estate", satisfaction: "93%", projects: "38+" },
    { industry: "Technology", satisfaction: "97%", projects: "52+" },
    { industry: "Food & Beverage", satisfaction: "95%", projects: "24+" }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground">Loading testimonials...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-destructive mb-4">Error loading testimonials: {error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 mb-8">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium">AI-Powered Success Stories</span>
              <Video className="h-4 w-4 text-secondary" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Client <span className="bg-gradient-primary bg-clip-text text-transparent">Testimonials</span>
              <br />
              <span className="text-3xl md:text-4xl font-medium text-muted-foreground">
                Real Impact, Real Results
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover how leading businesses leverage our AI automation solutions to achieve 
              extraordinary growth and operational excellence.
            </p>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Users, number: "200+", label: "Happy Clients" },
                { icon: Star, number: "4.9/5", label: "Avg Rating" },
                { icon: TrendingUp, number: "320%", label: "Avg ROI" },
                { icon: Video, number: "50+", label: "Video Stories" }
              ].map((stat, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2 bg-card/50 backdrop-blur-sm">
                <TabsTrigger value="testimonials" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Eye className="h-4 w-4 mr-2" />
                  View Testimonials
                </TabsTrigger>
                <TabsTrigger value="ai-generator" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Generator
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="testimonials" className="space-y-20">
              {/* Featured Video Testimonials */}
              <div>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Featured <span className="text-primary">Video Stories</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Watch our clients share their transformation journeys in their own words
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {videoTestimonials.slice(0, 3).map((testimonial, index) => (
                    <Card 
                      key={index} 
                      className="group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl border-border/50 overflow-hidden relative"
                    >
                      {testimonial.is_featured && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                          <Badge className="bg-gradient-primary text-white px-4 py-2 shadow-lg">
                            <Award className="h-3 w-3 mr-1" />
                            Featured Story
                          </Badge>
                        </div>
                      )}
                      
                      <div className="relative overflow-hidden">
                        <img 
                          src={testimonial.video_thumbnail || testimonial.image_url || 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'} 
                          alt={testimonial.name}
                          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                              <Play className="h-8 w-8 text-white ml-1" />
                            </div>
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => handleEditClick(testimonial)}
                              className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        {testimonial.video_length && (
                          <div className="absolute bottom-4 right-4">
                            <Badge className="bg-black/80 text-white backdrop-blur-sm">
                              <Clock className="h-3 w-3 mr-1" />
                              {testimonial.video_length}
                            </Badge>
                          </div>
                        )}
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-black/50 text-white backdrop-blur-sm">
                            {testimonial.company || "Business"}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-6 bg-gradient-to-br from-card to-card/50">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating || 5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        
                        <Quote className="h-6 w-6 text-primary/40 mb-3" />
                        <p className="text-muted-foreground mb-6 italic line-clamp-3">
                          "{testimonial.quote}"
                        </p>
                        
                        {testimonial.results && (
                          <div className="mb-4">
                            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-400/30">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              {testimonial.results}
                            </Badge>
                          </div>
                        )}
                        
                        <div className="border-t border-border pt-4">
                          <p className="font-semibold text-lg">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

      {/* Featured Video Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured <span className="text-primary">Video Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear directly from our clients about their AI automation success stories
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`group hover:scale-105 transition-all duration-300 hover:shadow-elegant overflow-hidden ${
                  testimonial.is_featured ? 'border-primary shadow-glow-primary' : 'border-border/50'
                }`}
              >
                {testimonial.is_featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      <Award className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
                
                <div className="relative">
                  <img 
                    src={testimonial.video_thumbnail || testimonial.image_url || 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'} 
                    alt={testimonial.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary/80 rounded-full">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleEditClick(testimonial)}
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  {testimonial.video_length && (
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="secondary" className="bg-black/80 text-white">
                        {testimonial.video_length}
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">Technology</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleEditClick(testimonial)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 hover:bg-black/70 text-white h-8 w-8 p-0"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <Quote className="h-6 w-6 text-primary/30 mb-3" />
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="mb-4">
                    <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-400/30 mb-2">
                      {testimonial.results}
                    </Badge>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

              {/* Written Testimonials Grid */}
              <div className="bg-gradient-to-br from-card/50 to-card/20 rounded-3xl p-12">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Written <span className="text-primary">Success Stories</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Detailed testimonials showcasing measurable business impact across industries
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {writtenTestimonials.map((testimonial, index) => (
                    <Card key={index} className="group hover:scale-[1.02] transition-all duration-500 hover:shadow-xl border-border/50 relative bg-gradient-to-br from-card to-card/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex">
                            {[...Array(testimonial.rating || 5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="bg-secondary/20 text-secondary">
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
                       
                       <Quote className="h-8 w-8 text-primary/40 mb-4" />
                       <p className="text-muted-foreground mb-6 italic text-lg leading-relaxed">
                         "{testimonial.quote}"
                       </p>
                       
                       {testimonial.results && (
                         <div className="mb-6">
                           <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-400/30 px-3 py-1">
                             <TrendingUp className="h-4 w-4 mr-2" />
                             {testimonial.results}
                           </Badge>
                         </div>
                       )}
                       
                       <div className="border-t border-border pt-6">
                         <p className="font-bold text-lg">{testimonial.name}</p>
                         <p className="text-muted-foreground">{testimonial.role}</p>
                         <p className="text-primary font-semibold">{testimonial.company}</p>
                       </div>
                     </CardContent>
                   </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ai-generator" className="mt-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  AI Video <span className="text-secondary">Generator</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Create professional testimonial videos instantly using advanced AI technology
                </p>
              </div>
              
              <AIVideoGenerator />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Industry Performance Dashboard */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Industry</span> Impact Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive performance metrics showcasing our expertise across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {industryStats.map((stat, index) => (
              <Card key={index} className="group text-center hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl border-border/50 bg-gradient-to-br from-card to-card/50 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{stat.industry}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-6">
                    <div className="relative">
                      <div className="text-4xl font-bold text-primary mb-2">{stat.satisfaction}</div>
                      <p className="text-sm text-muted-foreground font-medium">Client Satisfaction</p>
                      <div className="absolute -inset-2 bg-primary/5 rounded-lg -z-10 group-hover:bg-primary/10 transition-colors duration-300" />
                    </div>
                    <div className="relative">
                      <div className="text-3xl font-bold text-secondary mb-2">{stat.projects}</div>
                      <p className="text-sm text-muted-foreground font-medium">Completed Projects</p>
                      <div className="absolute -inset-2 bg-secondary/5 rounded-lg -z-10 group-hover:bg-secondary/10 transition-colors duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Overall Impact */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our Global Impact
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Transforming businesses worldwide with cutting-edge AI automation solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Users,
                number: "200+", 
                label: "Happy Clients",
                description: "Businesses transformed",
                gradient: "from-blue-400 to-cyan-400"
              },
              { 
                icon: Star,
                number: "4.9/5", 
                label: "Average Rating",
                description: "Client satisfaction score",
                gradient: "from-yellow-400 to-orange-400"
              },
              { 
                icon: TrendingUp,
                number: "320%", 
                label: "Average ROI",
                description: "Return on investment",
                gradient: "from-green-400 to-emerald-400"
              },
              { 
                icon: Award,
                number: "98%", 
                label: "Success Rate",
                description: "Project completion rate",
                gradient: "from-purple-400 to-pink-400"
              }
            ].map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-6 shadow-lg`}>
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold mb-3">{stat.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                  <p className="text-sm opacity-80">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-card/50 via-card/30 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Join 200+ Success Stories</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Transform</span>
                  <br />
                  Your Business?
                </h2>
                
                <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join hundreds of successful businesses that have revolutionized their operations 
                  with our AI automation solutions. Your success story starts here.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 text-lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start Your Success Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2">
                  <Video className="mr-2 h-5 w-5" />
                  Generate AI Video
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
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