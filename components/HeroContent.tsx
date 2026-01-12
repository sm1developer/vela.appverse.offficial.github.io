import React from 'react';
import { Mail } from 'lucide-react';

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-between py-8 px-4 md:py-12 md:px-6 overflow-hidden">
      
      {/* Top Section: VELA Company Name */}
      <div className="flex-none flex items-start justify-center pt-4 md:pt-10 z-20">
        <h2 className="text-xl md:text-3xl tracking-[0.5em] font-light text-gray-400 opacity-80 uppercase animate-fade-in-down select-none">
          VELA
        </h2>
      </div>

      {/* Center Section: Sun & APPVERSE */}
      <div className="flex-1 flex flex-col items-center justify-center relative w-full">
        
        {/* Abstract Sun Graphic Behind */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-amber-500/20 via-purple-600/10 to-cyan-500/20 blur-[60px] md:blur-[120px] pointer-events-none animate-pulse-slow"></div>
        
        {/* Core Sun Circle (Decorative) */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-sm mb-8 md:mb-12 shadow-[0_0_50px_rgba(255,255,255,0.1)] relative z-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full bg-black/80 flex items-center justify-center">
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shadow-[0_0_20px_white]"></div>
            </div>
        </div>

        {/* Main Brand Highlight */}
        <div className="relative z-10 text-center px-2">
          <h1 className="font-orbitron text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 animate-glow select-none">
            APPVERSE
          </h1>
          <p className="mt-4 md:mt-6 text-xs sm:text-sm md:text-lg text-cyan-200/70 tracking-[0.2em] uppercase font-light">
            Beyond Boundaries
          </p>
        </div>
      </div>

      {/* Bottom Section: Contact */}
      <div className="flex-none flex items-end justify-center pb-6 md:pb-8 z-20">
        <div className="group flex flex-col items-center gap-3 animate-fade-in-up">
          <div className="h-px w-8 bg-gray-700 group-hover:w-32 transition-all duration-500"></div>
          <a 
            href="mailto:appverse.official@outlook.com"
            className="flex items-center gap-2 md:gap-3 text-gray-400 hover:text-white transition-colors duration-300 font-light tracking-wide text-xs sm:text-sm md:text-base p-3 rounded-lg hover:bg-white/5 backdrop-blur-sm active:scale-95 transform"
          >
            <Mail className="w-3 h-3 md:w-4 md:h-4" />
            <span>appverse.official@outlook.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};