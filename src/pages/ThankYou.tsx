import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Mail } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-2xl">
          
          {/* Simple Hero */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Thank You!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you so much for connecting with DigiBabaa! We're thrilled that you've taken the time to schedule a call and explore how our AI automation solutions can support your business growth. Your digital transformation journey starts here, and we're excited to help you succeed!
              </p>
              <div className="text-muted-foreground mb-8 p-4 bg-muted/50 rounded-lg">
                <p className="font-medium">From Akbar Hayat and the entire DigiBabaa team</p>
              </div>
            </div>
          </div>

          {/* Simple Next Steps */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">What's Next</h2>
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm font-medium">1</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Email Confirmation</p>
                  <p className="text-sm text-muted-foreground">You'll receive a confirmation email with all the details about your scheduled call.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm font-medium">2</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Preparation</p>
                  <p className="text-sm text-muted-foreground">Our team will prepare a customized strategy based on your needs and goals.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm font-medium">3</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Discovery Call</p>
                  <p className="text-sm text-muted-foreground">We'll discuss your challenges and present tailored AI automation solutions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Contact */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Have questions? Contact us anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" asChild>
                <Link to="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;