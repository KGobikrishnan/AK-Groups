import React from 'react';
import { motion } from 'framer-motion';

const Legacy = () => {
  const sections = [
    {
      id: 1,
      title: 'Our Foundation',
      content: 'Established with a vision to redefine industry standards, AK Groups began as a singular commitment to quality. Over the decades, we have built a foundation rooted in trust, transparency, and relentless dedication to our clients.',
      direction: 'left',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Engineering Excellence',
      content: 'From infrastructure to automotive mastery, our approach is driven by precision engineering. We leverage cutting-edge technology and unparalleled expertise to deliver solutions that stand the test of time.',
      direction: 'right',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Corporate Growth',
      content: 'Today, AK Groups spans five diverse industries. Our growth is a testament to our adaptable strategies, sustainable practices, and the unwavering support of our global partners and clients.',
      direction: 'left',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    }
  ];

  return (
    <main className="w-full min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight text-charcoal mb-6 uppercase">
            Building the <span className="text-corporate-red">Future.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto tracking-[0.2em] uppercase font-bold">
            A legacy forged in ambition, sustained by excellence.
          </p>
        </motion.div>

        {/* Storytelling Sections */}
        <div className="space-y-32">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              className={`flex flex-col lg:flex-row gap-16 items-center ${
                section.direction === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Block */}
              <motion.div
                initial={{ x: section.direction === 'left' ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
                className="lg:w-1/2 space-y-6"
              >
                <div className="inline-block text-corporate-red font-display font-bold tracking-[0.3em] uppercase text-sm mb-2 border-b border-corporate-red/30 pb-2">
                  0{index + 1} // Phase
                </div>
                <h2 className="text-5xl md:text-6xl font-display font-bold text-charcoal uppercase leading-none">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed font-medium">
                  {section.content}
                </p>
              </motion.div>

              {/* Image Block */}
              <motion.div
                initial={{ x: section.direction === 'left' ? 50 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
                className="lg:w-1/2 relative"
              >
                <div className="absolute inset-0 bg-corporate-red transform translate-x-4 translate-y-4 -z-10 opacity-20"></div>
                <div className="relative overflow-hidden group aspect-[4/3] border border-gray-200 bg-gray-50">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Legacy;
