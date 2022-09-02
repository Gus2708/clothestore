import React from 'react'

const SignUp = () => {
  return (
    <div className="containerS">
    <div className='loginContainer signUpContainer shadow flex flex-column flex-wrap justify-center'>
      <h1  className=''>Unete!</h1>
      <div className="inputContainer namesC">
        <div className="nameContainer">
            <h3>Nombres:</h3>
            <input className='name' type="text" name="" id="" placeholder='Nombre:'/>
        </div>
        <div className="lastNameContainer">
            <h3>Apellidos:</h3>
            <input className='lastName' type="text" name="" id="" placeholder='Apellido:'/>
        </div>
      </div>
      <div className="inputContainer">
        <h3>Correo electronico:</h3>
        <input className='email' type="email" name="" id="" placeholder='ejemplo@gmail.com'/>
      </div>
      <div className="inputContainer number">
        <h3>Numero de telefono:</h3>
        <input type="text" name="" id="" placeholder='04121234567'/>
      </div>
      <p className='numberAdvise'>Asegurate que este activo con Whatsapp.</p>
      <div className="inputContainer passwordC">
        <div>
            <h3>Contraseña:</h3>
            <input className='password' type="password" name="" id="" placeholder='*******'/>
        </div>
        <div>
            <h3>Confirmar:</h3>
            <input className='password' type="password" name="" id="" placeholder='*******'/>
        </div>
      </div>
      <button type="submit">Registrate</button>
  </div>
</div>
  )
}

export default SignUp
