import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listTestimonialsTool from "./tools/list-testimonials";
import createTestimonialTool from "./tools/create-testimonial";
import listServicesTool from "./tools/list-services";
import listDiscoverySubmissionsTool from "./tools/list-discovery-submissions";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "final-digibabaa",
  title: "Final digibabaa",
  version: "0.1.0",
  instructions:
    "Tools for the DigiBabaa AI automation site. Read and add customer testimonials, browse published services, and review AI discovery leads. All tools act as the signed-in user.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [
    listTestimonialsTool,
    createTestimonialTool,
    listServicesTool,
    listDiscoverySubmissionsTool,
  ],
});
