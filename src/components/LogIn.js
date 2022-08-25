import React from 'react'

const LogIn = () => {
  return (
    <div className="containerL">
        <div className='loginContainer shadow flex flex-column flex-wrap justify-center'>
          <h1  className=''>Bienvenido!</h1>
          <input className='email' type="email" name="" id="" placeholder='ejemplo@gmail.com'/>
          <input className='password' type="password" name="" id="" placeholder='*******'/>
          <button type="submit">Iniciar sesion</button>
      </div>
    </div>
  )
}

export default LogIn
