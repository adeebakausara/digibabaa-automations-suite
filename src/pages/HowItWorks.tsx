import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Settings, 
  Rocket, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Target
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We start with a comprehensive analysis of your business needs, current processes, and automation goals.",
      icon: MessageSquare,
      details: [
        "Free business automation audit",
        "Process mapping and analysis",
        "Goal setting and KPI definition",
        "Custom solution design"
      ],
      duration: "1-2 weeks"
    },
    {
      step: "02", 
      title: "AI Solution Development",
      description: "Our team builds and customizes your AI automation solutions using cutting-edge technology.",
      icon: Settings,
      details: [
        "AI model training and customization",
        "Integration setup and configuration",
        "User interface design",
        "Quality testing and optimization"
      ],
      duration: "2-4 weeks"
    },
    {
      step: "03",
      title: "Deployment & Integration",
      description: "We seamlessly deploy your AI solutions and integrate them with your existing systems.",
      icon: Rocket,
      details: [
        "Staged rollout implementation",
        "Team training and onboarding",
        "System integration and testing",
        "Performance monitoring setup"
      ],
      duration: "1-2 weeks"
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and support to ensure maximum performance and ROI.",
      icon: BarChart3,
      details: [
        "24/7 system monitoring",
        "Performance analytics and reporting",
        "Continuous optimization",
        "Ongoing technical support"
      ],
      duration: "Ongoing"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate repetitive tasks and free up your team for strategic work"
    },
    {
      icon: Target,
      title: "Increase Accuracy",
      description: "Reduce human error with AI-powered precision and consistency"
    },
    {
      icon: Users,
      title: "Scale Operations",
      description: "Handle increased workload without proportional staff increases"
    },
    {
      icon: BarChart3,
      title: "Improve ROI",
      description: "See measurable improvements in efficiency and cost reduction"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            🔄 Our Process
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            How <span className="bg-gradient-primary bg-clip-text text-transparent">It Works</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our proven 4-step process ensures successful AI automation implementation that delivers measurable results for your business.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-16">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-32 w-0.5 h-24 bg-gradient-to-b from-primary to-primary/30 transform -translate-x-1/2" />
              )}
              
              <div className={`lg:flex lg:items-center lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <Card className="relative overflow-hidden hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/30">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mr-4">
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            Step {step.step}
                          </Badge>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">
                        {step.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          Duration: {step.duration}
                        </span>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-ai rounded-full mb-6 mx-auto lg:mx-0">
                      <span className="text-3xl font-bold text-white">{step.step}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{step.title}</h2>
                    <p className="text-lg text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-primary">Our Process?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our structured approach ensures successful implementation and measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-all duration-300 hover:shadow-elegant border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-primary">Project Timeline</span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-aqua to-purple-start transform -translate-x-1/2" />
            
            <div className="space-y-12">
              {[
                { week: "Week 1-2", title: "Discovery & Planning", color: "bg-primary" },
                { week: "Week 3-6", title: "Development & Testing", color: "bg-aqua" },
                { week: "Week 7-8", title: "Deployment & Training", color: "bg-purple-start" },
                { week: "Ongoing", title: "Support & Optimization", color: "bg-soft-teal" }
              ].map((phase, index) => (
                <div key={index} className="relative flex items-center justify-center">
                  <div className={`w-4 h-4 ${phase.color} rounded-full border-4 border-background z-10`} />
                  <div className="absolute left-1/2 transform -translate-x-1/2 ml-8">
                    <Card className="w-64">
                      <CardContent className="p-4 text-center">
                        <Badge variant="secondary" className="mb-2">{phase.week}</Badge>
                        <h4 className="font-semibold">{phase.title}</h4>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's schedule a free consultation to discuss your automation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              View Our Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;