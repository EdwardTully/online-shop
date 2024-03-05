import React, { useState, useEffect, useRef, useMemo } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";

function ShopWindow() {
  const [term, setTerm] = useState("");
  const [val, setVal] = useState("");
  const [list, setList] = useState([]);
  const baseUrl = "http://localhost:4000/products";

  const getInitialData = async () => {
    await axios
      .get(`http://localhost:3001/products`)
      .then((res) => {
        setList(res.data);

        console.log(res.data);
        console.log(val);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect( () => getInitialData()
  // ,[])

  /*const getData=async()=>{
    
       await axios
      .get(`http://localhost:3001/products?category=${val}`)
      .then((res) => {
       
       const dataItems = res.data

        return dataItems
      })
      .then(setList(dataItems))
      .catch((err) => {
        console.log(err);
      })
     
 
    }*/

  async function getData() {
    try {
      const response = await axios.get(baseUrl + `?category=${val}`);
      const data = response.data;
      setList(data);
      console.log(list);
      console.log(val);
    } catch (error) {
      console.log(error);
    }
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
              Select Your Stuff
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
      </div>

      <div className="shopWindow">
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
