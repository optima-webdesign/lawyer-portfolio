"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGavel, FaLandmark, FaBalanceScale } from "react-icons/fa";

const timelineData = [
  {
    year: "2020 - Present",
    role: "Senior Legal Consultant",
    firm: "Independent Practice, High Court",
    desc: "Leading a team of junior advocates in high-profile corporate and criminal defense cases.",
    icon: <FaGavel />,
  },
  {
    year: "2015 - 2020",
    role: "Associate Partner",
    firm: "Sharma & Associates",
    desc: "Specialized in civil litigation and property disputes across state tribunals.",
    icon: <FaLandmark />,
  },
  {
    year: "2012 - 2015",
    role: "Junior Advocate",
    firm: "District Court",
    desc: "Assisted senior counsel in drafting appeals, petitions, and legal research.",
    icon: <FaBalanceScale />,
  },
];

const Experience = () => {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // Line Animation
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );

      // Cards Animation
      const cards = gsap.utils.toArray(".exp-card");
      cards.forEach((card) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="relative py-16 md:py-32 px-6 bg-bg-main overflow-hidden">
      {/* BACKGROUND TEXTURE */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(var(--color-gold-500) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="mb-4 text-gold-600 text-lg md:text-xl">✦</div>
          <span className="text-text-secondary uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold block mb-4">
            Career Trajectory
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-text-primary font-medium">
            Professional Experience
          </h2>
          <div className="w-16 md:w-24 h-px bg-gold-500 mx-auto mt-6 opacity-50"></div>
        </div>

        <div ref={containerRef} className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold-500/20 md:-translate-x-1/2">
            <div ref={lineRef} className="w-full bg-gold-500 origin-top"></div>
          </div>

          <div className="space-y-12 md:space-y-0">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } md:mb-20`}
              >
                <div className="absolute left-4 md:left-1/2 w-8 h-8 md:w-12 md:h-12 bg-bg-main border border-gold-500 rounded-full -translate-x-1/2 flex items-center justify-center text-gold-600 text-sm md:text-xl z-20 shadow-lg top-0 md:top-auto">
                  {item.icon}
                </div>

                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`exp-card bg-bg-card p-6 md:p-10 border border-gold-500/40 relative shadow-xl hover:shadow-2xl transition-shadow duration-500 ${
                      index % 2 === 0 ? "md:mr-16" : "md:ml-16"
                    }`}>
                    <div className="absolute top-2 left-2 w-3 h-3 md:w-4 md:h-4 border-t border-l border-gold-500"></div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 md:w-4 md:h-4 border-b border-r border-gold-500"></div>
                    <span className="inline-block border border-gold-500 text-gold-600 px-3 py-1 md:px-4 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-4 md:mb-6 bg-bg-main">
                      {item.year}
                    </span>
                    <h3 className="text-xl md:text-2xl text-text-primary font-serif mb-2 leading-tight">{item.role}</h3>
                    <p className="text-text-secondary text-xs md:text-sm mb-4 md:mb-6 font-serif italic border-b border-border-light pb-3 md:pb-4 inline-block pr-6 md:pr-10">{item.firm}</p>
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;