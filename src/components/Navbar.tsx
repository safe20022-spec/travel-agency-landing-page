import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion'; 
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Destinations', href: '#destinations' },
  { name: 'Hotels', href: '#hotels' },
  { name: 'Flights', href: '#flights' },
  { name: 'Bookings', href: '#bookings' },
];

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent px-6 md:px-24 py-6 flex items-center justify-between">
      
      <motion.div 
        className="text-secondary font-volkhov text-2xl font-bold cursor-pointer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Jadoo<span className="text-primary">.</span>
      </motion.div>

      <div className="hidden md:flex items-center gap-10 font-poppins">
        <ul className="flex items-center gap-8 text-secondary font-medium">
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={link.href} 
                className="hover:text-primary transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.div 
          className="flex items-center gap-6 text-secondary font-medium"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button className="hover:text-primary transition-colors cursor-pointer">Login</button>
          
          <button className="border border-secondary hover:bg-secondary hover:text-white transition-all px-5 py-2 rounded-lg text-sm cursor-pointer">
            Sign up
          </button>
          
          <select className="bg-transparent border-none cursor-pointer focus:outline-none text-sm font-semibold">
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </motion.div>
      </div>

      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-secondary text-3xl focus:outline-none z-50 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute top-0 left-0 w-full h-screen bg-white shadow-xl flex flex-col items-center justify-center gap-8 md:hidden z-40"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col items-center gap-6 text-xl font-medium font-poppins text-secondary">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col items-center gap-4 w-full px-10 font-poppins">
              <button className="text-secondary font-medium w-full py-2 hover:text-primary transition-colors cursor-pointer">
                Login
              </button>
              <button className="bg-secondary text-white font-medium w-full py-3 rounded-xl shadow-md active:scale-95 transition-transform cursor-pointer">
                Sign up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;