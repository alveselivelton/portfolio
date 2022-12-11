import { Link } from "react-router-dom";

import "../styles/components/projects.sass";

const Projects = () => {
  return (
    <>
      <h1>Projetos</h1>
      <main id="projects-container">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          quaerat praesentium cum officia id vero, possimus sapiente? Ipsa amet
          perspiciatis blanditiis itaque quis, facilis obcaecati in illo
          sapiente modi tempore!
        </p>
      </main>
      <Link to="/" className="btn">
        Voltar
      </Link>
    </>
  );
};

export default Projects;
