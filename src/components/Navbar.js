import React from 'react'
import { FaSistrix } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";


const Navbar = () => {
  return (
    <div className='navbarComponents'>
      <div className="wrapper">
        <div className="left">
            <div className="searchContainer">
                <input type="text" placeholder='Buscar aquí:'/>
                <FaSistrix className='searchButton'/>
            </div>
        </div>
        <div className="center">
            <div className="logo">
                <b>G</b>Store.
            </div>
        </div>
        <div className="right">
            <div className="login">Iniciar Sesión</div>
            <div className="signUp">Registrarse</div>
            <div className="cart"><BiCartAlt/></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
