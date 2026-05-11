import React from 'react';
import { motion } from 'framer-motion';

const newsItems = [
  { date: "Oct 2023", title: "AK Adblue Launches New Eco-Facility in Theni" },
  { date: "Nov 2023", title: "AK Transports Expands Fleet by 50+ Heavy Movers" },
  { date: "Jan 2024", title: "AK Constructions Wins Major Infrastructure Bid" },
  { date: "Mar 2024", title: "AK Materials Achieves 100% Sustainable Sourcing" },
  { date: "May 2024", title: "AK Motors Introduces Premium German Diagnostic Tools" },
  { date: "Oct 2023", title: "AK Adblue Launches New Eco-Facility in Theni" }, // Duplicated for seamless loop
  { date: "Nov 2023", title: "AK Transports Expands Fleet by 50+ Heavy Movers" },
];

const VerticalMarquee = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center glass-panel p-8 md:p-12">
        
        <div className="md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-charcoal"
          >
            Group <span className="text-corporate-red">Updates</span>
          </motion.h2>
          <p className="mt-4 text-gray-500 text-sm tracking-widest uppercase">
            The latest momentum across the AK Ecosystem.
          </p>
        </div>

        <div className="md:w-2/3 h-64 overflow-hidden relative border-l border-gray-700 pl-8">
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20
            }}
            className="flex flex-col gap-6"
          >
            {newsItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-corporate-red text-xs font-bold uppercase tracking-widest mb-1">{item.date}</span>
                <h4 className="text-xl font-bold text-charcoal">{item.title}</h4>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default VerticalMarquee;
