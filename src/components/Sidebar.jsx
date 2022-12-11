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
      <a
        href="https://drive.google.com/file/d/1H3S7Hp1Ub4IF74AV9ZvzDNMiCk9VcDli/view?usp=share_link"
        target="_blank"
        className="btn"
      >
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
