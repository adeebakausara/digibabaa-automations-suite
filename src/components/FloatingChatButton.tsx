import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ChatInterface } from '@/components/ChatInterface';

export const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-20 right-4 z-40 sm:bottom-6 sm:right-6">
        {/* Pulse Ring Animation */}
        <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
        <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
        
        <Button
          onClick={() => setIsOpen(true)}
          className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-full shadow-elegant hover:shadow-glow bg-gradient-primary hover:bg-primary/90 text-white hover:scale-110 transition-all duration-300 group"
          size="sm"
        >
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 relative z-10 group-hover:scale-110 transition-transform duration-300" />
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </Button>
      </div>

      {/* Chat Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-4xl w-[calc(100vw-1rem)] sm:w-full max-h-[95vh] h-[95vh] sm:h-auto m-2 sm:m-4 p-0 border-0 shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col">
          <div className="relative flex-1 overflow-hidden">
            <ChatInterface />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};