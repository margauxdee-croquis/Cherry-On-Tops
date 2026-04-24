import React from 'react';
import { Link } from 'react-router-dom';
import { Cherry, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-blue/30 border-t border-brand-cherry/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 text-2xl font-serif font-bold tracking-tighter text-brand-cherry">
            <Cherry className="w-8 h-8" />
            <span>Cherry on Tops</span>
          </Link>
          <p className="text-sm opacity-80 leading-relaxed">
            Curated second-hand fashion, reimagined for the modern aesthetic. Sustainable, stylish, and accessible.
          </p>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            <Twitter className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            <Facebook className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
          </div>
        </div>

        <div>
          <h4 className="font-serif font-bold mb-6 italic">Shop</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><Link to="/all" className="hover:underline">All Products</Link></li>
            <li><Link to="/all?category=tops" className="hover:underline">Tops</Link></li>
            <li><Link to="/all?category=bottoms" className="hover:underline">Bottoms</Link></li>
            <li><Link to="/all?category=outerwear" className="hover:underline">Outerwear</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold mb-6 italic">Inspiration</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><Link to="/inspirations" className="hover:underline">Moodboards</Link></li>
            <li><Link to="/find-yours" className="hover:underline">Find Yours</Link></li>
            <li>
              <button 
                onClick={() => {
                  const klaviyo = (window as any).klaviyo;
                  if (klaviyo && typeof klaviyo.showForm === 'function') {
                    klaviyo.showForm('SBGdqq');
                  } else {
                    console.log('Klaviyo not loaded yet or form ID incorrect');
                  }
                }}
                className="hover:underline cursor-pointer text-left w-full"
              >
                Newsletter
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold mb-6 italic">Customer Care</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 border-t border-brand-cherry/5 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
          © 2026 Cherry on Tops • Sustainable Fashion for Everyone
        </p>
      </div>
    </footer>
  );
};
