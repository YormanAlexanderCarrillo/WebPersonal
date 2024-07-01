import React from "react";
import HeaderHome from "../../components/Header/HeaderHome";
import AboutMe from "../../components/body/AboutMe";
import Skills from "../../components/body/Skills";
import Projects from "../../components/body/Projects";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <HeaderHome></HeaderHome>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
