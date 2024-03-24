import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    item:[{}]}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            state.item.push(action.payload)
        }
    },
        removeFromCart: (state, action)=>{
            state.item.filter((ea)=> ea !== action.payload)
        }
})

export default cartSlice.reducer
export const {addToCart, removeFromCart} = cartSlice.actions