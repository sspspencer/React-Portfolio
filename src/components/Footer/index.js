import React from "react";
import gitHubIMG from "../../../src/assets/cover/icons8-github-90.png";
import linkedInIMG from "../../../src/assets/cover/icons8-linkedin-circled-100.png";
import facebookIMG from "../../../src/assets/cover/icons8-facebook-90.png";

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/sspspencer" target="_blank">
        <img src={gitHubIMG}></img>
      </a>
      <a
        href="https://www.linkedin.com/in/spencer-pichette-42265423a/"
        target="_blank"
      >
        <img src={linkedInIMG}></img>
      </a>
      <a href="https://www.facebook.com/spencer.pichette/" target="_blank">
        <img src={facebookIMG}></img>
      </a>
    </footer>
  );
}

export default Footer;
