import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2", specs: { location: "Cumbum HQ", duration: "18 Months", materials: "Reinforced Steel, Concrete" } },
  { id: 2, src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", specs: { location: "Madurai Hub", duration: "12 Months", materials: "Glass, Aluminum Panels" } },
  { id: 3, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", specs: { location: "Theni Plant", duration: "Ongoing", materials: "Heavy Machinery, Adblue" } },
  { id: 4, src: "https://images.unsplash.com/photo-1503375894314-47671041dd9e?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1", specs: { location: "Chennai Port", duration: "24 Months", materials: "Asphalt, Concrete" } },
  { id: 5, src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-2", specs: { location: "Coimbatore", duration: "6 Months", materials: "Structural Steel" } },
  { id: 6, src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", specs: { location: "Kochi Logistics", duration: "14 Months", materials: "Transport Fleet" } },
  { id: 7, src: "https://images.unsplash.com/photo-1532054944111-2eb265e315cb?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", specs: { location: "Salem Unit", duration: "8 Months", materials: "Raw Cement" } },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden" id="gallery">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-charcoal mb-4 uppercase">
          Visual <span className="text-corporate-red">Showcase</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto tracking-[0.1em] font-medium">
          A glimpse into the scale and precision of AK Groups operations.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-2 md:gap-4 h-auto md:h-[800px]">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            onClick={() => setSelectedImage(image)}
            className={`relative overflow-hidden group glass-panel p-1 md:p-2 cursor-pointer aspect-square md:aspect-auto ${image.span}`}
          >
            <div className="absolute inset-0 bg-corporate-red/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none rounded-[1rem] md:rounded-[1.5rem]" />
            <img 
              src={image.src} 
              alt={`Gallery Image ${image.id}`}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] rounded-[1rem] md:rounded-[1.5rem]"
              loading="lazy"
            />
            {/* Overlay hint */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center rounded-[1rem] md:rounded-[1.5rem]">
              <span className="text-white font-bold tracking-widest uppercase text-[8px] md:text-sm border border-white/50 px-2 py-1 md:px-4 md:py-2 hover:bg-white hover:text-black transition-colors">
                View
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Deep-Dive Modal Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-full max-h-[80vh] glass-panel flex flex-col md:flex-row overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-white/50 hover:bg-white backdrop-blur border border-gray-200 text-charcoal rounded-full transition-colors shadow-sm"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="md:w-2/3 h-64 md:h-full relative bg-gray-100">
                <img src={selectedImage.src} alt="Project detail" className="w-full h-full object-cover" />
              </div>

              <div className="md:w-1/3 p-8 md:p-12 flex flex-col bg-white/50 backdrop-blur-xl border-l border-gray-200 text-charcoal overflow-y-auto">
                <h3 className="text-3xl font-bold uppercase mb-2">Project <span className="text-corporate-red">Specs</span></h3>
                <div className="w-12 h-1 bg-corporate-red mb-8" />

                <div className="space-y-8 flex-grow">
                  <div>
                    <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Location</h4>
                    <p className="text-xl font-bold text-charcoal">{selectedImage.specs.location}</p>
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Duration</h4>
                    <p className="text-xl font-bold text-charcoal">{selectedImage.specs.duration}</p>
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Materials Used</h4>
                    <p className="text-xl font-bold text-charcoal">{selectedImage.specs.materials}</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <p className="text-sm text-gray-400 font-medium italic">
                    "Precision isn't just a metric; it's our promise."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
