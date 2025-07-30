import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image_url?: string;
  video_url?: string;
  video_thumbnail?: string;
  video_length?: string;
  results?: string;
  is_featured: boolean;
  is_video: boolean;
  created_at: string;
  updated_at: string;
}

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setTestimonials(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch testimonials');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const videoTestimonials = testimonials.filter(t => t.is_video);
  const writtenTestimonials = testimonials.filter(t => !t.is_video);
  const featuredTestimonials = testimonials.filter(t => t.is_featured);

  return {
    testimonials,
    videoTestimonials,
    writtenTestimonials,
    featuredTestimonials,
    loading,
    error,
    refreshTestimonials: fetchTestimonials
  };
};