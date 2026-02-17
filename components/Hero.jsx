"use client";
import { useEffect, useRef } from "react"; // Changed useLayoutEffect to useEffect for better SSR compatibility
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const container = useRef(null);
  const textRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    // ✅ FIX 1: Safety check to ensure elements exist during hydration
    if (!container.current || !frameRef.current || !textRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Frame Animation
      tl.from(frameRef.current, {
        scale: 1.05,
        opacity: 0,
        duration: 1.8,
        ease: "power3.out"
      });

      // 2. Text Reveal (Staggered)
      // Standardizing selectors for GSAP to avoid regex or stack issues
      const children = gsap.utils.toArray(textRef.current.children);
      if (children.length > 0) {
        tl.from(children, {
          y: 40,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        }, "-=1.2");
      }

    }, container);

    return () => ctx.revert(); 
  }, []);

  return (
    <section
      id="hero"
      ref={container}
      className="relative min-h-screen w-full flex items-center justify-center p-6 md:p-12 bg-bg-main overflow-hidden"
    >
      {/* 1. CLASSIC BORDER FRAME */}
      <div ref={frameRef} className="absolute inset-4 md:inset-8 border border-gold-500/40 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold-500"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold-500"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold-500"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold-500"></div>
      </div>

      {/* 2. BACKGROUND TEXTURE */}
      {/* ✅ FIX 2: Used CSS variable directly in style for v4 parsing safety */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: "radial-gradient(var(--color-text-primary) 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto text-center px-4" ref={textRef}>
        
        <div className="mb-6 flex justify-center">
            <span className="text-gold-600 text-xl md:text-2xl animate-pulse">✦</span>
        </div>
        
        <p className="text-gold-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 md:mb-8">
          High Court Practitioner • Est. 2010
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-text-primary leading-[1.1] mb-8">
          Defending <span className="italic font-light text-gold-600">Rights</span>,<br />
          Securing <span className="italic font-light text-gold-600">Legacies</span>.
        </h1>

        <div className="w-24 md:w-32 h-px bg-gold-500 mx-auto mb-10 opacity-50"></div>

        <p className="max-w-2xl mx-auto text-text-secondary text-lg md:text-2xl font-serif italic font-light mb-12">
          &quot;Unwavering integrity and strategic counsel for corporate litigation and criminal defense.&quot;
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
          <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             className="bg-text-primary text-white px-10 py-4 font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold-500 transition-all duration-500 shadow-xl"
          >
            Consultation
          </button>
          
          <button 
             onClick={() => document.getElementById('practice-areas')?.scrollIntoView({ behavior: 'smooth' })}
             className="bg-transparent border border-text-primary text-text-primary px-10 py-4 font-sans text-xs font-bold uppercase tracking-[0.2em] hover:border-gold-500 hover:text-gold-600 transition-colors duration-500"
          >
            Our Practice
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;