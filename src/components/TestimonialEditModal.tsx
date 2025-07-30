import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import VideoUpload from "@/components/VideoUpload";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Testimonial } from "@/hooks/useTestimonials";
import { Save, X } from "lucide-react";

interface TestimonialEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: Testimonial | null;
  onUpdate: (updatedTestimonial: Testimonial) => void;
}

const TestimonialEditModal = ({ isOpen, onClose, testimonial, onUpdate }: TestimonialEditModalProps) => {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: testimonial?.name || "",
    role: testimonial?.role || "",
    company: testimonial?.company || "",
    quote: testimonial?.quote || "",
    rating: testimonial?.rating || 5,
    results: testimonial?.results || "",
    is_featured: testimonial?.is_featured || false,
    is_video: testimonial?.is_video || false,
    video_url: testimonial?.video_url || "",
    video_thumbnail: testimonial?.video_thumbnail || "",
    video_length: testimonial?.video_length || "",
    image_url: testimonial?.image_url || ""
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleVideoUploaded = (videoUrl: string, fileName: string) => {
    setFormData(prev => ({
      ...prev,
      video_url: videoUrl,
      is_video: true
    }));
  };

  const handleSave = async () => {
    if (!testimonial) return;

    setSaving(true);
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .update({
          name: formData.name,
          role: formData.role,
          company: formData.company,
          quote: formData.quote,
          rating: formData.rating,
          results: formData.results,
          is_featured: formData.is_featured,
          is_video: formData.is_video,
          video_url: formData.video_url,
          video_thumbnail: formData.video_thumbnail,
          video_length: formData.video_length,
          image_url: formData.image_url,
          updated_at: new Date().toISOString()
        })
        .eq('id', testimonial.id)
        .select();

      if (error) throw error;

      if (data && data.length > 0) {
        onUpdate(data[0]);
      }
      toast({
        title: "Success",
        description: "Testimonial updated successfully",
      });
      onClose();
    } catch (error) {
      console.error('Error updating testimonial:', error);
      toast({
        title: "Error",
        description: "Failed to update testimonial",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (!testimonial) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Edit Testimonial
            {formData.is_featured && (
              <Badge className="bg-gradient-primary text-white">Featured</Badge>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4">
          {/* Left Column - Form Fields */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Client name"
                />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  placeholder="Job title"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Company name"
              />
            </div>

            <div>
              <Label htmlFor="quote">Testimonial Quote</Label>
              <Textarea
                id="quote"
                value={formData.quote}
                onChange={(e) => handleInputChange('quote', e.target.value)}
                placeholder="Testimonial text"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="results">Results/Metrics</Label>
              <Input
                id="results"
                value={formData.results}
                onChange={(e) => handleInputChange('results', e.target.value)}
                placeholder="e.g., Lead conversion increased by 300%"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="rating">Rating (1-5)</Label>
                <Input
                  id="rating"
                  type="number"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={(e) => handleInputChange('rating', parseInt(e.target.value))}
                />
              </div>
              <div>
                <Label htmlFor="video_length">Video Length</Label>
                <Input
                  id="video_length"
                  value={formData.video_length}
                  onChange={(e) => handleInputChange('video_length', e.target.value)}
                  placeholder="e.g., 2:45"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="is_video"
                  checked={formData.is_video}
                  onCheckedChange={(checked) => handleInputChange('is_video', checked)}
                />
                <Label htmlFor="is_video">Video Testimonial</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="is_featured"
                  checked={formData.is_featured}
                  onCheckedChange={(checked) => handleInputChange('is_featured', checked)}
                />
                <Label htmlFor="is_featured">Featured</Label>
              </div>
            </div>
          </div>

          {/* Right Column - Video Upload */}
          <div className="space-y-6">
            <div>
              <Label>Video Upload</Label>
              <VideoUpload
                onVideoUploaded={handleVideoUploaded}
                currentVideoUrl={formData.video_url}
              />
            </div>

            {!formData.is_video && (
              <div>
                <Label htmlFor="image_url">Profile Image URL</Label>
                <Input
                  id="image_url"
                  value={formData.image_url}
                  onChange={(e) => handleInputChange('image_url', e.target.value)}
                  placeholder="Profile image URL"
                />
              </div>
            )}

            {formData.video_thumbnail && (
              <div>
                <Label htmlFor="video_thumbnail">Video Thumbnail URL</Label>
                <Input
                  id="video_thumbnail"
                  value={formData.video_thumbnail}
                  onChange={(e) => handleInputChange('video_thumbnail', e.target.value)}
                  placeholder="Video thumbnail URL"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t">
          <Button variant="outline" onClick={onClose} disabled={saving}>
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            <Save className="h-4 w-4 mr-2" />
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TestimonialEditModal;