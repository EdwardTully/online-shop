import React from 'react'
import NavBar from './NavBar'
import {useLocation} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function PuchasePage() {

const grabCardInfo = useLocation()

const {image, title, description,price,
  id}=grabCardInfo.state




  return (
   
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4" >
              <NavBar/>
              </div>
            <div className="div-5">
              <div className="div-6">
                <div className="column">
                  <div className="div-7">
                    <div className="div-8" >{title}</div>
                    <div className="div-9" >{description}</div>
                    <div className="div-10" >$ {price}</div>
                  
                    <div className="div-13">
                      <button type="button"className="div-14">Buy Now</button>
                      <button className="div-15">Cart</button>
                    <NavLink to='/start_shop'><button className="div-15">Go Back</button></NavLink>  
                     
                    </div>
                  </div>
                </div>
                <div className="column-2">
                  <img src={image} alt='product front' className="div-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 

  )
}

export default PuchasePage