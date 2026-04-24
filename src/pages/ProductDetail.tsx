import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, ShoppingBag, Star, ShieldCheck, Truck } from 'lucide-react';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container-minimal py-40 text-center">
        <h1 className="text-4xl font-serif italic mb-8">Article non trouvé</h1>
        <button 
          onClick={() => navigate('/all')}
          className="text-brand-cherry font-bold underline underline-offset-4"
        >
          Retourner au catalogue
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    // Optional: Show a toast or feedback
  };

  return (
    <div className="container-minimal py-20">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity mb-12"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-[4/5] rounded-3xl overflow-hidden bg-brand-blue/10 border border-black/5"
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <header className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 bg-brand-cherry/10 text-brand-cherry rounded-full">
                {product.category}
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">
                {product.condition}
              </span>
            </div>
            <h1 className="text-5xl font-serif font-bold italic leading-tight">{product.name}</h1>
            <p className="text-3xl font-light text-brand-cherry">€{product.price}</p>
          </header>

          <div className="prose prose-brand opacity-80">
            <p className="text-lg leading-relaxed">{product.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 py-8 border-y border-black/5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Size</p>
              <p className="font-serif italic text-lg">{product.size}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Brand</p>
              <p className="font-serif italic text-lg">{product.brand}</p>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full py-5 bg-brand-cherry text-brand-cream rounded-full font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:opacity-90 transition-opacity shadow-minimal"
          >
            <ShoppingBag className="w-5 h-5" />
            Add to Bag
          </button>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3 text-xs opacity-60">
              <Truck className="w-4 h-4" />
              <span>Free shipping on orders over €150</span>
            </div>
            <div className="flex items-center gap-3 text-xs opacity-60">
              <ShieldCheck className="w-4 h-4" />
              <span>Authentic vintage guaranteed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
