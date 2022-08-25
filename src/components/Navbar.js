import React from 'react'
import { FaSistrix } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";
import { useScrollPosition } from '../hooks/useScrollPosition';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
};

const Navbar = () => {

  const scrollPosition = useScrollPosition();

  return (
    <div className={classNames(scrollPosition > 0 ? 'shadow' : 'shadow-none', 'transition-shadow navbarComponents z-10')}>
      <div className='wrapper'>
        <div className="left flex items-center justify-center">
            <div className={classNames(scrollPosition > 0 ? 'hidden sm:flex' : 'flex', 'searchContainer')}>
                <input type="text" placeholder='Buscar aquí:'/>
                <FaSistrix className='searchButton'/>
            </div>
        </div>
        <div className="center flex justify-center items-center">
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
