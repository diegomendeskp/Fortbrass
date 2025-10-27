import Carousel from "../components/Carousel";
import CourseCard from "../components/CourseCard";

const courses = [
  { id: "mig-mag-cobreado", title: "MIG/MAG Cobreado", img: "/images/migmag.jpg" },
  { id: "mig-mag-arame", title: "MIG/MAG Arame Tubular", img: "/images/migmag_arame1.jpg" },
  { id: "tig-chaparia", title: "TIG Chaparia", img: "/images/tig1.jpg" },
  { id: "tig-tubulacao", title: "TIG Tubulação", img: "/images/tig2.jpg" },
  { id: "eletrodo-revestido", title: "Eletrodo Revestido", img: "/images/eletrodo1.jpg" },
  { id: "eletrodo-tubulacao", title: "Eletrodo Tubulação", img: "/images/eletrodo_tubo1.jpg" }
];

function Home() {
  return (
    <div>
      <Carousel />
      <section className="courses">
        <h2>Nossos Cursos</h2>
        <div className="grid">
          {courses.map((c) => (
            <CourseCard key={c.id} {...c} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
