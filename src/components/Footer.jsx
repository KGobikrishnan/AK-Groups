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
    <footer className="bg-charcoal text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-6">
            <div className="text-4xl font-display font-bold tracking-widest text-white flex uppercase">
              <span className="text-corporate-red">AK</span>
              <span className="ml-2">Groups</span>
            </div>
            <p className="text-gray-400 max-w-sm font-medium leading-relaxed">
              Power, precision, and performance across five diverse industries. Building the future, today.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-display font-bold uppercase tracking-[0.2em] text-white">Navigation</h4>
            <ul className="space-y-3 font-medium text-gray-400">
              <li><button onClick={() => handleNavClick('home')} className="hover:text-corporate-red transition-colors uppercase tracking-wide">Home</button></li>
              <li><button onClick={() => handleNavClick('ecosystem')} className="hover:text-corporate-red transition-colors uppercase tracking-wide">Ecosystem</button></li>
              <li><button onClick={() => handleNavClick('legacy')} className="hover:text-corporate-red transition-colors uppercase tracking-wide">Legacy</button></li>
              <li><button onClick={() => handleNavClick('gallery')} className="hover:text-corporate-red transition-colors uppercase tracking-wide">Gallery</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="hover:text-corporate-red transition-colors uppercase tracking-wide">Contact</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-display font-bold uppercase tracking-[0.2em] text-white">Contact</h4>
            <ul className="space-y-3 font-medium text-gray-400">
              <li className="uppercase tracking-wide">AK Groups Complex</li>
              <li className="uppercase tracking-wide">Cumbum, TN, India</li>
              <li className="uppercase tracking-wide">+91 (123) 456-7890</li>
              <li className="uppercase tracking-wide">info@akgroups.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
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
