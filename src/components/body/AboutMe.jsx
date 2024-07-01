import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-cyan-700 flex flex-col items-center rounded-t-2xl">
      <div className="pb-3 pt-3 sm:pt-6 sm:pb-6 md:pt-10 md:pb-10">
        <h2 className="text-center text-white text-sm sm:text-xl md:text-2xl">
        ¡Hola! Soy Alexander Carrillo Martinez.
        </h2>
      </div>
      <div className="w-3/4 md:w-2/4 mx-auto pb-3 sm:pb-6 md:pb-14">
        <p className="text-justify md:text-center text-white  text-sm sm:text-xl md:text-2xl ">
          Me apasiona el desarrollo de software y siempre estoy buscando
          oportunidades para aprender y crecer. Soy Tecnólogo en
          Telecomunicaciones y estudiante de Ingeniería de Sistemas en la
          Universidad Pedagógica y Tecnológica de Colombia. Mi sólida formación
          en telecomunicaciones y mis crecientes conocimientos en ingeniería de
          sistemas me permiten abordar proyectos tecnológicos con un enfoque
          holístico y una mentalidad analítica.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
