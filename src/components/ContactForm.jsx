import { useState } from 'react';
import MandalaBg from './MandalaBg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding/Shaadi',
    date: '',
    venue: '',
    guests: 'Less than 50',
    budget: 'Rs 5,000–15,000',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, eventType, date, venue, guests, budget, message } = formData;
    const msg = `Namaste Saraswati Decorator! 🙏\n\nName: ${name}\nPhone: ${phone}\nEvent: ${eventType}\nDate: ${date}\nVenue: ${venue}\nGuests: ${guests}\nBudget: ${budget}\nRequirements: ${message}\n\nPlease confirm my booking.`;
    window.open(`https://wa.me/919713576092?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contact" className="relative bg-white py-24">
      <MandalaBg opacity={0.04} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Left: Booking Form */}
          <div>
            <span className="text-maroon font-poppins font-bold tracking-widest uppercase text-sm mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-primary font-playfair text-4xl md:text-5xl font-bold mb-8">
              Apna Event Book Karo
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-poppins font-medium text-primary mb-2">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Aapka Naam" className="w-full border border-maroon/20 rounded-lg px-4 py-3 min-h-[48px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors font-poppins text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-poppins font-medium text-primary mb-2">Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Mobile Number" className="w-full border border-maroon/20 rounded-lg px-4 py-3 min-h-[48px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors font-poppins text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-poppins font-medium text-primary mb-2">Event Type</label>
                  <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full border border-maroon/20 rounded-lg px-4 py-3 min-h-[48px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors font-poppins text-sm bg-white">
                    <option>Wedding/Shaadi</option>
                    <option>Birthday Party</option>
                    <option>DJ Sound Only</option>
                    <option>Tent House</option>
                    <option>Live Concert</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-poppins font-medium text-primary mb-2">Event Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full border border-maroon/20 rounded-lg px-4 py-3 min-h-[48px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors font-poppins text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-poppins font-medium text-primary mb-2">Venue/Location</label>
                <input type="text" name="venue" value={formData.venue} onChange={handleChange} placeholder="Event Location in Indore" className="w-full border border-maroon/20 rounded-lg px-4 py-3 min-h-[48px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors font-poppins text-sm" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-poppins font-medium text-primary mb-2">Expected Guests</label>
                  <select name="guests" value={formData.guests} onChange={handleChange} className="w-full border border-maroon/20 rounded-lg px-4 py-3 min-h-[48px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors font-poppins text-sm bg-white">
                    <option>Less than 50</option>
                    <option>50–200</option>
                    <option>200–500</option>
                    <option>More than 500</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-poppins font-medium text-primary mb-2">Budget Range</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className="w-full border border-maroon/20 rounded-lg px-4 py-3 min-h-[48px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors font-poppins text-sm bg-white">
                    <option>Rs 5,000–15,000</option>
                    <option>Rs 15,000–50,000</option>
                    <option>Rs 50,000–1,00,000</option>
                    <option>More than 1 Lakh</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-poppins font-medium text-primary mb-2">Special Requirements</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Any specific decoration theme or requirements?" className="w-full border border-maroon/20 rounded-lg px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors font-poppins text-sm resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-gold text-dark-text py-4 rounded-lg font-poppins font-bold text-lg hover:bg-gold/90 transition-colors shadow-lg shadow-gold/20 flex items-center justify-center gap-2">
                Send Booking Request on WhatsApp 🚀
              </button>
            </form>
          </div>

          {/* Right: Contact Info Cards */}
          <div className="flex flex-col justify-center space-y-6 lg:pl-10">
            <div className="bg-cream rounded-2xl p-6 border border-maroon/10 flex items-start gap-4">
              <div className="text-3xl mt-1">📞</div>
              <div>
                <h4 className="font-poppins font-bold text-primary mb-1">Call Us</h4>
                <p className="font-playfair text-xl text-primary font-semibold mb-3">097135 76092</p>
                <a href="tel:+919713576092" className="inline-block bg-maroon text-white font-poppins text-sm px-6 py-2 rounded-full hover:bg-maroon/90 transition-colors">Call Now</a>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-6 border border-maroon/10 flex items-start gap-4">
              <div className="text-3xl mt-1 text-[#25D366]">📱</div>
              <div>
                <h4 className="font-poppins font-bold text-primary mb-1">WhatsApp</h4>
                <p className="font-playfair text-xl text-primary font-semibold mb-3">+91 97135 76092</p>
                <a href="https://wa.me/919713576092" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] text-white font-poppins text-sm px-6 py-2 rounded-full hover:bg-[#20bd5a] transition-colors">Open WhatsApp</a>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-6 border border-maroon/10 flex items-start gap-4">
              <div className="text-3xl mt-1">📍</div>
              <div>
                <h4 className="font-poppins font-bold text-primary mb-1">Address</h4>
                <p className="font-poppins text-sm text-muted-text mb-3 leading-relaxed max-w-sm">
                  Khandwa Naka, Kushwaha Bagicha, Indore, Madhya Pradesh 452001
                </p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-maroon font-poppins text-sm font-semibold hover:text-gold transition-colors">Get Directions →</a>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-6 border border-maroon/10 flex items-start gap-4">
              <div className="text-3xl mt-1">⏰</div>
              <div>
                <h4 className="font-poppins font-bold text-primary mb-1">Working Hours</h4>
                <p className="font-poppins text-sm text-muted-text">Open 24 Hours — 7 Days a Week</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Map */}
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnMjcuNyJF!5e0!3m2!1sen!2sin!4v1"
            width="100%" height="350"
            style={{ borderRadius: '16px', border: '2px solid rgba(212,175,55,0.4)' }}
            allowFullScreen loading="lazy"
            title="Google Maps Location"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
