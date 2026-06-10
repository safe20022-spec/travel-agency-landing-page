import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  return (
    <section id="subscribe" className="w-full py-8 px-6 md:px-16 bg-transparent max-w-7xl mx-auto relative overflow-hidden">
      
      <motion.div 
        className="absolute -right-2 md:right-22 top-2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-tr from-[#59B1E6] to-[#207BB0] rounded-full flex items-center justify-center text-white shadow-lg z-30 cursor-pointer"
        initial={{ y: 20, x: -20, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -6, x: 6, scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-12 md:w-7 md:h-7">
          <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      <motion.div 
        className="w-full bg-[#DFD7F9]/20 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[80px] rounded-bl-[20px] md:rounded-tr-[129px] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden border border-[#DFD7F9]/10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        
        <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full border border-[#E5E0FA] opacity-60 pointer-events-none" />
        <div className="absolute right-4 top-0 w-72 h-72 rounded-full border-t border-r border-[#E5E0FA] opacity-40 pointer-events-none transform rotate-45" />

        {/* العنوان البارز الجاذب للمستخدم بتفاصيل فيجما الأصلي */}
        <h3 className="text-[#5E6282] font-poppins font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[34px] leading-tight md:leading-[54px] max-w-3xl mx-auto mb-12 relative z-10 text-center">
          Subscribe to get information, latest news and other interesting offers about Jadoo
        </h3>

        {/* نموذج الإدخال المتجاوب (Responsive Form Field) */}
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto relative z-10 w-full"
        >
          
          {/* حقل البريد الإلكتروني المحاط بأيقونة داخلية */}
          <div className="relative w-full sm:flex-grow">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#39425D] text-lg pointer-events-none" />
            <input 
              type="email" 
              placeholder="Your email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-white rounded-lg sm:rounded-[10px] text-secondary font-openSans text-sm focus:outline-none shadow-[0_4px_10px_rgba(0,0,0,0.01)] focus:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all placeholder:text-[#39425D]/50"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto h-14 px-8 bg-gradient-to-b from-[#FF946D] to-[#FF7D61] text-white font-openSans font-semibold text-base rounded-lg sm:rounded-[10px] shadow-[0_20px_35px_rgba(255,125,97,0.15)] hover:shadow-[0_20px_35px_rgba(255,125,97,0.25)] transition-all cursor-pointer whitespace-nowrap"
          >
            Subscribe
          </motion.button>

        </form>
      </motion.div>

      <div className="absolute -right-8 -bottom-10 w-32 h-32 pointer-events-none opacity-40 hidden md:block select-none -z-10">
        <div className="grid grid-cols-5 gap-3">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-accent rounded-full" />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Newsletter;