
import { useState } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

import './styles/global.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Header onOpenCart={() => setIsCartOpen(true)} />

      <main id="inicio">
        <Hero />
        <ProductGrid />
        <About />
      </main>

      {isCartOpen && (
        <Cart onClose={() => setIsCartOpen(false)} />
      )}

      <Footer />
    </>
  );
}

export default App;
