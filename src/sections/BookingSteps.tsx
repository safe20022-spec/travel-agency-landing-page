import React from 'react';
import { motion } from 'framer-motion';

import { MdPayment, MdFlightTakeoff } from 'react-icons/md'; 


import { IoMapOutline, IoHeartOutline } from 'react-icons/io5';
import { RiLeafLine } from 'react-icons/ri';
import { FiSend } from 'react-icons/fi';

import BookingImage from '../assets/booking-img.jpg';

interface StepItem {
  icon: React.ReactNode; 
  title: string;
  description: string;
}

const stepsData: StepItem[] = [
  {
    icon: (
      <div className="w-12 h-12 bg-[#F15A2B]/10 text-[#F15A2B] rounded-[14px] flex items-center justify-center text-xl flex-shrink-0">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 1H3C1.9 1 1 1.9 1 3V19C1 20.1 1.9 21 3 21H19C20.1 21 21 20.1 21 19V3C21 1.9 20.1 1 19 1ZM19 19H3V3H19V19Z" fill="currentColor"/>
          <path d="M5 5H12V12H5V5Z" fill="currentColor"/>
        </svg>
      </div>
    ),
    title: 'Choose Destination',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    icon: (
      <div className="w-12 h-12 bg-[#00AEEF]/10 text-[#00AEEF] rounded-[14px] flex items-center justify-center text-xl flex-shrink-0">
        <MdPayment size={22} />
      </div>
    ),
    title: 'Make Payment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    icon: (
      <div className="w-12 h-12 bg-[#F9A825]/10 text-[#F9A825] rounded-[14px] flex items-center justify-center text-xl flex-shrink-0">
        <MdFlightTakeoff size={22} />
      </div>
    ),
    title: 'Reach Airport on Selected Date',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
];

const BookingSteps: React.FC = () => {
  return (
    <section id="booking" className="w-full py-24 px-6 md:px-24 bg-transparent max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <span className="text-textMuted font-poppins font-semibold text-lg uppercase tracking-wider mb-2 block text-left">
            Easy and Fast
          </span>
          <h2 className="text-secondary font-volkhov font-bold text-3xl sm:text-4xl md:text-5xl capitalize leading-tight mb-12 max-w-md text-left">
            Book Your Next Trip In 3 Easy Steps
          </h2>

          <div className="flex flex-col gap-8">
            {stepsData.map((step, index) => (
              <div key={index} className="flex items-start gap-5 group">
                {/* 3. عرض الأيقونة البرمجية المتجاوبة مباشرة بدون وسم img */}
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                <div className="flex flex-col text-left">
                  <h3 className="text-secondary font-poppins font-bold text-base md:text-lg mb-1 group-hover:text-primary transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-textMuted font-poppins text-sm leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* الجزء الأيمن: كروت الحجز التفاعلية المتداخلة */}
        <div className="relative flex justify-center items-center lg:justify-end mt-12 lg:mt-0">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#59B1E6] rounded-full filter blur-[100px] opacity-20 -z-10" />

          {/* البطاقة الرئيسية الافتراضية */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="w-[370px] bg-white rounded-[26px] p-6 shadow-[0_50px_80px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col relative"
          >
            <div className="w-full h-[180px] rounded-[24px] overflow-hidden mb-5">
              <img src={BookingImage} alt="Trip to Greece" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col text-left mb-5">
              <h4 className="text-black font-poppins font-medium text-lg mb-2">Trip To Greece</h4>
              <p className="text-textMuted font-poppins text-sm font-medium mb-4">14-29 June | by Robbin joseph</p>
              
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-textMuted hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">
                  <RiLeafLine size={16} />
                </div>
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-textMuted hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">
                  <IoMapOutline size={16} />
                </div>
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-textMuted hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">
                  <FiSend size={14} />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
              <div className="flex items-center gap-3">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 5.5H2V13.5H14V5.5Z" stroke="#84829A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.6667 13.5V15.5H5.33333V13.5" stroke="#84829A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-textMuted font-poppins text-sm font-medium tracking-wide">24 people going</span>
              </div>
              <IoHeartOutline size={20} className="text-primary cursor-pointer hover:fill-primary transition-all" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default BookingSteps;