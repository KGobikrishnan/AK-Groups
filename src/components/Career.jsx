import React from 'react';
import { motion } from 'framer-motion';

const Career = () => {
  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="career">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-corporate-red rounded-full mix-blend-screen filter blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 glass-panel p-12 md:p-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6 text-charcoal"
        >
          Join the <span className="text-corporate-red">Momentum</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 font-medium tracking-wide mb-12"
        >
          Be a part of a legacy that builds the future. Explore career opportunities across multiple industries within the AK Ecosystem.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a 
            href="#contact"
            className="inline-block bg-corporate-red hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full uppercase tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_15px_rgba(225,29,72,0.4)] hover:shadow-[0_10px_25px_rgba(225,29,72,0.6)]"
          >
            Join the Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Career;
