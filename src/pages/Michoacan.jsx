import React from 'react';
import Estado from "../components/Estado";
import FloraFauna from "../components/FloraFauna";
import Poblacion from "../components/Poblacion";
import Regionalismos from "../components/Regionalismos";
import Turismo from "../components/Turismo";
import Integrantes from "../components/Integrantes";
import { infoMichoacan } from '../utils/michoacan';
import Footer from '../components/Footer';
import Grafica from '../components/Grafica';
import Collage from '../components/Collage';

const Michoacan = () => {
  const {nombre} = infoMichoacan; 
  return (
    <>
      <h1 className="equipo__estado">{nombre}</h1>
      <Estado data={infoMichoacan}/>
      <Poblacion data={infoMichoacan}/>
      <Grafica data={infoMichoacan}/>
      <FloraFauna data={infoMichoacan}/>
      <Collage data={infoMichoacan}/>
      <Turismo data={infoMichoacan}/>
      <Regionalismos data={infoMichoacan}/>
      <Integrantes data={infoMichoacan}/>
      <Footer />
    </>
  )
}

export default Michoacan