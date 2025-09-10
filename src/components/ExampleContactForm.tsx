import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useContactForm } from "@/hooks/useContactForm";

// Example Contact Form Component
// You can use this as a template for any form that needs to send emails

export const ExampleContactForm = () => {
  const { form, onSubmit, isSubmitting, isSuccess } = useContactForm();

  if (isSuccess) {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-green-600">
            ✅ Message Sent Successfully!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Thank you for your message. We'll get back to you soon.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              {...form.register("name", { required: "Name is required" })}
              placeholder="Your full name"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
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
            />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Field (Optional) */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              {...form.register("phone")}
              type="tel"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          {/* Company Field (Optional) */}
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              {...form.register("company")}
              placeholder="Your company name"
            />
          </div>

          {/* Subject Field (Optional) */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              {...form.register("subject")}
              placeholder="What's this about?"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              {...form.register("message", { required: "Message is required" })}
              placeholder="Your message..."
              className="min-h-[100px]"
            />
            {form.formState.errors.message && (
              <p className="text-sm text-destructive">
                {form.formState.errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:opacity-90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

        </form>
      </CardContent>
    </Card>
  );
};