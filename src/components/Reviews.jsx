import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const realReviews = [
  { initial: "R", name: "R.K.", text: "Good quality of service by Saraswati decorators. Highly recommended for all events." },
  { initial: "P", name: "P.S.", text: "Awesome services and very customer friendly. Will definitely book again." },
  { initial: "A", name: "A.M.", text: "Had a splendid experience with this group. Everything was perfectly decorated." }
];

const placeholderReviews = [
  { placeholder: true },
  { placeholder: true },
  { placeholder: true }
];

const allReviews = [...realReviews, ...placeholderReviews];

const Reviews = () => {
  return (
    <section id="reviews" className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Google Rating Summary */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5 max-w-3xl mx-auto text-center border border-maroon/10 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-maroon via-gold to-maroon"></div>
          
          <div className="text-[72px] leading-none font-playfair font-bold text-gold mb-2">
            5.0
          </div>
          <div className="flex justify-center gap-1 mb-4 text-gold text-2xl">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="font-poppins text-muted-text font-medium mb-8">
            Based on 303 Google Reviews
          </p>
          <a 
            href="https://www.google.com/maps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-poppins font-bold bg-gold/10 px-6 py-3 rounded-full hover:bg-gold/20 transition-colors"
          >
            View All Reviews on Google →
          </a>
        </div>

        {/* Reviews Grid / Scroll */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {allReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="min-w-[85vw] sm:min-w-[300px] md:min-w-0 bg-white rounded-2xl p-8 border border-maroon/20 snap-center relative shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-gold font-playfair text-6xl leading-none absolute top-4 left-6 opacity-30">
                "
              </div>
              
              <div className="flex text-gold text-sm gap-1 mb-6 relative z-10">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              
              <p className="font-playfair italic text-primary/80 mb-8 min-h-[80px] relative z-10 text-lg">
                {review.placeholder 
                  ? "Customer Review Coming Soon..." 
                  : review.text}
              </p>
              
              <div className="flex items-center justify-between border-t border-maroon/10 pt-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-gold flex items-center justify-center font-poppins font-bold">
                    {review.placeholder ? "?" : review.initial}
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-primary text-sm">
                      {review.placeholder ? "Customer Name" : review.name}
                    </div>
                    <div className="font-poppins text-xs text-muted-text">
                      Indore
                    </div>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs">
                  G
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Reviews;
