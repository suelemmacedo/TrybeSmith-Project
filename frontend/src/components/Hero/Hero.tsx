import './Hero.css';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <span className="hero-label">
          COLEÇÃO MEDIEVAL
        </span>

        <h1 id="hero-title">
          Peças que contam histórias.
        </h1>

        <p>
          Descubra artefatos inspirados na tradição medieval,
          onde cada detalhe carrega história e personalidade.
        </p>

        <a href="#produtos" className="hero-button">
          Explorar coleção
        </a>
      </div>

      <div className="hero-image">
        <img
          src="/images/hero-medieval.jpg"
          alt="Espada medieval artesanal"
        />
      </div>
    </section>
  );
}

export default Hero;
