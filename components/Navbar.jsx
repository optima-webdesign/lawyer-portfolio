"use client";
import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // 1. SCROLL LOGIC: Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0; // Fallback to 0

    // Mobile menu khula hai toh navbar hide mat karo
    if (mobileMenuOpen) {
      setHidden(false);
      return;
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Background transition threshold
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  // 2. UX FIX: Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const navLinks = ["About", "Practice Areas", "Experience", "Contact"];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !mobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-500 ease-in-out border-t-4 
        ${
          scrolled || mobileMenuOpen
            ? "bg-bg-card/95 backdrop-blur-md py-3 shadow-md border-gold-500"
            : "bg-transparent py-4 md:py-6 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO SECTION */}
          <div
            className="flex items-center gap-3 cursor-pointer group z-50"
            onClick={() => scrollToSection("hero")}
          >
            <FaScaleUnbalanced className="text-xl md:text-2xl text-gold-500" />
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-2xl font-bold tracking-tight text-text-primary">
                Adv. Gaud Manish
              </span>
              <span
                className={`text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-gold-600 transition-all duration-300 ${
                  scrolled ? "opacity-0 h-0 hidden md:block" : "opacity-100 h-auto"
                }`}
              >
                High Court Practitioner
              </span>
            </div>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(" ", "-"))
                }
                className="relative group py-2"
              >
                <span className="font-serif text-sm uppercase tracking-widest text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                  {item}
                </span>
                <span className="absolute bottom-0 left-1/2 w-0 h-px bg-gold-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block px-8 py-3 bg-text-primary text-white text-xs uppercase tracking-[0.2em] font-bold border border-text-primary hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all duration-300 cursor-pointer"
          >
            Consultation
          </button>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden z-50 text-text-primary text-2xl p-2 focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-bg-card flex flex-col items-center justify-center pt-20 md:hidden"
          >
            <div className="absolute inset-4 border border-gold-500/20 pointer-events-none"></div>
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", "-"))
                  }
                  className="font-serif text-3xl text-text-primary font-medium hover:text-gold-600 transition-colors cursor-pointer"
                >
                  {item}
                </motion.button>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="px-10 py-4 bg-text-primary text-white text-sm uppercase tracking-[0.2em] font-bold hover:bg-gold-500 transition-colors cursor-pointer"
              >
                Book Consultation
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;