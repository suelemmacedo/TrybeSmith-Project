import './Header.css';

function Header() {
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
      </div>
    </header>
  );
}

export default Header;
