import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import POS from "./components/POS";
import ExtraCurricularActivities from "./components/ExtraCurricularActivities";
import Freelancing from "./components/Freelancing";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      {/* <Experience /> */}
      <Portfolio />
      <POS />
      <Achievements />
      <ExtraCurricularActivities />
      {/* <Services /> */}
      {/* <Contact /> */}
      <Freelancing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;