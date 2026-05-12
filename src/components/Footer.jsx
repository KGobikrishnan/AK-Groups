import React from 'react';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';

const Footer = () => {
  const lenis = useLenis();

  const handleNavClick = (id) => {
    if (lenis) {
      lenis.scrollTo(`#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black/80 backdrop-blur-xl border-t border-white/10 text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2 uppercase">
              <img src="/images/logo.png" alt="AK Logo" className="h-12 md:h-16 w-auto object-contain" />
              <span className="text-4xl font-bold tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Groups</span>
            </div>
            <p className="text-gray-400 max-w-sm font-medium leading-relaxed">
              Power, precision, and performance across five diverse industries. Building the future, today.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-[0.2em] text-white">Navigation</h4>
            <ul className="space-y-3 font-medium text-gray-400">
              <li><button onClick={() => handleNavClick('home')} className="hover:text-corporate-red transition-colors uppercase tracking-wide text-xs">Home</button></li>
              <li><button onClick={() => handleNavClick('ecosystem')} className="hover:text-corporate-red transition-colors uppercase tracking-wide text-xs">Ecosystem</button></li>
              <li><button onClick={() => handleNavClick('gallery')} className="hover:text-corporate-red transition-colors uppercase tracking-wide text-xs">Gallery</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="hover:text-corporate-red transition-colors uppercase tracking-wide text-xs">Contact</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-[0.2em] text-white">Contact</h4>
            <ul className="space-y-3 font-medium text-gray-400 text-xs">
              <li className="uppercase tracking-wide">Indira colony, C.Pudupatti</li>
              <li className="uppercase tracking-wide">Cumbum - 625556, Theni (Dt)</li>
              <li className="uppercase tracking-wide">+91 93622 25555</li>
              <li className="uppercase tracking-wide">+91 97881 11666</li>
              <li className="lowercase tracking-wide">akcumbum@gmail.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} AK Groups. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm font-medium">
            Powered by <a href="https://www.navipromotions.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-corporate-red transition-colors">Navi Promotions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
