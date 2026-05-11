import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const lenis = useLenis();

  const navLinks = [
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'legacy', label: 'Legacy' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Global Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'ecosystem', 'legacy', 'gallery', 'contact'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (lenis) {
      lenis.scrollTo(`#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 group focus:outline-none">
            <div className="text-3xl font-display font-bold tracking-widest text-charcoal flex uppercase">
              <span className="text-corporate-red">AK</span>
              <span className="ml-2">Groups</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative text-sm uppercase tracking-[0.2em] font-semibold transition-colors duration-300 focus:outline-none ${
                  activeSection === link.id 
                    ? 'text-charcoal' 
                    : 'text-gray-400 hover:text-charcoal'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-corporate-red"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-charcoal focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
