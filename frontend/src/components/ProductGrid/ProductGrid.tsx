import { useState } from 'react';
import { products } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

function ProductGrid() {
  const [productList] = useState(products);
  const [showProducts, setShowProducts] = useState(true);

  return (
    <section className="product-section" id="produtos">
      <div className="product-section-header">
        <span className="product-section-label">
          NOSSA COLEÇÃO
        </span>

        <h2>Artefatos medievais</h2>

        <p>
          Explore peças inspiradas na tradição medieval.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setShowProducts(!showProducts)}
      >
        {showProducts ? 'Ocultar produtos' : 'Mostrar produtos'}
      </button>

      {showProducts && (
        <div className="product-grid">
          {productList.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductGrid;
