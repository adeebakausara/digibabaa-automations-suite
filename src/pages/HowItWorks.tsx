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
      title: "Discovery",
      description: "We analyze your current processes and identify automation opportunities.",
      icon: MessageSquare,
      details: [
        "Business process mapping",
        "Automation opportunity identification",
        "Goal setting and KPI definition",
        "Technical feasibility assessment"
      ],
      duration: "1-2 weeks"
    },
    {
      step: "02", 
      title: "Planning",
      description: "Detailed strategy and roadmap tailored to your business needs.",
      icon: Settings,
      details: [
        "Solution architecture design",
        "Technology stack selection",
        "Project timeline development",
        "Resource allocation planning"
      ],
      duration: "1 week"
    },
    {
      step: "03",
      title: "Integration",
      description: "Seamless implementation with existing disruption to your operations.",
      icon: Rocket,
      details: [
        "System integration setup",
        "Data migration and testing",
        "API connections establishment",
        "Security implementation"
      ],
      duration: "2-3 weeks"
    },
    {
      step: "04",
      title: "Launch",
      description: "Go live with comprehensive training and immediate support.",
      icon: Users,
      details: [
        "Staff training and onboarding",
        "System go-live coordination",
        "Performance monitoring",
        "Initial optimization"
      ],
      duration: "1 week"
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuous improvement and scaling based on performance data.",
      icon: BarChart3,
      details: [
        "Performance analytics review",
        "System optimization",
        "Feature enhancement",
        "Ongoing support"
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
            Our proven 5-step process ensures successful AI automation implementation that delivers measurable results for your business.
          </p>
        </div>
      </section>

      {/* Process Steps - Vertical Timeline */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 transform -translate-x-1/2" />
            
            {steps.map((step, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Step Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full border-4 border-background">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                
                {/* Step Content Card */}
                <div className={`ml-auto w-80 ${index % 2 === 0 ? 'mr-auto ml-0 pl-16' : 'ml-auto pr-16'}`}>
                  <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg mr-3">
                          <step.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="text-xs mb-1">
                            {step.title}
                          </Badge>
                          <h3 className="text-lg font-bold">{step.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4">
                        {step.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-border/50">
                        <span className="text-xs text-muted-foreground">
                          {step.duration}
                        </span>
                        <Button variant="ghost" size="sm" className="text-xs h-7">
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
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