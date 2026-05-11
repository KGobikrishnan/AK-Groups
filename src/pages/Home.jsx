import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
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

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-corporate-red/10 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gray-200 rounded-full mix-blend-multiply filter blur-[100px]"></div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="z-10 text-center px-4"
        >
          <motion.div
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[12rem] font-display font-bold tracking-tighter text-charcoal leading-none uppercase">
              THE AK <span className="text-corporate-red">LEGACY.</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-lg md:text-2xl text-gray-500 font-sans tracking-[0.2em] uppercase font-bold"
          >
            Power <span className="text-corporate-red mx-2">/</span> Precision <span className="text-corporate-red mx-2">/</span> Performance
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-10"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">Scroll Down</span>
          <motion.div
            className="w-[2px] h-16 bg-gray-200 relative overflow-hidden"
          >
            <motion.div 
              animate={{ y: [-64, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              className="absolute top-0 w-full h-1/2 bg-corporate-red shadow-[0_0_10px_rgba(225,29,72,0.5)]"
            />
          </motion.div>
        </motion.div>
      </section>

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
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
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
      className="flex flex-col items-center justify-center p-10 rounded-none border border-gray-200 bg-white shadow-sm relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-corporate-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <h4 className="text-6xl md:text-8xl font-display font-bold text-charcoal mb-4 group-hover:text-corporate-red transition-colors duration-500">{number}</h4>
      <p className="text-sm font-bold text-gray-500 uppercase tracking-[0.2em]">{label}</p>
    </motion.div>
  );
};

export default Home;
