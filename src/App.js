import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  return (
    <div>
      <Nav
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {(function () {
          if (!contactSelected && !portfolioSelected && !resumeSelected) {
            return <About></About>;
          } else {
            if (portfolioSelected) {
              return <Portfolio></Portfolio>;
            } else {
              if (contactSelected) {
                return <ContactForm></ContactForm>;
              } else {
                if (resumeSelected) {
                  return <Resume></Resume>;
                }
              }
            }
          }
        })()}
      </main>
    </div>
  );
}

export default App;
