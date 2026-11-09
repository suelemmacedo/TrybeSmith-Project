
import type { Product } from '../../types/Product';
import './ProductCard.css';

type ProductCardProps = Product;

function ProductCard({
  id,
  name,
  category,
  price,
  image,
}: ProductCardProps) {
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
          className="add-to-cart"
          onClick={() => console.log('Produto selecionado:', id)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
