import { motion } from 'framer-motion';

const stepsData = [
  { num: 1, title: "Contact Karo", desc: "Call or WhatsApp us at 097135 76092" },
  { num: 2, title: "Details Batao", desc: "Share your event date, venue, type, and guest count" },
  { num: 3, title: "Package Chunno", desc: "We suggest the best package within your budget" },
  { num: 4, title: "Advance Confirm Karo", desc: "Confirm booking with a small advance payment" },
  { num: 5, title: "Hum Aa Jaate Hain!", desc: "Our team arrives on time and sets everything up perfectly" }
];

const BookingSteps = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-maroon font-poppins font-bold tracking-widest uppercase text-sm mb-4 block">
            Booking Process
          </span>
          <h2 className="text-primary font-playfair text-4xl md:text-5xl font-bold">
            Booking Karna Hai? Bahut Aasan Hai!
          </h2>
        </div>

        <div className="relative mt-12 mb-16">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[30px] left-[10%] right-[10%] h-1 bg-gold/30 -z-10"></div>
          
          {/* Mobile Connecting Line */}
          <div className="block lg:hidden absolute top-0 bottom-0 left-[29px] w-1 bg-gold/30 -z-10"></div>

          <div className="flex flex-col lg:flex-row justify-between relative gap-8 lg:gap-4">
            {stepsData.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex lg:flex-col items-center lg:text-center gap-6 lg:gap-4 flex-1"
              >
                <div className="w-[60px] h-[60px] flex-shrink-0 bg-gold rounded-full flex items-center justify-center text-primary font-playfair text-2xl font-bold shadow-lg shadow-gold/30 z-10">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-lg text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-poppins text-sm text-muted-text max-w-[200px] lg:mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://wa.me/919713576092?text=Namaste%2C%20I%20want%20to%20start%20my%20booking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gold text-dark-text px-8 py-4 rounded-full font-poppins font-bold text-lg hover:bg-gold/90 transition-all transform hover:-translate-y-1 shadow-lg shadow-gold/20"
          >
            Start Booking on WhatsApp 💬
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
