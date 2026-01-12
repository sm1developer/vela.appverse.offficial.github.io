import React from 'react';
import { StarField } from './components/StarField';
import { HeroContent } from './components/HeroContent';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white selection:bg-cyan-500 selection:text-black">
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