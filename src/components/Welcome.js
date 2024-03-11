

import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";

function Welcome() {

 
  const [list, setList] = useState([{}]);
  const deal=`Daily Bargain`

  async function initialLoadData() {
    try {
      const response = await axios.get("http://localhost:4000/featured?category=specials");
      const data = response.data;
      setList(data);
      
    } catch (error) {
      console.log(error);
    }
  
  }

  useEffect(
    () => initialLoadData,

    []
  );


  return (
    <div>
        
        <h4 className='welcomeMsg'>Welcome Buyers! New Customers, Create an Account to Explore all the Great Bargains we Offer.</h4>

        <div className="shopWindow">
        <p className="showDeal">{deal}</p>
        {list.map((e) => (
          <ItemCard
            key={e.id}
            title={e.title}
            description={e.description}
            price={e.price}
            image={e.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Welcome