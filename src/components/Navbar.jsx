import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
            <span className="fort">FORT</span>
  <span className="brass">BRASS</span>
        </Link>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/cursos" onClick={() => setIsOpen(false)}>Cursos</Link>
          <Link to="/contato" onClick={() => setIsOpen(false)}>Contato</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? "line open" : "line"}></span>
          <span className={isOpen ? "line open" : "line"}></span>
          <span className={isOpen ? "line open" : "line"}></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
