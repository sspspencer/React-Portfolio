import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  const [navActiveSelected, setNavActiveSelected] = useState("about");

  return (
    <div>
      <Nav
        navActiveSelected={navActiveSelected}
        setNavActiveSelected={setNavActiveSelected}
      ></Nav>
      <main>
        {navActiveSelected === "about" && <About></About>}
        {navActiveSelected === "portfolio" && <Portfolio></Portfolio>}
        {navActiveSelected === "contact" && <ContactForm></ContactForm>}
        {navActiveSelected === "resume" && <Resume></Resume>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
