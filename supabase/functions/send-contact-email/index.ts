import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject?: string;
  // Add any other fields your form has
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();

    console.log("Processing contact form submission for:", formData.email);

    // Create HTML email content
    const emailHtml = `
      📧 <strong>New Contact Form Submission</strong><br/><br/>

      <strong>👤 Contact Details</strong><br/>
      - Name: ${formData.name}<br/>
      - Email: ${formData.email}<br/>
      - Phone: ${formData.phone || "Not provided"}<br/>
      - Company: ${formData.company || "Not provided"}<br/><br/>

      <strong>💬 Message</strong><br/>
      ${formData.message}<br/><br/>

      <strong>📅 Submitted</strong><br/>
      ${new Date().toISOString()}<br/>
    `;

    // Create JSON attachment with all form data
    const jsonAttachment = JSON.stringify({
      ...formData,
      submitted_at: new Date().toISOString()
    }, null, 2);

    // Send email
    const emailResponse = await resend.emails.send({
      from: "DigiBabaa Website <noreply@digibabaa.com>",
      to: ["akbar@digibabaa.com"],
      subject: formData.subject || `New Contact Form - ${formData.name}`,
      html: emailHtml,
      replyTo: formData.email,
      attachments: [
        {
          filename: 'contact_form_submission.json',
          content: btoa(jsonAttachment),
        },
      ],
    });

    console.log("Contact email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Contact form submitted successfully",
      emailId: emailResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: "Failed to process contact form submission"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);