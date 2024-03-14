import React from 'react'
import NavBar from './NavBar'
import {useLocation} from 'react-router-dom'
import TitleBarDim from './TilteBarDim'

function PuchasePage() {

const grabCardInfo = useLocation()

const {image, title, description}=grabCardInfo.state




  return (
    <div className='purchasePageCont'>
      <TitleBarDim/>
      <NavBar/>
      <div className='purchaseWindow'>
        <img src={image} alt='none' Width='500'/>
        <span >{description}</span>
      </div>
      
    </div>
  )
}

export default PuchasePage