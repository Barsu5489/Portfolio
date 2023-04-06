import React from 'react'
import { NavLink} from 'react-router-dom';
function Navbar() {
  return (
    <div>
         <nav>
      <div className="navbar-logo">
        <NavLink to="/">Home</NavLink>
      </div>
        
      <div className="navbar-links">
        <NavLink to="/works">Projects</NavLink>
      </div>
    </nav>
    </div>
  )
}

export default Navbar