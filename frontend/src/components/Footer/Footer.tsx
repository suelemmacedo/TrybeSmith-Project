import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>⚔ TrybeSmith</h2>

          <p>
            Artefatos inspirados na tradição medieval.
            Uma experiência que une história,
            estilo e tecnologia.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Navegação do rodapé">
          <h3>Navegação</h3>

          <a href="#inicio">Início</a>
          <a href="#produtos">Produtos</a>
          <a href="#sobre">Sobre</a>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} TrybeSmith.
          Projeto de portfólio para fins educacionais.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
