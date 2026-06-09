import React from 'react';
import { motion } from 'framer-motion';
import { IoLocationSharp } from 'react-icons/io5';

// 1. معالجة التضارب: استيراد الصور بأسماء تعبر عن الملفات الفعلية بدقة
import barcelonaImg from '../assets/Barcelona.jpeg';     
import amsterdamImg from '../assets/Amsterdam.jpeg';
import parisImg from '../assets/Paris.jpeg'; 

interface DestinationCardProps {
  image: string;
  title: string;
  price: string;
  duration: string;
}

// تحديث البيانات لتكون متناسقة بكتلتها البصرية والبرمجية
const destinationsData: DestinationCardProps[] = [
  {
    image: barcelonaImg,
    title: 'Barcelona, Spain',
    price: '$5.42k',
    duration: '10 Days Trip',
  },
  {
    image: amsterdamImg,
    title: 'Amsterdam, Netherlands',
    price: '$4.2k',
    duration: '12 Days Trip',
  },
  {
    image: parisImg,
    title: 'Paris, France',
    price: '$15k',
    duration: '28 Days Trip',
  },
];

const DestinationCard: React.FC<DestinationCardProps> = ({ image, title, price, duration }) => {
  return (
    <motion.div 
      className="flex flex-col bg-white rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-shadow duration-300 cursor-pointer group"
      whileHover={{ y: -10 }} 
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="w-full h-[300px] overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-6 bg-white flex flex-col justify-between flex-grow">
        <div className="flex items-center justify-between font-poppins font-medium text-lg mb-4">
          <span className="text-secondary group-hover:text-primary transition-colors duration-300">
            {title}
          </span>
          <span className="text-textMuted font-normal">{price}</span>
        </div>

        {/* أيقونة الموقع ومدة الرحلة */}
        <div className="flex items-center gap-2 text-textMuted font-poppins text-sm font-medium">
          {/* تم تعديل لون الأيقونة لتكون متناسقة ومتفاعلة مع هوية التصميم */}
          <IoLocationSharp className="text-secondary group-hover:text-primary transition-colors duration-300 w-4 h-4 transform -rotate-45" />
          <span>{duration}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="w-full py-24 px-6 md:px-24 bg-transparent relative overflow-visible">
      
      <div className="text-center mb-16 md:mb-20">
        <span className="text-textMuted font-poppins font-semibold uppercase tracking-widest text-sm md:text-base block mb-3">
          Top Selling
        </span>
        <h2 className="text-secondary font-volkhov font-bold text-3xl sm:text-4xl md:text-5xl capitalize leading-tight">
          Top Destinations
        </h2>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {destinationsData.map((dest, index) => (
          <DestinationCard 
            key={index}
            image={dest.image}
            title={dest.title}
            price={dest.price}
            duration={dest.duration}
          />
        ))}
      </motion.div>

    </section>
  );
};

export default Destinations;