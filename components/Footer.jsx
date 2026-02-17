"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-text-primary text-slate-300 py-20 px-6 overflow-hidden">
      
      {/* 1. TOP GOLD ORNAMENT & LINE */}
      <div className="absolute top-0 left-0 w-full flex flex-col items-center">
        <div className="w-px h-12 bg-gold-500 mb-4"></div>
        <div className="text-gold-500 text-lg">✦</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Column 1: Brand & Monogram */}
          <div className="md:col-span-4">
            <div className="flex flex-col items-start gap-6 mb-8">
              <div className="w-14 h-14 border border-gold-500 flex items-center justify-center relative">
                <div className="absolute inset-1 border border-gold-500/30"></div>
                <span className="text-gold-500 font-serif text-2xl font-bold">M</span>
              </div>
              <div>
                <h3 className="text-white font-serif text-3xl font-bold tracking-tight mb-2">
                  Adv. Gaud Manish
                </h3>
                <p className="text-gold-600 text-xs uppercase tracking-[0.3em] font-bold">
                  High Court Practitioner
                </p>
              </div>
            </div>
            
            <p className="text-slate-400 font-serif italic text-lg leading-relaxed mb-8 max-w-sm">
              &quot;Dedicated to the pursuit of justice with unwavering integrity and strategic excellence.&quot;
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all duration-500">
                <FaLinkedinIn size={14} />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all duration-500">
                <FaTwitter size={14} />
              </a>
              <a href="#" aria-label="Email" className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all duration-500">
                <FaEnvelope size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-white font-serif text-xl mb-8 border-b border-slate-800 pb-4 inline-block pr-12">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm uppercase tracking-widest font-medium">
              <li><Link href="#hero" className="hover:text-gold-500 transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-gold-500 transition-colors">About Practice</Link></li>
              <li><Link href="#experience" className="hover:text-gold-500 transition-colors">Experience</Link></li>
              <li><Link href="#contact" className="hover:text-gold-500 transition-colors">Consultation</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="md:col-span-5">
            <h4 className="text-white font-serif text-xl mb-8 border-b border-slate-800 pb-4 inline-block pr-12">
              Chambers
            </h4>
            <div className="space-y-6 text-slate-400">
              <div className="flex items-start gap-4">
                <span className="text-gold-500 mt-1">✦</span>
                <p className="text-sm leading-loose uppercase tracking-tighter">
                  Chamber No. 405, High Court Complex,<br />
                  New Delhi, India - 110001
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gold-500 mt-1">✦</span>
                <p className="text-white font-bold tracking-widest">+91 98765 43210</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gold-500 mt-1">✦</span>
                <p className="text-sm">contact@manishlaw.in</p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL BAR & CREDIT LINE */}
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
              © {new Date().getFullYear()} Adv. Manish. Crafted with Excellence.
            </div>
            
            {/* ✅ CREDIT LINE ADDED HERE */}
            <div className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-medium">
              Powered by{" "}
              <a 
                href="https://optimawebdesign.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gold-500 hover:text-white transition-colors duration-300 border-b border-gold-500/30 hover:border-white pb-0.5"
                title="Web Design Company in Ahmedabad | High-Performance Business Websites"
              >
                OptimaWebDesign
              </a>
            </div>
          </div>
          
          <div className="max-w-lg md:text-right">
            <p className="text-[9px] uppercase tracking-widest leading-loose text-slate-600">
              Disclaimer: The information on this website is intended for general informational purposes only and should not be construed as legal advice. Use of this site does not create an attorney-client relationship.
            </p>
          </div>
        </div>

      </div>

      {/* Decorative Signature */}
      <div className="absolute -bottom-10 -right-10 opacity-5 select-none pointer-events-none">
        <span className="font-serif italic text-[15vw] text-white">Manish</span>
      </div>
    </footer>
  );
};

export default Footer;