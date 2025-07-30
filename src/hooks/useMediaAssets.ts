import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface MediaAsset {
  id: string;
  name: string;
  type: 'image' | 'video';
  url: string;
  alt_text?: string;
  category?: 'hero' | 'service' | 'testimonial' | 'general';
  created_at: string;
  updated_at: string;
}

export const useMediaAssets = (category?: string) => {
  const [mediaAssets, setMediaAssets] = useState<MediaAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediaAssets = async () => {
      try {
        setLoading(true);
        let query = supabase.from('media_assets').select('*');
        
        if (category) {
          query = query.eq('category', category);
        }
        
        const { data, error } = await query.order('created_at', { ascending: false });

        if (error) throw error;
        
        setMediaAssets((data || []) as MediaAsset[]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch media assets');
      } finally {
        setLoading(false);
      }
    };

    fetchMediaAssets();
  }, [category]);

  return {
    mediaAssets,
    loading,
    error
  };
};