import React from 'react';
import { motion } from 'framer-motion';

const messages = [
  "// AK MOTORS: 24/7 SUPPORT READY //",
  "AK CONSTRUCTIONS: 12+ PROJECTS ONGOING //",
  "AK ADBLUE: ECO-FRIENDLY LIQUID SUPPLY ACTIVE //",
  "AK TRANSPORTS: 500+ FLEET DEPLOYED //",
  "AK MATERIALS: 100% TRANSPARENT SUPPLY CHAIN //"
];

const tickerContent = messages.join(" ");

const LiveTicker = () => {
  return (
    <div className="w-full bg-corporate-red text-white py-3 overflow-hidden whitespace-nowrap flex items-center border-y border-red-800">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 20 
        }}
        className="flex whitespace-nowrap"
      >
        <span className="text-sm font-bold uppercase tracking-[0.2em] px-4">
          {tickerContent}
        </span>
        <span className="text-sm font-bold uppercase tracking-[0.2em] px-4">
          {tickerContent}
        </span>
      </motion.div>
    </div>
  );
};

export default LiveTicker;
