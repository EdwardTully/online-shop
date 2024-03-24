import {configureStore} from '@reduxjs/toolkit'
import itemsReducer from './components/shopWindowSlice'
import cartReducer from './components/cartSlice'

const store = configureStore({
    reducer: {
        virtualWarehouse: itemsReducer,
        cart: cartReducer,
    }
})

export default store