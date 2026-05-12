import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const lenis = useLenis();

  const navLinks = [
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Global Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'ecosystem', 'gallery', 'contact'];
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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    if (lenis) {
      lenis.scrollTo(`#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 inset-x-0 mx-auto w-[90%] max-w-7xl z-50 px-6 md:px-8 py-4 backdrop-blur-xl bg-white/70 border border-white/50 rounded-full shadow-lg"
    >
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 group focus:outline-none">
          <div className="flex items-center gap-2 uppercase">
            <img 
              src="/images/logo.png" 
              alt="AK Logo" 
              className="h-8 md:h-12 w-auto object-contain" 
              loading="lazy"
            />
            <span className="text-xl md:text-2xl font-bold tracking-tighter text-charcoal opacity-90 group-hover:opacity-100 transition-opacity">Groups</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 focus:outline-none ${
                activeSection === link.id 
                  ? 'text-corporate-red' 
                  : 'text-gray-500 hover:text-charcoal'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-glow"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-corporate-red shadow-[0_0_8px_rgba(225,29,72,1)]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => handleNavClick('contact')}
            className="px-6 py-2 bg-corporate-red hover:bg-corporate-darkred text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(225,29,72,0.3)] hover:shadow-[0_0_20px_rgba(225,29,72,0.5)]"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-charcoal focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>

    {/* Mobile Menu Overlay */}
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ 
        opacity: isMobileMenuOpen ? 1 : 0,
        x: isMobileMenuOpen ? 0 : '100%' 
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-0 z-[40] bg-white pt-32 px-8 flex flex-col gap-8 md:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      {navLinks.map((link) => (
        <button
          key={link.id}
          onClick={() => handleNavClick(link.id)}
          className="text-3xl font-bold uppercase tracking-widest text-charcoal text-left border-b border-gray-100 pb-4"
        >
          {link.label}
        </button>
      ))}
      <button 
        onClick={() => handleNavClick('contact')}
        className="mt-4 px-8 py-4 bg-corporate-red text-white text-sm font-bold uppercase tracking-widest rounded-xl shadow-xl"
      >
        Get in Touch
      </button>
    </motion.div>
    </>
  );
};

export default Navbar;
