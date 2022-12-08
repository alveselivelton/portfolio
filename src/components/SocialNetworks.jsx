import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/elivelton-alves-9564ba239/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/alveselivelton",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/elivelton.alves92/",
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          target="_blank"
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
