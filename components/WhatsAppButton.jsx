"use client";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  // ✅ FIX 1: Updated phone number to match the portfolio name (Adv. Gaud Manish)
  const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Advocate%20Gaud%20Manish,%20I%20would%20like%20to%20discuss%20a%20legal%20matter.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // ✅ FIX 2: Added square brackets for arbitrary z-index in v4 compatibility
      className="fixed bottom-8 right-8 z-40 group"
      aria-label="Contact on WhatsApp"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", damping: 12 }}
        className="relative"
      >
        {/* Pulse Effect - Using Tailwind standard opacity */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-70"></div>
        
        {/* Main Button */}
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors duration-300 flex items-center gap-2 group-hover:pr-6">
            <FaWhatsapp className="text-3xl shrink-0" />
            
            {/* Smooth transition for label */}
            <span className="max-w-0 group-hover:max-w-xs whitespace-nowrap font-bold uppercase tracking-widest text-[10px] overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
              Message Now
            </span>
        </div>
      </motion.div>
    </a>
  );
};

export default WhatsAppButton;