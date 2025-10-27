/*
import { useParams } from "react-router-dom";

const courseData = {
  "mig-mag-cobreado": {
    title: "MIG/MAG Cobreado",
    desc: "A soldagem MIG/MAG cobreada é um dos processos mais versáteis e produtivos da indústria. Utiliza gás de proteção e arame sólido cobreado, garantindo cordões limpos, alta taxa de deposição e excelente acabamento superficial. É ideal para chapas finas e médias, oferecendo velocidade e qualidade.",
    areas: [
      "Indústria automotiva",
      "Estruturas metálicas leves",
      "Metalurgia e caldeiraria",
      "Manutenção industrial"
    ]
  },
  "mig-mag-arame": {
    title: "MIG/MAG Arame Tubular",
    desc: "Esse processo utiliza arames tubulares com fluxo interno, proporcionando maior penetração e excelente desempenho em soldagens de alta espessura. Muito usado em ambientes externos, pois garante maior estabilidade e resistência à contaminação durante a soldagem.",
    areas: [
      "Construção civil pesada",
      "Indústria naval",
      "Fabricação de máquinas e equipamentos",
      "Caldeiraria pesada"
    ]
  },
  "tig-chaparia": {
    title: "TIG Chaparia",
    desc: "A soldagem TIG aplicada em chaparia é reconhecida pela sua precisão e estética. Utiliza eletrodo de tungstênio não consumível e pode ser realizada com ou sem adição de material. O processo garante soldas de altíssima qualidade, com excelente acabamento e sem respingos.",
    areas: [
      "Setor aeronáutico",
      "Fabricação de móveis e estruturas finas",
      "Indústria alimentícia",
      "Manutenção de peças de precisão"
    ]
  },
  "tig-tubulacao": {
    title: "TIG Tubulação",
    desc: "Esse processo é indispensável em tubulações críticas que exigem alta qualidade e resistência. O TIG em tubulação é aplicado principalmente em ligas especiais, aço inoxidável e materiais que demandam controle rigoroso da penetração e do acabamento interno do tubo.",
    areas: [
      "Indústria petroquímica",
      "Setor de energia (óleo, gás e nuclear)",
      "Indústria farmacêutica",
      "Tubulações sanitárias e de alta pressão"
    ]
  },
  "eletrodo-revestido": {
    title: "Eletrodo Revestido",
    desc: "A soldagem por eletrodo revestido é uma das técnicas mais tradicionais e utilizadas no mundo. Conhecida pela sua versatilidade, pode ser aplicada em diversas posições de soldagem e em diferentes tipos de aço. É especialmente útil em locais de difícil acesso.",
    areas: [
      "Construção civil",
      "Montagem industrial",
      "Manutenção mecânica",
      "Indústria de estruturas metálicas"
    ]
  },
  "eletrodo-tubulacao": {
    title: "Eletrodo Revestido Tubulação",
    desc: "Voltada especificamente para tubulações, esse processo exige maior domínio técnico, pois envolve soldagens em posições forçadas (como sobrecabeça e vertical). Garante juntas resistentes e é amplamente utilizado em setores que demandam alta confiabilidade.",
    areas: [
      "Indústria de petróleo e gás",
      "Caldeiraria e vasos de pressão",
      "Tubulações de usinas termoelétricas",
      "Manutenção de dutos industriais"
    ]
  }
};


function CourseDetail() {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) return <h2>Curso não encontrado</h2>;

  return (
    <div className="course-detail">
      <h1>{course.title}</h1>
      <p>{course.desc}</p>
      <h3>Áreas de Trabalho:</h3>
      <ul>
        {course.areas.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetail;
*/