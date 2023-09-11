import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='auth'>
            <h1>Inicia Sesión</h1>
            <form>
                <input type="text" placeholder='username'/>
                <input type="password" placeholder='password'/>
                <button>Inicia</button>
                <p>Esto es un error!</p>
                <span>
                No tienes una cuenta? <a href="/Register">Registrate</a>           
                </span>
                
            </form>
            
            
        </div>
    )
}

export default Login

