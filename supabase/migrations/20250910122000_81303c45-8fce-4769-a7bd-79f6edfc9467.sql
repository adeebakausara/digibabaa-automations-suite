-- Create ai_discovery_submissions table
CREATE TABLE public.ai_discovery_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  website TEXT,
  phone TEXT NOT NULL,
  q1_current_state TEXT NOT NULL,
  q2_6_12_goal TEXT NOT NULL,
  q3_biggest_challenge TEXT NOT NULL,
  q4_personal_importance TEXT NOT NULL,
  q5_time_sink TEXT NOT NULL,
  q6_kill_task TEXT NOT NULL,
  q7_ai_experience TEXT NOT NULL,
  q8_customer_frustration TEXT NOT NULL,
  q9_strength TEXT NOT NULL,
  q10_big_impact TEXT NOT NULL,
  industry TEXT NOT NULL,
  industry_other TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.ai_discovery_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting submissions (public access for form submissions)
CREATE POLICY "Anyone can submit AI discovery forms" 
ON public.ai_discovery_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to view all submissions
CREATE POLICY "Admins can view AI discovery submissions" 
ON public.ai_discovery_submissions 
FOR SELECT 
USING (is_admin());