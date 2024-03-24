import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function ItemCard(props) {

  //this object below will be passed as a state in the Link element.  Then each card has its specific object attached to it.  Using this with
  //useLocation to grab the state down the road.

  const [purchInfo, setPurchInfo]=useState({
    image: '',
    title: '',
    description:'',
    price: 0,
    id: ''
  })


  useEffect(()=>{
    setPurchInfo({
      image: props.image,
      title: props.title,
      description: props.description,
      price: props.price,
      id: props.key
    })
  },[props.image, props.title, props.description])

  return (
    <div className="itemCard"  >
    
        <div className='cardTitle' style={{justifyText: 'center', fontWeight:'bold'}}>{props.title}</div>
        
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