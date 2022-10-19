import React from "react";

function Nav(props) {
  const { setNavActiveSelected, navActiveSelected } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="fire">
            {" "}
            🔥
          </span>{" "}
          Spencer Pichette
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li
            className={`mx-2 ${navActiveSelected === "about" && "navActive"}`}
          >
            <a
              data-testid="about"
              href="#about"
              className={` ${navActiveSelected === "about" && "navActive"}`}
              onClick={function () {
                setNavActiveSelected("about");
              }}
            >
              About me
            </a>
          </li>
          <li
            className={`mx-2 ${
              navActiveSelected === "portfolio" && "navActive"
            }`}
          >
            <span
              onClick={function () {
                setNavActiveSelected("portfolio");
              }}
            >
              Portfolio
            </span>
          </li>
          <li
            className={`mx-2 ${navActiveSelected === "contact" && "navActive"}`}
          >
            <span
              onClick={function () {
                setNavActiveSelected("contact");
              }}
            >
              Contact
            </span>
          </li>
          <li
            className={`mx-2 ${navActiveSelected === "resume" && "navActive"}`}
          >
            <span
              onClick={function () {
                setNavActiveSelected("resume");
              }}
            >
              Resume
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
