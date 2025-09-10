-- Fix critical security vulnerability in testimonials table
-- Remove dangerous public management policy and add proper role-based access

-- First, drop the dangerous policy that allows public management
DROP POLICY IF EXISTS "Public can manage testimonials" ON public.testimonials;

-- Keep public read access for displaying testimonials on the website
-- The "Public can view testimonials" policy already exists and is appropriate

-- Add admin role for testimonial management
CREATE TYPE public.user_role AS enum ('admin', 'user');

-- Create user roles table for role-based access control
CREATE TABLE public.user_roles (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role user_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(user_id, role)
);

-- Enable RLS on user_roles table
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check admin role (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT EXISTS (
        SELECT 1 FROM public.user_roles 
        WHERE user_roles.user_id = is_admin.user_id 
        AND role = 'admin'
    );
$$;

-- Add secure policies for testimonials management
-- Only authenticated admin users can insert, update, or delete testimonials
CREATE POLICY "Admins can manage testimonials" 
ON public.testimonials 
FOR ALL 
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- RLS policies for user_roles table
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Admins can manage all user roles" 
ON public.user_roles 
FOR ALL 
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());