import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Star, Zap } from "lucide-react";
import { BookConsultationButton } from "@/components/BookConsultationButton";

const Pricing = () => {
  const plans = [
    {
      name: "AI Chatbot Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses starting with AI chatbot automation",
      features: [
        "Website Live Chat Integration",
        "WhatsApp Business Automation",
        "Lead Qualification & Capture",
        "Multi-language Support",
        "Custom Knowledge Base Training",
        "24/7 chat support",
        "Up to 1,000 conversations/month",
        "Basic analytics dashboard"
      ],
      highlighted: false,
      cta: "Start Free Trial"
    },
    {
      name: "AI Business Suite",
      price: "$899",
      period: "/month",
      description: "Complete AI automation suite for growing businesses",
      features: [
        "AI Chatbots (Multiple Platforms)",
        "AI Voice Agents with IVR",
        "Custom AI Automation Workflows",
        "AI Website Design Tools",
        "Lead Generation Automation",
        "Email Marketing Sequences",
        "CRM Integration (Zoho, Salesforce)",
        "Social Media Automation",
        "Advanced Analytics & Reporting",
        "Priority support",
        "Up to 5,000 conversations/month"
      ],
      highlighted: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise AI",
      price: "Custom",
      period: "Quote",
      description: "Fully customized AI solutions for large organizations",
      features: [
        "Unlimited AI Chatbots & Platforms",
        "Advanced AI Voice Agent System",
        "Custom AI Model Development",
        "AI Website Design & Development",
        "Complete Workflow Automation",
        "Full System Integrations",
        "Dedicated Account Manager",
        "24/7 Premium Support",
        "Unlimited Conversations",
        "Advanced Security & Compliance",
        "Custom Training & Onboarding",
        "API Access & White-labeling"
      ],
      highlighted: false,
      cta: "Contact Sales"
    }
  ];

  const addOns = [
    {
      name: "AI Voice Agent Upgrade",
      price: "$399/month",
      description: "Add advanced voice automation with IVR, appointment scheduling, and call analytics"
    },
    {
      name: "AI Website Design Service",
      price: "$799 one-time",
      description: "Complete AI-powered website design with responsive layouts and SEO optimization"
    },
    {
      name: "Custom Automation Workflows",
      price: "$499/month",
      description: "Tailored workflow solutions for lead generation, email marketing, and CRM management"
    },
    {
      name: "Additional Platform Integration",
      price: "$199/month",
      description: "Connect additional platforms like Instagram, Telegram, or custom business apps"
    },
    {
      name: "Advanced Analytics Suite",
      price: "$299/month", 
      description: "Deep insights, custom reports, and comprehensive business intelligence dashboards"
    },
    {
      name: "24/7 Priority Support",
      price: "$199/month",
      description: "Dedicated support line with guaranteed response times and account management"
    }
  ];

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "AI Marketing Services Pricing",
    "offers": plans.map(plan => ({
      "@type": "Offer",
      "name": plan.name,
      "description": plan.description,
      "price": plan.price === "Custom" ? 0 : parseFloat(plan.price.replace("$", "")),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Pricing - AI Marketing Solutions | Transparent & Flexible"
        description="Explore our AI marketing pricing plans. From AI chatbots to voice agents and custom automation. Flexible plans for businesses of all sizes. Free consultation included."
        keywords="AI marketing pricing, chatbot pricing, voice agent cost, marketing automation pricing, AI services cost"
        schema={pricingSchema}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            💰 Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">AI Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Flexible pricing plans designed to scale with your business. Start your AI automation journey today.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-400/30">
              <CheckCircle className="h-4 w-4 mr-1" />
              14-day free trial
            </Badge>
            <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-400/30">
              <CheckCircle className="h-4 w-4 mr-1" />
              No setup fees
            </Badge>
            <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-400/30">
              <CheckCircle className="h-4 w-4 mr-1" />
              Cancel anytime
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:scale-105 transition-all duration-300 ${
                  plan.highlighted 
                    ? 'border-primary shadow-glow-primary' 
                    : 'border-border/50 hover:border-primary/30'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.highlighted ? "hero" : "outline"} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">Add-on Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhance your AI automation with additional features and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <Card key={index} className="hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold">{addon.name}</h3>
                    <Badge variant="secondary">{addon.price}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{addon.description}</p>
                  <Button variant="outline" size="sm">
                    Add to Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
              },
              {
                question: "What happens during the free trial?",
                answer: "You get full access to all features of your chosen plan for 14 days. No credit card required to start, and you can cancel anytime."
              },
              {
                question: "Do you offer custom enterprise solutions?",
                answer: "Absolutely! Our Enterprise plan includes custom AI model development, dedicated support, and tailored integrations for your specific needs."
              },
              {
                question: "How quickly can I get started?",
                answer: "Most setups can be completed within 1-2 weeks. Simple chatbot implementations can be live within days, while complex custom solutions may take 2-4 weeks."
              },
              {
                question: "What kind of support do you provide?",
                answer: "All plans include 24/7 chat support. Business and Enterprise plans get priority support with faster response times and dedicated account management."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ai">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Zap className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your free trial today and see the power of AI automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/booking-calendar">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <BookConsultationButton variant="fixed" position="bottom-left" />
      <Footer />
    </div>
  );
};

export default Pricing;