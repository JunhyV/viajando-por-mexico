import React from "react";
import Estado from "../components/Estado";
import FloraFauna from "../components/FloraFauna";
import Poblacion from "../components/Poblacion";
import Regionalismos from "../components/Regionalismos";
import Turismo from "../components/Turismo";
import Integrantes from "../components/Integrantes";
import { infoColima } from "../utils/colima";
import Footer from "../components/Footer";

const Colima = () => {
  const {nombre} = infoColima;
  return (
    <>
      <h1 className="equipo__estado">{nombre}</h1>
      <Estado data={infoColima}/>
      <Poblacion data={infoColima}/>
      <FloraFauna data={infoColima}/>
      <Turismo data={infoColima}/>
      <Regionalismos data={infoColima}/>
      <Footer />
    </>
  );
};

export default Colima;
