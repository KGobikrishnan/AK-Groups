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
    image: '/images/AK-Adblue.png',
  },
  {
    id: 2,
    name: 'AK Transports',
    description: 'Logistics and heavy transport excellence across regions.',
    link: 'https://transport.akcumbum.com/',
    tag: 'Logistics',
    image: '/images/AK-transports.png',
  },
  {
    id: 3,
    name: 'AK Constructions',
    description: 'Building the future with precision engineering and design.',
    link: 'https://construction.akcumbum.com/',
    tag: 'Infrastructure',
    image: '/images/AK-construction.png',
  },
  {
    id: 4,
    name: 'AK Materials',
    description: 'High-quality construction materials and raw supply chain.',
    link: 'https://material.akcumbum.com/',
    tag: 'Supply',
    image: '/images/AK-material.png',
  },
  {
    id: 5,
    name: 'AK Motors',
    description: 'Automotive mastery and premium servicing hub.',
    link: 'https://motors.akcumbum.com/',
    tag: 'Automotive',
    image: '/images/AK-motors.png',
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
    <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="ecosystem">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-center"
      >
        <motion.h2 variants={cardVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-charcoal mb-4 uppercase">
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
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
            }}
            className={`group relative flex flex-col glass-panel glass-panel-hover overflow-hidden cursor-pointer h-[450px] md:h-[550px] ${
              index === 3 ? 'lg:col-span-2' : ''
            }`}
          >
            {/* Image Section - The "Website Car" look */}
            <div className="relative h-2/3 overflow-hidden bg-gray-100 border-b border-gray-200">
                <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                    src={business.image} 
                    alt={business.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-[2s] ease-out grayscale group-hover:grayscale-0"
                />
                
                {/* Float Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md border border-white/50 text-[10px] font-bold tracking-widest text-charcoal uppercase rounded-full shadow-lg group-hover:bg-corporate-red group-hover:text-white group-hover:border-corporate-red transition-all duration-300">
                        {business.tag}
                    </span>
                </div>

                {/* Arrow Button Overlay */}
                <div className="absolute bottom-4 right-4 z-20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-corporate-red flex items-center justify-center text-white shadow-xl">
                        <ArrowRight className="w-6 h-6 -rotate-45" />
                    </div>
                </div>
            </div>
            
            {/* Content Section */}
            <div className="p-6 md:p-8 flex flex-col justify-center flex-grow bg-white/50 backdrop-blur-sm relative z-10">
                <div className="absolute top-0 left-0 w-1 h-0 bg-corporate-red group-hover:h-full transition-all duration-700" />
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 group-hover:text-corporate-red transition-colors duration-300 uppercase tracking-tight">
                  {business.name}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base font-medium">
                  {business.description}
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-corporate-red font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Explore Platform <ExternalLink className="w-3 h-3" />
                </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-corporate-red/20 transition-colors duration-500 z-30 pointer-events-none rounded-[2rem]" />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Ecosystem;
