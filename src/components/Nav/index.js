import React from "react";

function Nav(props) {
  const {
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
    setResumeSelected,
    resumeSelected,
  } = props;

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
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={function () {
                setContactSelected(false);
                setPortfolioSelected(false);
                setResumeSelected(false);
              }}
            >
              About me
            </a>
          </li>
          <li className={`mx-2 ${portfolioSelected && "navActive"}`}>
            <span
              onClick={function () {
                setPortfolioSelected(true);
                setContactSelected(false);
                setResumeSelected(false);
              }}
            >
              Portfolio
            </span>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span
              onClick={function () {
                setContactSelected(true);
                setResumeSelected(false);
                setPortfolioSelected(false);
              }}
            >
              Contact
            </span>
          </li>
          <li className={`mx-2 ${resumeSelected && "navActive"}`}>
            <span
              onClick={function () {
                setResumeSelected(true);
                setContactSelected(false);
                setPortfolioSelected(false);
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
