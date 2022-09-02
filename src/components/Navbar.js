import React from 'react'
import { FaSistrix } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";
import { useScrollPosition } from '../hooks/useScrollPosition';
import {Link} from 'react-router-dom'
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
            <Link style={{fontSize: 'clamp(16px, 2.5vw, 26px)',
                          fontFamily: 'Silkscreen, cursive'}} to="/" className="logo">
                <b style={{fontWeight: 'bold',
                          fontSize: 'clamp(28px, 2.5vw, 38px)',
                          letterSpacing: '-1px'}}>G</b>Store.
            </Link>
        </div>
        <div className="right">
            <Link to="login" style={{display: 'flex',
                                    marginRight: '1.5em',
                                    cursor: 'pointer',
                                    fontSize: 'clamp(10px, 1.6vw, 16px)',
                                    padding: '0.5em .5em',
                                    alignContent: 'flex-end'}} className="login">Iniciar Sesión</Link>
            <Link to="signup" style={{display: 'flex',
                                    marginRight: '1.5em',
                                    cursor: 'pointer',
                                    fontSize: 'clamp(10px, 1.6vw, 16px)',
                                    padding: '0.5em .5em',
                                    alignContent: 'flex-end'}} className="signUp">Registrarse</Link>
            <Link to="cart" style={{fontSize: 'clamp(17px, 1.7vw, 32px)',
                                    cursor: 'pointer',
                                    marginRight: '0',
                                    borderRadius: '50%',
                                    padding: '0.2em .2em'}} className="cart"><BiCartAlt/></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
