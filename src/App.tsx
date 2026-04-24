import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AllProducts } from './pages/AllProducts';
import { Inspirations } from './pages/Inspirations';
import { FindYours } from './pages/FindYours';
import { ProductDetail } from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all" element={<AllProducts />} />
              <Route path="/inspirations" element={<Inspirations />} />
              <Route path="/find-yours" element={<FindYours />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
