"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGavel, FaHandshake, FaLandmark, FaBuilding, 
  FaBalanceScale, FaFileContract, FaArrowRight, 
  FaTimes, FaCheck 
} from "react-icons/fa";

const practices = [
  { id: 1, icon: <FaGavel />, title: "Criminal Defense", desc: "Rigorous defense strategies...", details: ["Bail Matters", "Trials", "Fraud", "Cyber Crime", "NDPS"] },
  { id: 2, icon: <FaBuilding />, title: "Corporate Law", desc: "Mergers, acquisitions...", details: ["M&A", "Contracts", "Incorporation", "Disputes", "Insolvency"] },
  { id: 3, icon: <FaLandmark />, title: "Property Disputes", desc: "Resolving land ownership...", details: ["Land Acquisition", "Title Verification", "Tenancy", "RERA", "Partition"] },
  { id: 4, icon: <FaBalanceScale />, title: "Civil Litigation", desc: "Handling breach of contract...", details: ["Breach of Contract", "Recovery", "Injunctions", "Consumer", "Defamation"] },
  { id: 5, icon: <FaHandshake />, title: "Family Law", desc: "Sensitive handling of divorce...", details: ["Divorce", "Custody", "Alimony", "Domestic Violence", "Probate"] },
  { id: 6, icon: <FaFileContract />, title: "Legal Advisory", desc: "Proactive legal consultation...", details: ["Strategy", "Notices", "Arbitration", "Compliance", "Start-ups"] },
];

const PracticeAreas = () => {
  const [selectedPractice, setSelectedPractice] = useState(null);

  return (
    <section id="practice-areas" className="py-24 bg-bg-main px-6 relative overflow-hidden">
      {/* Standard Spacing Utility for v4 */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold-600 uppercase tracking-[0.2em] text-sm font-bold block mb-3">Areas of Expertise</span>
          <h2 className="font-serif text-4xl md:text-5xl text-text-primary font-bold">Specialized Legal Practice</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-bg-card p-10 border border-border-light shadow-sm rounded-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              <span className="absolute top-6 right-8 text-6xl font-serif text-slate-100 font-bold z-0 group-hover:text-gold-500/10 transition-colors duration-500">0{index + 1}</span>
              <div className="relative z-10 w-16 h-16 border-2 border-gold-500 text-gold-500 flex items-center justify-center text-2xl rounded-sm mb-8 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 shadow-sm">{item.icon}</div>
              <div className="relative z-10 grow">
                <h3 className="text-2xl font-serif text-text-primary mb-4 group-hover:text-gold-600 transition-colors font-bold">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed text-base font-medium mb-6">{item.desc}</p>
              </div>
              <div className="relative z-10 mt-auto">
                <button onClick={() => setSelectedPractice(item)} className="flex items-center gap-2 text-gold-500 font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-300 cursor-pointer">
                  <span>Learn More</span>
                  <FaArrowRight />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-border-light group-hover:bg-gold-500 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPractice && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPractice(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-bg-card w-full max-w-lg rounded-sm shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
                <div className="h-2 w-full bg-linear-to-r from-gold-500 to-gold-600"></div>
                <button onClick={() => setSelectedPractice(null)} className="absolute top-4 right-4 text-text-secondary hover:text-gold-500 hover:rotate-90 transition-all duration-300 text-xl cursor-pointer"><FaTimes /></button>
                <div className="p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gold-500/10 rounded-sm flex items-center justify-center text-gold-500 text-xl">{selectedPractice.icon}</div>
                        <h3 className="text-2xl font-serif font-bold text-text-primary">{selectedPractice.title}</h3>
                    </div>
                    <p className="text-text-secondary mb-6 font-medium leading-relaxed">{selectedPractice.desc}</p>
                    <div className="bg-bg-main p-6 rounded-sm border border-border-light">
                        <h4 className="text-gold-600 text-xs font-bold uppercase tracking-widest mb-4">Key Services Include:</h4>
                        <ul className="space-y-3">
                            {selectedPractice.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-3 text-text-secondary text-sm font-medium">
                                    <FaCheck className="text-gold-500 mt-1 shrink-0" />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-8 pt-6 border-t border-border-light flex justify-end">
                        <button onClick={() => { setSelectedPractice(null); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="px-6 py-3 bg-gold-500 text-white text-sm font-bold uppercase tracking-widest hover:bg-gold-600 transition-colors rounded-sm shadow-md cursor-pointer">
                            Consult Now
                        </button>
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PracticeAreas;