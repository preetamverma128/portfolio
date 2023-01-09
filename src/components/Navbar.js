import React from 'react'
import mylogo from "../logo.png"
import '../App.css'

//REACT fontawsome import
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (


        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container">
                <Link class="navbar-brand" to="/"><img className='logo' src={mylogo} alt="logo" /></Link>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/aboutme">About me</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="service">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="portfolio">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="contactus">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
