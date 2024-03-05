import React from 'react'
import { Link } from 'react-router-dom'

function ItemCard(props) {
  return (
    <div className="itemCard"  >
    
        <h3 className={'cardTitle'}>{props.title}</h3>
        
        <div className='cardWindow'>
           <Link id='itemPic' to={'/purchase'}> <img id='itemPics' src={props.image} alt='noImage' /></Link>
        </div>
        <br/>
        <span id="description">{props.description}!!!</span>
        <span id="price"> Your's for only ${props.price}</span>
        
        

    </div>
  )
}

export default ItemCard