import React from "react";
import "../styles/grafica.css";

const Grafica = ({ data }) => {
  const { name, grafica } = data;

  return (
    <div className="zoom">
      <img
        className={`grafica ${name}`}
        src={grafica}
        alt="grafica"
      />
    </div>
  );
};

export default Grafica;
