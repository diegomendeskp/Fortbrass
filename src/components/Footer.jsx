import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <h2>Curso de Solda</h2>
          <h3>FortBrass</h3>
          <p>Formando profissionais qualificados para o mercado de trabalho.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Menu</h3>
          <Link to="/">Home</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/contato">Contato</Link>
        </div>

        {/* Contato */}
        <div className="footer-contact">
          <h3>Contato</h3>
          <p>
            📞 <a href="https://wa.me/5521995931872" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </p>
          <p>📧 contato@cursodesolda.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Curso de Solda. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
