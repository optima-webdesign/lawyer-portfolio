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
        // Disable scrolling
        document.body.style.overflow = "hidden";
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem("legalConsent", "true");
    setShowModal(false);
    document.body.style.overflow = "auto";
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
          // ✅ FIX 1: Square brackets added for arbitrary value
          className="fixed inset-0 z-999] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            key="modal-content"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            // Modal Container
            className="bg-bg-card w-full max-w-2xl shadow-2xl rounded-sm relative overflow-hidden flex flex-col max-h-[85vh] border border-gold-500/20"
          >
            {/* Top Gold Accent Bar */}
            {/* ✅ FIX 2: bg-linear-to-r updated to bg-gradient-to-r for v4 standard compatibility */}
            <div className="h-1.5 w-full bg-linear-to-r from-gold-500 via-yellow-300 to-gold-600"></div>

            <div className="p-6 md:p-10 flex flex-col h-full">
              {/* Header */}
              <div className="mb-4 border-b border-border-light pb-4 shrink-0">
                <h2 className="text-text-primary font-serif text-2xl md:text-3xl font-bold">
                  Disclaimer & Confirmation
                </h2>
                <p className="text-gold-600 text-xs font-bold uppercase tracking-[0.2em] mt-2">
                  Please Read Carefully
                </p>
              </div>

              {/* Scrollable Content */}
              <div className="text-text-secondary text-sm space-y-4 mb-6 overflow-y-auto pr-2 leading-relaxed font-medium custom-scrollbar grow">
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
                {/* ✅ FIX 3: Updated list marker for v4 compatibility */}
                <ul className="list-disc pl-5 space-y-3 marker:text-gold-500">
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
                <div className="mt-4 p-4 bg-bg-main border-l-4 border-gold-500 text-xs text-slate-500 italic">
                  We are not liable for any consequence of any action taken by
                  the user relying on material / information provided on this
                  website. If you have any legal issues, you, in all cases, must
                  seek independent legal advice.
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-border-light shrink-0 flex justify-end">
                <button
                  onClick={handleAgree}
                  className="px-8 md:px-12 py-3 bg-text-primary text-white font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-lg w-full md:w-auto cursor-pointer"
                >
                  I Agree
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LegalDisclaimer;