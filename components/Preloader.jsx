"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Preloader aate hi scroll LOCK kardo
    document.body.style.overflow = "hidden";

    // 2. 2.5 seconds baad preloader hide hoga
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Scroll UNLOCK kardo taaki user website dekh sake
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden"; // horizontal scroll roke rakhne ke liye
    }, 2500);

    // 3. Cleanup function (Safety ke liye)
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          // ✅ FIX: z-9999 ko z-[9999] kiya
          className="fixed inset-0 z-9999 bg-bg-card flex flex-col items-center justify-center overflow-hidden"
        >
          
          {/* Name Reveal Container */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-serif font-bold text-text-primary tracking-tight"
            >
              Adv. Gaud Manish
            </motion.h1>
          </div>

          {/* Designation Fade In */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-gold-600 uppercase tracking-[0.3em] text-sm font-bold mb-8"
          >
            High Court Practitioner
          </motion.p>

          {/* Gold Progress Line */}
          <div className="w-64 h-0.5 bg-slate-100 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-gold-500"
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}