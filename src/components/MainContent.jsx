import AboutContainer from "./AboutContainer";
import TechnologiesContainer from "./TechnologiesContainer";
import ProjectsContainer from "./ProjectsInfoContainer";
import CoursesContainer from "./CoursesContainer";

import "../styles/components/maincontent.sass";

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
