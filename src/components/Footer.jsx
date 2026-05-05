function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-section">
            <h3>Relatos de Papel</h3>
            <p>Librería online - Maestría en Ingeniería del Software - UNIR</p>
          </div>

          <div className="footer-section">
            <h3>Información</h3>
            <p>Versión 1.0.0</p>
            <p>&copy; {currentYear} Relatos de Papel</p>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-section">
            <h3>Equipo de desarrollo</h3>
            <ul className="footer-team">
              <li>Violeth Valmont Azahar</li>
              <li>Hernán Eugenio Guajardo Celis</li>
              <li>Evelyn Adriana Maldonado Reyes</li>
              <li>Manuel García Galante</li>
              <li>Matias Ariel Macrino</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
