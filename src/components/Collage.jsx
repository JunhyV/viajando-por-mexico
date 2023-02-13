import React from 'react'
import '../styles/collage.css'

const Collage = ({data}) => {
    const {collage} = data;

  return (
    <div className='zoom'>
      <img className='collage' src={collage} alt="collage" />
    </div>

  )
}

export default Collage