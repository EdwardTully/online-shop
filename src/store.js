import {configureStore} from '@reduxjs/toolkit'
import itemsReducer from './components/shopWindowSlice'

const store = configureStore({
    reducer: {
        virtualWarehouse: itemsReducer
    }
})

export default store