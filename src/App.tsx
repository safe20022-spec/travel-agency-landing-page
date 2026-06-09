import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import decorBg from './assets/Decore.png';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-auto bg-white text-secondary font-poppins overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-[650px] md:h-[100vh] max-h-[850px] pointer-events-none select-none z-0 overflow-hidden">
        <img 
          src={decorBg} 
          alt="Background decor gradient" 
          className="w-full h-full object-cover object-right-top opacity-90" 
        />
      </div>
      <Navbar />
      <main className="relative z-10 w-full">
        <Hero />
      </main>
    </div>
  );
};

export default App;