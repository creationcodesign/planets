import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css';

export default function Navbar() {
    const [navbarToggle, setNavbarToggle] = useState(false)

    return (
        <nav>
            <div className="nav">
                <Link to="/"> <i className="fas fa-satellite icon"></i></Link>
                <Link to="/" className="menu menu-icon" onClick={() => { setNavbarToggle((navbarToggle) => !navbarToggle) }}><span></span></Link>
            </div>
            {navbarToggle ?
                <div className='menu-hidden'>
                    <Link to="/" className="nav-link">home</Link>
                    <Link to="/#planet" className="link">planets</Link>
                    <Link to="/space" className="link">space</Link>
                </div>
                : null}
        </nav>
    )
}
