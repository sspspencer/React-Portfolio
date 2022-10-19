import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";

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
        {/* {contactSelected ? (
          <>
            <ContactForm></ContactForm>
          </>
        ) : (
          <About></About>
        )}
        {portfolioSelected ? (
          <>
            <ContactForm></ContactForm>
          </>
        ) : (
          <About></About>
        )} */}
        {(function () {
          if (!contactSelected && !portfolioSelected && !resumeSelected) {
            return <About></About>;
          } else {
            if (portfolioSelected) {
              return <div>hello world</div>;
            } else {
              if (contactSelected) {
                return <ContactForm></ContactForm>;
              } else {
                if (resumeSelected) {
                  return <div>Its Resume Time</div>;
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
