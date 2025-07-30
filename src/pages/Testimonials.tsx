import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Play, ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import { useTestimonials } from "@/hooks/useTestimonials";

const Testimonials = () => {
  const { videoTestimonials, writtenTestimonials, loading, error } = useTestimonials();

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
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            🌟 Client Success Stories
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Real testimonials from real businesses that have transformed their operations with DigiBabaa's AI automation solutions.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold">4.9/5</span>
            </div>
            <div className="text-muted-foreground">•</div>
            <div className="text-lg">
              <span className="font-semibold text-primary">200+</span> Happy Clients
            </div>
          </div>
        </div>
      </section>

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
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/80 rounded-full">
                      <Play className="h-8 w-8 text-white ml-1" />
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
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover how businesses across industries have benefited from our AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {writtenTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <Badge variant="secondary">Business</Badge>
                  </div>
                  
                  <Quote className="h-6 w-6 text-primary/30 mb-3" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="mb-4">
                    <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-400/30">
                      <TrendingUp className="h-3 w-3 mr-1" />
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

      {/* Industry Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">Industry</span> Performance
            </h2>
            <p className="text-xl text-muted-foreground">
              Our track record of success across different industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryStats.map((stat, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{stat.industry}</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">{stat.satisfaction}</div>
                      <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold text-aqua mb-1">{stat.projects}</div>
                      <p className="text-sm text-muted-foreground">Completed Projects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Overall Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                icon: Users,
                number: "200+", 
                label: "Happy Clients",
                description: "Businesses transformed"
              },
              { 
                icon: Star,
                number: "4.9/5", 
                label: "Average Rating",
                description: "Client satisfaction score"
              },
              { 
                icon: TrendingUp,
                number: "320%", 
                label: "Average ROI",
                description: "Return on investment"
              },
              { 
                icon: Award,
                number: "98%", 
                label: "Success Rate",
                description: "Project completion rate"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
                <p className="text-sm opacity-80">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our <span className="text-primary">Success Stories?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create your own AI automation success story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start Your Success Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-4 w-4" />
              Watch More Testimonials
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;