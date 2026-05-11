import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Leaf, ShieldCheck, HardHat } from 'lucide-react';

const values = [
  {
    id: 1,
    title: "Innovation",
    description: "Future-ready tech driving our operations.",
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "Sustainability",
    description: "Eco-conscious growth, spearheaded by AK Adblue.",
    icon: Leaf,
  },
  {
    id: 3,
    title: "Integrity",
    description: "100% transparent materials and ethical practices.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Safety",
    description: "Zero-compromise on our construction sites and fleets.",
    icon: HardHat,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CoreValues = () => {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="core-values">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal uppercase">
            The <span className="text-corporate-red">Pillars</span>
          </h2>
          <p className="mt-4 text-gray-500 font-medium tracking-widest uppercase text-sm">
            What we stand for today
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <motion.div 
                key={val.id}
                variants={itemVariants}
                className="glass-panel glass-panel-hover p-4 md:p-8 group flex flex-col items-center text-center hover:shadow-[0_0_20px_rgba(225,29,72,0.2)]"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-corporate-red group-hover:border-corporate-red transition-all duration-300 shadow-sm shrink-0">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-charcoal group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm md:text-xl font-bold text-charcoal mb-2 md:mb-3 uppercase tracking-wide group-hover:text-corporate-red transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="text-gray-500 text-[10px] md:text-sm font-medium leading-snug">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
