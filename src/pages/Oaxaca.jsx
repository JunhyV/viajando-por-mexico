import React from "react";
import Estado from "../components/Estado";
import FloraFauna from "../components/FloraFauna";
import Integrantes from "../components/Integrantes";
import Poblacion from "../components/Poblacion";
import Regionalismos from "../components/Regionalismos";
import Turismo from "../components/Turismo";
import { infoOaxaca } from "../utils/oaxaca";

const Oaxaca = () => {
  const {nombre} = infoOaxaca;
  
  return (
    <>
      <h1 className="equipo__estado">{nombre}</h1>
      <Estado data={infoOaxaca} />
      <Poblacion data={infoOaxaca} />
      <FloraFauna data={infoOaxaca} />
      <Turismo data={infoOaxaca} />
      <Regionalismos data={infoOaxaca} />
      <Integrantes data={infoOaxaca}/>
    </>
  );
};

export default Oaxaca;
