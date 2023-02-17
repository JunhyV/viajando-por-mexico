import React from "react";
import title from "../assets/extras/miembros.png";
import "../styles/integrantes.css";

const Integrantes = ({ data }) => {
  const { integrantes, team, name } = data;
  return (
    <div className="integrantes">
      <img
        className="integrantes__seccion margin-bot"
        src={title}
        alt="integrantes-logo"
      />
      <div className="team">
              <div className="team__slice">
        {integrantes.map((pj, i) => (
          <div key={i} className={`integrante__card ${name}`}>
            <img src={pj.img} alt="pj-img" className="integrante__img" />
            <h3 className="integrante__name">{pj.nombre}</h3>
            <p className="integrante__hobby">{pj.hobby}</p>
          </div>
        ))}
      </div>
      <img className="team__img" src={team} alt="team-img" />
      </div>

    </div>
  );
};

export default Integrantes;
