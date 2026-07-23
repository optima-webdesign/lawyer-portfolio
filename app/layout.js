import { Playfair_Display, Inter, Mr_De_Haviland } from "next/font/google";
import "./globals.css";
// ✅ FIX: Hata diya LocomotiveScrollWrapper. GSAP aur Native Scroll best combination hai.
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
    // 'scroll-smooth' native smooth scrolling dega bina kisi library ke
    <html lang="en" className="scroll-smooth">
      <body
        // ✅ FIX: overflow-x-hidden theek hai, lekin overflow-hidden body pe NAHI hona chahiye
        className={`${playfair.variable} ${inter.variable} ${signatureFont.variable} antialiased bg-bg-main text-text-primary overflow-x-hidden w-full`}
      >
        <Preloader />
        <Cursor />
        <LegalDisclaimer />
        
        {/* Navbar Fixed Top */}
        <Navbar />

        {/* ✅ FIX: Direct main tag use kiya, Scroll wrapper ka kachra saaf kiya */}
        <main className="relative z-10 flex flex-col w-full min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}