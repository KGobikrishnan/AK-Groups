import React from 'react';
import { motion } from 'framer-motion';

const Leadership = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden" id="leadership">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="relative aspect-[4/5] overflow-hidden grayscale contrast-125 border border-gray-200 p-2">
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" 
              alt="CEO Portrait" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-corporate-red/10 mix-blend-multiply" />
          </div>
        </motion.div>

        {/* Right: Typography */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-charcoal mb-6 uppercase">
            The Leadership <br/>
            <span className="text-corporate-red">Perspective</span>
          </h2>
          
          <div className="w-16 h-1 bg-corporate-red mb-8" />

          <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-8 leading-snug border-l-4 border-gray-200 pl-6">
            "Precision isn't just a metric; <br className="hidden md:block"/> it's our promise."
          </blockquote>
          
          <p className="text-gray-500 font-medium tracking-widest uppercase text-sm mb-2">
            Founder & CEO
          </p>
          <p className="text-charcoal font-bold uppercase tracking-widest text-lg">
            A.K. Group
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Leadership;
