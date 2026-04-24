import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AllProducts = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = React.useState(categoryFilter || 'all');
  const [sortBy, setSortBy] = React.useState('newest');
  const [priceRange, setPriceRange] = React.useState([0, 200]);

  const filteredProducts = products.filter(p => {
    if (activeCategory !== 'all' && p.category !== activeCategory) return false;
    return p.price >= priceRange[0] && p.price <= priceRange[1];
  });

  const categories = ['all', 'tops', 'bottoms', 'outerwear'];

  return (
    <div className="container-minimal py-20 space-y-16">
      <header className="space-y-4">
        <div className="inline-block px-2 py-0.5 bg-brand-cherry text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
          Shop
        </div>
        <h1 className="text-6xl font-serif font-bold italic">Our Collection</h1>

        <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-black/5">
          <div className="flex gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-cherry text-brand-cream'
                    : 'bg-transparent border border-brand-cherry/10 hover:border-brand-cherry'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="text-xs font-bold uppercase tracking-widest">Sort by: {sortBy}</span>
              <ChevronDown className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-blue rounded-xl text-xs font-bold uppercase tracking-widest">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-20 text-center space-y-4">
          <p className="text-xl font-serif italic opacity-60">No pieces found matching your criteria...</p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setPriceRange([0, 200]);
            }}
            className="text-sm font-bold uppercase tracking-tighter underline underline-offset-4"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};
