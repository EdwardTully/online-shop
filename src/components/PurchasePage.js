import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom'
import {useDispatch} from "react-redux"
import  {addToCart}  from './cartSlice'


function PuchasePage() {

const dispatch = useDispatch()

const grabCardInfo = useLocation()

//unpack state on selected card for display and shop cart, etc:

const {image, title, description,price,
  }=grabCardInfo.state

//package payload variables to be sent to shop cart

const [cartPayload, setCartPayload] = useState({
    title: '',
    price: 0,
    
})




//make action payload for shopping cart, on load

useEffect(()=>{
  setCartPayload({
    title: title,
    price: price,
    
  })
  
}, [])

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
                      <button type="button"className="div-14"onClick={()=>dispatch(addToCart(cartPayload))}>Add to Cart</button>
                      <button className="div-15"  
                      >Remove from Cart</button>
                    <Link to='/start_shop'><button className="div-15">Continue Shopping</button></Link>  
                     
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