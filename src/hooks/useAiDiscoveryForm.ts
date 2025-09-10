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
    },
    mode: "onChange",
  });

  const onSubmit = async (data: AiDiscoveryFormData) => {
    setIsSubmitting(true);
    
    try {
      // ACTION A - Insert into Supabase FIRST (using direct HTTP request)
      const supabaseUrl = "https://utdvpdfiiykaykzgzveg.supabase.co";
      const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0ZHZwZGZpaXlrYXlremd6dmVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4Njg1MDgsImV4cCI6MjA2OTQ0NDUwOH0.4bHeYobNwYSXpteRPIQ8T8lKJ_iJMV2cZcvHkRWctw8";
      
      const insertPayload = {
        full_name: data.full_name,
        email: data.email,
        website: data.website || null,
        phone: data.phone,
        q1_current_state: data.q1_current_state,
        q2_6_12_goal: data.q2_6_12_goal,
        q3_biggest_challenge: data.q3_biggest_challenge,
        q4_personal_importance: data.q4_personal_importance,
        q5_time_sink: data.q5_time_sink,
        q6_kill_task: data.q6_kill_task,
        q7_ai_experience: data.q7_ai_experience,
        q8_customer_frustration: data.q8_customer_frustration,
        q9_strength: data.q9_strength,
        q10_big_impact: data.q10_big_impact,
        industry: data.industry,
        industry_other: data.industry_other || null,
        submitted_at: new Date().toISOString()
      };

      const insertResponse = await fetch(`${supabaseUrl}/rest/v1/ai_discovery_submissions`, {
        method: 'POST',
        headers: {
          'apikey': supabaseAnonKey,
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(insertPayload)
      });

      if (!insertResponse.ok) {
        const errorData = await insertResponse.text();
        console.error("Supabase insert failed:", errorData);
        throw new Error(`Submission failed — couldn't save to database. ${errorData || 'Please try again.'}`);
      }

      const insertData = await insertResponse.json();
      console.log("AI Discovery saved to database:", insertData);

      // Track analytics event for successful insert
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'ai_discovery_submit', {
          event_category: 'engagement',
          event_label: data.industry,
        });
      }

      // ACTION B - Send email (only if Supabase insert succeeded)
      try {
        const { data: emailResult, error: emailError } = await supabase.functions.invoke(
          'send-ai-discovery-email',
          {
            body: data,
          }
        );

        if (emailError) {
          // Email failed but database saved - show partial success
          console.error("Email sending failed:", emailError);
          toast({
            title: "Discovery Submitted Successfully!",
            description: "Saved, but email failed — we'll follow up.",
          });
          setIsSuccess(true);
          return;
        }

        console.log("AI Discovery email sent successfully:", emailResult);

        // Both actions succeeded
        toast({
          title: "Discovery Submitted Successfully!",
          description: "We'll review your answers and send back tailored AI automation ideas.",
        });

        setIsSuccess(true);

      } catch (emailError) {
        // Email failed but database saved
        console.error("Email sending failed:", emailError);
        toast({
          title: "Discovery Submitted Successfully!",
          description: "Saved, but email failed — we'll follow up.",
        });
        setIsSuccess(true);
      }

    } catch (error: any) {
      console.error("Error submitting AI discovery form:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your discovery. Please try again.",
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