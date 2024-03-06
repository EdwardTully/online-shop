import React,{useEffect, useState} from 'react'
import NavBar from './NavBar'
import {useLocation} from 'react-router-dom'
import axios from 'axios'

function PuchasePage() {

const grabCardInfo = useLocation()

const {image, title, description}=grabCardInfo.state




  return (
    <div className='purchasePageCont'>
      <NavBar/>
      <div className='purchaseWindow'>
        <img src={image} alt='no image' Width='500'/>
        <span >{description}</span>
      </div>
      
    </div>
  )
}

export default PuchasePage