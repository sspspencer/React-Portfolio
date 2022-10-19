import React from "react";
import googleIMG from "../../../src/assets/cover/icons8-google-drive-100.png";

function Resume() {
  return (
    <section>
      <div>
        <h1 data-testid="h1tag">Resume</h1>
        <a
          href="https://docs.google.com/document/d/1MSIDTBRGGElT6Hv-lMKpcsp5W8TMpgydDDYpGsPJ-Bs/edit?usp=sharing"
          target="_blank"
        >
          <img src={googleIMG}></img>
        </a>
      </div>
      <h2>Technolodgies:</h2>
      <ul>
        <li>React</li>
        <li>Javascript</li>
        <li>CSS</li>
        <li>Handlebars</li>
        <li>HTML</li>
        <li>Node</li>
        <li>Express</li>
        <li>Sequelize</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Git</li>
        <li>Github</li>
        <li>NPM</li>
        <li>Yarn</li>
        <li>Jest</li>
        <li>OOP</li>
        <li>ORM</li>
        <li>MVC</li>
      </ul>
    </section>
  );
}
export default Resume;
