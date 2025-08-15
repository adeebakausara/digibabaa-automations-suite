import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, Bot, Zap, Palette } from 'lucide-react';

const AiServicesInAction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      {/* Header Section */}
      <section className="relative pt-24 pb-16 bg-gradient-primary">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our AI Services in Action
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Explore real-time demonstrations of our innovative AI solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* AI Chatbot Integration Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="h-12 w-12 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">AI Chatbot Integration</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI Chatbot seamlessly integrates with your website, Instagram, WhatsApp, Facebook Messenger, Telegram, and Email, ensuring a smooth and personalized customer experience.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {/* Chatbot on Website */}
            <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Chatbot on Website</h3>
                    <p className="text-muted-foreground mb-6">
                      Experience our AI chatbot directly integrated into websites, providing instant customer support and engagement 24/7.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Bot className="h-4 w-4" />
                      <span>Live Demo Available</span>
                    </div>
                  </div>
                  <div className="relative aspect-video bg-accent/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Bot className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                      <p className="text-muted-foreground">Website Chatbot Demo Video</p>
                      <p className="text-sm text-muted-foreground/70 mt-2">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chatbot on Instagram */}
            <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Chatbot on Instagram</h3>
                    <p className="text-muted-foreground mb-6">
                      See how our AI chatbot integrates with Instagram Direct Messages to automate customer interactions and lead generation.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <MessageCircle className="h-4 w-4" />
                      <span>Instagram Integration</span>
                    </div>
                  </div>
                  <div className="md:order-1 relative aspect-video bg-accent/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MessageCircle className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                      <p className="text-muted-foreground">Instagram Chatbot Demo Video</p>
                      <p className="text-sm text-muted-foreground/70 mt-2">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chatbot on WhatsApp */}
            <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Chatbot on WhatsApp</h3>
                    <p className="text-muted-foreground mb-6">
                      Discover how our WhatsApp chatbot integration transforms customer communication with automated responses and smart workflows.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Phone className="h-4 w-4" />
                      <span>WhatsApp Business API</span>
                    </div>
                  </div>
                  <div className="relative aspect-video bg-accent/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Phone className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                      <p className="text-muted-foreground">WhatsApp Chatbot Demo Video</p>
                      <p className="text-sm text-muted-foreground/70 mt-2">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chatbot on Facebook Messenger */}
            <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Chatbot on Facebook Messenger</h3>
                    <p className="text-muted-foreground mb-6">
                      Watch our AI chatbot seamlessly integrate with Facebook Messenger to provide instant customer support and engagement.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <MessageCircle className="h-4 w-4" />
                      <span>Facebook Messenger API</span>
                    </div>
                  </div>
                  <div className="md:order-1 relative aspect-video bg-accent/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MessageCircle className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                      <p className="text-muted-foreground">Facebook Messenger Demo Video</p>
                      <p className="text-sm text-muted-foreground/70 mt-2">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chatbot on Telegram & Email */}
            <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Chatbot on Telegram & Email</h3>
                    <p className="text-muted-foreground mb-6">
                      See how our AI chatbot integrates with Telegram and Email systems to provide comprehensive multi-channel customer support.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Mail className="h-4 w-4" />
                      <span>Multi-Channel Integration</span>
                    </div>
                  </div>
                  <div className="relative aspect-video bg-accent/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Mail className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                      <p className="text-muted-foreground">Telegram & Email Demo Video</p>
                      <p className="text-sm text-muted-foreground/70 mt-2">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI Voice Agent Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Phone className="h-12 w-12 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">AI Voice Agent</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI Voice Agents provide an advanced, conversational experience. They can be integrated with various systems to enhance user interactions and automate tasks.
            </p>
          </div>

          <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Voice Agent Capabilities</h3>
                  <p className="text-muted-foreground mb-6">
                    Experience the power of our AI Voice Agents with natural conversation flows, real-time responses, and seamless integration with your existing systems.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Bot className="h-4 w-4" />
                      <span>Natural Language Processing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Phone className="h-4 w-4" />
                      <span>Real-time Voice Interaction</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Zap className="h-4 w-4" />
                      <span>Automated Task Execution</span>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-video bg-accent/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Phone className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">AI Voice Agent Demo Video</p>
                    <p className="text-sm text-muted-foreground/70 mt-2">Coming Soon</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Custom AI Automation Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-12 w-12 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Custom AI Automation</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We build tailored AI solutions for various business systems, optimizing workflows and boosting efficiency.
            </p>
          </div>

          <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Personalized Automation Solutions</h3>
                  <p className="text-muted-foreground mb-6">
                    See real-world applications of our custom AI automation solutions that transform business processes and drive efficiency across different industries.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Zap className="h-4 w-4" />
                      <span>Workflow Optimization</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Bot className="h-4 w-4" />
                      <span>Process Automation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <MessageCircle className="h-4 w-4" />
                      <span>System Integration</span>
                    </div>
                  </div>
                </div>
                <div className="md:order-1 relative aspect-video bg-accent/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Zap className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">Custom AI Automation Demo Video</p>
                    <p className="text-sm text-muted-foreground/70 mt-2">Coming Soon</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* AI Website Design Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Palette className="h-12 w-12 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">AI Website Design</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI-driven website design offers user-centric, responsive, and engaging designs that are tailored to your brand.
            </p>
          </div>

          <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">AI-Powered Design Process</h3>
                  <p className="text-muted-foreground mb-6">
                    Watch how our AI analyzes your brand, understands your requirements, and creates stunning, responsive websites that convert visitors into customers.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Palette className="h-4 w-4" />
                      <span>Brand-Tailored Design</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Bot className="h-4 w-4" />
                      <span>AI-Driven UX Optimization</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Zap className="h-4 w-4" />
                      <span>Responsive & Fast Loading</span>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-video bg-accent/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Palette className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">AI Website Design Demo Video</p>
                    <p className="text-sm text-muted-foreground/70 mt-2">Coming Soon</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-gradient-primary rounded-2xl p-12 shadow-elegant">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get in touch with us today and discover how our AI solutions can revolutionize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiServicesInAction;