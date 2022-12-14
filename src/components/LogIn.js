import React from 'react'

const LogIn = () => {
  return (
    <div className="containerL">
        <div className='loginContainer shadow flex flex-column flex-wrap justify-center'>
          <h1  className=''>Bienvenido!</h1>
          <div className="inputContainer">
            <h3>Correo electronico:</h3>
            <input className='email' type="email" name="" id="" placeholder='ejemplo@gmail.com'/>
          </div>
          <div className="inputContainer">
            <h3>Contraseña:</h3>
            <input className='password' type="password" name="" id="" placeholder='*******'/>
          </div>
          <button type="submit">Iniciar sesión</button>
      </div>
    </div>
  )
}

export default LogIn
