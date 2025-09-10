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

    const industryDisplay = formData.industry === "Other" && formData.industry_other 
      ? `${formData.industry} (${formData.industry_other})` 
      : formData.industry;

    // Create JSON attachment data
    const jsonAttachment = JSON.stringify({
      ...formData,
      submitted_at: new Date().toISOString()
    }, null, 2);

    // Create HTML email content
    const emailHtml = `
      📩 <strong>New AI Discovery Submission</strong><br/><br/>

      <strong>👤 Contact Info</strong><br/>
      - Full Name: ${formData.full_name}<br/>
      - Email: ${formData.email}<br/>
      - Website: ${formData.website || "Not provided"}<br/>
      - Phone/WhatsApp: ${formData.phone}<br/><br/>

      <strong>📝 Discovery Answers</strong><br/>
      1. Where is your business right now?<br/>→ ${formatAnswer(formData.q1_current_state)}<br/><br/>
      2. Where do you want your business to be in the next 6–12 months?<br/>→ ${formatAnswer(formData.q2_6_12_goal)}<br/><br/>
      3. What's the biggest challenge holding you back?<br/>→ ${formatAnswer(formData.q3_biggest_challenge)}<br/><br/>
      4. Why is achieving this goal important to you personally?<br/>→ ${formatAnswer(formData.q4_personal_importance)}<br/><br/>
      5. What part of your business takes the most time?<br/>→ ${formatAnswer(formData.q5_time_sink)}<br/><br/>
      6. If you could eliminate one task forever?<br/>→ ${formatAnswer(formData.q6_kill_task)}<br/><br/>
      7. Tried AI/automation? What worked or not?<br/>→ ${formatAnswer(formData.q7_ai_experience)}<br/><br/>
      8. Most common customer frustration?<br/>→ ${formatAnswer(formData.q8_customer_frustration)}<br/><br/>
      9. What do you do exceptionally well right now?<br/>→ ${formatAnswer(formData.q9_strength)}<br/><br/>
      10. One fix that makes the biggest difference?<br/>→ ${formatAnswer(formData.q10_big_impact)}<br/><br/>
      11. Industry: ${industryDisplay}<br/><br/>

      Timestamp: ${new Date().toISOString()}
    `;

    // Send email
    const emailResponse = await resend.emails.send({
      from: "DigiBabaa AI Discovery <noreply@digibabaa.com>",
      to: ["akbar@digibabaa.com"],
      subject: `New AI Discovery Submission – DigiBabaa (${formData.full_name})`,
      html: emailHtml,
      replyTo: formData.email,
      attachments: [
        {
          filename: `ai-discovery-${formData.full_name.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.json`,
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