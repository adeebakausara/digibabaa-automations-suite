import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, X, Play } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface VideoUploadProps {
  onVideoUploaded: (videoUrl: string, fileName: string) => void;
  currentVideoUrl?: string;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onVideoUploaded, currentVideoUrl }) => {
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('video/')) {
      toast({
        title: "Invalid file type",
        description: "Please select a video file.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 100MB)
    if (file.size > 100 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select a video file smaller than 100MB.",
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const uploadVideo = async () => {
    if (!selectedFile) return;

    setUploading(true);
    try {
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { data, error } = await supabase.storage
        .from('videos')
        .upload(filePath, selectedFile);

      if (error) throw error;

      const { data: urlData } = supabase.storage
        .from('videos')
        .getPublicUrl(filePath);

      onVideoUploaded(urlData.publicUrl, selectedFile.name);
      
      toast({
        title: "Success",
        description: "Video uploaded successfully!",
      });

      // Clean up
      setSelectedFile(null);
      setPreviewUrl(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error uploading video:', error);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your video. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const removeSelection = () => {
    setSelectedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-4">
          {!selectedFile && !currentVideoUrl && (
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Upload Video</h3>
              <p className="text-muted-foreground mb-4">
                Select a video file to upload (Max 100MB)
              </p>
              <Input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileSelect}
                className="hidden"
                id="video-upload"
              />
              <Button 
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
              >
                Choose Video File
              </Button>
            </div>
          )}

          {selectedFile && previewUrl && (
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden">
                <video 
                  src={previewUrl}
                  controls
                  className="w-full h-auto max-h-64 object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={removeSelection}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                </p>
                <Button 
                  onClick={uploadVideo}
                  disabled={uploading}
                  className="px-6"
                >
                  {uploading ? 'Uploading...' : 'Upload Video'}
                </Button>
              </div>
            </div>
          )}

          {currentVideoUrl && !selectedFile && (
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden">
                <video 
                  src={currentVideoUrl}
                  controls
                  className="w-full h-auto max-h-64 object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex justify-center">
                <Button 
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                >
                  Replace Video
                </Button>
                <Input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoUpload;