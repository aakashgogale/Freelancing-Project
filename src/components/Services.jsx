import { motion } from 'framer-motion';
import MandalaBg from './MandalaBg';

const servicesData = [
  { icon: "💡", title: "Light Decoration", desc: "Premium LED and fairy light decoration for birthdays, weddings, and all celebrations" },
  { icon: "🎪", title: "Tent House", desc: "Complete shamiana, furniture, and flooring setup for large outdoor events" },
  { icon: "🎧", title: "DJ Sound System", desc: "High-power professional DJ with latest Bollywood and Punjabi hits" },
  { icon: "💒", title: "Wedding Planner", desc: "Full wedding management from mandap decoration to vidaai ceremonies" },
  { icon: "🎤", title: "Live Concert Setup", desc: "Professional stage, PA sound system, and lighting for live performances" },
  { icon: "🎂", title: "Birthday Decoration", desc: "Themed balloon, LED, and floral decoration for birthday parties" }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(139,26,58,0.15)" }}
      className="bg-white rounded-[20px] p-8 border border-[#8B1A3A]/20 relative overflow-hidden group transition-all duration-300"
    >
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      
      <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold flex items-center justify-center text-2xl mb-6">
        {service.icon}
      </div>
      
      <h3 className="font-playfair text-xl font-bold text-primary mb-3">
        {service.title}
      </h3>
      
      <p className="font-poppins text-sm text-muted-text mb-6 leading-relaxed">
        {service.desc}
      </p>
      
      <a 
        href={`https://wa.me/919713576092?text=I%20want%20to%20enquire%20about%20${encodeURIComponent(service.title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-maroon font-poppins font-semibold text-sm hover:text-gold transition-colors"
      >
        Enquire Now <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative bg-cream py-24 overflow-hidden">
      <MandalaBg opacity={0.05} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-maroon font-poppins font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Services
          </span>
          <h2 className="text-primary font-playfair text-4xl md:text-5xl font-bold">
            Hamari Premium Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
