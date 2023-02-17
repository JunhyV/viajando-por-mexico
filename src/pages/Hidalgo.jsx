import React from 'react';
import Estado from "../components/Estado";
import FloraFauna from "../components/FloraFauna";
import Poblacion from "../components/Poblacion";
import Regionalismos from "../components/Regionalismos";
import Turismo from "../components/Turismo";
import Integrantes from "../components/Integrantes";
import { infoHidalgo } from '../utils/hidalgo';
import Footer from '../components/Footer';
import Grafica from '../components/Grafica';
import Collage from '../components/Collage';

const Hidalgo = () => {
  const {nombre} = infoHidalgo;
  return (
    <>
      <h1 className="equipo__estado">{nombre}</h1>
      <Estado data={infoHidalgo}/>
      <Poblacion data={infoHidalgo}/>
      <Grafica data={infoHidalgo}/>
      <FloraFauna data={infoHidalgo}/>
      <Collage data={infoHidalgo}/>
      <Turismo data={infoHidalgo}/>
      <Regionalismos data={infoHidalgo}/>
      <Integrantes data={infoHidalgo}/>
      <Footer />
    </>
  )
}

export default Hidalgo