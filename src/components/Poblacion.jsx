import React from "react";
import '../styles/poblacion.css'

const Poblacion = ({ data }) => {
  const { poblacion } = data;
  return (
    <div className="poblacion margin-bot">
      <h2 className="poblacion__seccion">Población</h2>
      <p className="poblacion__cantidad">
        La pobración de colima es de <span className="poblacion__numero">{poblacion.numero}</span>{" "}
        habitantes.
      </p>
      <p className="poblacion__nombre">({poblacion.nombre})</p>
    </div>
  );
};

export default Poblacion;
