import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A0A2E] border-t-2 border-gold/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Logo & Tagline */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gold text-3xl">🪔</span>
            <span className="text-white font-playfair text-3xl font-bold tracking-wide">
              Saraswati Decorator
            </span>
          </div>
          <span className="text-gold font-playfair italic text-lg opacity-90">
            Indore Ki Sabse Bharosemand Decoration Service
          </span>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: About */}
          <div>
            <h4 className="text-gold font-poppins font-bold uppercase tracking-widest text-sm mb-6">
              About Us
            </h4>
            <p className="text-white/70 font-poppins text-sm leading-relaxed mb-6">
              Making your celebrations unforgettable since 2010. We provide premium decoration, tent house, and event management services across Indore.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-gold font-poppins font-bold uppercase tracking-widest text-sm mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['home', 'services', 'gallery', 'reviews', 'contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => scrollToSection(link)}
                    className="text-white/70 hover:text-gold font-poppins text-sm capitalize transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="text-gold font-poppins font-bold uppercase tracking-widest text-sm mb-6">
              Our Services
            </h4>
            <ul className="space-y-4">
              {['Light Decoration', 'Tent House', 'DJ Sound', 'Wedding Planner', 'Birthday Decoration', 'Live Concert'].map((service) => (
                <li key={service} className="text-white/70 font-poppins text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-gold font-poppins font-bold uppercase tracking-widest text-sm mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4 text-white/70 font-poppins text-sm">
              <li>📞 097135 76092</li>
              <li>
                <a href="https://wa.me/919713576092" className="hover:text-gold transition-colors">
                  💬 +91 97135 76092
                </a>
              </li>
              <li className="leading-relaxed">
                📍 Khandwa Naka, Kushwaha Bagicha, Indore, MP 452001
              </li>
              <li>⏰ Open 24 Hours, 7 Days a Week</li>
            </ul>
          </div>
          
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-12">
          {/* Client will add social media links here later */}
          <a href="#" className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-[#1A0A2E] transition-all">
            <FaFacebookF />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-[#1A0A2E] transition-all">
            <FaInstagram />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-[#1A0A2E] transition-all">
            <FaYoutube />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-[#1A0A2E] transition-all">
            <FaMapMarkerAlt />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 font-poppins text-xs text-center md:text-left">
            © 2025 Saraswati Decorator & Tent House. All Rights Reserved.
          </p>
          <p className="text-white/50 font-poppins text-xs">
            Made with ❤️ in Indore
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
