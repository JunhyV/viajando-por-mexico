import React from 'react'
import '../styles/grafica.css'

const Grafica = ({data}) => {
    const {name, grafica} = data;

  return (
    <img className={`grafica ${name} margin-bot`} src={grafica} alt="grafica" />
  )
}

export default Grafica