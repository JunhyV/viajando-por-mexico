import React from 'react';
import Estado from "../components/Estado";
import FloraFauna from "../components/FloraFauna";
import Poblacion from "../components/Poblacion";
import Regionalismos from "../components/Regionalismos";
import Turismo from "../components/Turismo";
import Integrantes from "../components/Integrantes";
import { infoNuevoLeon } from '../utils/nuevoLeon';
import Grafica from '../components/Grafica';
import Collage from '../components/Collage';
import Footer from '../components/Footer';

const NuevoLeon = () => {
  const {nombre} = infoNuevoLeon;
  return (
    <>
      <h1 className="equipo__estado">{nombre}</h1>
      <Estado data={infoNuevoLeon}/>
      <Poblacion data={infoNuevoLeon}/>
      <Grafica data={infoNuevoLeon}/>
      <FloraFauna data={infoNuevoLeon}/>
      <Collage data={infoNuevoLeon}/>
      <Turismo data={infoNuevoLeon}/>
      <Regionalismos data={infoNuevoLeon}/>
      <Integrantes data={infoNuevoLeon}/>
      <Footer />
    </>
  )
}

export default NuevoLeon