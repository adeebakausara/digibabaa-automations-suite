-- Create storage buckets for media files
INSERT INTO storage.buckets (id, name, public) 
VALUES 
  ('testimonials', 'testimonials', true),
  ('services', 'services', true),
  ('general', 'general', true);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  quote TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  image_url TEXT,
  video_url TEXT,
  video_thumbnail TEXT,
  video_length TEXT,
  results TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_video BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create services table
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  icon TEXT,
  page_route TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create media assets table for general website media
CREATE TABLE public.media_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'image' or 'video'
  url TEXT NOT NULL,
  alt_text TEXT,
  category TEXT, -- 'hero', 'service', 'testimonial', 'general'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can view testimonials" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Public can view services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Public can view media assets" ON public.media_assets FOR SELECT USING (true);

-- Create policies for authenticated users (for admin access)
CREATE POLICY "Authenticated users can manage testimonials" ON public.testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage services" ON public.services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage media assets" ON public.media_assets FOR ALL USING (auth.role() = 'authenticated');

-- Create storage policies
CREATE POLICY "Public can view testimonial files" ON storage.objects FOR SELECT USING (bucket_id = 'testimonials');
CREATE POLICY "Public can view service files" ON storage.objects FOR SELECT USING (bucket_id = 'services');
CREATE POLICY "Public can view general files" ON storage.objects FOR SELECT USING (bucket_id = 'general');

CREATE POLICY "Authenticated users can upload testimonial files" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'testimonials' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can upload service files" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'services' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can upload general files" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'general' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update testimonial files" ON storage.objects FOR UPDATE USING (bucket_id = 'testimonials' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update service files" ON storage.objects FOR UPDATE USING (bucket_id = 'services' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update general files" ON storage.objects FOR UPDATE USING (bucket_id = 'general' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete testimonial files" ON storage.objects FOR DELETE USING (bucket_id = 'testimonials' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete service files" ON storage.objects FOR DELETE USING (bucket_id = 'services' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete general files" ON storage.objects FOR DELETE USING (bucket_id = 'general' AND auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_testimonials_updated_at
  BEFORE UPDATE ON public.testimonials
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON public.services
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_media_assets_updated_at
  BEFORE UPDATE ON public.media_assets
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample testimonials data to maintain existing content
INSERT INTO public.testimonials (name, role, company, quote, rating, is_featured, is_video, video_length, results) VALUES
  ('Sarah Johnson', 'Marketing Director', 'TechStart Inc.', 'The AI chatbot increased our lead conversion by 300% in just 2 months. Incredible results!', 5, true, true, '2:45', 'Lead conversion increased by 300%'),
  ('Michael Chen', 'CEO', 'Digital Solutions Ltd.', 'Our customer service efficiency improved by 250% with their AI voice agents.', 5, true, true, '3:12', 'Customer service efficiency improved by 250%'),
  ('Emily Rodriguez', 'Operations Manager', 'Global Corp', 'The custom automation saved us 40 hours per week. Game-changing technology!', 5, true, true, '1:58', 'Saved 40 hours per week'),
  ('David Park', 'Founder', 'StartupXYZ', 'Amazing AI solutions that transformed our business operations completely.', 5, false, false, null, null),
  ('Lisa Wang', 'CTO', 'InnovateNow', 'The implementation was seamless and results exceeded our expectations.', 5, false, false, null, null),
  ('James Miller', 'VP Sales', 'SalesForce Pro', 'Our sales team productivity increased by 180% with their AI tools.', 5, false, false, null, null);

-- Insert sample services data
INSERT INTO public.services (title, description, icon, page_route) VALUES
  ('AI Chatbots', 'Intelligent conversational AI that engages customers 24/7, answers questions instantly, and converts visitors into leads with natural language processing.', 'MessageCircle', '/services/ai-chatbot'),
  ('AI Voice Agents', 'Advanced voice AI that handles customer calls, schedules appointments, and provides support with human-like conversation capabilities.', 'Phone', '/services/ai-voice-agent'),
  ('Custom AI Automation', 'Tailored AI solutions that automate repetitive tasks, streamline workflows, and integrate seamlessly with your existing business processes.', 'Cog', '/services/custom-ai-automation'),
  ('AI Website Design', 'AI-powered website creation that generates stunning, responsive designs optimized for conversion and user experience.', 'Palette', '/services/ai-website-design');