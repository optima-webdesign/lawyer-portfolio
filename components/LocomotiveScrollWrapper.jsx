"use client";
import { useEffect, useRef } from "react";

export default function LocomotiveScrollWrapper({ children }) {
  // ✅ FIX 1: Use a ref to store the scroll instance to avoid closure issues during cleanup
  const scrollRef = useRef(null);

  useEffect(() => {
    // 1. Check if window is defined (Client-side only)
    if (typeof window === "undefined") return;

    // 2. Async function to initialize scroll
    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        
        // Destroy existing instance if any (Safety for Fast Refresh)
        if (scrollRef.current) scrollRef.current.destroy();

        scrollRef.current = new LocomotiveScroll({
          lenisOptions: {
            wrapper: window,
            content: document.documentElement,
            lerp: 0.1,
            duration: 1.2,
            orientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
          },
        });
      } catch (error) {
        console.error("Locomotive Scroll Initialization Error:", error);
      }
    };

    initScroll();

    // ✅ FIX 2: Proper cleanup using the ref
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }
    };
  }, []);

  // Wrap children in a div to ensure Locomotive has a consistent target if needed
  return <div className="scroll-container">{children}</div>;
}