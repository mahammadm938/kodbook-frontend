import React from 'react'
import { NavLink } from 'react-router-dom'; // React Router hook

export default function Navbar() {
  return (
    <>
        <nav>
            
            <NavLink to="/home"> News feed </NavLink>
            

            <button>LOGOUT</button>
        </nav>
    </>
  )
}