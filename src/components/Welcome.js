

import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
   
import { fetchItems } from "./shopWindowSlice";

function Welcome() {


  const dispatch = useDispatch()
 

  
  const deal=`Big Deals`

  /*async function initialLoadData() {
    try {
      const response = await axios.get("http://localhost:4000/featured?category=specials");
      const data = response.data;
      setList(data);
      
    } catch (error) {
      console.log(error);
    }
  
  }*/

//without useEffect, the dispatch/subscribe will cause an infinite loop because the component would be in a constant state of reloading.  We may need to visit this with specific dependencies later.

useEffect(()=>{
  dispatch(fetchItems('featured'))
},[])

const deals = useSelector((state)=>state.virtualWarehouse)


  return (
    <div>
        
        <h4 className='welcomeMsg'>Welcome Buyers! New Customers, Create an Account to Explore all the Great Bargains we Offer.</h4>

        <div className="shopWindow">
        <p className="showDeal">{deal}</p>
        {deals.items.map((e) => (
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