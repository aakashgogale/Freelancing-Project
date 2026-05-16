import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, duration = 1500, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StatsBar = () => {
  const stats = [
    { value: 500, suffix: '+', label: 'Events Completed', id: 1 },
    { value: 303, suffix: '', label: 'Google Reviews', id: 2 },
    { value: 5, suffix: '.0 ⭐', label: 'Rating', id: 3 },
    { value: 24, suffix: '/7', label: 'Available', id: 4 },
  ];

  return (
    <section className="bg-[#1A0A2E] py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 relative">
          
          {/* Mobile dividers */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gold/30 md:hidden"></div>
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gold/30 md:hidden"></div>

          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`flex flex-col items-center text-center p-4 md:p-0 ${
                index !== stats.length - 1 ? 'md:border-r md:border-gold/30' : ''
              }`}
            >
              <div className="text-gold font-playfair text-3xl md:text-5xl font-bold mb-2 tracking-tight">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-poppins text-xs md:text-sm tracking-widest uppercase opacity-80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
