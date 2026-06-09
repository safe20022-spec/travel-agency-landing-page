import React from 'react';
import { motion } from 'framer-motion';
import heroGirl from '../assets/Image.png'; 

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 pt-32 md:pt-28 overflow-hidden bg-transparent">
      
      <motion.div 
        className="flex-1 text-center md:text-left z-10 font-poppins"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm md:text-base block mb-5">
          Best Destinations around the world
        </span>
        
        <h1 className="text-secondary text-4xl sm:text-5xl md:text-7xl font-bold font-volkhov leading-tight mb-6">
          Travel,{" "}
          <span className="relative inline-block text-secondary">
            enjoy
            <svg 
              className="absolute left-0 bottom-[-6px] md:bottom-[-10px] w-full h-auto" 
              viewBox="0 0 255 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M3 9C42.8904 4.33333 151.11 -2.6 252 9" 
                stroke="#DF6951" 
                strokeWidth="6" 
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          and live a new and full life
        </h1>
        
        <p className="text-textMuted text-sm md:text-base max-w-md mx-auto md:mx-0 mb-8 leading-relaxed font-medium">
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsman it engrossed listening. Park gate sell they west hard for the.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 sm:gap-8">
          <motion.button 
            className="bg-accent hover:bg-amber-500 text-white font-semibold px-7 py-4 rounded-xl shadow-lg shadow-accent/20 transition-colors duration-300 cursor-pointer font-poppins"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Find out more
          </motion.button>
          
          <motion.button 
            className="flex items-center gap-4 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-[0_15px_30px_rgba(223,105,81,0.35)] group-hover:shadow-[0_15px_35px_rgba(223,105,81,0.5)] group-hover:bg-[#e25f47] transition-all duration-300">
              <svg 
                className="w-4 h-4 ml-1 fill-current text-orange-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110" 
                viewBox="0 0 14 16" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.14 7.118L1.64 0.368A1 1 0 000 1.25v13.5a1 1 0 001.64.882l11.5-6.75a1 1 0 000-1.764z" />
              </svg>
            </span>
            <span className="text-textMuted font-medium group-hover:text-secondary transition-colors duration-300">
              Play Demo
            </span>
          </motion.button>
        </div>
      </motion.div>

      <motion.div 
        className="flex-1 relative mt-12 md:mt-0 flex justify-center items-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <div className="absolute w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] bg-red-300/40 blur-[90px] rounded-full -z-10 top-5 right-5 pointer-events-none" />
        
        <img 
          src={heroGirl} 
          alt="Traveler girl with orange luggage" 
          className="w-[85%] sm:w-[75%] md:w-[95%] max-w-[580px] h-auto object-contain relative z-10" 
        />
      </motion.div>

    </section>
  );
};

export default Hero;