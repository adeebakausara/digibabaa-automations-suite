import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export interface ConsultationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  industry?: string;
  consultationType: string;
  goals: string;
  timeline?: string;
}

export const useConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ConsultationFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      consultationType: "",
      goals: "",
      timeline: "",
    },
  });

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true);
    
    try {
      // Send email notification
      const { data: emailResult, error: emailError } = await supabase.functions.invoke(
        'send-consultation-email',
        {
          body: data,
        }
      );

      if (emailError) {
        throw emailError;
      }

      console.log("Email sent successfully:", emailResult);

      // Show success message
      toast({
        title: "Consultation Request Submitted!",
        description: "Thank you for your request. You'll be redirected to schedule your session.",
      });

      // Reset form
      form.reset();

      // Redirect to Calendly after a short delay
      setTimeout(() => {
        window.open("https://calendly.com/akbarhayat228/ai-automation-marketing-consultation?month=2025-08", "_blank");
      }, 2000);

    } catch (error: any) {
      console.error("Error submitting consultation form:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
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
  };
};