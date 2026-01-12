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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-tr from-cyan-900/10 via-purple-900/10 to-amber-900/10 blur-[60px] md:blur-[100px] pointer-events-none"></div>
        
        {/* 3D Structure - "The Orbital Data Core" */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] md:w-[900px] md:h-[900px] z-0 pointer-events-none opacity-60">
            <div className="w-full h-full relative flex items-center justify-center animate-float">
                
                {/* Layer 1: The Event Horizon (Massive Outer Ring) */}
                <div className="absolute inset-0 rounded-full border-[1px] border-white/5 animate-[spin_60s_linear_infinite]">
                     {/* Scanner Detail */}
                     <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-32 h-[3px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_20px_cyan]"></div>
                </div>
                
                {/* Layer 2: The Data Stream (Dashed Tech Ring) */}
                <div className="absolute inset-[15%] rounded-full border-[1px] border-dashed border-gray-600/50 animate-[spin_40s_linear_infinite_reverse]"></div>
                
                {/* Layer 3: Gyroscopic Rings (The Core Mechanics) - Tilted 3D effect */}
                <div className="absolute inset-[28%] rounded-full border border-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.1)] animate-[spin_8s_linear_infinite] border-t-cyan-400/80 border-l-transparent border-r-transparent border-b-cyan-400/80" style={{ transform: 'rotateX(75deg)' }}></div>
                
                <div className="absolute inset-[28%] rounded-full border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)] animate-[spin_12s_linear_infinite_reverse] border-l-purple-400/80 border-t-transparent border-b-transparent border-r-purple-400/80" style={{ transform: 'rotateY(75deg)' }}></div>

                {/* Layer 4: The Tesseract (Central Geometric Cube Simulation) */}
                {/* Rotating Squares creating a volume illusion */}
                <div className="absolute w-[20%] h-[20%] border border-white/30 animate-[spin_6s_linear_infinite]"></div>
                <div className="absolute w-[20%] h-[20%] border border-white/30 animate-[spin_6s_linear_infinite_reverse] rotate-45"></div>
                <div className="absolute w-[14%] h-[14%] border border-cyan-300/40 animate-[spin_3s_linear_infinite] rotate-12"></div>
                
                {/* Ambient Particles */}
                <div className="absolute inset-[35%] rounded-full border-[1px] border-dotted border-white/10 animate-ping opacity-20"></div>
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