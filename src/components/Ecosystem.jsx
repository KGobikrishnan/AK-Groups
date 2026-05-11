import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const businesses = [
  {
    id: 1,
    name: 'AK Adblue',
    description: 'Premium diesel exhaust fluid solutions for sustainable operations.',
    link: 'https://adblue.akcumbum.com/',
    tag: 'Sustainability',
  },
  {
    id: 2,
    name: 'AK Transports',
    description: 'Logistics and heavy transport excellence across regions.',
    link: 'https://transport.akcumbum.com/',
    tag: 'Logistics',
  },
  {
    id: 3,
    name: 'AK Constructions',
    description: 'Building the future with precision engineering and design.',
    link: 'https://construction.akcumbum.com/',
    tag: 'Infrastructure',
  },
  {
    id: 4,
    name: 'AK Materials',
    description: 'High-quality construction materials and raw supply chain.',
    link: 'https://material.akcumbum.com/',
    tag: 'Supply',
  },
  {
    id: 5,
    name: 'AK Motors',
    description: 'Automotive mastery and premium servicing hub.',
    link: 'https://motors.akcumbum.com/',
    tag: 'Automotive',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    }
  },
};

const Ecosystem = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white" id="ecosystem">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-center"
      >
        <motion.h2 variants={cardVariants} className="text-5xl md:text-7xl font-display font-bold tracking-tight text-charcoal mb-4 uppercase">
          The <span className="text-corporate-red">Ecosystem</span>
        </motion.h2>
        <motion.p variants={cardVariants} className="text-lg text-gray-500 max-w-2xl mx-auto tracking-[0.1em] font-medium">
          Five specialized entities, united by a single vision of excellence.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {businesses.map((business, index) => (
          <motion.a
            key={business.id}
            href={business.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02, 
            }}
            className={`group relative flex flex-col justify-between p-8 rounded-none bg-white border border-gray-200 shadow-sm hover:shadow-floating-hover transition-all duration-300 overflow-hidden cursor-pointer ${
              index === 3 ? 'lg:col-span-2' : ''
            } ${index === 4 ? 'lg:col-span-1' : ''}`}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-corporate-red/30 transition-colors duration-500 z-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-corporate-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
            
            <div className="z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <span className="inline-block px-4 py-1 border border-gray-200 bg-gray-50 text-xs font-bold tracking-widest text-gray-500 group-hover:border-corporate-red group-hover:text-corporate-red group-hover:bg-white transition-colors uppercase">
                  {business.tag}
                </span>
                <div className="w-12 h-12 rounded-none bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-corporate-red group-hover:border-corporate-red transition-colors duration-300">
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white transform group-hover:-rotate-45 transition-all duration-300" />
                </div>
              </div>
              
              <div className="mt-auto">
                <h3 className="text-3xl font-display font-bold text-charcoal mb-3 group-hover:text-corporate-red transition-colors duration-300 uppercase tracking-wide">
                  {business.name}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm font-medium">
                  {business.description}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Ecosystem;
