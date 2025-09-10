import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AiDiscoveryFormData {
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
  
  // Timestamp
  submitted_at: string;
}

const formatAnswer = (answer?: string) => {
  return answer && answer.trim() ? answer : "Not answered";
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: AiDiscoveryFormData = await req.json();

    console.log("Processing AI Discovery submission for:", formData.email);

    // Create HTML email content with exact format requested
    const industryDisplay = formData.industry === "Other" && formData.industry_other 
      ? `${formData.industry} (Other: ${formData.industry_other})` 
      : formData.industry;

    const emailHtml = `
      📩 <strong>New AI Discovery Submission</strong><br/><br/>

      <strong>👤 Contact Info</strong><br/>
      - Full Name: ${formData.full_name}<br/>
      - Email: ${formData.email}<br/>
      - Website: ${formData.website || ""}<br/>
      - Phone/WhatsApp: ${formData.phone}<br/><br/>

      <strong>📝 Discovery Answers</strong><br/>
      1. Where is your business right now?<br/>→ ${formatAnswer(formData.q1_current_state)}<br/><br/>
      2. Where do you want your business to be in the next 6–12 months?<br/>→ ${formatAnswer(formData.q2_6_12_goal)}<br/><br/>
      3. What's the biggest challenge holding you back from reaching that goal?<br/>→ ${formatAnswer(formData.q3_biggest_challenge)}<br/><br/>
      4. Why is achieving this goal important to you personally?<br/>→ ${formatAnswer(formData.q4_personal_importance)}<br/><br/>
      5. What part of your business takes the most time and energy every week?<br/>→ ${formatAnswer(formData.q5_time_sink)}<br/><br/>
      6. If you could eliminate one task from your workload forever, what would it be?<br/>→ ${formatAnswer(formData.q6_kill_task)}<br/><br/>
      7. Have you already tried using AI or automation tools? What worked or didn't?<br/>→ ${formatAnswer(formData.q7_ai_experience)}<br/><br/>
      8. What's the most common frustration your customers have?<br/>→ ${formatAnswer(formData.q8_customer_frustration)}<br/><br/>
      9. What does your business do exceptionally well right now?<br/>→ ${formatAnswer(formData.q9_strength)}<br/><br/>
      10. If we fixed one problem today, what would make the biggest difference?<br/>→ ${formatAnswer(formData.q10_big_impact)}<br/><br/>
      11. Industry: ${industryDisplay}<br/><br/>

      Timestamp: ${formData.submitted_at}
    `;

    // Create JSON attachment data with exact structure requested
    const jsonAttachment = JSON.stringify({
      full_name: formData.full_name,
      email: formData.email,
      website: formData.website || "",
      phone: formData.phone,
      q1_current_state: formData.q1_current_state,
      q2_6_12_goal: formData.q2_6_12_goal,
      q3_biggest_challenge: formData.q3_biggest_challenge,
      q4_personal_importance: formData.q4_personal_importance,
      q5_time_sink: formData.q5_time_sink,
      q6_kill_task: formData.q6_kill_task,
      q7_ai_experience: formData.q7_ai_experience,
      q8_customer_frustration: formData.q8_customer_frustration,
      q9_strength: formData.q9_strength,
      q10_big_impact: formData.q10_big_impact,
      industry: formData.industry,
      industry_other: formData.industry_other || "",
      submitted_at: formData.submitted_at
    }, null, 2);

    // Send email
    const emailResponse = await resend.emails.send({
      from: "DigiBabaa AI Discovery <noreply@digibabaa.com>",
      to: ["akbar@digibabaa.com"],
      subject: `New AI Discovery Submission – DigiBabaa (${formData.full_name})`,
      html: emailHtml,
      replyTo: formData.email,
      attachments: [
        {
          filename: 'ai_discovery_submission.json',
          content: Buffer.from(jsonAttachment).toString('base64'),
        },
      ],
    });

    console.log("AI Discovery email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "AI Discovery submission processed successfully",
      emailId: emailResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in send-ai-discovery-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: "Failed to process AI Discovery submission"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);