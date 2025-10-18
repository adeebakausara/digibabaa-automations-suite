import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp, ExternalLink } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "dental-clinic",
      title: "Dental Clinic - Lead Generation Through Facebook Ads",
      industry: "Healthcare",
      platforms: ["Facebook"],
      challenge: "DigiBabaa was hired by a dental clinic to increase lead generation through Facebook Ads. The challenge was to improve the quality of leads while reducing the cost per lead (CPL) and ensuring the clinic could convert those leads into actual appointments.",
      solution: "DigiBabaa executed a targeted strategy that focused on: Audience Segmentation using Facebook's detailed targeting to reach people in the local area who were likely to need dental services. Lead Form Campaigns: Created optimized lead forms to streamline the process for potential patients to book consultations or inquire about services. Creative Testing: Developed multiple ad creatives that emphasized the clinic's services and special offers, testing different combinations of messaging and visuals to improve engagement.",
      duration: "1 month (June 2024)",
      budget: "€4,564.75",
      results: [
        { label: "Max Impressions", value: "119K" },
        { label: "Cost Per Lead (CPL)", value: "€2.80 - €10.77" },
        { label: "Total Ad Spend", value: "€4,564.75" },
        { label: "Lead Quality", value: "High-quality leads generated" }
      ],
      pdfLink: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/general/Dental%20Clinic.pdf"
    },
    {
      id: "activewear-fitness",
      title: "Activewear & Fitness - Ecommerce Revenue Growth",
      industry: "E-commerce & Fitness",
      platforms: ["Facebook", "Instagram"],
      challenge: "DigiBabaa was tasked with enhancing the online revenue for an activewear and fitness brand. The goal was to optimize their advertising strategy to increase sales while ensuring a sustainable return on ad spend (ROAS) through a targeted ecommerce campaign.",
      solution: "DigiBabaa implemented a strategic multi-phase approach to improve overall ecommerce performance: Targeted Campaigns focused on precise audience segmentation to deliver ads to potential buyers who had shown interest in activewear and fitness products. Dynamic Retargeting Ads utilized retargeting to capture visitors who had interacted with the website but had not converted. Creative Testing & Optimization involved testing multiple ad creatives to determine the most engaging visuals, copy, and offers. Budget Scaling increased budgets strategically on high-performing campaigns to maximize reach.",
      duration: "4 months (June - September 2024)",
      budget: "$1,798",
      results: [
        { label: "Total Purchases", value: "436" },
        { label: "Purchase ROAS", value: "112.14" },
        { label: "Total Ad Spend", value: "$1,798" },
        { label: "Total Link Clicks", value: "7,526" },
        { label: "Purchase Value", value: "$97K" },
        { label: "Cost Per Click", value: "$0.23" }
      ],
      pdfLink: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/general/Activewear%20Fitness%20Industry%20Facebook%20ads.pdf"
    },
    {
      id: "real-estate-ai",
      title: "Real Estate Lead Generation - AI-Driven Facebook Ads Strategy",
      industry: "Real Estate",
      platforms: ["Facebook"],
      challenge: "DigiBabaa was tasked with improving the lead generation process for a real estate business by utilizing AI-driven Facebook Ads. The goal was to maximize advertising efficiency and reduce the Cost Per Lead (CPL) while delivering high-quality prospects that could convert into actual customers.",
      solution: "DigiBabaa implemented a multi-faceted AI-driven strategy that included: Dynamic Audience Targeting using Facebook's machine learning algorithms to identify and target the most responsive audiences. Automated Bidding Strategies ensured real-time bid adjustments for efficient budget spending. Creative Optimization involved testing multiple ad creatives using AI to determine the most effective combinations.",
      duration: "1 month (December 2024)",
      budget: "$458.81",
      results: [
        { label: "Leads Generated", value: "37" },
        { label: "Cost Per Lead", value: "$12.40" },
        { label: "Total Ad Spend", value: "$458.81" },
        { label: "Lead Quality", value: "High-quality leads with consistent performance" }
      ],
      pdfLink: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/general/Real%20State%20Case%20Study(Facebook%20ads).pdf"
    },
    {
      id: "ecommerce-optimization",
      title: "E-commerce Ad Spend Optimization - Maximizing Efficiency",
      industry: "E-commerce",
      platforms: ["Facebook", "Instagram"],
      challenge: "DigiBabaa was tasked with improving the overall efficiency of ad spend for an e-commerce brand. The goal was to optimize the use of ad budget while driving more sales and reducing Cost Per Acquisition (CPA).",
      solution: "DigiBabaa focused on optimizing ad spend by implementing: Smart Audience Targeting leveraged advanced targeting strategies to focus on high-intent audiences likely to convert. Budget Allocation employed strategic budget allocation to ensure high-performing campaigns received more funds. Continuous Optimization monitored ad performance and adjusted targeting, creative, and bids to ensure efficient spending.",
      duration: "3 months (July - September 2024)",
      budget: "$12,000",
      results: [
        { label: "Return on Ad Spend (ROAS)", value: "43.67x" },
        { label: "Total Revenue", value: "$170K" },
        { label: "Total Purchases", value: "124" },
        { label: "Cost Per Result", value: "$6.93" },
        { label: "ROAS Growth", value: "+192%" }
      ],
      pdfLink: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/general/Ecomerace%20supoort%20%20good.pdf"
    },
    {
      id: "outdoor-lighting",
      title: "Outdoor Lighting Company - AI-Driven Facebook Ads Strategy",
      industry: "Home & Garden",
      platforms: ["Facebook"],
      challenge: "DigiBabaa was tasked with improving lead generation for an outdoor lighting company. The main goal was to effectively reach potential customers while reducing cost per lead (CPL) and enhancing the overall ad performance through targeted Facebook advertising.",
      solution: "DigiBabaa implemented an AI-powered Facebook Ads strategy that focused on: Dynamic Audience Targeting utilized Facebook's machine learning tools to precisely target individuals with high potential for engagement. Automated Bidding Strategies continuously adjusted bids for efficient budget allocation. Creative Optimization performed A/B testing on multiple ad creatives to identify the most effective messaging.",
      duration: "2 months (July - August 2024)",
      budget: "$700",
      results: [
        { label: "Leads Generated", value: "50" },
        { label: "Cost Per Lead", value: "$14.00" },
        { label: "Total Ad Spend", value: "$700" },
        { label: "Return on Ad Spend (ROAS)", value: "3.5x" },
        { label: "Conversion Rate", value: "7%" }
      ],
      pdfLink: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/general/outdoor%20lighting%20compaines%20Case%20study.pdf"
    },
    {
      id: "activewear-revenue",
      title: "Activewear & Fitness Industry - Facebook Ads for Revenue Growth",
      industry: "E-commerce & Fitness",
      platforms: ["Facebook", "Instagram"],
      challenge: "DigiBabaa partnered with an e-commerce brand aiming to increase website conversions and drive more sales. The challenge was to improve Return on Ad Spend (ROAS) while increasing the number of purchases and reducing the cost per purchase.",
      solution: "DigiBabaa implemented an optimized Facebook Ads strategy focusing on: Targeted Audience Segmentation leveraged detailed targeting to reach potential customers who were most likely to purchase. Dynamic Retargeting Campaigns used retargeting to re-engage website visitors who added items to their cart but didn't complete the purchase. Creative Testing & Optimization continuously tested various ad creatives to identify which resonated best with the audience.",
      duration: "3 months (April - June 2024)",
      budget: "$1,304,532.18",
      results: [
        { label: "Website Purchases", value: "4,843" },
        { label: "Average Cost Per Purchase", value: "$269.36" },
        { label: "Total Ad Spend", value: "$1,304,532.18" },
        { label: "Purchase ROAS", value: "3.79" },
        { label: "Checkouts Initiated", value: "28,573" },
        { label: "Total Revenue", value: "$949,076" }
      ],
      pdfLink: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/general/ecommerce%20ad%20spend%20case%20study(not%20used%20it).pdf"
    },
    {
      id: "social-media-leads",
      title: "Social Media Marketing Lead Generation - Facebook Ads Strategy",
      industry: "Social Media Marketing",
      platforms: ["Facebook"],
      challenge: "DigiBabaa was hired by a social media marketing client struggling with high Cost Per Lead (CPL) and inconsistent results across various Facebook ad campaigns. The primary challenge was to improve lead volume while maintaining or reducing the CPL and ensuring a strong return on investment (ROI).",
      solution: "DigiBabaa implemented an optimized Facebook Ads strategy with: Advanced Audience Targeting leveraged Facebook's AI-powered tools to identify and target the most relevant audiences. Dynamic Ad Bidding used automated bidding strategies to optimize ad spend and allocate more budget to high-performing campaigns. Creative Optimization continuously tested different ad creatives to identify the most effective messaging.",
      duration: "1 month (July 2024)",
      budget: "$1,000",
      results: [
        { label: "Leads Generated", value: "1,057" },
        { label: "Cost Per Lead (CPL)", value: "$0.36" },
        { label: "Total Ad Spend", value: "$1,000" },
        { label: "Total Reach", value: "30,319" },
        { label: "CPL Range", value: "$0.36 - $4.11" },
        { label: "Best CPL", value: "$0.36" }
      ],
      pdfLink: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/general/DigiBabaa%20Social%20Media%20Case%20Study.pdf"
    },
    {
      id: "social-media-management",
      title: "Social Media Management - Digital Marketing Strategy",
      industry: "Digital Marketing",
      platforms: ["Facebook", "Instagram"],
      challenge: "DigiBabaa was hired by a business looking to enhance its social media presence and drive engagement. The challenge was to increase brand visibility, engage a larger audience, and convert followers into loyal customers through effective social media management.",
      solution: "DigiBabaa implemented a comprehensive social media strategy that focused on: Ad Planning & Forecasting, Audience Segmentation, Ad Copywriting & Designing with engaging and visually appealing content, A/B Testing for Best Performance, Conversion Tracking & Pixel Setup, Continuous Monitoring & Optimization, and Ads Reporting & Analysis.",
      duration: "1 month (May 2024)",
      budget: "Rs8,498.05",
      results: [
        { label: "Post Engagements", value: "20,143" },
        { label: "Cost Per Post Engagement", value: "Rs0.42" },
        { label: "Total Spend", value: "Rs8,498.05" }
      ],
      pdfLink: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/general/social%20media.pdf"
    },
    {
      id: "google-ads",
      title: "Google Ads Campaign - Search Engine Lead Generation",
      industry: "Multiple Industries",
      platforms: ["Google Ads"],
      challenge: "DigiBabaa was hired to improve lead generation through Google Ads for a business seeking to enhance its online visibility and acquire high-quality leads. The primary challenge was to reduce the overall cost per click (CPC) while increasing the number of clicks and driving high-value traffic.",
      solution: "DigiBabaa utilized an optimized Google Ads strategy focusing on: Keyword Targeting employed advanced keyword research to identify high-intent keywords, focusing on long-tail keywords for niche targeting. Bid Management implemented automated bid strategies to adjust bids dynamically. Ad Copy Testing involved testing multiple variations of ad copy to find the most compelling messaging.",
      duration: "2 months (April - June 2024)",
      budget: "$1,440",
      results: [
        { label: "Total Clicks", value: "2.37K" },
        { label: "Total Impressions", value: "124K" },
        { label: "Average CPC", value: "$0.61" },
        { label: "Total Ad Spend", value: "$1,440" },
        { label: "Optimization Score", value: "97.3%" }
      ],
      pdfLink: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/general/Google%20ads%20%20Case%20Study.pdf"
    },
    {
      id: "ecommerce-sales",
      title: "E-commerce Business - Maximizing Sales Through Targeted Facebook Ads",
      industry: "E-commerce",
      platforms: ["Facebook"],
      challenge: "DigiBabaa worked with an e-commerce brand looking to boost online sales and improve the overall performance of their Facebook Ads campaigns. The challenge was to increase sales while keeping Cost Per Purchase (CPP) low and optimizing Return on Ad Spend (ROAS).",
      solution: "DigiBabaa implemented a comprehensive strategy focusing on: Precise Audience Segmentation utilized Facebook's detailed targeting options to reach high-potential customers. Dynamic Retargeting focused on bringing back visitors who had previously interacted with the brand. Creative Testing involved testing multiple ad creatives to identify the best-performing ones. Scaling Successful Campaigns increased budgets on high-performing campaigns.",
      duration: "3 months (April - June 2024)",
      budget: "$1,196.13",
      results: [
        { label: "Website Purchases", value: "112" },
        { label: "Cost Per Purchase", value: "$10.68" },
        { label: "Total Ad Spend", value: "$1,196.13" },
        { label: "Total Reach", value: "819.2K - 2.4M" },
        { label: "Daily Conversions", value: "2-12" }
      ],
      pdfLink: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/general/DigiBabaa%20E-commerce%20Case%20Study2.pdf"
    },
    {
      id: "ecommerce-campaign",
      title: "E-commerce Campaign Optimization - Facebook Ads Performance",
      industry: "E-commerce",
      platforms: ["Facebook"],
      challenge: "DigiBabaa was tasked with optimizing Facebook Ads for an e-commerce client facing high costs and low engagement in their campaigns. The objective was to reduce the Cost per Action (CPA) while improving campaign performance and driving higher user engagement.",
      solution: "DigiBabaa implemented a data-driven strategy focused on: Optimized Targeting leveraged Facebook's AI capabilities to identify and target high-value customer segments. AI-Powered Bid Strategy used dynamic bidding strategies to reduce costs while maintaining high ad visibility. Creative Optimization involved continuous testing and refinement of ad creatives to maximize engagement.",
      duration: "2 months (May - June 2024)",
      budget: "$497.88",
      results: [
        { label: "Impressions", value: "78.1K" },
        { label: "Total Actions", value: "2,802" },
        { label: "Total Spend", value: "$497.88" },
        { label: "Cost Per Action (CPA)", value: "$0.005" },
        { label: "Increase in Actions", value: "41.7%" },
        { label: "Reduction in CPA", value: "34.8%" },
        { label: "Engagement Rate", value: "1.3%" },
        { label: "Click-Through Rate (CTR)", value: "0.9%" }
      ],
      pdfLink: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/general/DigiBabaa%20E-commerce%20Case%20Study.pdf"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary/50">
              Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results through strategic digital marketing and AI-driven campaigns
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Main Content */}
                  <div className="md:col-span-2 p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">{study.industry}</Badge>
                        {study.platforms.map((platform) => (
                          <Badge key={platform} variant="outline">{platform}</Badge>
                        ))}
                      </div>
                      <CardTitle className="text-2xl md:text-3xl mb-3">{study.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Challenge */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="h-5 w-5 text-destructive" />
                          <h3 className="text-lg font-semibold">Challenge</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Lightbulb className="h-5 w-5 text-accent" />
                          <h3 className="text-lg font-semibold">Solution</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                      </div>

                      {/* Duration & Budget */}
                      <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Duration</p>
                          <p className="font-semibold">{study.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Budget</p>
                          <p className="font-semibold">{study.budget}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  {/* Results Sidebar */}
                  <div className="bg-primary/5 p-8 border-l border-border">
                    <div className="flex items-center gap-2 mb-6">
                      <TrendingUp className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold">Results Achieved</h3>
                    </div>
                    <div className="space-y-4 mb-6">
                      {study.results.map((result, idx) => (
                        <div key={idx}>
                          <p className="text-sm text-muted-foreground mb-1">{result.label}</p>
                          <p className="text-2xl font-bold text-primary">{result.value}</p>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="w-full" variant="default">
                      <a href={study.pdfLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Full Case Study
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help transform your business with data-driven strategies and AI-powered solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://wa.link/6u8z8o" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/book-consultation">Book a Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
