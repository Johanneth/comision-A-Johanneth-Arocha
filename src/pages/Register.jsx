import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='auth'>
            <h1>Registrate</h1>
            <form>
                <input required type="text" placeholder='username'/>
                <input required type="email" placeholder='email'/>
                <input required type="password" placeholder='password'/>
                <button>Registrate</button>
                <p>Esto es un error!</p>
                <span>
                Ya tienes una cuenta? <a href="/Login">Inicia</a>           
                </span>
                
            </form>
            
            
        </div>
    )
}

export default Register

