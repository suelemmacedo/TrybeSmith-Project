import { useState } from 'react';
import { products } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

function ProductGrid() {
  // Estados do componente
  const [showProducts, setShowProducts] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  // Categorias disponíveis
  const categories = [
    'Todas',
    'Armas',
    'Armaduras',
    'Defesa',
    'Artefatos',
    'Acessórios',
  ];

  // Filtra os produtos por categoria e nome
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'Todas'
      || product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="product-section" id="produtos">

      {/* Cabeçalho */}
      <div className="product-section-header">
        <span className="product-section-label">
          NOSSA COLEÇÃO
        </span>

        <h2>Artefatos medievais</h2>

        <p>
          Explore peças inspiradas na tradição medieval.
        </p>
      </div>

      {/* Botão mostrar/ocultar produtos */}
      <button
        type="button"
        className="toggle-products"
        aria-expanded={showProducts}
        aria-controls="products-list"
        onClick={() => setShowProducts(!showProducts)}
      >
        {showProducts ? 'Ocultar produtos' : 'Mostrar produtos'}
      </button>

      {/* Filtros por categoria */}
      <div className="product-filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={selectedCategory === category ? 'active' : ''}
            aria-pressed={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Campo de pesquisa */}
      <div className="product-search">
        <input
          type="search"
          aria-label="Buscar produtos pelo nome"
          placeholder="Buscar artefato medieval..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      {/* Contador de produtos */}
      <p className="product-count" aria-live="polite">
        {filteredProducts.length}
        {' '}
        {filteredProducts.length === 1
          ? 'produto encontrado'
          : 'produtos encontrados'}
      </p>

      {/* Listagem de produtos */}
      <div
        className="product-grid"
        id="products-list"
        hidden={!showProducts}
      >
        {filteredProducts.length === 0 ? (
          <p className="no-products">
            Nenhum artefato encontrado.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
            />
          ))
        )}
      </div>

    </section>
  );
}

export default ProductGrid;
