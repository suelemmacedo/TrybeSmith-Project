import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './styles/global.css';
import ProductGrid from './components/ProductGrid/ProductGrid';

function App() {
  return (
    <>
      <Header />

      <main id="inicio">
        <Hero />
        <ProductGrid />
      </main>
    </>
  );
}

export default App;

