import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ConsultationFormData {
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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const formData: ConsultationFormData = await req.json();
    
    console.log("Received consultation form:", formData);

    const emailHtml = `
      <h1>New Consultation Request</h1>
      <p>A new consultation request has been submitted. Here are the details:</p>
      
      <h2>Contact Information</h2>
      <ul>
        <li><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Phone:</strong> ${formData.phone || 'Not provided'}</li>
        <li><strong>Company:</strong> ${formData.company}</li>
        <li><strong>Industry:</strong> ${formData.industry || 'Not specified'}</li>
      </ul>
      
      <h2>Consultation Details</h2>
      <ul>
        <li><strong>Consultation Type:</strong> ${formData.consultationType}</li>
        <li><strong>Timeline:</strong> ${formData.timeline || 'Not specified'}</li>
      </ul>
      
      <h2>Automation Goals</h2>
      <p>${formData.goals}</p>
      
      <hr>
      <p><em>This email was automatically generated from the consultation booking form.</em></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Consultation Form <onboarding@resend.dev>",
      to: ["akbarhayat228@gmail.com"],
      subject: `New Consultation Request from ${formData.firstName} ${formData.lastName}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Consultation request submitted successfully" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-consultation-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);