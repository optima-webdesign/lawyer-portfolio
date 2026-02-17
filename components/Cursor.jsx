"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const mainCursor = useRef(null);      // The Dot
  const secondaryCursor = useRef(null); // The Ring

  useEffect(() => {
    // 1. Touch Device Check
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return; 
    }

    const cursor = mainCursor.current;
    const follower = secondaryCursor.current;

    // Pehle se hide karke rakhein taaki top-left corner par glitch na dikhe
    gsap.set([cursor, follower], { xPercent: -50, yPercent: -50, opacity: 0 });

    // GSAP Context for memory management
    let ctx = gsap.context(() => {
      // 2. PERFORMANCE: quickTo for butter-smooth movement
      const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
      const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
      
      const xToFollower = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power3" });
      const yToFollower = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power3" });

      const onMouseMove = (e) => {
        // First movement par show karein
        gsap.to(cursor, { opacity: 1, duration: 0.5, overwrite: "auto" });
        gsap.to(follower, { opacity: 0.6, duration: 0.5, overwrite: "auto" });

        xToCursor(e.clientX);
        yToCursor(e.clientY);
        xToFollower(e.clientX);
        yToFollower(e.clientY);
      };

      // 3. Hover Effects logic
      const onHover = () => {
        gsap.to(follower, {
          scale: 3,
          backgroundColor: "rgba(212, 175, 55, 0.1)", 
          borderWidth: 0,
          duration: 0.3
        });
        gsap.to(cursor, { scale: 0, duration: 0.3 });
      };

      const onUnhover = () => {
        gsap.to(follower, {
          scale: 1,
          backgroundColor: "transparent",
          borderWidth: "1px",
          // ✅ FIX: Use theme variable for color
          borderColor: "var(--color-gold-500)", 
          duration: 0.3
        });
        gsap.to(cursor, { scale: 1, duration: 0.3 });
      };

      // Delegation
      const handleMouseOver = (e) => {
        if (e.target.closest('a, button, input, textarea, .cursor-pointer')) onHover();
      };

      const handleMouseOut = (e) => {
        const related = e.relatedTarget;
        const target = e.target.closest('a, button, input, textarea, .cursor-pointer');
        if (target && (!related || !target.contains(related))) onUnhover();
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseover", handleMouseOver);
      window.addEventListener("mouseout", handleMouseOut);
    });

    return () => ctx.revert(); // ✅ Memory cleanup fix
  }, []);

  return (
    <>
      {/* 1. The Follower (Gold Ring) */}
      <div 
        ref={secondaryCursor}
        // ✅ FIX: z-[9998] square brackets for arbitrary values
        className="fixed top-0 left-0 w-10 h-10 border border-gold-500 rounded-full pointer-events-none z-9998 hidden md:block"
      />
      
      {/* 2. The Pointer (Navy Dot) */}
      <div 
        ref={mainCursor}
        // ✅ FIX: z-[9999]
        className="fixed top-0 left-0 w-2 h-2 bg-text-primary rounded-full pointer-events-none z-9999 hidden md:block"
      />
    </>
  );
}