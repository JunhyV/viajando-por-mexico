import React from "react";
import title from '../assets/extras/florayfauna.png'
import "../styles/floraFauna.css";

const FloraFauna = ({ data }) => {
  const { fauna, flora, logo } = data;
  return (
    <div className="floraFauna margin-bot">
      <img className="floraFauna__seccion margin-bot" src={title} alt="floraFauna-logo" />
      <div className="floraFauna__grid">
        {fauna.map((animal, i) => (
          <div key={i} className="floraFauna__card retrato">
            <img
              className="floraFauna__img margin-bot"
              src={animal.img}
              alt={animal.nombre}
            />
            <h3 className="floraFauna__nombre">{animal.nombre}</h3>
          </div>
        ))}
        <img className="logo" src={logo} alt="logo" />
        {flora.map((planta, i) => (
          <div key={i} className="floraFauna__card retrato">
            <img
              src={planta.img}
              alt={planta.nombre}
              className="floraFauna__img margin-bot"
            />
            <h3 key={i} className="floraFauna__nombre">
              {planta.nombre}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloraFauna;
