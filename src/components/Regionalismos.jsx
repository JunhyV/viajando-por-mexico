import React from 'react';
import '../styles/regionalismos.css'

const Regionalismos = ({data}) => {
    const {name, regionalismos} = data;
  return (
    <div className="regionalismos margin-bot">
    <h2 className='regionalismos__seccion'>Regionalismos</h2>
    <p className='regionalismos__definicion'>{regionalismos.definicion}</p>
    <div className='regionalismos__grid'>
      <p className={`regionalismos_ejemplo ${name}`}>{regionalismos[1]}</p>
      <p className={`regionalismos_ejemplo ${name}`}>{regionalismos[2]}</p>
      <p className={`regionalismos_ejemplo ${name}`}>{regionalismos[3]}</p>
      <p className={`regionalismos_ejemplo ${name}`}>{regionalismos[4]}</p>
      <p className={`regionalismos_ejemplo ${name}`}>{regionalismos[5]}</p>
    </div>
  </div>
  )
}

export default Regionalismos