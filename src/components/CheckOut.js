import React, {useState} from 'react'
import NavBar from './NavBar'
import {useSelector, useDispatch} from 'react-redux'
import DataTable from 'react-data-table-component'
import { removeFromCart} from './cartSlice'

function CheckOut() {
  
  const dispatch=useDispatch()

  const [selectedRows, setSelectedRows]=useState(false)

  const columns=[
  
    {
      name: 'Title',
      selector: (row)=>row.title,
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
        fontStyle: 'Roboto',
        color: "gray",
        backgroundColor: "",
        height: "30px;",
      },
    },
    headCells: {
      style: {
        fontSize: "22px",
        fontStyle: 'Roboto',
        color: "black",
        backgroundColor: "white",
      },
    },
  };

  //collect shopping cart slice state,  also attempt to remove empty initial slice state from data so that the empty row doesnt show up. 

  const cartContents=useSelector((state)=>state.cart.item)

//removes empty initial state '' from data so that table doesnt make an empty row:

  const cartContNoEmpty = cartContents.filter((e)=> e.title !=='')

  

 

  //this below doesnt work yet, need to look at docs to understand how to get the state of the selected row.  need to see what way we can modify the check out slice from the table so that we can submit an order.

  //selected row data added to constant:
  const handleChange=({selectedRows})=>{
    setSelectedRows(selectedRows)
   
  }
  //attempt to dispatch a remove action, not working yet error is in the slice reducer...
  const handleRemove=()=>{
    console.log(selectedRows)
    dispatch(removeFromCart(selectedRows))
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
              <div className="shopping-cart">Your Cart Items</div>
            </div>
            <div className="frame-item" ><DataTable
                  columns={columns}
                  data={cartContNoEmpty}
                  customStyles={darkTheme}
                  selectableRows
                  selectableRowsNoSelectAll
                  onSelectedRowsChange={handleChange}
                  
                  striped
                  
                  />
                  </div>
                  <button onClick={handleRemove}>Remove Selected</button>
          </div>
        </section>
      </main>
    </div>
    
  )
}

export default CheckOut