import AboutContainer from "./AboutContainer";
import TechnologiesContainer from "./TechnologiesContainer";
import ProjectsContainer from "./ProjectsContainer";

import "../styles/components/maincontent.sass";
import CoursesContainer from "./CoursesContainer";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
      <CoursesContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;
