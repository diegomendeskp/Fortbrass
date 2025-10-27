import { Link } from "react-router-dom";

function Courses() {
  return (
    <div className="courses-page">
      <h1>Nossos Cursos de Solda</h1>
      <p>
        Explore os cursos disponíveis e descubra o processo de soldagem ideal para a sua carreira.
        Clique em um curso para ver os detalhes completos, descrição e áreas de atuação.
      </p>

      <div className="courses-grid">
        <div className="card">
          <img src="/images/migmag1.jpg" alt="MIG/MAG Cobreado" />
          <h2>MIG/MAG Cobreado</h2>
          <Link to="/cursos/mig-mag-cobreado" className="btn">
            Ver Detalhes
          </Link>
        </div>

        <div className="card">
          <img src="/images/migmag_arame1.jpg" alt="MIG/MAG Arame Tubular" />
          <h2>MIG/MAG Arame Tubular</h2>
          <Link to="/cursos/mig-mag-arame" className="btn">
            Ver Detalhes
          </Link>
        </div>

        <div className="card">
          <img src="/images/tig_chaparia1.jpg" alt="TIG Chaparia" />
          <h2>TIG Chaparia</h2>
          <Link to="/cursos/tig-chaparia" className="btn">
            Ver Detalhes
          </Link>
        </div>

        <div className="card">
          <img src="/images/tig_tubulacao1.jpg" alt="TIG Tubulação" />
          <h2>TIG Tubulação</h2>
          <Link to="/cursos/tig-tubulacao" className="btn">
            Ver Detalhes
          </Link>
        </div>

        <div className="card">
          <img src="/images/eletrodo1.jpg" alt="Eletrodo Revestido" />
          <h2>Eletrodo Revestido</h2>
          <Link to="/cursos/eletrodo-revestido" className="btn">
            Ver Detalhes
          </Link>
        </div>

        <div className="card">
          <img src="/images/eletrodo_tubo1.jpg" alt="Eletrodo Revestido Tubulação" />
          <h2>Eletrodo Revestido Tubulação</h2>
          <Link to="/cursos/eletrodo-tubulacao" className="btn">
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Courses;
