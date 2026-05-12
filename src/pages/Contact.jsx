import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [rippleStyle, setRippleStyle] = useState({});
  const [isRippling, setIsRippling] = useState(false);

  const handleButtonClick = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRippleStyle({ left: x, top: y });
    setIsRippling(true);
    
    setTimeout(() => setIsRippling(false), 600);
  };

  return (
    <section className="w-full py-16 md:py-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent z-0 opacity-80"></div>
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* Contact Info Side */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-charcoal mb-4 uppercase leading-none">
              Initiate <span className="text-corporate-red block">Contact.</span>
            </h1>
            <p className="text-lg text-gray-500 font-medium tracking-wide">
              One central command for all AK Groups operations. State your inquiry.
            </p>
          </div>

          <div className="space-y-8 mt-12 border-l border-corporate-red/50 pl-6">
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Command Center</h3>
              <p className="text-gray-500 font-medium">Indira colony, C.Pudupatti,<br />Cumbum - 625556, Theni (Dt)</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Direct Secure Line</h3>
              <p className="text-gray-500 font-medium">+91 93622 25555<br />+91 97881 11666</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Transmissions</h3>
              <p className="text-gray-500 font-medium lowercase">akcumbum@gmail.com</p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
        >
          <form className="glass-panel p-8 sm:p-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="IDENTIFICATION" 
                  className="w-full bg-white/50 border border-gray-200 focus:bg-white focus:border-corporate-red focus:ring-0 rounded-lg px-5 py-4 text-charcoal placeholder-gray-400 font-bold tracking-widest uppercase outline-none transition-all duration-300 shadow-inner"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="CONTACT FREQUENCY" 
                  className="w-full bg-white/50 border border-gray-200 focus:bg-white focus:border-corporate-red focus:ring-0 rounded-lg px-5 py-4 text-charcoal placeholder-gray-400 font-bold tracking-widest uppercase outline-none transition-all duration-300 shadow-inner"
                />
              </div>

              <div>
                <label htmlFor="company" className="sr-only">Company (Optional)</label>
                <input 
                  type="text" 
                  id="company" 
                  placeholder="AFFILIATION (OPTIONAL)" 
                  className="w-full bg-white/50 border border-gray-200 focus:bg-white focus:border-corporate-red focus:ring-0 rounded-lg px-5 py-4 text-charcoal placeholder-gray-400 font-bold tracking-widest uppercase outline-none transition-all duration-300 shadow-inner"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="TRANSMIT MESSAGE" 
                  className="w-full bg-white/50 border border-gray-200 focus:bg-white focus:border-corporate-red focus:ring-0 rounded-lg px-5 py-4 text-charcoal placeholder-gray-400 font-bold tracking-widest uppercase outline-none transition-all duration-300 resize-none shadow-inner"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              onClick={handleButtonClick}
              className="relative w-full overflow-hidden bg-corporate-red hover:bg-corporate-darkred text-white font-bold text-xl tracking-[0.2em] uppercase rounded-full px-5 py-4 transition-colors duration-300 focus:outline-none flex justify-center group shadow-[0_0_15px_rgba(225,29,72,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Execute
                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              
              {/* Ripple Effect */}
              {isRippling && (
                <span 
                  className="absolute bg-white/20 rounded-full animate-ripple pointer-events-none"
                  style={{
                    left: rippleStyle.left,
                    top: rippleStyle.top,
                    transform: 'translate(-50%, -50%)',
                    width: '200px',
                    height: '200px',
                  }}
                />
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
