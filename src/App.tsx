import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Destinations from './sections/Destinations';
import BookingSteps from './sections/BookingSteps';
import Testimonials from './sections/Testimonials';
import Newsletter from './sections/Newsletter';
import decorBg from './assets/Decore.png';
import Footer from './sections/Footer';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-white text-secondary font-poppins overflow-x-hidden overflow-y-auto">
      <div className="absolute top-0 left-0 w-full h-[650px] md:h-[100vh] max-h-[850px] pointer-events-none select-none z-0 overflow-hidden">
        <img 
          src={decorBg} 
          alt="Background decor gradient" 
          className="w-full h-full object-cover object-right-top opacity-90" 
        />
      </div>
      <Navbar />
      <main className="relative z-10 w-full overflow-visible block">
        <Hero />
        <Services />
        <Destinations />
        <BookingSteps />
        <Testimonials />
        <Newsletter /> 
      </main>
      <Footer />
    </div>
  );
};

export default App;