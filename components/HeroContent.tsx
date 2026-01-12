import React from 'react';
import { Mail } from 'lucide-react';

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-between py-8 px-4 md:py-12 md:px-6 overflow-hidden relative">
      
      {/* Top Section: VELA Company Name */}
      <div className="flex-none flex items-start justify-center pt-4 md:pt-10 z-20">
        <h2 className="text-xl md:text-3xl tracking-[0.5em] font-light text-gray-400 opacity-80 uppercase animate-fade-in-down select-none">
          VELA
        </h2>
      </div>

      {/* Center Section: 3D Icon & APPVERSE */}
      <div className="flex-1 w-full relative flex items-center justify-center perspective-[1000px]">
        
        {/* Background Abstract Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-tr from-cyan-900/20 via-purple-900/20 to-amber-900/20 blur-[60px] md:blur-[100px] pointer-events-none"></div>
        
        {/* 3D Structure - "Behind Big" */}
        {/* We use a wrapper for the float animation to avoid conflicting with the centering transform if possible, or just animate a child */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] z-0 pointer-events-none opacity-60 md:opacity-80">
            <div className="w-full h-full relative animate-float">
                
                {/* Ring 1 - Outer Dashed Cyan */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotateX(70deg)' }}>
                    <div className="w-full h-full rounded-full border-[1px] border-dashed border-cyan-500/30 animate-[spin_20s_linear_infinite]"></div>
                </div>

                {/* Ring 2 - Large Purple Ellipse */}
                <div className="absolute inset-[10%] flex items-center justify-center" style={{ transform: 'rotateX(70deg) rotateY(60deg)' }}>
                    <div className="w-full h-full rounded-full border-[1px] border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.1)] animate-[spin_15s_linear_infinite]"></div>
                </div>

                {/* Ring 3 - White Tilted Reverse */}
                <div className="absolute inset-[10%] flex items-center justify-center" style={{ transform: 'rotateX(70deg) rotateY(-60deg)' }}>
                    <div className="w-full h-full rounded-full border-[1px] border-white/20 animate-[spin_18s_linear_infinite_reverse]"></div>
                </div>

                {/* Ring 4 - Inner Fast Cyan */}
                <div className="absolute inset-[25%] flex items-center justify-center" style={{ transform: 'rotateX(80deg)' }}>
                    <div className="w-full h-full rounded-full border-2 border-cyan-400/20 animate-[spin_8s_linear_infinite]"></div>
                </div>

                {/* Ring 5 - Vertical Ghost Ring */}
                <div className="absolute inset-[15%] flex items-center justify-center opacity-30" style={{ transform: 'rotateY(90deg) rotateX(45deg)' }}>
                    <div className="w-full h-full rounded-full border-[1px] border-dotted border-amber-500/50 animate-[spin_25s_linear_infinite]"></div>
                </div>

                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {/* Glowing Orb */}
                    <div className="w-6 h-6 sm:w-10 sm:h-10 bg-white rounded-full shadow-[0_0_40px_white] animate-pulse"></div>
                    {/* Inner Core detail */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full opacity-50"></div>
                    {/* Outer glow ring */}
                    <div className="absolute inset-[-20px] rounded-full bg-cyan-400/10 blur-xl animate-ping"></div>
                </div>
            </div>
        </div>

        {/* Main Brand Highlight - Foreground */}
        <div className="relative z-10 text-center px-2">
          <h1 className="font-orbitron text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 animate-glow select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            APPVERSE
          </h1>
          <p className="mt-4 md:mt-6 text-xs sm:text-sm md:text-lg text-cyan-200/70 tracking-[0.2em] uppercase font-light drop-shadow-lg">
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