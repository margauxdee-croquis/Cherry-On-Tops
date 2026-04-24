import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const navLinks = [
    { name: 'ALL', path: '/all' },
    { name: 'Inspirations', path: '/inspirations' },
    { name: 'Find Yours', path: '/find-yours' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-blue h-[70px] border-b border-black/5">
      <nav className="container-minimal h-full flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold italic text-brand-cherry">
          Cherry on Tops
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-[30px]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[13px] font-semibold uppercase tracking-wider transition-opacity hover:opacity-60 ${
                location.pathname === link.path ? 'text-brand-cherry' : 'text-brand-text'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <button className="p-2 hover:opacity-60 transition-opacity">
            <Search className="w-5 h-5 text-brand-text" />
          </button>
          <button className="p-2 hover:opacity-60 transition-opacity relative">
            <ShoppingBag className="w-5 h-5 text-brand-text" />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 bg-brand-cherry text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-brand-text" /> : <Menu className="w-6 h-6 text-brand-text" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-blue border-b border-brand-cherry/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
