import React from 'react';
import { motion } from 'framer-motion';

const locations = [
  { id: 1, name: "Cumbum HQ", top: "70%", left: "75%", delay: 0 },
  { id: 2, name: "Theni Operations", top: "65%", left: "73%", delay: 0.2 },
  { id: 3, name: "Madurai Hub", top: "68%", left: "78%", delay: 0.4 },
  { id: 4, name: "Chennai Port", top: "55%", left: "82%", delay: 0.6 },
  { id: 5, name: "Coimbatore Plant", top: "62%", left: "70%", delay: 0.8 },
];

const MapSection = () => {
  return (
    <section className="py-32 bg-charcoal relative overflow-hidden" id="global-presence">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white uppercase"
        >
          Strategic <span className="text-corporate-red">Global Presence</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-400 font-medium tracking-widest uppercase text-sm"
        >
          Engineering and Transport Network
        </motion.p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto h-[600px] border border-gray-800 rounded-xl overflow-hidden bg-[#0a0a0a]">
        {/* Dark Map Background (Placeholder, ideally an SVG map) */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
            alt="World Map" 
            className="w-full h-full object-cover mix-blend-luminosity"
          />
        </div>

        {/* Overlay Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />

        {/* Location Dots */}
        {locations.map((loc) => (
          <div 
            key={loc.id} 
            className="absolute group z-30"
            style={{ top: loc.top, left: loc.left }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: loc.delay }}
              className="relative"
            >
              {/* Pulse effect */}
              <motion.div
                animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: loc.delay }}
                className="absolute -inset-2 bg-corporate-red rounded-full"
              />
              {/* Core dot */}
              <div className="w-3 h-3 bg-corporate-red rounded-full shadow-[0_0_15px_rgba(225,29,72,1)]" />
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1 bg-white text-charcoal text-xs font-bold uppercase tracking-widest rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {loc.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-2 h-2 bg-white rotate-45" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MapSection;
