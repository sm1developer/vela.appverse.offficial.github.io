import React, { useState, useEffect } from 'react';
import { StarField } from './components/StarField';
import { HeroContent } from './components/HeroContent';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white selection:bg-cyan-500 selection:text-black cursor-none">
       {/* Custom Cursor / Spotlight */}
       <div 
        className="pointer-events-none fixed z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-all duration-75 ease-out"
        style={{ 
          left: mousePos.x, 
          top: mousePos.y,
        }}
      >
        {/* Main Spotlight */}
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-[80px]"></div>
        
        {/* Core Cursor Dot */}
        <div className={`absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300 ${isHovering ? 'scale-[4] opacity-50 bg-cyan-400' : 'scale-100 opacity-100'}`}></div>
        
        {/* Micro-element Orbiting Cursor */}
        <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-[spin_2s_linear_infinite]"></div>
      </div>

      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <StarField />
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        <HeroContent />
      </div>
    </div>
  );
};

export default App;