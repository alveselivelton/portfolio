import { Link } from "react-router-dom";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
        corrupti quia consectetur, eligendi sint impedit quidem, accusamus
        sapiente totam possimus quas voluptatem! Inventore, consectetur laborum
        perspiciatis earum est sint deleniti!
      </p>
      <Link to="/projects" className="btn">
        Ver Projetos
      </Link>
    </section>
  );
};

export default ProjectsContainer;
