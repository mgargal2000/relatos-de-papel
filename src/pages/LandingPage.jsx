import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Librería online</p>
        <h1>Relatos de Papel</h1>
        <p>
          Descubre historias únicas, encuentra tu próxima lectura y disfruta de
          una experiencia sencilla, visual y moderna.
        </p>

        <div className="hero-actions">
          <Link to="/libros" className="button button-primary">
            Ver catálogo
          </Link>

          <Link to="/login" className="button button-secondary">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;