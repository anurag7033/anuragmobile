import { MessageCircle } from "lucide-react";

// WhatsApp floating button - fixed position adjusted for mobile

export const WhatsAppButton = () => {
  const whatsappNumber = "918189067221";
  const message = "Hello! I need help with mobile repair.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
    </a>
  );
};
