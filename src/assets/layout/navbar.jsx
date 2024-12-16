import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/detail">detail</Link>
      </li>
      <li>
        <Link to="/basket">basket</Link>
      </li>
      <li>
        <Link to="/addpage">addpage</Link>
      </li>
      <li>
        <Link to="/adminpanel">adminpanel</Link>
      </li>
    </ul>
  </div>

  )
}

export default Navbar