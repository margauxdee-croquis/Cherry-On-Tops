import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, Search, Sparkles, Image as ImageIcon, Loader2 } from 'lucide-react';
import { analyzeStyleImage } from '../services/geminiService';
import { products } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';

export const FindYours = () => {
  const [image, setImage] = React.useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const [analysis, setAnalysis] = React.useState<string | null>(null);
  const [suggestions, setSuggestions] = React.useState<typeof products>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImage(base64);
        setAnalysis(null);
        setSuggestions([]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!image) return;
    
    setIsAnalyzing(true);
    const base64Content = image.split(',')[1];
    const result = await analyzeStyleImage(base64Content);
    
    setAnalysis(result);
    // Mock simulation of finding products based on analysis
    setSuggestions(products.slice(0, 3));
    setIsAnalyzing(false);
  };

  return (
    <div className="container-minimal py-20 space-y-16">
      <header className="space-y-4 max-w-2xl">
        <div className="inline-block px-2 py-0.5 bg-brand-cherry text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
          AI Stylist
        </div>
        <h1 className="text-6xl font-serif font-bold italic leading-tight">Find Yours</h1>
        <p className="pt-4 text-lg opacity-80 leading-relaxed text-brand-text">
          Upload an inspiration photo—from Pinterest, street style, or your own sketches—and our AI stylist will help you find similar pre-loved gems in our collection.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div 
            className={`relative aspect-square rounded-2xl border-2 border-dashed border-brand-cherry/20 bg-brand-blue/10 flex items-center justify-center overflow-hidden transition-colors ${!image ? 'hover:bg-brand-blue/20 cursor-pointer' : ''}`}
            onClick={() => !image && document.getElementById('image-upload')?.click()}
          >
            {image ? (
              <>
                <img src={image} alt="Upload" className="w-full h-full object-cover" />
                <button 
                  onClick={(e) => { e.stopPropagation(); setImage(null); }}
                  className="absolute top-4 right-4 p-1.5 bg-brand-cherry text-brand-cream rounded shadow-sm"
                >
                  <Search className="w-4 h-4 rotate-45" />
                </button>
              </>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto shadow-sm border border-black/5">
                  <Upload className="w-6 h-6 opacity-40 text-brand-cherry" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif font-bold italic text-lg text-brand-cherry">Upload Inspiration</p>
                  <p className="text-[10px] opacity-40 uppercase tracking-widest font-bold">Standard Formats Only</p>
                </div>
              </div>
            )}
            <input 
              id="image-upload" 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleImageUpload} 
            />
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!image || isAnalyzing}
            className={`w-full py-4 rounded-full font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
              image && !isAnalyzing
                ? 'bg-brand-cherry text-brand-cream hover:opacity-90 shadow-minimal'
                : 'bg-brand-cherry/10 text-brand-cherry/30 cursor-not-allowed'
            }`}
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Analyzing Style...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Find Similar Pieces
              </>
            )}
          </button>
        </div>

        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {!analysis && !isAnalyzing ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-10 border border-brand-cherry/10 rounded-2xl bg-brand-blue/30 border-dashed space-y-6 text-center"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto border border-black/5">
                  <ImageIcon className="w-5 h-5 text-brand-cherry" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-serif font-bold italic">AI Analysis Engine</h4>
                  <p className="text-[11px] opacity-80 leading-relaxed max-w-xs mx-auto">
                    Have an inspiration image? Upload it and we'll find similar pre-loved pieces in our archive.
                  </p>
                </div>
              </motion.div>
            ) : isAnalyzing ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="h-3 bg-brand-cherry/5 rounded-full w-3/4 animate-pulse"></div>
                <div className="h-3 bg-brand-cherry/5 rounded-full w-1/2 animate-pulse"></div>
                <div className="h-40 bg-brand-cherry/5 rounded-2xl w-full animate-pulse"></div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                <section className="space-y-4">
                  <h3 className="text-lg font-serif font-bold italic border-b border-brand-cherry pb-1 inline-block">Stylist's Breakdown</h3>
                  <div className="text-sm opacity-90 leading-relaxed italic whitespace-pre-wrap p-6 bg-brand-blue/30 rounded-xl border border-dashed border-brand-cherry">
                    {analysis}
                  </div>
                </section>

                <section className="space-y-8">
                  <h4 className="text-lg font-serif font-bold italic border-b border-brand-cherry pb-1 inline-block">Top Matches</h4>
                  <div className="grid grid-cols-2 gap-6">
                    {suggestions.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
