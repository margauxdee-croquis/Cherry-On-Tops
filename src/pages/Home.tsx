import React from 'react';
import { motion } from 'motion/react';
import { products } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Leaf, Sparkles, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Top Banner */}
      <section className="w-full">
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/u/0/d/1MqakuT_Igg_zsp9FVJg25qZXuafl5FgZ"
            alt="Cherry on Tops Banner"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="container-minimal py-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-2 py-0.5 bg-brand-cherry text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
              Limited Edition
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.1] text-brand-cherry">
              Curated Second-Hand, Reimagined.
            </h1>
            <p className="text-brand-text text-lg opacity-80 mx-auto max-w-[500px]">
              A hand-picked collection of timeless vintage gems and contemporary pre-loved pieces for the conscious wardrobe.
            </p>
            <div className="pt-4">
              <Link
                to="/all"
                className="px-[35px] py-[15px] bg-brand-cherry text-white text-sm font-semibold uppercase tracking-widest rounded-[50px] inline-block hover:opacity-90 transition-opacity active:scale-95"
              >
                Shop the Drop
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Layout - Inspired by the bottom-section in design HTML */}
      <section className="bg-white border-y border-black/5 py-10">
        <div className="container-minimal grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Latest Drops (1fr translated to 3/12) */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-lg font-serif font-bold italic border-b border-brand-cherry pb-1 inline-block">Latest Drops</h3>
            <div className="flex gap-4">
              {products.slice(0, 2).map(p => (
                <div key={p.id} className="w-[100px] space-y-2">
                   <Link to="/all" className="block aspect-square bg-[#f0f0f0] rounded-lg overflow-hidden relative group">
                     <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                     <span className="absolute top-1 right-1 text-[8px] text-brand-cherry">❤</span>
                   </Link>
                   <p className="text-[10px] font-semibold truncate uppercase">{p.name}</p>
                   <p className="text-[9px] opacity-60">€{p.price}.00</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission (2fr translated to 5/12) */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-lg font-serif font-bold italic border-b border-brand-cherry pb-1 inline-block">Our Mission</h3>
            <div className="text-sm italic leading-relaxed text-brand-cherry opacity-90 p-4 border border-black/5 rounded-xl bg-brand-cream/10">
              "Every piece at Cherry on Tops is rescued and restored with love. We believe in fashion that tells a story without costing the Earth. Sustainable style is the sweetest cherry on top of a well-lived life."
            </div>
          </div>

          {/* Visual Search (1.5fr translated to 4/12) */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-lg font-serif font-bold italic border-b border-brand-cherry pb-1 inline-block">Visual Search</h3>
            <div className="bg-brand-blue/30 p-5 rounded-xl border border-dashed border-brand-cherry space-y-3">
              <p className="text-[11px] leading-relaxed">Have an inspiration image? Upload it and we'll find similar pre-loved pieces in our archive.</p>
              <Link to="/find-yours" className="px-3 py-1.5 border border-brand-cherry text-brand-cherry text-[10px] font-bold uppercase rounded hover:bg-brand-cherry hover:text-white transition-colors block text-center">
                Upload Inspiration
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Categories - Clean Minimalist style */}
      <section className="container-minimal space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Shop by category</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Tops', image: 'https://lh3.googleusercontent.com/u/0/d/1Yfl96O9mCUE4It7MeJPq2Jd00dPGNHQW', position: 'object-center' },
            { name: 'Bottoms', image: 'https://lh3.googleusercontent.com/u/0/d/1ZQc9_KKm5-1FI8luxAIjot7w6xfpwZmK', position: 'object-center' },
            { name: 'Outerwear', image: 'https://lh3.googleusercontent.com/u/0/d/1NS14g-bvjQ5h4TLVjIZbSb1b-r7QobVH', position: 'object-center' },
          ].map((cat) => (
            <Link key={cat.name} to={`/all?category=${cat.name.toLowerCase()}`} className="group space-y-4">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-brand-blue/10 border border-black/5">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className={`w-full h-full object-cover ${cat.position} transition-transform duration-700 group-hover:scale-105`}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-serif font-bold italic">{cat.name}</h3>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
