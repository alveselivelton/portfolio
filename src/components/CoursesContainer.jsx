import { TbCertificate } from "react-icons/tb";
import "../styles/components/coursescontainer.sass";

const courses = [
  { id: 1, name: "HTML e CSS: O Início (incluindo 5 Projetos)" },
  {
    id: 2,
    name: "HTML5 e CSS3: Técnicas Avançadas (Com Flexbox e 5 Projetos)",
  },
  { id: 3, name: "JavaScript do básico ao avançado (c/ Node.js e projetos)" },
  { id: 4, name: "React do Zero a Maestria (c/ hooks, router, API, Projetos)" },
  { id: 5, name: "Vue 3 para iniciantes - [Com Laravel]" },

  { id: 6, name: "SASS e SCSS do básico ao avançado + Projetos" },
  {
    id: 7,
    name: "TypeScript do básico ao avançado (c/ React, Express) (Em Formação)",
  },
  {
    id: 8,
    name: "Bootstrap 5 do básico ao avançado (com 4 projetos) (Em Formação)",
  },
];

const CoursesContainer = () => {
  return (
    <section className="courses-container">
      <h2>Cursos</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <TbCertificate />
            <p>{course.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesContainer;
