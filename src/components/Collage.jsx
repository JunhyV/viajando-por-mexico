import React from 'react'
import '../styles/collage.css'

const Collage = ({data}) => {
    const {collage} = data;

  return (
    <img className='collage margin-bot' src={collage} alt="collage" />
  )
}

export default Collage