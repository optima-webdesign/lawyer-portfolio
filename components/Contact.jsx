"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    // Safety check ensuring all refs are available before animating
    if (!sectionRef.current || !formRef.current || !infoRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Using gsap.context for clean scoping and easy cleanup
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom bottom",
          toggleActions: "play none none reverse"
        }
      });

      tl.from(infoRef.current.children, {
        y: 30, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.1, 
        ease: "power3.out"
      })
      .from(formRef.current, {
        x: 50, 
        opacity: 0, 
        duration: 1.2, 
        ease: "power3.out"
      }, "-=0.8");
    }, sectionRef);

    return () => ctx.revert(); // Properly kills animations and ScrollTriggers
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-16 md:py-32 px-6 overflow-hidden bg-bg-main">
      {/* 1. BORDER FRAME - Using canonical gold classes */}
      <div className="absolute inset-4 md:inset-10 border border-gold-500/30 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-500"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold-500"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold-500"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* LEFT: INFO SECTION */}
        <div ref={infoRef} className="pt-4 md:pt-8">
          <div className="mb-4 text-gold-600 text-lg md:text-xl">✦</div>
          <span className="text-text-secondary uppercase tracking-[0.3em] text-xs font-bold mb-4 md:mb-6 block">Get in Touch</span>
          <h2 className="font-serif text-3xl md:text-5xl text-text-primary mb-6 md:mb-8 leading-tight">
            Let&apos;s Discuss Your <br /> <span className="italic text-gold-600">Legal Situation.</span>
          </h2>
          <div className="w-16 md:w-20 h-0.5 bg-gold-500 mb-6 md:mb-8"></div>
          <p className="text-text-secondary mb-10 md:mb-12 leading-relaxed text-base md:text-lg font-serif">
            Every case is unique. Schedule a consultation to understand your legal options. Strict confidentiality is maintained for all communications.
          </p>

          <div className="space-y-8 md:space-y-10">
            <div className="flex items-start gap-4 md:gap-6 group">
              <div className="mt-1 text-gold-600 text-lg md:text-xl group-hover:scale-110 transition-transform"><FaPhoneAlt /></div>
              <div>
                <h4 className="text-text-primary font-serif text-lg md:text-xl font-bold mb-1">Call Us</h4>
                <p className="text-text-secondary font-medium text-sm md:text-base">+91 98765 43210</p>
                <p className="text-text-secondary text-[10px] md:text-xs uppercase tracking-widest mt-1 opacity-60">Mon-Fri, 9am - 6pm</p>
              </div>
            </div>
            <div className="flex items-start gap-4 md:gap-6 group">
              <div className="mt-1 text-gold-600 text-lg md:text-xl group-hover:scale-110 transition-transform"><FaEnvelope /></div>
              <div>
                <h4 className="text-text-primary font-serif text-lg md:text-xl font-bold mb-1">Email</h4>
                <p className="text-text-secondary font-medium text-sm md:text-base">contact@rahulsharma.law</p>
              </div>
            </div>
            <div className="flex items-start gap-4 md:gap-6 group">
              <div className="mt-1 text-gold-600 text-lg md:text-xl group-hover:scale-110 transition-transform"><FaMapMarkerAlt /></div>
              <div>
                <h4 className="text-text-primary font-serif text-lg md:text-xl font-bold mb-1">Chambers</h4>
                <p className="text-text-secondary font-medium leading-relaxed text-sm md:text-base">
                  Chamber No. 405, High Court Complex,<br /> New Delhi, India - 110001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: FORM SECTION */}
        <div ref={formRef}>
          <form className="bg-white p-8 md:p-12 border border-gold-500 shadow-2xl relative">
            <div className="absolute top-2 left-2 w-full h-full border border-gold-500/20 -z-10"></div>
            <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-8 md:mb-10 text-center">— Send a Message —</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="relative group">
                <input type="text" id="full-name" placeholder=" " className="w-full bg-transparent border-b border-border-light py-3 text-text-primary focus:outline-none focus:border-gold-500 transition-colors peer font-serif text-sm md:text-base" />
                <label htmlFor="full-name" className="absolute left-0 top-3 text-text-secondary text-xs md:text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-gold-600 peer-placeholder-shown:top-3 pointer-events-none">Full Name</label>
              </div>
              <div className="relative group">
                <input type="email" id="email" placeholder=" " className="w-full bg-transparent border-b border-border-light py-3 text-text-primary focus:outline-none focus:border-gold-500 transition-colors peer font-serif text-sm md:text-base" />
                <label htmlFor="email" className="absolute left-0 top-3 text-text-secondary text-xs md:text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-gold-600 peer-placeholder-shown:top-3 pointer-events-none">Email Address</label>
              </div>
            </div>

            <div className="relative group mb-6 md:mb-8">
              <input type="tel" id="phone" placeholder=" " className="w-full bg-transparent border-b border-border-light py-3 text-text-primary focus:outline-none focus:border-gold-500 transition-colors peer font-serif text-sm md:text-base" />
              <label htmlFor="phone" className="absolute left-0 top-3 text-text-secondary text-xs md:text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-gold-600 peer-placeholder-shown:top-3 pointer-events-none">Phone Number</label>
            </div>

            <div className="relative group mb-10 md:mb-12">
              <textarea id="case-details" rows="4" placeholder=" " className="w-full bg-transparent border-b border-border-light py-3 text-text-primary focus:outline-none focus:border-gold-500 transition-colors peer resize-none font-serif text-sm md:text-base"></textarea>
              <label htmlFor="case-details" className="absolute left-0 top-3 text-text-secondary text-xs md:text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-gold-600 peer-placeholder-shown:top-3 pointer-events-none">Case Details</label>
            </div>

            <button type="submit" className="w-full py-3 md:py-4 bg-text-primary text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-gold-500 transition-colors duration-500 border border-transparent hover:border-gold-600">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;