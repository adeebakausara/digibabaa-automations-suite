import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export interface AiDiscoveryFormData {
  // Contact Information
  full_name: string;
  email: string;
  website?: string;
  phone: string;
  
  // Discovery Questions
  q1_current_state: string;
  q2_6_12_goal: string;
  q3_biggest_challenge: string;
  q4_personal_importance: string;
  q5_time_sink: string;
  q6_kill_task: string;
  q7_ai_experience: string;
  q8_customer_frustration: string;
  q9_strength: string;
  q10_big_impact: string;
  
  // Industry
  industry: string;
  industry_other?: string;
  
  // Timestamp (added at submit time)
  submitted_at?: string;
  
  // Honeypot field for spam protection
  honeypot?: string;
}

export const useAiDiscoveryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();
  
  const form = useForm<AiDiscoveryFormData>({
    defaultValues: {
      full_name: "",
      email: "",
      website: "",
      phone: "",
      q1_current_state: "",
      q2_6_12_goal: "",
      q3_biggest_challenge: "",
      q4_personal_importance: "",
      q5_time_sink: "",
      q6_kill_task: "",
      q7_ai_experience: "",
      q8_customer_frustration: "",
      q9_strength: "",
      q10_big_impact: "",
      industry: "",
      industry_other: "",
      honeypot: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: AiDiscoveryFormData) => {
    setIsSubmitting(true);
    
    try {
      // Add submitted_at timestamp
      const submissionData = {
        ...data,
        submitted_at: new Date().toISOString()
      };

      // Send email with all discovery answers
      const { data: emailResult, error: emailError } = await supabase.functions.invoke(
        'send-ai-discovery-email',
        {
          body: submissionData,
        }
      );

      if (emailError) {
        console.error("Email sending failed:", emailError);
        toast({
          title: "Email Failed",
          description: "Email failed to send — please try again",
          variant: "destructive",
        });
        return;
      }

      // Check if the response indicates success
      if (!emailResult?.ok) {
        console.error("Email sending failed:", emailResult);
        toast({
          title: "Email Failed",
          description: emailResult?.error || "Email failed to send — please try again",
          variant: "destructive",
        });
        return;
      }

      console.log("AI Discovery email sent successfully:", emailResult);

      // Track analytics event for successful email send
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'ai_discovery_submit', {
          event_category: 'engagement',
          event_label: data.industry,
        });
      }

      // Show success state
      toast({
        title: "Discovery Submitted Successfully!",
        description: "We'll review your answers and send back tailored AI automation ideas.",
      });

      setIsSuccess(true);

    } catch (error: any) {
      console.error("Error submitting AI discovery form:", error);
      toast({
        title: "Submission Failed",
        description: "Email failed to send — please try again",
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
    currentStep,
    setCurrentStep,
  };
};