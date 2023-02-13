import React from 'react'
import mainlogo from "../assets/extras/viajando.jpg";
import Footer from '../components/Footer';
import '../styles/home.css'

const Home = () => {
  return (
    <>
      <div className='saludo'>
      <p>Bienvenido a nuestra página web</p>
      <h1>¡Viajando por México!</h1>
      </div>
      <img className='saludo__img' src={mainlogo} alt="main-logo" />
      <Footer />
    </>
    
  )
}

export default Home