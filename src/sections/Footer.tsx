import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { RiInstagramLine } from 'react-icons/ri';

import playStoreImg from '../assets/Google Play.png';
import appleStoreImg from '../assets/Play Store.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white pt-24 pb-12 px-6 md:px-24 max-w-7xl mx-auto relative overflow-hidden">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20 text-left">
        
        <div className="flex flex-col lg:col-span-1.5">
          <h2 className="text-secondary font-poppins font-bold text-[44px] leading-tight mb-5">
            Jadoo.
          </h2>
          <p className="text-textMuted font-poppins font-medium text-sm leading-[124%] max-w-[210px]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        <div className="flex flex-col">
          <h4 className="text-[#222222] font-poppins font-bold text-lg md:text-xl mb-6">
            Company
          </h4>
          <ul className="flex flex-col gap-3.5">
            {['About', 'Careers', 'Mobile'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-textMuted font-poppins font-medium text-base hover:text-secondary transition-colors duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-[#222222] font-poppins font-bold text-lg md:text-xl mb-6">
            Contact
          </h4>
          <ul className="flex flex-col gap-3.5">
            {['Help/FAQ', 'Press', 'Affilates'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace('/', '-')}`} className="text-textMuted font-poppins font-medium text-base hover:text-secondary transition-colors duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-[#222222] font-poppins font-bold text-lg md:text-xl mb-6">
            More
          </h4>
          <ul className="flex flex-col gap-3.5">
            {['Airlinefees', 'Airline', 'Low fare tips'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-textMuted font-poppins font-medium text-base hover:text-secondary transition-colors duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start lg:col-span-1.5">
          
          <div className="flex items-center gap-6 mb-7">
            
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.05 }}
              className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#080809] shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:shadow-md transition-all border border-transparent hover:border-gray-100"
            >
              <FaFacebookF size={16} />
            </motion.a>

            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.05 }}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-all bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]"
            >
              <RiInstagramLine size={22} />
            </motion.a>

            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.05 }}
              className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#080809] shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:shadow-md transition-all border border-transparent hover:border-gray-100"
            >
              <FaTwitter size={16} />
            </motion.a>

          </div>

          <span className="text-textMuted font-poppins font-medium text-xl tracking-wide mb-4 block">
            Discover our app
          </span>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="h-[40px] transform hover:scale-[1.03] transition-transform duration-200">
              <img src={playStoreImg} alt="Get it on Google Play" className="h-full object-contain rounded-full shadow-sm" />
            </a>

            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="h-[40px] transform hover:scale-[1.03] transition-transform duration-200">
              <img src={appleStoreImg} alt="Download on the App Store" className="h-full object-contain rounded-full shadow-sm" />
            </a>

          </div>

        </div>

      </div>

      <div className="w-full pt-8 border-t border-[#F5F5F5] text-center">
        <p className="text-textMuted font-poppins font-medium text-sm tracking-wide">
          All rights reserved @jadoo.co {currentYear}
        </p>
      </div>

    </footer>
  );
};

export default Footer;