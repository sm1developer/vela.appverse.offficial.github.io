import React, { useEffect, useRef } from 'react';
import { StarField } from './components/StarField';
import { HeroContent } from './components/HeroContent';

const App: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Direct DOM manipulation avoids React render cycles for smooth 60fps performance
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener('mousemove', updateCursor);
    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white selection:bg-cyan-500 selection:text-black cursor-none">
       {/* Custom Cursor / Spotlight */}
       <div 
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-50 mix-blend-screen will-change-transform"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        {/* Main Spotlight */}
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-[80px]"></div>
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