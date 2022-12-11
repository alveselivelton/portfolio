import { Link } from "react-router-dom";

const ProjectsContainer = () => {
  return (
    <section className="projects-info-container">
      <h2>Projetos</h2>
      <p>
        Durante toda a execução dos cursos que fiz, tive a oportunidade de
        construir alguns projetos ministrados pelo professor, sempre buscando
        alterar ou adicionar algum recurso para torná-lo mais pessoal, assim
        como também pude desenvolever os meus própios projetos à medida que ia
        adquirindo mais comhecimento.
      </p>
      <Link to="/projects" className="btn">
        Ver Projetos
      </Link>
    </section>
  );
};

export default ProjectsContainer;
