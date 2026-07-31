import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "list_testimonials",
  title: "List testimonials",
  description: "List customer testimonials stored in the site, newest first.",
  inputSchema: {
    limit: z.number().int().min(1).max(100).default(20).describe("Maximum testimonials to return."),
    featuredOnly: z.boolean().default(false).describe("Return only featured testimonials."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit, featuredOnly }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    let query = supabase
      .from("testimonials")
      .select("id,name,role,company,quote,rating,results,is_featured,is_video,created_at")
      .order("created_at", { ascending: false })
      .limit(limit ?? 20);
    if (featuredOnly) query = query.eq("is_featured", true);
    const { data, error } = await query;
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data ?? []) }],
      structuredContent: { testimonials: data ?? [] },
    };
  },
});
