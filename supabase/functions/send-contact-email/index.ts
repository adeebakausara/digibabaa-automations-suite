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
  honeypot?: string; // Honeypot field for spam protection
}

// Rate limiting storage (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 10;

  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  // Get client IP for rate limiting
  const clientIP = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

  // Check rate limit
  if (!checkRateLimit(clientIP)) {
    return new Response(JSON.stringify({ ok: false, error: "Rate limit exceeded" }), {
      status: 429,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    // Honeypot check
    if (formData.honeypot && formData.honeypot.trim() !== "") {
      console.log("Honeypot triggered, possible spam submission");
      return new Response(JSON.stringify({ ok: false, error: "Invalid submission" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields: name, email, message" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

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
      from: "updates@digibabaa.co",
      to: ["akbar@digibabaa.co"],
      subject: `Contact Form Submission - ${formData.name}`,
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

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    
    // Check if it's a Resend API error
    if (error.message?.includes("resend") || error.name === "ResendError") {
      return new Response(JSON.stringify({ ok: false, error: "Email service unavailable" }), {
        status: 502,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ ok: false, error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);