import React from "react";
import title from '../assets/extras/turismo.png'
import "../styles/turismo.css";

const Turismo = ({ data }) => {
  const { turismo } = data;
  return (
    <div className="turismo margin-bot">
      <img className="turismo__seccion margin-bot" src={title} alt="turismo-logo" />
      <div className="turismo__cards">
      {turismo.map((lugar, i) => (
        <div key={i} className='turismo__card retrato'>
          <div className="turismo__contenido">
            <h3 className="turismo__nombre margin-bot">{lugar.nombre}:</h3>
            <ol className="turismo__lista">
              <li className="turismo__actividades">{lugar.actividades[1]}</li>
              <li className="turismo__actividades">{lugar.actividades[2]}</li>
              <li className="turismo__actividades">{lugar.actividades[3]}</li>
            </ol>
          </div>
          <img src={lugar.img} alt="lugar-img" className="turismo__img"/>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Turismo;
