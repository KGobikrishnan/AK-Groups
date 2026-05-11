import React from 'react';
import { motion } from 'framer-motion';

const initiatives = [
  {
    title: "Healthcare Support",
    desc: "Regular blood donation camps and medical outreach in the Cumbum region.",
    img: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=2083&auto=format&fit=crop"
  },
  {
    title: "Educational Upliftment",
    desc: "Infrastructure support and scholarships for local schools.",
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Community Infrastructure",
    desc: "Developing local roads and amenities to improve regional connectivity.",
    img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
  }
];

const CSR = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="csr">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-charcoal"
          >
            Impact Beyond <span className="text-corporate-red">Business</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-500 font-medium tracking-widest uppercase text-sm"
          >
            Corporate Social Responsibility
          </motion.p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-8">
          {initiatives.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer glass-panel glass-panel-hover overflow-hidden"
            >
              <div className="relative h-20 md:h-64 overflow-hidden bg-gray-100 border-b border-gray-200 mb-2 md:mb-6 rounded-t-[1.5rem]">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-corporate-red/0 group-hover:bg-corporate-red/20 transition-colors duration-500" />
              </div>
              <div className="p-2 md:p-6 pt-0">
                <h3 className="text-[10px] md:text-xl font-bold text-charcoal mb-1 md:mb-2 uppercase tracking-wide group-hover:text-corporate-red transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[8px] md:text-sm font-medium leading-tight md:leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSR;
