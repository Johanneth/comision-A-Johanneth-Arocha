import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/logo.png"


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" />                        
                </div>
                <div className="links">
                    <Link className='link' to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className='link' to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className='link' to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className='link' to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className='link' to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <span>Joha</span>
                    <span>Cerrar Sesión</span>
                    <span className='write'>
                        <Link to="/write">Escribir</Link>
                    </span>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar

