import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Truck, Building2, Package, Wrench } from 'lucide-react';

const businesses = [
  { id: 1, name: 'AK Adblue', icon: Settings, link: 'https://adblue.akcumbum.com/' },
  { id: 2, name: 'AK Transports', icon: Truck, link: 'https://transport.akcumbum.com/' },
  { id: 3, name: 'AK Constructions', icon: Building2, link: 'https://construction.akcumbum.com/' },
  { id: 4, name: 'AK Materials', icon: Package, link: 'https://material.akcumbum.com/' },
  { id: 5, name: 'AK Motors', icon: Wrench, link: 'https://motors.akcumbum.com/' },
];

const EcosystemSwitcher = () => {
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] border border-gray-100 rounded-l-xl overflow-hidden"
    >
      {businesses.map((business, index) => {
        const Icon = business.icon;
        return (
          <a
            key={business.id}
            href={business.link}
            target="_blank"
            rel="noopener noreferrer"
            title={business.name}
            className={`p-3 text-gray-400 hover:text-white hover:bg-corporate-red transition-all duration-300 relative group border-b border-gray-100 last:border-b-0`}
          >
            <Icon className="w-5 h-5" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-charcoal text-white text-xs font-bold uppercase tracking-widest rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {business.name}
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-charcoal rotate-45" />
            </div>
          </a>
        );
      })}
    </motion.div>
  );
};

export default EcosystemSwitcher;
