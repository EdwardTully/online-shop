import React, { useState, useEffect, useToggle } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";

function ShopWindow() {
  
  const [val, setVal] = useState("");
  const [list, setList] = useState([{}]);
  const baseUrl = "http://localhost:4000/products";
 const deal=`Daily Bargain`
  const [toggle, setToggle]= useState(true)

  async function initialLoadData() {
    try {
      const response = await axios.get("http://localhost:4000/featured?category=specials");
      const data = response.data;
      setList(data);
      
    } catch (error) {
      console.log(error);
    }
    setToggle(true)
  }

 useEffect(()=> setToggle(true),[])

useEffect(() => {
    
    if(toggle===true){
       initialLoadData()
       console.log(toggle)}},
    [])

  async function getData() {
    try {
      const response = await axios.get(baseUrl + `?category=${val}`);
      const data = response.data;
      setList(data);
     
    } catch (error) {
      console.log(error);
    }
    setToggle(false)
   
  }
  async function getAllData() {
    try {
      const response = await axios.get(baseUrl);
      const data = response.data;
      setList(data);
     
    } catch (error) {
      console.log(error);
    }
    setToggle(false)
  }

  return (
    <div className="windowCont">
      
      <div className="sidePanel">
        <form className="searchForm">
          <select
            id="itemCategories"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          >
            <option type="text" value="welcome">
              Find Your Deals
            </option>
            <option type="text" value="specials">
              Clearance
            </option>
            <option type="text" value="gardening">
              Gardening
            </option>

            <option type="text" value="books">
              Books
            </option>

            <option type="text" value="pet">
              Pets and Accessories
            </option>

            <option type="text" value="electronics">
              Electronics
            </option>
            <option type="text" value="communications">
              Communication
            </option>

            <option type="text" value="kitchen">
              Kitchen
            </option>
            <option type="text" value="furniture">
              Furniture
            </option>
            <option type="text" value="office">
              Office
            </option>
            <option type="text" value="accessories">
              Beauty
            </option>
            <option type="text" value="games">
              Games
            </option>
            <option type="text" value="gun">
              Guns and Shooting
            </option>
            <option type="text" value="camping">
              Camping
            </option>
            <option type="text" value="fitness">
              Health and Fitness
            </option>
            <option type="text" value="kite">
              Kites
            </option>
            <option type="text" value="art">
              Artwork
            </option>
          </select>
        </form>
        <button id="findStuffButton" type="submit" onClick={() => getData()}>
          Find the Deals!
        </button>
        <button id="findStuffButton" type="submit" onClick={() => getAllData()}>
          Browse the Deals!
        </button>
      </div>

      <div className="shopWindow">
     
     <>{toggle ? <p className="showDeal">{deal}</p>: ''} </>

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
  );
}

export default ShopWindow;
