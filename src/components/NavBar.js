import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {

   
  return (
    <nav className='navbarCont'>
      
       <ul className='navbar'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/checkout'>Check Out</NavLink>
          <NavLink to='/product_entry'>Product Entry</NavLink>
          
      </ul>
    </nav>
  )
}

export default NavBar