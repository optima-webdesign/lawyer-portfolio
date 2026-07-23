"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LegalDisclaimer = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // 1. Check Session Storage safely (Hydration Safe)
    const timer = setTimeout(() => {
      const hasAgreed = sessionStorage.getItem("legalConsent");
      if (!hasAgreed) {
        setShowModal(true);
        // Disable scrolling completely when modal is open
        document.body.style.overflow = "hidden";
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = ""; 
    };
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem("legalConsent", "true");
    setShowModal(false);
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          // Outer spacing
          className="fixed inset-0 z-9999 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            key="modal-content"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            // ✅ FIX: Made the box strictly contain its children and not exceed 85vh
            className="bg-bg-card w-full max-w-2xl shadow-2xl rounded-lg md:rounded-sm relative flex flex-col max-h-[85vh] border border-gold-500/20 overflow-hidden"
          >
            {/* Top Gold Accent Bar */}
            <div className="h-1.5 w-full shrink-0 bg-linear-to-r from-gold-500 via-yellow-300 to-gold-600"></div>

            {/* ✅ HEADER (Fixed at Top) */}
            <div className="px-5 pt-5 pb-3 md:px-10 md:pt-8 md:pb-4 border-b border-border-light shrink-0">
              <h2 className="text-text-primary font-serif text-xl md:text-3xl font-bold">
                Disclaimer & Confirmation
              </h2>
              <p className="text-gold-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mt-1.5 md:mt-2">
                Please Read Carefully
              </p>
            </div>

            {/* ✅ SCROLLABLE CONTENT (Takes remaining space and scrolls) */}
            <div className="px-5 py-4 md:px-10 md:py-6 overflow-y-auto grow custom-scrollbar">
              <div className="text-text-secondary text-xs md:text-sm space-y-4 leading-relaxed font-medium">
                <p>
                  As per the rules of the{" "}
                  <strong className="text-text-primary">
                    Bar Council of India
                  </strong>
                  , lawyers and law firms are not permitted to solicit work or
                  advertise. By clicking the{" "}
                  <span className="font-bold text-gold-600">
                    &quot;I AGREE&quot;
                  </span>{" "}
                  button, you acknowledge and confirm that:
                </p>
                <ul className="list-disc pl-4 md:pl-5 space-y-2 md:space-y-3 marker:text-gold-500">
                  <li>
                    There has been no advertisement, personal communication,
                    solicitation, invitation or inducement of any sort
                    whatsoever from us or any of our members to solicit any work
                    through this website.
                  </li>
                  <li>
                    You wish to gain more information about us for your own
                    information and use.
                  </li>
                  <li>
                    The information about us is provided to you on your specific
                    request.
                  </li>
                  <li>
                    Any information obtained or downloaded from this website is
                    completely at the user&apos;s volition and any transmission,
                    receipt or use of this site would not create any
                    lawyer-client relationship.
                  </li>
                </ul>
                <div className="mt-4 p-3 md:p-4 bg-bg-main border-l-4 border-gold-500 text-[10px] md:text-xs text-slate-500 italic leading-snug">
                  We are not liable for any consequence of any action taken by
                  the user relying on material / information provided on this
                  website. If you have any legal issues, you, in all cases, must
                  seek independent legal advice.
                </div>
              </div>
            </div>

            {/* ✅ FOOTER BUTTON (Fixed at Bottom) */}
            <div className="px-5 py-4 md:px-10 md:py-6 border-t border-border-light shrink-0 bg-bg-card flex justify-end">
              <button
                onClick={handleAgree}
                className="px-6 md:px-12 py-3 bg-text-primary text-white font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-lg w-full md:w-auto cursor-pointer rounded-sm"
              >
                I Agree
              </button>
            </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LegalDisclaimer;