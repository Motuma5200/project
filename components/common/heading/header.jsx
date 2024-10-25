import React from 'react'
import Head from "./head"
import "./header.css"
import {Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
        < Head />
        <header>
            <nav className='flexSB'>
                <ul className="fmax">
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/courses">All Course</Link></li>
                    <li><Link to = "/about">About Us</Link></li>
                    <li><Link to = "/team">Team</Link></li>
                    <li><Link to = "/journal">Journal</Link></li>
                    <li><Link to = "/contact">Contact Us</Link></li>
                    
                </ul>

            </nav>
        </header>

    </>
  )
}

export default Header