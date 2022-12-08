import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/profile.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Elivelton Alves" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
