import React from 'react'
import TitleBar from './TitleBar'
import ShopWindow from './ShopWindow'
import NavBar from './NavBar'

function StartShop() {
  return (
    <div className="Home">
      <TitleBar />

      <NavBar />
      <ShopWindow />
    </div>
  );
}

export default StartShop