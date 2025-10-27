import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

import MigMagCobreado from "./pages/MigMagCobreado";
import MigMagArame from "./pages/MigMagArame";
import TigChaparia from "./pages/TigChaparia";
import TigTubulacao from "./pages/TigTubulacao";
import EletrodoRevestido from "./pages/EletrodoRevestido";
import EletrodoTubulacao from "./pages/EletrodoTubulacao";

import "./styles.css";
import "./course.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/cursos/mig-mag-cobreado" element={<MigMagCobreado />} />
        <Route path="/cursos/mig-mag-arame" element={<MigMagArame />} />
        <Route path="/cursos/tig-chaparia" element={<TigChaparia />} />
        <Route path="/cursos/tig-tubulacao" element={<TigTubulacao />} />
        <Route path="/cursos/eletrodo-revestido" element={<EletrodoRevestido />} />
        <Route path="/cursos/eletrodo-tubulacao" element={<EletrodoTubulacao />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />

      {/* Botão fixo WhatsApp */}
      <a
        href="https://wa.me/5521995931872"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        WhatsApp
      </a>
    </Router>
  );
}

export default App;
