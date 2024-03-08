import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {

   
  return (
    <nav className='navbarCont'>
      
       <ul className='navbar'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/start_shop'>Start Shopping</NavLink>
          <NavLink to='/checkout'>Shopping Cart</NavLink>
          <NavLink to='/checkout'>Contact Us</NavLink>
          <NavLink to='/checkout'>Account</NavLink>
          
          <NavLink to='/product_entry'>Product Entry</NavLink>
          <NavLink to='/login'>Log In</NavLink>
          <NavLink to='/user_entry'>Register</NavLink>
          
      </ul>
    </nav>
  )
}

export default NavBar