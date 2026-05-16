import { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingButtons = () => {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      
      {/* WhatsApp Button */}
      <div 
        className="relative flex items-center justify-end"
        onMouseEnter={() => setHoveredBtn('whatsapp')}
        onMouseLeave={() => setHoveredBtn(null)}
      >
        <div 
          className={`absolute right-full mr-4 bg-white text-primary font-poppins text-xs font-bold px-3 py-1.5 rounded shadow-lg whitespace-nowrap transition-all duration-300 pointer-events-none ${
            hoveredBtn === 'whatsapp' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          WhatsApp
        </div>
        <a 
          href="https://wa.me/919713576092"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] bg-[#25D366] rounded-full flex items-center justify-center text-white text-2xl md:text-3xl shadow-xl animate-pulse-green hover:scale-110 transition-transform"
          aria-label="WhatsApp Us"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Call Button */}
      <div 
        className="relative flex items-center justify-end"
        onMouseEnter={() => setHoveredBtn('call')}
        onMouseLeave={() => setHoveredBtn(null)}
      >
        <div 
          className={`absolute right-full mr-4 bg-white text-primary font-poppins text-xs font-bold px-3 py-1.5 rounded shadow-lg whitespace-nowrap transition-all duration-300 pointer-events-none ${
            hoveredBtn === 'call' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          Call Now
        </div>
        <a 
          href="tel:+919713576092"
          className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] bg-maroon rounded-full flex items-center justify-center text-white text-xl md:text-2xl shadow-xl animate-pulse-maroon hover:scale-110 transition-transform"
          aria-label="Call Us"
        >
          <FaPhoneAlt />
        </a>
      </div>

    </div>
  );
};

export default FloatingButtons;
