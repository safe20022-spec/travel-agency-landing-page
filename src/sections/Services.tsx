import React from 'react';
import { motion } from 'framer-motion';

import weatherIcon from '../assets/Group 1.png';
import flightIcon from '../assets/Group 2.png';   
import eventIcon from '../assets/Group 3.png';
import customIcon from '../assets/Group 4.png';

interface ServiceCardProps {
  icon: string; 
  title: string;
  description: string;
}

const servicesData: ServiceCardProps[] = [
  {
    icon: weatherIcon,
    title: 'Calculated Weather',
    description: 'Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsman.',
  },
  {
    icon: flightIcon,
    title: 'Best Flights',
    description: 'Engrossed listening. Park gate sell they west hard for the. Preferred to sportsman.',
  },
  {
    icon: eventIcon,
    title: 'Local Events',
    description: 'Barton vanity itself do in it. Preferred to sportsman it engrossed listening.',
  },
  {
    icon: customIcon,
    title: 'Customization',
    description: 'We deliver outsourced aviation services for military customers with top capabilities.',
  },
];

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative group flex flex-col items-center text-center bg-white p-8 rounded-[36px] transition-all duration-300 hover:shadow-[0_40px_60px_rgba(0,0,0,0.08)] cursor-pointer z-10">
      
      <div className="absolute -left-5 -bottom-5 w-24 h-24 bg-accent rounded-tl-[30px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[10px] -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
      
      <div className="mb-6 flex items-center justify-center h-24 w-full relative z-20">
        <img 
          src={icon} 
          alt={`${title} icon`} 
          className="h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      <h3 className="text-secondary font-openSans font-semibold text-xl mb-4">
        {title}
      </h3>
      
      <p className="text-textMuted font-poppins text-sm leading-relaxed max-w-[220px]">
        {description}
      </p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="w-full py-24 px-6 md:px-24 bg-transparent relative">
      
      <div className="text-center mb-16 md:mb-24">
        <span className="text-textMuted font-poppins font-semibold uppercase tracking-widest text-sm md:text-base block mb-3">
          Category
        </span>
        <h2 className="text-secondary font-volkhov font-bold text-3xl sm:text-4xl md:text-5xl capitalize leading-tight">
          We Offer Best Services
        </h2>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </motion.div>

    </section>
  );
};

export default Services;