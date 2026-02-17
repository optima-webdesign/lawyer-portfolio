"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"; // Import Next.js Image component

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Safety check ensuring all refs are available
    if (!sectionRef.current || !imageRef.current || !contentRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(imageRef.current, {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }).from(
        gsap.utils.toArray(contentRef.current.children),
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-6 overflow-hidden bg-bg-main"
    >
      {/* SECTION BORDER FRAME */}
      <div className="absolute inset-4 md:inset-12 border border-gold-500/30 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-500"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold-500"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold-500"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT: IMAGE PORTRAIT */}
        <div
          ref={imageRef}
          className="order-2 lg:order-1 flex justify-center lg:justify-start"
        >
          {/* Replaced max-w-100 with max-w-md or explicit width for clarity */}
          <div className="bg-white p-3 shadow-2xl border border-gray-100 max-w-md w-full group">
            {/* Aspect ratio container - helpful for maintaining layout stability */}
            <div className="relative w-full aspect-3/4 bg-gray-100 overflow-hidden">
              <Image
                src="/advocate/advocate-manish.png"
                alt="Advocate Gaud Manish"
                fill // Automatically fills the parent container
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" // Optimization for different screen sizes
                className="object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                priority // Optional: Prioritize loading if this is near the top of the page
              />
            </div>
            <div className="text-center pt-4 pb-1">
              <p className="font-serif text-xl font-bold text-text-primary">
                Adv. Gaud Manish
              </p>
              <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-gold-600 mt-1">
                Senior Counsel
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTENT SECTION */}
        <div ref={contentRef} className="order-1 lg:order-2 text-center lg:text-left">
          <div className="mb-4 text-gold-600 text-2xl flex justify-center lg:justify-start animate-pulse">
            ✦
          </div>

          <span className="text-text-secondary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
            About The Practice
          </span>

          <h2 className="font-serif text-4xl md:text-6xl text-text-primary leading-[1.1] mb-6">
            Justice is not just a concept.
            <br />
            <span className="italic text-gold-600 font-light">
              It is a commitment.
            </span>
          </h2>

          <div className="w-20 h-0.5 bg-gold-500 mb-8 mx-auto lg:mx-0"></div>

          <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-10 font-serif italic">
            &quot;With over 15 years of experience in the High Court, I provide
            strategic legal counsel tailored to complex litigation. Aggressive
            representation with deep procedural knowledge.&quot;
          </p>

          {/* STATS GRID */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-gold-500/20 pt-8 mb-10">
            <div className="text-center lg:text-left">
              <span className="block text-3xl md:text-4xl font-serif font-bold text-text-primary">
                15+
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold-600 font-bold">
                Years Practice
              </span>
            </div>
            <div className="text-center lg:text-left border-x border-gray-200 px-4">
              <span className="block text-3xl md:text-4xl font-serif font-bold text-text-primary">
                500+
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold-600 font-bold">
                Cases Won
              </span>
            </div>
            <div className="text-center lg:text-left">
              <span className="block text-3xl md:text-4xl font-serif font-bold text-text-primary">
                98%
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold-600 font-bold">
                Success Rate
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start pt-4">
            <div className="font-signature text-6xl md:text-7xl text-text-primary opacity-90 leading-none select-none">
              Manish.
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mt-2 font-bold">
              Managing Partner
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;