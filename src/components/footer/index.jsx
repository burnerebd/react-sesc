import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import "./style.css";

function Footer() {
  return (
    <footer className="footer-main">
      <p>
        <strong>Projeto Front-end React + Vite</strong>
      </p>
      <p>
        <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
    <a style={{textDecoration: "none", color: "#444"}} href="https://github.com/andersonstudioa">
          <em >Referência: <FontAwesomeIcon icon={faGithub} /> andersonstudioa</em>
    </a>
        </div>
      </p>
    </footer>
  );
}

export default Footer;


