import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaCartShopping} from 'react-icons/fa6'

function NavBar() {

   
  return (
    <nav className='navbarCont'>
      
       <ul className='navbar'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/start_shop'>Start Shopping</NavLink>
          <NavLink to='/'>Contact Us</NavLink>
          <NavLink to='/'>Account</NavLink>
          <NavLink to='/product_entry'>Product Entry</NavLink>
          <NavLink to='/login'>Log In</NavLink>
          <NavLink to='/user_entry'>Register</NavLink>
          <NavLink to='/checkout'><FaCartShopping/></NavLink>
          
      </ul>
    </nav>
  )
}

export default NavBar