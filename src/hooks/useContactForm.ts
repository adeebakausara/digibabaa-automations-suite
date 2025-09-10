import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject?: string;
  honeypot?: string; // Honeypot field for spam protection
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      subject: "",
      honeypot: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Send email using Supabase edge function
      const { data: emailResult, error: emailError } = await supabase.functions.invoke(
        'send-contact-email',
        {
          body: data,
        }
      );

      if (emailError) {
        console.error("Email sending failed:", emailError);
        toast({
          title: "Submission Failed",
          description: "Failed to send your message. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Check if the response indicates success
      if (!emailResult?.ok) {
        console.error("Email sending failed:", emailResult);
        toast({
          title: "Submission Failed",
          description: emailResult?.error || "Failed to send your message. Please try again.",
          variant: "destructive",
        });
        return;
      }

      console.log("Contact email sent successfully:", emailResult);

      // Track analytics event (optional)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'contact_form_submit', {
          event_category: 'engagement',
        });
      }

      // Show success
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you as soon as possible.",
      });

      setIsSuccess(true);
      form.reset(); // Clear the form

    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Submission Failed",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    onSubmit,
    isSubmitting,
    isSuccess,
    setIsSuccess,
  };
};