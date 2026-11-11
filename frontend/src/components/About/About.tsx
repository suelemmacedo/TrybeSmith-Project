
import './About.css';

function About() {
  return (
    <section className="about-section" id="sobre">
      <div className="about-content">
        <span className="about-label">
          NOSSA HISTÓRIA
        </span>

        <h2>A tradição medieval em cada detalhe</h2>

        <p>
          Na TrybeSmith, a inspiração medieval ganha
          vida em uma coleção de espadas, armaduras
          e escudos.
        </p>

        <p>
          Nossa missão é conectar apaixonados pelo
          universo medieval a peças que celebram
          a história e a tradição dos cavaleiros.
        </p>
      </div>

      <div className="about-image">
        <img
          src="/images/about-medieval.jpg"
          alt="Oficina medieval com armaduras e espadas"
        />
      </div>
    </section>
  );
}

export default About;
