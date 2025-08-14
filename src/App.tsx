import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";


import Index from "./pages/Index";
import Services from "./pages/Services";
import AiChatbot from "./pages/AiChatbot";
import AiVoiceAgent from "./pages/AiVoiceAgent";
import CustomAiAutomation from "./pages/CustomAiAutomation";
import AiWebsiteDesign from "./pages/AiWebsiteDesign";
import LeadGenerationDetails from "./pages/LeadGenerationDetails";
import EcommerceLeadDetails from "./pages/EcommerceLeadDetails";
import OrderProcessingDetails from "./pages/OrderProcessingDetails";
import CustomerSupportDetails from "./pages/CustomerSupportDetails";
import CustomerVerificationDetails from "./pages/CustomerVerificationDetails";
import GetStarted from "./pages/GetStarted";
import Demo from "./pages/Demo";
import BookConsultation from "./pages/BookConsultation";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import EcommerceCaseStudy from "./pages/EcommerceCaseStudy";
import HealthcareCaseStudy from "./pages/HealthcareCaseStudy";
import RealEstateCaseStudy from "./pages/RealEstateCaseStudy";
import RestaurantCaseStudy from "./pages/RestaurantCaseStudy";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ai-chatbot" element={<AiChatbot />} />
          <Route path="/services/ai-voice-agent" element={<AiVoiceAgent />} />
          <Route path="/services/custom-ai-automation" element={<CustomAiAutomation />} />
          <Route path="/services/ai-website-design" element={<AiWebsiteDesign />} />
          <Route path="/automation/lead-generation" element={<LeadGenerationDetails />} />
          <Route path="/automation/ecommerce-lead" element={<EcommerceLeadDetails />} />
          <Route path="/automation/order-processing" element={<OrderProcessingDetails />} />
          <Route path="/automation/customer-support" element={<CustomerSupportDetails />} />
          <Route path="/automation/customer-verification" element={<CustomerVerificationDetails />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/case-study/ecommerce" element={<EcommerceCaseStudy />} />
          <Route path="/case-study/healthcare" element={<HealthcareCaseStudy />} />
          <Route path="/case-study/real-estate" element={<RealEstateCaseStudy />} />
          <Route path="/case-study/restaurant" element={<RestaurantCaseStudy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
