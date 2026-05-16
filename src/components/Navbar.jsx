import { useState, useEffect } from 'react';
import MandalaBg from './MandalaBg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          navHidden ? '-translate-y-full' : 'translate-y-0'
        } ${
          isScrolled ? 'bg-[#1A0A2E]/90 backdrop-blur-md border-b border-gold/30' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-gold text-2xl">🪔</span>
                  <span className="text-white font-playfair text-xl md:text-2xl font-bold tracking-wide">
                    Saraswati Decorator
                  </span>
                </div>
                <span className="text-gold uppercase tracking-widest text-[10px] md:text-xs font-semibold ml-8">
                  Indore's Premier Event Decorator
                </span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-gold font-poppins font-medium transition-colors text-sm uppercase tracking-wider"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Book Now Button Desktop */}
            <div className="hidden md:flex">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gold text-dark-text px-6 py-2 rounded-full font-poppins font-semibold hover:bg-gold/80 transition-colors shadow-lg shadow-gold/20"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(true)}
                className="text-gold hover:text-white transition-colors p-2"
                aria-label="Open Menu"
              >
                <div className="space-y-1.5">
                  <div className="w-6 h-0.5 bg-gold"></div>
                  <div className="w-6 h-0.5 bg-gold"></div>
                  <div className="w-6 h-0.5 bg-gold"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[#1A0A2E] transform transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <MandalaBg opacity={0.1} />
        
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-gold text-3xl hover:text-white transition-colors z-10"
          aria-label="Close Menu"
        >
          ✕
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8 z-10 relative">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white font-playfair text-4xl hover:text-gold transition-colors tracking-wide"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-8 bg-gold text-dark-text px-8 py-3 rounded-full font-poppins font-bold text-lg hover:bg-gold/80 transition-colors shadow-lg shadow-gold/20"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
