import { motion } from 'framer-motion';
import MandalaBg from './MandalaBg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#8B1A3A] to-[#1A0A2E]">
      <MandalaBg opacity={0.06} />
      
      {/* Bokeh blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gold rounded-full filter blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-[400px] md:h-[400px] bg-[#8B1A3A] rounded-full filter blur-[120px] pointer-events-none"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block border border-gold/50 bg-[#1A0A2E]/50 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6"
        >
          <span className="text-gold font-poppins text-sm font-medium tracking-wide">
            ⭐ Indore's Most Trusted Decorator
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-white font-playfair font-bold leading-tight mb-4 text-[clamp(32px,6vw,64px)] drop-shadow-lg">
            Har Khushi Ko Banao<br/>Yaadgaar
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-gold font-poppins text-lg md:text-2xl font-medium mb-6 drop-shadow-md">
            Decoration · Tent House · DJ Sound · Wedding Planning
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white/65 font-poppins text-base md:text-lg max-w-[520px] mx-auto mb-10 leading-relaxed">
            Shaadi ho ya Birthday, Concert ho ya Party — Saraswati Decorator makes every celebration unforgettable. 500+ successful events completed across Indore.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
        >
          <a 
            href="https://wa.me/919713576092?text=Namaste%20Saraswati%20Decorator%2C%20I%20want%20to%20book%20an%20event"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-dark-text px-8 py-4 rounded-full font-poppins font-bold text-lg hover:bg-gold/90 transition-all transform hover:-translate-y-1 shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
          >
            Abhi Book Karo 🚀
          </a>
          <a 
            href="tel:+919713576092"
            className="border-2 border-gold text-gold px-8 py-4 rounded-full font-poppins font-bold text-lg hover:bg-gold/10 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            📞 Call: 097135 76092
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-white/50 font-poppins text-sm font-medium"
        >
          <span>⭐ 5.0 Rating</span>
          <span className="hidden sm:inline">|</span>
          <span>303 Google Reviews</span>
          <span className="hidden sm:inline">|</span>
          <span>500+ Events</span>
          <span className="hidden sm:inline">|</span>
          <span>24/7 Available</span>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
