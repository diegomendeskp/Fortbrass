import { Link } from "react-router-dom";

function CourseCard({ id, title, img }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <Link to={`/cursos/${id}`} className="btn">Saiba Mais</Link>
    </div>
  );
}

export default CourseCard;
