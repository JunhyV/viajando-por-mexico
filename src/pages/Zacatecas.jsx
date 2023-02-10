import React from 'react';
import Estado from "../components/Estado";
import FloraFauna from "../components/FloraFauna";
import Poblacion from "../components/Poblacion";
import Regionalismos from "../components/Regionalismos";
import Turismo from "../components/Turismo";
import Integrantes from "../components/Integrantes";
import { infoZacatecas } from '../utils/zacatecas';

const Zacatecas = () => {
  const {nombre} = infoZacatecas;
  return (
    <>
      <h1 className="equipo__estado">{nombre}</h1>
      <Estado data={infoZacatecas}/>
      <Poblacion data={infoZacatecas}/>
      <FloraFauna data={infoZacatecas}/>
      <Turismo data={infoZacatecas}/>
      <Regionalismos data={infoZacatecas}/>
      <Integrantes data={infoZacatecas}/>
    </>
  )
}

export default Zacatecas