/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const Menu = () => (
  <nav>
    <Logo />
    <ul>
      <li>
        <a id="#nos-services" href="#nos-services">Nos services</a>
      </li>
      <li>
        <a id="#nos-realisations" href="#nos-realisations">Nos réalisations</a>
      </li>
      <li>
        <a id="#notre-equipe" href="#notre-equipe">Notre équipe</a>
      </li>
    </ul>
    <Button title="contact" onClick={() => (window.document.location.hash = "#contact")}>
      Contact
    </Button>
  </nav>
);

export default Menu;
