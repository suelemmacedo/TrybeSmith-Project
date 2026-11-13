import { useEffect, useState } from 'react';
import type { Product } from '../../types/Product';
import { useCart } from '../../context/useCart';
import './ProductCard.css';

type ProductCardProps = Product;

function ProductCard({
  id,
  name,
  category,
  price,
  image,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const [isAdded, setIsAdded] = useState(false);

  const product: Product = {
    id,
    name,
    category,
    price,
    image,
  };

  function handleAddToCart() {
    addToCart(product);
    setIsAdded(true);
  }

  useEffect(() => {
    if (!isAdded) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsAdded(false);
    }, 2000);

    return () => window.clearTimeout(timeout);
  }, [isAdded]);

  return (
    <article className="product-card">
      <img
        src={image}
        alt={name}
        className="product-card-image"
      />

      <div className="product-card-content">
        <span className="product-card-category">
          {category}
        </span>

        <h3>{name}</h3>

        <p>
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>

        <button
          type="button"
          className={`product-add-button ${isAdded ? 'added' : ''}`}
          onClick={handleAddToCart}
        >
          {isAdded ? (
            <>
              <span aria-hidden="true">✓</span>
              <span>Adicionado!</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2 2h2l2.4 11.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L22 6H5" />
              </svg>

              <span>Adicionar ao carrinho</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
