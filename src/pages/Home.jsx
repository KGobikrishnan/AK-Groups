import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import Ecosystem from '../components/Ecosystem';
import Gallery from '../components/Gallery';
import Contact from './Contact';
import Footer from '../components/Footer';
import Leadership from '../components/Leadership';
import CoreValues from '../components/CoreValues';
import Career from '../components/Career';
import LiveTicker from '../components/Widgets/LiveTicker';
import VerticalMarquee from '../components/Widgets/VerticalMarquee';

const slides = [
  {
    id: 1,
    title: "AK Adblue",
    subtitle: "Premium Diesel Exhaust Fluid Solutions",
    image: "/images/AK-Adblue.png",
    links: [{ name: "Visit Website", url: "https://adblue.akcumbum.com/" }]
  },
  {
    id: 2,
    title: "AK Transports",
    subtitle: "Heavy Logistics & Fleet Excellence",
    image: "/images/AK-transports.png",
    links: [{ name: "Visit Website", url: "https://transport.akcumbum.com/" }]
  },
  {
    id: 3,
    title: "AK Constructions",
    subtitle: "Building the Future with Precision",
    image: "/images/AK-construction.png",
    links: [{ name: "Visit Website", url: "https://construction.akcumbum.com/" }]
  },
  {
    id: 4,
    title: "AK Materials",
    subtitle: "High-Quality Raw Supply Chain",
    image: "/images/AK-material.png",
    links: [{ name: "Visit Website", url: "https://material.akcumbum.com/" }]
  },
  {
    id: 5,
    title: "AK Motors",
    subtitle: "Automotive Mastery & Service Hub",
    image: "/images/AK-motors.png",
    links: [{ name: "Visit Website", url: "https://motors.akcumbum.com/" }]
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="w-full min-h-screen bg-white font-sans text-charcoal">
      {/* Boxed Hero Section */}
      <div className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <section id="home" className="relative w-full aspect-[16/9] md:h-[70vh] rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center overflow-hidden bg-black shadow-2xl">
          <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
            
            {/* Abstract Glows */}
            <div className="absolute inset-0 z-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-corporate-red/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse-slow"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-corporate-red/10 rounded-full mix-blend-screen filter blur-[100px]"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Liquid Glass UI Content */}
        <div className="relative z-20 w-full max-w-7xl px-4 md:px-12 flex flex-col items-start justify-end md:justify-center h-full pb-16 md:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-4 md:p-12 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl relative overflow-hidden group">
                {/* Glass Shine Effect */}
                <div className="absolute -inset-x-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg] group-hover:left-full transition-all duration-1000 ease-in-out" />
                
                <div className="text-left">
                  <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mb-2 md:mb-4"
                    >
                      <span className="px-3 py-1 md:px-4 md:py-1.5 bg-corporate-red text-white text-[8px] md:text-xs font-bold tracking-widest uppercase rounded-full shadow-[0_0_20px_rgba(225,29,72,0.4)]">
                        Ecosystem Partners
                      </span>
                    </motion.div>
                    <motion.h2 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl md:text-6xl font-bold text-white mb-2 md:mb-4 leading-tight uppercase"
                    >
                      {slides[currentSlide].title}
                    </motion.h2>
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-xs md:text-xl text-gray-300 mb-4 md:mb-8 font-light tracking-wide max-w-xs md:max-w-none"
                    >
                      {slides[currentSlide].subtitle}
                    </motion.p>
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap gap-2 md:gap-4"
                    >
                      {slides[currentSlide].links?.map((link, i) => (
                        <a 
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 md:px-6 md:py-3 bg-white/10 hover:bg-corporate-red border border-white/20 hover:border-corporate-red text-white rounded-full transition-all duration-300 flex items-center gap-2 group/btn font-semibold text-[10px] md:text-sm backdrop-blur-md"
                        >
                          {link.name}
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      ))}
                    </motion.div>
                  </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-12 right-12 z-30 flex flex-col gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`group relative flex items-center justify-end gap-4 transition-all duration-300`}
            >
              <span className={`text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${currentSlide === index ? 'text-corporate-red' : 'text-white/40 opacity-0 group-hover:opacity-100'}`}>
                Slide 0{index + 1}
              </span>
              <div className={`h-[2px] transition-all duration-500 ${currentSlide === index ? 'w-12 bg-corporate-red shadow-[0_0_10px_rgba(225,29,72,1)]' : 'w-4 bg-white/30 group-hover:w-8 group-hover:bg-white'}`} />
            </button>
          ))}
        </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-30"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">Explore</span>
            <motion.div className="w-[2px] h-8 bg-white/20 relative overflow-hidden">
              <motion.div 
                animate={{ y: [-32, 32] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                className="absolute top-0 w-full h-1/2 bg-corporate-red shadow-[0_0_10px_rgba(225,29,72,0.8)]"
              />
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        {/* Ecosystem Section */}
        <Ecosystem />

        {/* News Marquee */}
        <VerticalMarquee />

        {/* CEO Vision */}
        <Leadership />

        {/* The Pillars */}
        <CoreValues />

        {/* Join the Momentum */}
        <Career />

        {/* Gallery Section */}
        <div id="gallery">
          <Gallery />
        </div>

        {/* Contact Section */}
        <div id="contact">
          <Contact />
        </div>

        {/* Google Map Section */}
        <section className="w-full h-[300px] md:h-[500px] relative overflow-hidden bg-gray-100">
            <a 
                href="https://maps.app.goo.gl/Nn5WtEA1pzCAfvVP6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full relative group"
            >
                <div className="absolute inset-0 bg-corporate-red/5 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-30" />
                
                {/* Map Overlay UI */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="glass-panel p-6 md:p-8 text-center transform group-hover:scale-110 transition-transform duration-500">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-corporate-red rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-[0_0_20px_rgba(225,29,72,0.5)]">
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-charcoal">Open in Google Maps</h3>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2">Cumbum Command Center</p>
                    </div>
                </div>
                
                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] z-0" />
            </a>
        </section>

        {/* Fast-moving Live Ticker */}
        <LiveTicker />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
