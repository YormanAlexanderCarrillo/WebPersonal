import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-cyan-700 flex flex-col items-center rounded-t-2xl">
      <div className="pb-3 pt-3 sm:pt-6 sm:pb-6 md:pt-10 md:pb-10">
        <h2 className="text-center text-white text-sm sm:text-xl md:text-2xl">
        ¡Hola! Soy Alexander Carrillo Martinez.
        </h2>
      </div>
      <div className="w-2/3 md:w-2/3 mx-auto pb-3 sm:pb-6 md:pb-14">
        <p className="text-justify md:text-center text-white  text-sm sm:text-xl md:text-2xl ">
          Ingeniero de Sistemas y Computación con formación tecnológica complementaria en
          Telecomunicaciones. Cuento con sólida experiencia en la gestión de incidentes, monitoreo de
          servicios críticos y soporte de redes de datos, combinada con sólidas competencias en desarrollo Full-
          Stack (JavaScript, React.js, Node.js, Java, SpringBoot) y aplicaciones multiplataforma. Profesional
          proactivo, adaptable y con alta capacidad analítica, enfocado en diseñar e implementar soluciones
          tecnológicas eficientes que optimicen procesos operativos y garanticen la continuidad del negocio.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
