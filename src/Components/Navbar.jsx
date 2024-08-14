import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container">
    <div className='Navbar'>


      <div className="Nav-left">
      <div className="left">
            <span id="span1">M </span>
            <span id="span2"> Awais</span>
          </div>
      </div>


      <div className="Nav-middle">
        <ul>
        <li> <Link  className='Link' to="/" >Home</Link> </li>
          <li> <Link className='Link'  to="/About">About</Link> </li>
          <li> <Link className='Link'  to="/skills">Tech Stack</Link>  </li>
          <li> <Link className='Link'  to="/services">Services</Link>  </li>
          <li> <Link className='Link'  to="/projects">Projects</Link> </li>
          <li> <Link className='Link'  to="/form">Contact</Link> </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar
