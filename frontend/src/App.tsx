import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './styles/global.css';
import ProductGrid from './components/ProductGrid/ProductGrid';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />

      <main id="inicio">
        <Hero />
        <ProductGrid />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;

