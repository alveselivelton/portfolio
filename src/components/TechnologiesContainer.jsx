import { DiHtml5, DiCss3, DiJsBadge, DiSass, DiReact } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "vue", name: "Vue.js", icon: <FaVuejs /> },
];

const technologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <h3>{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default technologiesContainer;
