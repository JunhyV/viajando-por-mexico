import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
  return (
    <nav className='nav'>
        <Link className='nav__link' to='/'>Home</Link>
        <Link className='nav__link' to='/colima'>Colima</Link>
        <Link className='nav__link' to='/oaxaca'>Oaxaca</Link>
        <Link className='nav__link' to='/zacatecas'>Zacatecas</Link>
        <Link className='nav__link' to='/hidalgo'>Hidalgo</Link>
        <Link className='nav__link' to='/nuevo-leon'>Nuevo León</Link>
        <Link className='nav__link' to='/michoacan'>Michoacán</Link>
    </nav>
  )
}

export default Header