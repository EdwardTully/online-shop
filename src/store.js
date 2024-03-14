import {configureStore} from '@reduxjs/toolkit'
import itemsReducer from './components/shopWindowSlice'

const store = configureStore({
    reducer: {
        items: itemsReducer
    }
})

export default store