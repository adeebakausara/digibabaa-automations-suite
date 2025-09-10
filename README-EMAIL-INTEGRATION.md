# Email Integration Setup Guide

This guide explains how your website forms send emails using Resend API through Supabase Edge Functions.

## Overview

Your website has secure email endpoints that:
- Validate form data and prevent spam
- Send formatted emails to `akbar@digibabaa.co`
- Use rate limiting (10 requests/minute per IP)
- Include honeypot fields for spam protection

## Available Endpoints

### 1. Contact Form (`/functions/v1/send-contact-email`)
**Fields:**
- `name` (required)
- `email` (required, validated format)
- `phone` (optional)
- `company` (optional)
- `message` (required)
- `subject` (optional)
- `honeypot` (should be empty, used for spam detection)

### 2. AI Discovery Form (`/functions/v1/send-ai-discovery-email`)
**Fields:**
- `full_name` (required)
- `email` (required, validated format)
- `website` (optional, but must be valid URL if provided)
- `phone` (required)
- All 10 discovery questions: `q1_current_state` through `q10_big_impact` (required)
- `industry` (required)
- `industry_other` (required if industry = "Other")
- `submitted_at` (ISO timestamp)
- `honeypot` (should be empty, used for spam detection)

## Configuration

### Environment Variables

The `RESEND_API_KEY` is already configured in your Supabase project secrets. If you need to update it:

1. Go to your Supabase Dashboard
2. Navigate to Project Settings > Edge Functions
3. Update the `RESEND_API_KEY` secret

### Resend Setup

Your Resend account is configured with:
- **Verified domain:** `digibabaa.co`
- **From address:** `updates@digibabaa.co`
- **To address:** `akbar@digibabaa.co`

## Frontend Integration

### Using the Contact Form Hook

```tsx
import { useContactForm } from "@/hooks/useContactForm";

const ContactForm = () => {
  const { form, onSubmit, isSubmitting, isSuccess } = useContactForm();

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        {...form.register("honeypot")}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
      
      <input {...form.register("name", { required: true })} placeholder="Name" />
      <input {...form.register("email", { required: true })} placeholder="Email" />
      <textarea {...form.register("message", { required: true })} placeholder="Message" />
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};
```

### Using the AI Discovery Form Hook

```tsx
import { useAiDiscoveryForm } from "@/hooks/useAiDiscoveryForm";

const AiDiscoveryForm = () => {
  const { form, onSubmit, isSubmitting, isSuccess } = useAiDiscoveryForm();

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        {...form.register("honeypot")}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
      
      <input {...form.register("full_name", { required: true })} placeholder="Full Name" />
      <input {...form.register("email", { required: true })} placeholder="Email" />
      {/* Add other form fields */}
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Discovery"}
      </button>
    </form>
  );
};
```

## Security Features

### 1. Rate Limiting
- 10 requests per minute per IP address
- Automatically resets every minute
- Returns HTTP 429 if limit exceeded

### 2. Honeypot Protection
- Hidden field that should remain empty
- If filled, submission is rejected as spam
- Add to all forms but hide with CSS

### 3. Validation
- Required field validation
- Email format validation
- URL format validation (for website field)
- Returns HTTP 400 for validation errors

### 4. Error Handling
- HTTP 400: Validation errors
- HTTP 405: Method not allowed (only POST accepted)
- HTTP 429: Rate limit exceeded
- HTTP 502: Email service unavailable
- HTTP 500: Internal server error

## Response Format

### Success Response
```json
{
  "ok": true
}
```

### Error Response
```json
{
  "ok": false,
  "error": "Error description"
}
```

## Email Templates

Both endpoints send formatted HTML emails with:
- Clean subject lines including submitter name
- Organized sections for contact info and form data
- Professional formatting with emojis and structure
- JSON attachments with all form data for processing

## Testing

To test the endpoints, you can use:

```javascript
// Test contact form
const response = await fetch('/functions/v1/send-contact-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    message: 'Test message',
    honeypot: '' // Important: leave empty
  })
});

const result = await response.json();
console.log(result); // { ok: true } or { ok: false, error: "..." }
```

## Troubleshooting

1. **Email not received:** Check Resend dashboard for delivery status
2. **Rate limit errors:** Wait a minute or check if multiple submissions are happening
3. **Validation errors:** Ensure all required fields are provided with correct formats
4. **Spam detection:** Make sure honeypot field is hidden and empty

## Support

For technical issues with the email integration, check:
- Supabase Edge Function logs in your dashboard
- Resend delivery logs at resend.com
- Browser console for client-side errors