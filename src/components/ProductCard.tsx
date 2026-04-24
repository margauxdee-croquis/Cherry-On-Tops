import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  return (
    <Link to={`/product/${product.id}`} className="block">
      <motion.div
        layout
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <div className="aspect-square overflow-hidden rounded-lg bg-[#f0f0f0] relative border border-black/5">
        <motion.img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-500 ease-out"
          animate={{ scale: isHovered ? 1.05 : 1 }}
        />
        
        {/* Wishlist Indicator */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-2 right-2 text-xs"
        >
          <span className={isWishlisted ? 'text-brand-cherry' : 'text-brand-text/30'}>❤</span>
        </button>

        {/* Quick View Button - Minimalism version */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-cherry/5 flex items-center justify-center pointer-events-none"
            >
              <span className="bg-white/90 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-cherry shadow-sm">
                View
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-3 space-y-0.5">
        <h3 className="text-[11px] font-semibold text-brand-text leading-tight uppercase tracking-tight truncate">{product.name}</h3>
        <p className="text-[10px] text-brand-text opacity-70 font-medium">€{product.price}.00</p>
      </div>
    </motion.div>
    </Link>
  );
};
