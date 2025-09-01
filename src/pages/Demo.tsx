import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import thumbnail images
import whatsappDocsThumbnail from "@/assets/demo-whatsapp-documents-thumbnail.jpg";
import whatsappAppointmentsThumbnail from "@/assets/demo-whatsapp-appointments-thumbnail.jpg";
import instagramSalesThumbnail from "@/assets/demo-instagram-sales-thumbnail.jpg";
import whatsappSalesThumbnail from "@/assets/demo-whatsapp-sales-thumbnail.jpg";
import whatsappSchedulerThumbnail from "@/assets/demo-whatsapp-scheduler-thumbnail.jpg";

const Demo = () => {
  const demoTemplates = [
    {
      title: "AI Agent Template: Answers Any Question via WhatsApp From Your Documents & Saves 40+ Hours Monthly",
      videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20Answers%20Any%20Question%20via%20WhatsApp%20From%20Your%20Documents%20&%20Saves%2040+%20Hours%20Monthly.mp4",
      thumbnail: whatsappDocsThumbnail,
      description: {
        problem: "You spend 40–100+ hours monthly answering repetitive WhatsApp questions – the same product details, prices, and policies over and over.",
        solution: "This AI agent reads your uploaded documents (PDFs, FAQs, price lists, websites) and automatically answers customer questions on WhatsApp using YOUR exact information.",
        howItWorks: "Drag and drop any file into the system. The AI learns your content instantly. When customers message, it finds the answer in your documents and responds in seconds.",
        bestFor: "Coaches, course creators, e-commerce stores, service businesses, or agencies offering WhatsApp automation."
      }
    },
    {
      title: "AI Agent Template: Books Appointments with Customers via WhatsApp",
      videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20Books%20Appointments%20with%20Customers%20via%20WhatsApp.mp4",
      thumbnail: whatsappAppointmentsThumbnail,
      description: {
        overview: "This AI agent books appointments with customers via WhatsApp, 24/7.",
        benefits: "Businesses can get 35–45% MORE customers when they offer WhatsApp booking instead of just phone calls. Plus can save $2k/m per month on staff costs.",
        process: "When someone messages you OR clicks the WhatsApp link on your website, the AI replies instantly, asks what service they need, and checks available times.",
        booking: "The customer picks their time, and the AI books it directly into your calendar with all their contact details. It also sends automatic SMS reminders before their appointment so they actually show up.",
        perfectFor: "Any business that takes appointments – salons, clinics, restaurants, gyms, consultants."
      }
    },
    {
      title: "AI Agent Template: Instagram DMs to Sales Calls & Product Sales",
      videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20Instagram%20DMs%20to%20Sales%20Calls%20&%20Product%20Sales.mp4",
      thumbnail: instagramSalesThumbnail,
      description: {
        overview: "This AI automation turns every Instagram comment or DM into booked sales calls or product sales.",
        workflow: "It starts when someone comments on any post or sends a DM. The AI replies instantly, asks a few smart qualifying questions to figure out what they need, and checks if they're a good fit for your offer.",
        booking: "If yes, it collects their contact details, shows available time slots, and books the call right into your calendar.",
        followUp: "If they don't book right away, it follows up automatically. It also sends SMS reminders so they actually show up.",
        alternative: "And if they're not a fit for a call, it sends them straight to your entry level product."
      }
    },
    {
      title: "AI Agent Template: Your WhatsApp Sales Assistant",
      videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20Your%20WhatsApp%20Sales%20Assistant.mp4",
      thumbnail: whatsappSalesThumbnail,
      description: {
        overview: "Answering customer questions manually? This AI agent acts as your personal sales assistant, helping potential buyers find the right product, get instant answers, and receive direct purchase links, all through WhatsApp.",
        process: "Once set up, customers can simply message your WhatsApp number, describe what they need, and the AI will recommend the best products, handle inquiries, and guide them to checkout – making sales effortless."
      }
    },
    {
      title: "AI Agent Template: WhatsApp AI Agent \"Appointment Setter\"",
      videoUrl: "https://utdvpdfiiykaykzgzveg.supabase.co/storage/v1/object/public/videos/AI%20Agent%20Template%20WhatsApp%20AI%20Agent%20Appointment%20Setter.mp4",
      thumbnail: whatsappSchedulerThumbnail,
      description: {
        overview: "Let people book appointments with you, just by messaging your AI assistant on WhatsApp.",
        simplicity: "No booking links. No forms. No websites.",
        functionality: "This AI agent chats with your clients or prospects via text or voice, checks your office hours and available time slots, converts to their time zone, and collects all the important info like their name, email, phone number, and even what they want to talk about.",
        completion: "Once confirmed, it adds the appointment to your calendar, sends an email confirmation to both of you, and reminds them on WhatsApp one hour before the meeting – so they actually show up."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Title Section */}
      <section className="py-16 bg-gradient-to-br from-background to-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            🤖 AI Agent Templates
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Agent Templates –{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Live Demos
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See our pre-built AI agent templates in action. Each template is ready to deploy and customize for your specific business needs.
          </p>
        </div>
      </section>

      {/* Demo Templates */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {demoTemplates.map((template, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                {/* Template Title */}
                <div className="p-8 pb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {template.title}
                  </h2>
                </div>
                
                {/* Video */}
                <div className="px-8 pb-6">
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                      preload="metadata"
                      poster={template.thumbnail}
                    >
                      <source src={template.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                
                {/* Description */}
                <div className="p-8 pt-2">
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    {template.description.problem && (
                      <p>
                        <span className="font-bold text-foreground">The Problem:</span> {template.description.problem}
                      </p>
                    )}
                    {template.description.solution && (
                      <p>
                        <span className="font-bold text-foreground">What This Does:</span> {template.description.solution}
                      </p>
                    )}
                    {template.description.howItWorks && (
                      <p>
                        <span className="font-bold text-foreground">How It Works:</span> {template.description.howItWorks}
                      </p>
                    )}
                    {template.description.bestFor && (
                      <p>
                        <span className="font-bold text-foreground">Best For:</span> {template.description.bestFor}
                      </p>
                    )}
                    {template.description.overview && (
                      <p>{template.description.overview}</p>
                    )}
                    {template.description.benefits && (
                      <p>{template.description.benefits}</p>
                    )}
                    {template.description.process && (
                      <p>{template.description.process}</p>
                    )}
                    {template.description.workflow && (
                      <p>{template.description.workflow}</p>
                    )}
                    {template.description.booking && (
                      <p>{template.description.booking}</p>
                    )}
                    {template.description.followUp && (
                      <p>{template.description.followUp}</p>
                    )}
                    {template.description.alternative && (
                      <p>{template.description.alternative}</p>
                    )}
                    {template.description.perfectFor && (
                      <p>
                        <span className="font-bold text-foreground">Perfect For:</span> {template.description.perfectFor}
                      </p>
                    )}
                    {template.description.simplicity && (
                      <p>{template.description.simplicity}</p>
                    )}
                    {template.description.functionality && (
                      <p>{template.description.functionality}</p>
                    )}
                    {template.description.completion && (
                      <p>{template.description.completion}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;