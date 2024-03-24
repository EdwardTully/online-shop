import React from 'react'
import NavBar from './NavBar'
import {useSelector, useDispatch} from 'react-redux'
import DataTable from 'react-data-table-component'
import { removeFromCart } from './cartSlice'

function CheckOut() {
  
  const dispatch=useDispatch()

  const columns=[
  
    {
      name: 'Title',
      selector: (row)=> row.title,
      width: '70%',
      
    },
    {
      name: 'Price',
      selector: (row)=>row.price,
      width: '30%',
      
    }
  ]

   //styling
   const darkTheme = {
    rows: {
      style: {
        fontSize: "18px",
        color: "gray",
        backgroundColor: "black",
        height: "30px;",
      },
    },
    headCells: {
      style: {
        fontSize: "22px",
        color: "white",
        backgroundColor: "orange",
      },
    },
  };

  //collect shopping cart slice state

  const cartContents=useSelector((state)=>state.cart.item)

  //this below doesnt work yet, need to look at docs to understand how to get the state of the selected row.  need to see what way we can modify the check out slice from the table so that we can submit an order.

  const handleChange=(state)=>{
    console.log(state.selectedRows)
  }


  return (
   
        <div className="desktop-1">
      <main className="rectangle-parent">
        <div className="frame-child" >
         <NavBar/>
        </div>
        <section className="frame-wrapper">
          <div className="frame-parent">
            <div className="shopping-cart-wrapper">
              <div className="shopping-cart">Thank you</div>
            </div>
            <div className="frame-item" ><DataTable
                  columns={columns}
                  data={cartContents}
                  customStyles={darkTheme}
                  selectableRows
                  
                  />
                  </div>
                  <button onClick={handleChange}>Remove Selected</button>
          </div>
        </section>
      </main>
    </div>
    
  )
}

export default CheckOut