import React from "react";
import "../styles/estado.css";

const Estado = ({ data }) => {
  const { nombre, sobre, municipios, mapa } = data;
  return (
    <div className="estado margin-bot" >
      <div className="estado__contenido">
        <h2 className="estado__seccion">Sobre {nombre}...</h2>
        <p className="estado__info">{sobre}</p>
        <ul className="estado__municipios">
          <label htmlFor="">Municipios:</label>
          <li className="municipio">{municipios[1]}</li>
          <li className="municipio">{municipios[2]}</li>
          <li className="municipio">{municipios[3]}</li>
          <li className="municipio">{municipios[4]}</li>
          <li className="municipio">{municipios[5]}</li>
        </ul>
      </div>
      <img className="estado__img" src={mapa} alt="mapa-estado" />
    </div>
  );
};

export default Estado;
