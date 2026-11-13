import { useCart } from '../../context/useCart';
import './Header.css';

type HeaderProps = {
  onOpenCart: () => void;
};

function Header({ onOpenCart }: HeaderProps) {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#inicio" className="brand">
          <span className="brand-symbol">✦</span>
          TrybeSmith
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#produtos">Produtos</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <button
          type="button"
          className="header-cart"
          onClick={onOpenCart}
          aria-label={`Abrir carrinho com ${totalItems} itens`}
        >
          <span className="cart-icon" aria-hidden="true">
            🛒
          </span>

          <span className="cart-count">
            {totalItems}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;


