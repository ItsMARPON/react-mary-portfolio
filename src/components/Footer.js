import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import "../index.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="githubIcon">
        <FontAwesomeIcon icon={faGithub} />
        <a href="https://github.com/ItsMARPON" alt="Github site">
          My Github Link
        </a>
      </div>
      <div className="linkedinIcon">
        <FontAwesomeIcon icon={faLinkedin} />
        <a href="https://www.linkedin.com/in/maryyangytio" alt="LinkedIn site">
          My LinkedIn Profile Link
        </a>
      </div>
      <div className="copyright">
        <h3>Copyright <FontAwesomeIcon icon={faCopyright}/> Mary Yang</h3>
      </div>
    </footer>
  );
}

export default Footer;
