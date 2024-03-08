import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function ItemCard(props) {

  const [purchInfo, setPurchInfo]=useState({
    image: '',
    title: '',
    description:''
  })

  useEffect(()=>{
    setPurchInfo({
      image: props.image,
      title: props.title,
      description: props.description
    })
  },[props.image, props.title, props.description])

  return (
    <div className="itemCard"  >
    
        <h3 className={'cardTitle'}>{props.title}</h3>
        
        <div className='cardWindow'>
           <Link id='itemPic' to={'/start_shop/purchase'} state={purchInfo}> <img id='itemPics' src={props.image} alt='noImage'/></Link>
        </div>
        <br/>
        <p className="description">{props.description}!!!</p>
        <p className="price"> Your's for only ${props.price}</p>
        
        

    </div>
  )
}

export default ItemCard