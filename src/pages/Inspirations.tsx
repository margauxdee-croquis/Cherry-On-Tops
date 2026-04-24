import React from 'react';
import { moodboards, products } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

export const Inspirations = () => {
  const [selectedMoodboard, setSelectedMoodboard] = React.useState<typeof moodboards[0] | null>(null);

  const relatedProducts = selectedMoodboard 
    ? products.filter(p => selectedMoodboard.relatedProductIds.includes(p.id))
    : [];

  return (
    <div className="container-minimal py-20 space-y-16">
      <header className="space-y-4 max-w-2xl">
        <div className="inline-block px-2 py-0.5 bg-brand-cherry text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
          Journal
        </div>
        <h1 className="text-6xl font-serif font-bold italic leading-tight">Inspirations</h1>
        <p className="pt-4 text-lg opacity-80 leading-relaxed text-brand-text">
          The Cherry on Tops digital magazine. A curated gallery of moods, silhouettes, and styling stories to ignite your next vintage find.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {moodboards.map((mood) => (
          <motion.div
            key={mood.id}
            layoutId={mood.id}
            onClick={() => setSelectedMoodboard(mood)}
            className="group cursor-pointer space-y-6"
          >
            <div className="grid grid-cols-2 gap-4 aspect-square">
              <div className="rounded-[2rem] overflow-hidden bg-brand-blue/20">
                <img src={mood.images[0]} alt={mood.title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="rounded-[2rem] overflow-hidden bg-brand-blue/20">
                  <img src={mood.images[1]} alt={mood.title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="rounded-[2rem] overflow-hidden bg-brand-blue/20">
                  <img src={mood.images[2]} alt={mood.title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMoodboard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-cream flex flex-col overflow-y-auto"
          >
            <button
              onClick={() => setSelectedMoodboard(null)}
              className="absolute top-8 right-8 p-3 rounded-full bg-brand-cherry text-brand-cream hover:scale-110 transition-transform"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-5xl mx-auto px-4 py-24 space-y-24">
              <header className="space-y-6 text-center">
                <h2 className="text-7xl font-serif font-bold italic">{selectedMoodboard.title}</h2>
                <p className="text-xl max-w-2xl mx-auto opacity-80 leading-relaxed italic">{selectedMoodboard.description}</p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {selectedMoodboard.images.map((img, i) => (
                  <div key={i} className={`rounded-[3rem] overflow-hidden shadow-2xl ${i === 1 ? 'md:translate-y-12' : ''}`}>
                    <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>

              <section className="space-y-12 pt-24 border-t border-brand-cherry/10">
                <div className="space-y-2">
                  <h4 className="text-2xl font-serif font-bold italic">Get the Look</h4>
                  <p className="text-sm opacity-60">Curated pieces from our collection that match this vibe.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {relatedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
