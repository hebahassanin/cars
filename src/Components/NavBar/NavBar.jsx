import React from 'react'
import Logo from '../../assets/images/nav/logo.png';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>

        <nav className="navbar navbar-expand-lg navbar-light p-5">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={Logo} className="logo" alt='logo'/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/home">Become a rental</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/home">Renatal deals</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/home">How it work</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/home">Why choose us</NavLink>
                </li>
            </ul>

            <div className='login'>
                <button className="btn-login me-2 fs-5">Sign In</button>
                <button className="btn btn-primary fs-5" type="submit">Sign Up</button>
            </div>

            </div>
        </div>
        </nav>
                  
            
    </>
  )
}
