export default function Loading() {
  return (
    // Background changed to White
    <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center">
      
      <div className="relative w-24 h-24 mb-6">
        {/* Outer Ring: Gold */}
        <div className="absolute inset-0 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
        
        {/* Inner Ring: Royal Navy (Matches Theme) */}
        <div className="absolute inset-4 border-4 border-[#0f172a] border-b-transparent rounded-full animate-spin-reverse"></div>
        
        {/* Center Dot (Optional decorative touch) */}
        <div className="absolute inset-[42%] bg-[#d4af37] rounded-full animate-pulse"></div>
      </div>

      {/* Text: Darker Gold for visibility on White */}
      <h2 className="text-[#b08d26] font-serif text-xl font-bold tracking-[0.2em] animate-pulse">
        LOADING...
      </h2>
    </div>
  );
}