import React from "react";
import title from '../assets/extras/miembros.png'
import "../styles/integrantes.css";

const Integrantes = ({ data }) => {
  const { integrantes } = data;
  return (
    <div className="integrantes">
        <img className="integrantes__seccion margin-bot" src={title} alt="integrantes-logo" />
      <div className="intengrantes__slice">
        {integrantes.map((pj, i) => (
          <div className="integrante__card">
            <img src={pj.img} alt="pj-img" className="integrante__img" />
            <h3 className="integrante__name">{pj.nombre}</h3>
            <p className="integrante__description">{pj.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrantes;
