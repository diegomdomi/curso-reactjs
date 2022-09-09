import React from 'react'
import './store.css'
import { Link } from 'react-router-dom'

const NavBarStore = () => {
  return (
    <div>
        
  <nav >
    <div className="nav-wrapper" >
      <Link to="/store" className="brand-logo center">e-STorE</Link>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link to="/store">Store</Link></li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default NavBarStore