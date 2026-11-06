import type { Product } from '../../types/Product';
import './ProductCard.css';

type ProductCardProps = Omit<Product, 'id'>;

function ProductCard({
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
      </div>
    </article>
  );
}

export default ProductCard;
