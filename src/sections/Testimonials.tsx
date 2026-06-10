import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';

import axonLogo from '../assets/image 27.png';
import jetstarLogo from '../assets/image 28.png';
import expediaLogo from '../assets/image 29.png';
import qantasLogo from '../assets/image 30.png';
import alitaliaLogo from '../assets/image 31.png';

import userAvatar from '../assets/test-img.png';

interface TestimonialItem {
  id: number;
  text: string;
  author: string;
  location: string;
  avatar: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    text: "“On the Windows talking printed to thereby its. Light a system ground to. On the Windows talking printed to thereby its. Light a system ground to.”",
    author: "Mike Taylor",
    location: "Lahore, Pakistan",
    avatar: userAvatar,
  },
  {
    id: 2,
    text: "“Jadoo provided the most seamless booking experience I've ever had. Highly recommended for international trips!”",
    author: "Chris Thomas",
    location: "CEO of RedConcept",
    avatar: userAvatar,
  },
  {
    id: 3,
    text: "“Incredible attention to detail in the itineraries. The local events suggestions made our family trip unforgettable.”",
    author: "Kelly Smith",
    location: "London, UK",
    avatar: userAvatar,
  },
];

const sponsorsLogos = [axonLogo, jetstarLogo, expediaLogo, qantasLogo, alitaliaLogo];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="w-full py-24 px-6 md:px-24 bg-transparent max-w-7xl mx-auto overflow-hidden lg:overflow-visible">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center mb-28">
        
        <div className="lg:col-span-5 flex flex-col text-left">
          <span className="text-textMuted font-poppins font-semibold text-lg uppercase tracking-wider mb-2 block">
            Testimonials
          </span>
          <h2 className="text-secondary font-volkhov font-bold text-3xl sm:text-4xl md:text-5xl capitalize leading-tight mb-8 max-w-md">
            What People Say About Us.
          </h2>
          
          <div className="flex items-center gap-3 mt-4 hidden lg:flex">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'w-6 bg-secondary' : 'w-2.5 bg-[#E5E5E5]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 flex items-center justify-center lg:justify-end gap-6 relative min-h-[320px] w-full">
          
          <div className="relative w-full max-w-[500px] h-[260px] flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {testimonialsData.map((item, index) => {
                const isTop = index === activeIndex;
                const isSub = index === (activeIndex + 1) % testimonialsData.length;
                
                if (!isTop && !isSub) return null;

                return (
                  <motion.div
                    key={item.id}
                    style={{ zIndex: isTop ? 20 : 10 }}
                    initial={isTop ? { opacity: 0, y: 50, scale: 0.95 } : { opacity: 0 }}
                    animate={{
                      opacity: isTop ? 1 : 0.4,
                      y: isTop ? 0 : 40,
                      x: isTop ? 0 : 20,
                      scale: isTop ? 1 : 0.98,
                    }}
                    exit={{ opacity: 0, y: -60, scale: 0.9, x: -10 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 22 }}
                    className={`absolute inset-0 bg-white rounded-[20px] p-8 text-left flex flex-col justify-between border border-gray-100/50 ${
                      isTop 
                        ? 'shadow-[0_40px_60px_rgba(0,0,0,0.04)]' 
                        : 'shadow-[0_10px_30px_rgba(0,0,0,0.02)]'
                    }`}
                  >
                    {isTop && (
                      <div className="absolute -left-6 -top-6 w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md z-30">
                        <img src={item.avatar} alt={item.author} className="w-full h-full object-cover" />
                      </div>
                    )}

                    <p className="text-textMuted font-poppins text-sm md:text-base leading-relaxed mb-6 font-medium">
                      {item.text}
                    </p>

                    <div className="flex flex-col">
                      <h4 className="text-secondary font-poppins font-bold text-base md:text-lg">
                        {item.author}
                      </h4>
                      <span className="text-textMuted font-poppins text-xs md:text-sm mt-0.5">
                        {item.location}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-4 z-40">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-textMuted hover:text-secondary shadow-sm hover:shadow-md border border-gray-100 transition-all active:scale-95"
              aria-label="Previous testimonial"
            >
              <HiChevronUp size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-textMuted hover:text-secondary shadow-sm hover:shadow-md border border-gray-100 transition-all active:scale-95"
              aria-label="Next testimonial"
            >
              <HiChevronDown size={20} />
            </button>
          </div>
        </div>
      </div>

      <motion.div 
        className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center pt-12 border-t border-gray-100/40"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {sponsorsLogos.map((logo, index) => (
          <div 
            key={index} 
            className="h-12 flex items-center justify-center filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 bg-white px-4 py-2 rounded-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] transition-all duration-300 cursor-pointer group"
          >
            <img 
              src={logo} 
              alt="Sponsor logo" 
              className="max-h-full max-w-[120px] object-contain transform group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
        ))}
      </motion.div>

    </section>
  );
};

export default Testimonials;