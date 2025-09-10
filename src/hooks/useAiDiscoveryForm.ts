import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export interface AiDiscoveryFormData {
  // Contact Information
  fullName: string;
  email: string;
  website?: string;
  phone: string;
  
  // Discovery Questions
  currentState?: string;
  futureGoals?: string;
  biggestChallenge?: string;
  personalImportance?: string;
  timeEnergyDrain?: string;
  eliminateOneTask?: string;
  aiExperience?: string;
  customerFrustrations?: string;
  businessStrengths?: string;
  biggestImpact?: string;
  
  // Industry
  industry: string;
}

export const useAiDiscoveryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();
  
  const form = useForm<AiDiscoveryFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      website: "",
      phone: "",
      currentState: "",
      futureGoals: "",
      biggestChallenge: "",
      personalImportance: "",
      timeEnergyDrain: "",
      eliminateOneTask: "",
      aiExperience: "",
      customerFrustrations: "",
      businessStrengths: "",
      biggestImpact: "",
      industry: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: AiDiscoveryFormData) => {
    setIsSubmitting(true);
    
    try {
      // Send email notification via edge function
      const { data: emailResult, error: emailError } = await supabase.functions.invoke(
        'send-ai-discovery-email',
        {
          body: data,
        }
      );

      if (emailError) {
        throw emailError;
      }

      console.log("AI Discovery email sent successfully:", emailResult);

      // Show success message and set success state
      toast({
        title: "Discovery Submitted Successfully!",
        description: "We'll review your answers and send back tailored AI automation ideas.",
      });

      setIsSuccess(true);

      // Track analytics event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'ai_discovery_submission', {
          event_category: 'engagement',
          event_label: data.industry,
        });
      }

    } catch (error: any) {
      console.error("Error submitting AI discovery form:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your discovery. Please try again.",
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