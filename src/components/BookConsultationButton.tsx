import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

interface BookConsultationButtonProps {
  variant?: 'fixed' | 'inline';
  position?: 'bottom-left' | 'bottom-right';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BookConsultationButton: React.FC<BookConsultationButtonProps> = ({
  variant = 'fixed',
  position = 'bottom-left',
  size = 'md',
  className = ''
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const baseClasses = "transition-all duration-300 hover:scale-105 flex items-center gap-2 group";
  
  const sizeClasses = {
    sm: "px-3 py-2 text-xs sm:text-sm",
    md: "px-4 py-3 text-sm",
    lg: "px-6 py-4 text-base"
  };

  const handleClick = () => {
    // If we're on the homepage, scroll to the calendar section
    if (location.pathname === '/') {
      const calendarSection = document.getElementById('book-consultation');
      if (calendarSection) {
        calendarSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Navigate to homepage and scroll to calendar section
      navigate('/#book-consultation');
    }
  };

  if (variant === 'fixed') {
    const positionClasses = {
      'bottom-left': 'fixed bottom-4 left-4 z-50',
      'bottom-right': 'fixed bottom-4 right-4 z-50'
    };

    return (
      <button
        onClick={handleClick}
        className={`
          ${positionClasses[position]}
          ${baseClasses}
          ${sizeClasses[size]}
          bg-gradient-primary text-white rounded-full shadow-elegant hover:shadow-glow font-medium
          ${className}
        `}
      >
        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
        <span className="hidden sm:inline">Book Free Consultation</span>
        <span className="sm:hidden">Book Call</span>
      </button>
    );
  }

  return (
    <Button 
      variant="hero" 
      size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'default'}
      className={`${baseClasses} ${className}`}
      onClick={handleClick}
    >
      <Calendar className="mr-2 h-4 w-4" />
      Book Free Consultation
    </Button>
  );
};