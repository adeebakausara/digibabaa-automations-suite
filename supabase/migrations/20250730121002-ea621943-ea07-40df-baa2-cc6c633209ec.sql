-- Update RLS policy to allow public updates for testimonials
DROP POLICY IF EXISTS "Authenticated users can manage testimonials" ON public.testimonials;

-- Create a new policy that allows public updates
CREATE POLICY "Public can manage testimonials" 
ON public.testimonials 
FOR ALL 
USING (true) 
WITH CHECK (true);