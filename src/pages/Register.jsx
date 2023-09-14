import React from 'react'
import { useState } from 'react'  
import { Link } from 'react-router-dom'
             


const Register = () => {
    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
    })

    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]: e.target.value}))

    }

    console.log(inputs)

    return (
        <div className='auth'>
            <h1>Registrate</h1>
            <form>
                <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
                <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
                <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
                <button>Registrate</button>
                <p>Esto es un error!</p>
                <span>
                Ya tienes una cuenta? <Link to="/Login">Inicia</Link>           
                </span>
                
            </form>
            
            
        </div>
    )
}

export default Register

