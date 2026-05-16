import { FaCamera, FaPlay } from 'react-icons/fa';

const Gallery = () => {
  // 12 photo placeholders
  const photos = Array(12).fill(null);
  
  return (
    <section id="gallery" className="bg-[#1A0A2E] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-poppins font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Work
          </span>
          <h2 className="text-white font-playfair text-4xl md:text-5xl font-bold">
            Hamara Kaam Dekho
          </h2>
        </div>

        {/* Masonry Grid for Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px] mb-12">
          {photos.map((_, index) => {
            // Make some items span 2 rows for masonry effect
            const isTall = index === 1 || index === 4 || index === 7 || index === 10;
            return (
              <div 
                key={index}
                className={`bg-gradient-to-br from-[#8B1A3A] to-[#D4AF37] rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group ${
                  isTall ? 'row-span-2' : ''
                }`}
              >
                {/* Empty placeholder for client's future photos */}
                <FaCamera className="text-white/40 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white font-poppins text-sm font-medium tracking-wide">
                  Photo Coming Soon
                </span>
              </div>
            );
          })}
        </div>

        {/* Videos Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[1, 2].map((_, index) => (
            <div 
              key={index}
              className="bg-[#0D0D0D] border border-gold/30 aspect-video rounded-2xl flex flex-col items-center justify-center relative group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors duration-300">
                <FaPlay className="text-gold text-xl ml-1" />
              </div>
              <span className="text-white font-poppins text-sm font-medium">
                Video Coming Soon
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://wa.me/919713576092"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-gold text-gold px-8 py-3 rounded-full font-poppins font-semibold hover:bg-gold/10 transition-colors"
          >
            View More Photos & Videos →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
