import React from 'react';
import Estado from "../components/Estado";
import FloraFauna from "../components/FloraFauna";
import Poblacion from "../components/Poblacion";
import Regionalismos from "../components/Regionalismos";
import Turismo from "../components/Turismo";
import Integrantes from "../components/Integrantes";
import { infoZacatecas } from '../utils/zacatecas';
import Footer from '../components/Footer';
import Grafica from '../components/Grafica';
import Collage from '../components/Collage';

const Zacatecas = () => {
  const {nombre} = infoZacatecas;
  return (
    <>
      <h1 className="equipo__estado">{nombre}</h1>
      <Estado data={infoZacatecas}/>
      <Poblacion data={infoZacatecas}/>
      <Grafica data={infoZacatecas}/>
      <FloraFauna data={infoZacatecas}/>
      <Collage data={infoZacatecas}/>
      <Turismo data={infoZacatecas}/>
      <Regionalismos data={infoZacatecas}/>
      <Integrantes data={infoZacatecas}/>
      <Footer />
    </>
  )
}

export default Zacatecas