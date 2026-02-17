import { Playfair_Display, Inter, Mr_De_Haviland } from "next/font/google";
import "./globals.css";
// ✅ IMPORT CHECK: Ensure these components do NOT import 'layout.js' back
import LocomotiveScrollWrapper from "@/components/LocomotiveScrollWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import LegalDisclaimer from "@/components/LegalDisclaimer";

// 1. Classic Serif Font (Headings)
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// 2. Clean Sans Font (Body)
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// 3. Real Signature Font (Accents)
const signatureFont = Mr_De_Haviland({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Adv. Gaud Manish | Premium Brand Identity",
  description: "Classic Legal Portfolio & High Court Practitioner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        // ✅ FIX: Updated classes to match your Tailwind v4 Theme
        className={`${playfair.variable} ${inter.variable} ${signatureFont.variable} antialiased bg-bg-main text-text-primary overflow-x-hidden w-full`}
      >
        <Preloader />
        <Cursor />
        <LegalDisclaimer />
        
        {/* Navbar Fixed Top */}
        <Navbar />

        <LocomotiveScrollWrapper>
          <main className="relative z-10 min-h-screen flex flex-col">
            {children}
          </main>
          {/* Footer Inside Scroll Wrapper for smooth scrolling */}
          <Footer />
        </LocomotiveScrollWrapper>
      </body>
    </html>
  );
}