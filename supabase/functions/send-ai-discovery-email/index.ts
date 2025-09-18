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

    // Create HTML email content
    const emailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #3b82f6, #06b6d4); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">📩 New AI Discovery Submission</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">DigiBabaa AI Discovery Form</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <!-- Contact Info Section -->
          <div style="margin-bottom: 40px;">
            <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-bottom: 20px; font-size: 22px;">👤 Contact Info</h2>
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <p style="margin: 8px 0; font-size: 16px;"><strong>Full Name:</strong> ${formData.fullName}</p>
              <p style="margin: 8px 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #3b82f6; text-decoration: none;">${formData.email}</a></p>
              <p style="margin: 8px 0; font-size: 16px;"><strong>Website:</strong> ${formData.website ? `<a href="${formData.website}" target="_blank" style="color: #3b82f6; text-decoration: none;">${formData.website}</a>` : 'Not provided'}</p>
              <p style="margin: 8px 0; font-size: 16px;"><strong>Phone/WhatsApp:</strong> <a href="tel:${formData.phone}" style="color: #06b6d4; text-decoration: none;">${formData.phone}</a></p>
            </div>
          </div>

          <!-- Discovery Answers Section -->
          <div style="margin-bottom: 40px;">
            <h2 style="color: #1e293b; border-bottom: 2px solid #06b6d4; padding-bottom: 10px; margin-bottom: 20px; font-size: 22px;">📝 Discovery Answers</h2>
            
            <div style="background-color: #f0fdff; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-bottom: 20px;">
              <h3 style="color: #0e7490; margin: 0 0 10px 0; font-size: 18px;">1. Where is your business right now?</h3>
              <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 15px;">→ ${formatAnswer(formData.currentState)}</p>
            </div>

            <div style="background-color: #f0fdff; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-bottom: 20px;">
              <h3 style="color: #0e7490; margin: 0 0 10px 0; font-size: 18px;">2. Where do you want your business to be in the next 6–12 months?</h3>
              <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 15px;">→ ${formatAnswer(formData.futureGoals)}</p>
            </div>

            <div style="background-color: #f0fdff; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-bottom: 20px;">
              <h3 style="color: #0e7490; margin: 0 0 10px 0; font-size: 18px;">3. What's the biggest challenge holding you back from reaching that goal?</h3>
              <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 15px;">→ ${formatAnswer(formData.biggestChallenge)}</p>
            </div>

            <div style="background-color: #f0fdff; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-bottom: 20px;">
              <h3 style="color: #0e7490; margin: 0 0 10px 0; font-size: 18px;">4. Why is achieving this goal important to you personally?</h3>
              <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 15px;">→ ${formatAnswer(formData.personalImportance)}</p>
            </div>

            <div style="background-color: #f0fdff; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-bottom: 20px;">
              <h3 style="color: #0e7490; margin: 0 0 10px 0; font-size: 18px;">5. What part of your business takes the most time and energy every week?</h3>
              <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 15px;">→ ${formatAnswer(formData.timeEnergyDrain)}</p>
            </div>

            <div style="background-color: #f0fdff; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-bottom: 20px;">
              <h3 style="color: #0e7490; margin: 0 0 10px 0; font-size: 18px;">6. If you could eliminate one task from your workload forever, what would it be?</h3>
              <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 15px;">→ ${formatAnswer(formData.eliminateOneTask)}</p>
            </div>

            <div style="background-color: #f0fdff; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-bottom: 20px;">
              <h3 style="color: #0e7490; margin: 0 0 10px 0; font-size: 18px;">7. Have you already tried using AI or automation tools? If yes, what worked or didn't work?</h3>
              <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 15px;">→ ${formatAnswer(formData.aiExperience)}</p>
            </div>

            <div style="background-color: #f0fdff; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-bottom: 20px;">
              <h3 style="color: #0e7490; margin: 0 0 10px 0; font-size: 18px;">8. What's the most common frustration your customers have when dealing with your business?</h3>
              <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 15px;">→ ${formatAnswer(formData.customerFrustrations)}</p>
            </div>

            <div style="background-color: #f0fdff; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-bottom: 20px;">
              <h3 style="color: #0e7490; margin: 0 0 10px 0; font-size: 18px;">9. What do you believe your business does exceptionally well right now?</h3>
              <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 15px;">→ ${formatAnswer(formData.businessStrengths)}</p>
            </div>

            <div style="background-color: #f0fdff; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-bottom: 20px;">
              <h3 style="color: #0e7490; margin: 0 0 10px 0; font-size: 18px;">10. If we helped you fix one problem in your business today, what would make the biggest difference?</h3>
              <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 15px;">→ ${formatAnswer(formData.biggestImpact)}</p>
            </div>
          </div>

          <!-- Industry Section -->
          <div style="margin-bottom: 30px;">
            <h2 style="color: #1e293b; border-bottom: 2px solid #10b981; padding-bottom: 10px; margin-bottom: 15px; font-size: 22px;">🏢 Industry Context</h2>
            <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981;">
              <p style="margin: 0; font-size: 18px; font-weight: 600; color: #047857;">Industry: ${formData.industry}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center; color: #64748b; font-size: 14px;">
            <p style="margin: 0;">This discovery submission was received on ${new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
            <p style="margin: 10px 0 0 0;">
              <strong>DigiBabaa</strong> - AI Automation & Business Solutions<br>
              <a href="https://preview--digibabaa.lovable.app" style="color: #3b82f6; text-decoration: none;">preview--digibabaa.lovable.app</a>
            </p>
          </div>

        </div>
      </div>
    `;

    // Send email
    const emailResponse = await resend.emails.send({
      from: "DigiBabaa Discovery <noreply@updates.digibabaa.co>",
      to: ["akbar@digibabaa.co"],
      subject: "AI Discovery Form Submission",
      html: emailHtml,
      replyTo: formData.email,
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