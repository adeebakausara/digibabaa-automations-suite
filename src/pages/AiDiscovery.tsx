import { useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, Clock, Play, Calendar } from "lucide-react";
import { useAiDiscoveryForm } from "@/hooks/useAiDiscoveryForm";
import { Link } from "react-router-dom";

const AiDiscovery = () => {
  const { form, onSubmit, isSubmitting, isSuccess, currentStep, setCurrentStep } = useAiDiscoveryForm();
  const [otherIndustry, setOtherIndustry] = useState("");

  const discoveryQuestions = [
    {
      id: "currentState",
      question: "Where is your business right now?",
      placeholder: "Describe your current business situation in 1-3 sentences..."
    },
    {
      id: "futureGoals",
      question: "Where do you want your business to be in the next 6–12 months?",
      placeholder: "Share your goals and vision for the near future..."
    },
    {
      id: "biggestChallenge",
      question: "What's the biggest challenge holding you back from reaching that goal?",
      placeholder: "What's preventing you from achieving your goals?"
    },
    {
      id: "personalImportance",
      question: "Why is achieving this goal important to you personally?",
      placeholder: "What motivates you to reach this goal?"
    },
    {
      id: "timeEnergyDrain",
      question: "What part of your business takes the most time and energy every week?",
      placeholder: "Which tasks or processes consume most of your time?"
    },
    {
      id: "eliminateOneTask",
      question: "If you could eliminate one task from your workload forever, what would it be?",
      placeholder: "What's the one thing you wish you never had to do again?"
    },
    {
      id: "aiExperience",
      question: "Have you already tried using AI or automation tools? If yes, what worked or didn't work?",
      placeholder: "Share your experience with AI or automation tools, if any..."
    },
    {
      id: "customerFrustrations",
      question: "What's the most common frustration your customers have when dealing with your business?",
      placeholder: "What do customers complain about or struggle with?"
    },
    {
      id: "businessStrengths",
      question: "What do you believe your business does exceptionally well right now?",
      placeholder: "What are you most proud of in your business?"
    },
    {
      id: "biggestImpact",
      question: "If we helped you fix one problem in your business today, what would make the biggest difference?",
      placeholder: "What single improvement would transform your business?"
    }
  ];

  const industries = [
    "E-commerce",
    "Real Estate", 
    "Healthcare",
    "Education",
    "Consulting",
    "Manufacturing",
    "Other"
  ];

  const totalSteps = 3;
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  if (isSuccess) {
    return (
      <>
        <Helmet>
          <title>Thanks for Your Discovery | DigiBabaa</title>
          <meta name="description" content="We've received your AI discovery submission and will send back tailored automation ideas and demos." />
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="mx-auto max-w-2xl text-center">
                <CardHeader className="pb-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold">
                    Thanks — we got your Discovery!
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    We'll review your answers and send back tailored AI automation ideas and relevant demos. 
                    If we need more details, we'll reach out on WhatsApp/Email.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-gradient-primary hover:opacity-90">
                      <Link to="/portfolio">
                        <Play className="mr-2 h-4 w-4" />
                        View AI Automation Demos
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/booking-calendar">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book a Call
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>AI Discovery | DigiBabaa</title>
        <meta name="description" content="Share your business goals and challenges in 3–5 minutes. Get tailored AI automation ideas, demos, and a chance to book a call with DigiBabaa." />
        <meta name="keywords" content="AI discovery, business automation, AI consultation, DigiBabaa" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Hero Section */}
            <section className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Welcome to DigiBabaa AI Discovery
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Can't hop on Zoom/WhatsApp? No worries—answer a few quick questions so we understand your challenges and show how AI automation can help.
              </p>
              
              <Card className="max-w-2xl mx-auto mb-8 border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <blockquote className="text-left space-y-4">
                    <p className="font-medium">Hi, I'm Akbar from DigiBabaa.</p>
                    <p>Normally, we'd chat on a call — but if you can't, no worries!</p>
                    <p>Please take 3–5 minutes to answer a few quick questions so we can understand your business challenges and share how AI automation can help.</p>
                    <p>You'll also find a link to our demo library at the end 🚀</p>
                  </blockquote>
                </CardContent>
              </Card>

              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 px-8 py-4 text-lg"
                onClick={() => document.getElementById('discovery-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Clock className="mr-2 h-5 w-5" />
                Start Discovery (3–5 mins)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </section>

            {/* Form Section */}
            <section id="discovery-form" className="max-w-3xl mx-auto">
              
              {/* Progress Indicator */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
                    <span className="text-sm text-muted-foreground">~3–5 minutes total</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </CardContent>
              </Card>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        Contact Information
                        <span className="text-sm font-normal text-muted-foreground">(Step 1/3)</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            {...form.register("fullName", { required: "Full name is required" })}
                            placeholder="Your full name"
                            aria-describedby="fullName-error"
                          />
                          {form.formState.errors.fullName && (
                            <p id="fullName-error" className="text-sm text-destructive">
                              {form.formState.errors.fullName.message}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            {...form.register("email", { 
                              required: "Email is required",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter a valid email address"
                              }
                            })}
                            type="email"
                            placeholder="your@email.com"
                            aria-describedby="email-error"
                          />
                          {form.formState.errors.email && (
                            <p id="email-error" className="text-sm text-destructive">
                              {form.formState.errors.email.message}  
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="website">Business Website</Label>
                          <Input
                            {...form.register("website", {
                              pattern: {
                                value: /^https?:\/\/.+\..+/,
                                message: "Please enter a valid URL (e.g., https://example.com)"
                              }
                            })}
                            type="url"
                            placeholder="https://yourwebsite.com"
                            aria-describedby="website-error"
                          />
                          {form.formState.errors.website && (
                            <p id="website-error" className="text-sm text-destructive">
                              {form.formState.errors.website.message}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">WhatsApp or Phone Number *</Label>
                          <Input
                            {...form.register("phone", { required: "Phone number is required" })}
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            aria-describedby="phone-error"
                          />
                          {form.formState.errors.phone && (
                            <p id="phone-error" className="text-sm text-destructive">
                              {form.formState.errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <Button 
                        type="button" 
                        onClick={() => setCurrentStep(2)}
                        size="lg" 
                        className="w-full bg-gradient-primary hover:opacity-90"
                        disabled={!form.formState.isValid || Object.keys(form.formState.errors).length > 0}
                      >
                        Continue to Discovery Questions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {/* Step 2: Discovery Questions */}
                {currentStep === 2 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        Core Discovery Questions
                        <span className="text-sm font-normal text-muted-foreground">(Step 2/3)</span>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Answer as many as you'd like. 1–3 sentences is fine for each.
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {discoveryQuestions.map((q, index) => (
                        <div key={q.id} className="space-y-2">
                          <Label htmlFor={q.id} className="text-base font-medium">
                            {index + 1}. {q.question}
                          </Label>
                          <Textarea
                            {...form.register(q.id as any)}
                            placeholder={q.placeholder}
                            className="min-h-[100px] resize-y"
                            aria-describedby={`${q.id}-hint`}
                          />
                          <p id={`${q.id}-hint`} className="text-xs text-muted-foreground">
                            1–3 sentences is fine.
                          </p>
                        </div>
                      ))}

                      <div className="flex gap-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setCurrentStep(1)}
                          size="lg"
                        >
                          Back
                        </Button>
                        <Button 
                          type="button" 
                          onClick={() => setCurrentStep(3)}
                          size="lg" 
                          className="flex-1 bg-gradient-primary hover:opacity-90"
                        >
                          Continue to Industry & Submit
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 3: Industry & Submit */}
                {currentStep === 3 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        Industry Context & Submit
                        <span className="text-sm font-normal text-muted-foreground">(Step 3/3)</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <div className="space-y-2">
                        <Label htmlFor="industry">What industry are you in? *</Label>
                        <Select onValueChange={(value) => form.setValue("industry", value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry..." />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {form.watch("industry") === "Other" && (
                          <div className="mt-4">
                            <Label htmlFor="otherIndustry">Please specify your industry:</Label>
                            <Input
                              value={otherIndustry}
                              onChange={(e) => setOtherIndustry(e.target.value)}
                              placeholder="Enter your industry..."
                              className="mt-2"
                            />
                          </div>
                        )}
                        {form.formState.errors.industry && (
                          <p className="text-sm text-destructive">
                            Please select your industry
                          </p>
                        )}
                      </div>

                      {/* Demo Library Section */}
                      <Card className="bg-card/50 border-primary/20">
                        <CardContent className="pt-6">
                          <h3 className="font-semibold mb-2">Want to see how we've automated other businesses?</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Check out real examples of AI automation in action while we prepare your personalized recommendations.
                          </p>
                          <Button variant="outline" asChild className="w-full">
                            <Link to="/portfolio" target="_blank">
                              <Play className="mr-2 h-4 w-4" />
                              👉 Click here to explore our AI automation demos
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="bg-card/50 border-accent/20">
                        <CardContent className="pt-6">
                          <h3 className="font-semibold mb-2">Or if you'd rather chat with me directly</h3>
                          <Button variant="outline" asChild className="w-full">
                            <Link to="/booking-calendar" target="_blank">
                              <Calendar className="mr-2 h-4 w-4" />
                              Book a Call
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>

                      <div className="flex gap-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setCurrentStep(2)}
                          size="lg"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="flex-1 bg-gradient-primary hover:opacity-90"
                          disabled={isSubmitting || !form.watch("industry")}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Discovery"}
                          {!isSubmitting && <CheckCircle className="ml-2 h-4 w-4" />}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </form>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AiDiscovery;