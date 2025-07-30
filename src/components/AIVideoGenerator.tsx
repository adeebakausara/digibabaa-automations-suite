import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Video, Sparkles, Download, Play, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface AIVideoGeneratorProps {
  onVideoGenerated?: (videoUrl: string) => void;
}

const AIVideoGenerator = ({ onVideoGenerated }: AIVideoGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    customerName: "",
    company: "",
    testimonialText: "",
    industry: "",
    results: ""
  });

  const handleGenerate = async () => {
    if (!formData.customerName || !formData.testimonialText) {
      toast.error("Please fill in customer name and testimonial text");
      return;
    }

    setIsGenerating(true);
    
    try {
      // Simulate AI video generation
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock generated video URL
      const mockVideoUrl = `https://example.com/ai-video-${Date.now()}.mp4`;
      setGeneratedVideo(mockVideoUrl);
      onVideoGenerated?.(mockVideoUrl);
      
      toast.success("AI testimonial video generated successfully!");
    } catch (error) {
      toast.error("Failed to generate video. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border-border/50 shadow-elegant">
      <CardHeader className="text-center pb-6">
        <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold">
          AI Video <span className="text-primary">Generator</span>
        </CardTitle>
        <p className="text-muted-foreground">
          Create professional testimonial videos using AI technology
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Customer Name</label>
            <Input
              placeholder="John Smith"
              value={formData.customerName}
              onChange={(e) => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Company</label>
            <Input
              placeholder="TechCorp Inc."
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Testimonial Text</label>
          <Textarea
            placeholder="DigiBabaa's AI automation transformed our business operations..."
            rows={4}
            value={formData.testimonialText}
            onChange={(e) => setFormData(prev => ({ ...prev, testimonialText: e.target.value }))}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Industry</label>
            <Input
              placeholder="E-commerce"
              value={formData.industry}
              onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Results Achieved</label>
            <Input
              placeholder="50% efficiency increase"
              value={formData.results}
              onChange={(e) => setFormData(prev => ({ ...prev, results: e.target.value }))}
            />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <Button 
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-gradient-primary hover:opacity-90 text-white"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating Video...
              </>
            ) : (
              <>
                <Video className="mr-2 h-5 w-5" />
                Generate AI Video
              </>
            )}
          </Button>

          <div className="flex gap-2 flex-wrap justify-center">
            <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-400/30">
              <Sparkles className="h-3 w-3 mr-1" />
              AI-Powered
            </Badge>
            <Badge variant="secondary" className="bg-purple-500/10 text-purple-400 border-purple-400/30">
              Professional Quality
            </Badge>
            <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-400/30">
              Instant Generation
            </Badge>
          </div>
        </div>

        {generatedVideo && (
          <div className="border border-border rounded-lg p-4 bg-card/50">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-primary">Generated Video</h4>
              <Badge className="bg-green-500/10 text-green-400 border-green-400/30">
                Ready
              </Badge>
            </div>
            
            <div className="bg-black/10 rounded-lg p-8 text-center mb-4">
              <Video className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground">AI Generated Video Preview</p>
              <p className="text-xs text-muted-foreground mt-1">{formData.customerName} - {formData.company}</p>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Play className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIVideoGenerator;