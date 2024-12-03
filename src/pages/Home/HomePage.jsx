import React from "react";
import HeaderHome from "../../components/Header/HeaderHome";
import AboutMe from "../../components/body/AboutMe";
import Skills from "../../components/body/Skills";
import Projects from "../../components/body/Projects";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <HeaderHome />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>

  );
};

export default HomePage;