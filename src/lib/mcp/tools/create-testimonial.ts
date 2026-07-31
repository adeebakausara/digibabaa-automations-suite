import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "create_testimonial",
  title: "Create testimonial",
  description: "Add a new customer testimonial to the site.",
  inputSchema: {
    name: z.string().trim().min(1).describe("Customer name."),
    role: z.string().trim().min(1).describe("Customer job title or role."),
    company: z.string().trim().min(1).describe("Customer company."),
    quote: z.string().trim().min(1).describe("The testimonial text."),
    rating: z.number().int().min(1).max(5).default(5).describe("Star rating 1-5."),
    results: z.string().trim().optional().describe("Short result summary, e.g. '40% more leads'."),
    isFeatured: z.boolean().default(false).describe("Feature this testimonial on the site."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async (input, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("testimonials")
      .insert({
        name: input.name,
        role: input.role,
        company: input.company,
        quote: input.quote,
        rating: input.rating ?? 5,
        results: input.results ?? null,
        is_featured: input.isFeatured ?? false,
      })
      .select();
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data?.[0] ?? null) }],
      structuredContent: { testimonial: data?.[0] ?? null },
    };
  },
});
