import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import Ecosystem from '../components/Ecosystem';
import Legacy from './Legacy';
import Gallery from '../components/Gallery';
import Contact from './Contact';
import Footer from '../components/Footer';
import Leadership from '../components/Leadership';
import MapSection from '../components/MapSection';
import CoreValues from '../components/CoreValues';
import Career from '../components/Career';
import CSR from '../components/CSR';
import LiveTicker from '../components/Widgets/LiveTicker';
import VerticalMarquee from '../components/Widgets/VerticalMarquee';

const slides = [
  {
    id: 1,
    title: "AK Adblue",
    subtitle: "Premium Diesel Exhaust Fluid Solutions",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=2083&auto=format&fit=crop",
    links: [{ name: "Visit Website", url: "https://adblue.akcumbum.com/" }]
  },
  {
    id: 2,
    title: "AK Transports",
    subtitle: "Heavy Logistics & Fleet Excellence",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    links: [{ name: "Visit Website", url: "https://transport.akcumbum.com/" }]
  },
  {
    id: 3,
    title: "AK Constructions",
    subtitle: "Building the Future with Precision",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    links: [{ name: "Visit Website", url: "https://construction.akcumbum.com/" }]
  },
  {
    id: 4,
    title: "AK Materials",
    subtitle: "High-Quality Raw Supply Chain",
    image: "https://images.unsplash.com/photo-1503375894314-47671041dd9e?q=80&w=2070&auto=format&fit=crop",
    links: [{ name: "Visit Website", url: "https://material.akcumbum.com/" }]
  },
  {
    id: 5,
    title: "AK Motors",
    subtitle: "Automotive Mastery & Service Hub",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
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
        <section id="home" className="relative w-full h-[70vh] rounded-[2rem] flex flex-col items-center justify-center overflow-hidden bg-black shadow-2xl">
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
        <div className="relative z-20 w-full max-w-7xl px-6 md:px-12 flex flex-col items-start justify-center h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                {/* Glass Shine Effect */}
                <div className="absolute -inset-x-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg] group-hover:left-full transition-all duration-1000 ease-in-out" />
                
                {/* Removed Legacy Check, all are standard banners now */}
                <div className="text-left">
                  <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mb-4"
                    >
                      <span className="px-4 py-1.5 bg-corporate-red text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-[0_0_20px_rgba(225,29,72,0.4)]">
                        Ecosystem Partners
                      </span>
                    </motion.div>
                    <motion.h2 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight uppercase"
                    >
                      {slides[currentSlide].title}
                    </motion.h2>
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg md:text-xl text-gray-300 mb-8 font-light tracking-wide"
                    >
                      {slides[currentSlide].subtitle}
                    </motion.p>
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap gap-4"
                    >
                      {slides[currentSlide].links?.map((link, i) => (
                        <a 
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-white/10 hover:bg-corporate-red border border-white/20 hover:border-corporate-red text-white rounded-full transition-all duration-300 flex items-center gap-2 group/btn font-semibold text-sm backdrop-blur-md"
                        >
                          {link.name}
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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

        {/* Interactive Map */}
        <MapSection />

        {/* The Pillars */}
        <CoreValues />

        {/* Join the Momentum */}
        <Career />

        {/* Group CSR */}
        <CSR />

        {/* Global Stats */}
        <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-3 gap-2 md:gap-12 text-center">
              <StatItem number="5" label="Core Divisions" delay={0.2} />
              <StatItem number="1000+" label="Global Partners" delay={0.4} />
              <StatItem number="1" label="Relentless Vision" delay={0.6} />
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <div id="legacy">
          <Legacy />
        </div>

        {/* Gallery Section */}
        <div id="gallery">
          <Gallery />
        </div>

        {/* Contact Section */}
        <div id="contact">
          <Contact />
        </div>

        {/* Fast-moving Live Ticker */}
        <LiveTicker />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
};

const StatItem = ({ number, label, delay }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className="flex flex-col items-center justify-center p-4 md:p-10 glass-panel glass-panel-hover relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-corporate-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] md:rounded-[2rem]" />
      <h4 className="text-3xl md:text-8xl font-bold text-charcoal mb-1 md:mb-4 group-hover:text-corporate-red transition-colors duration-500">{number}</h4>
      <p className="text-[8px] md:text-sm font-bold text-gray-500 uppercase tracking-[0.1em] md:tracking-[0.2em]">{label}</p>
    </motion.div>
  );
};

export default Home;
