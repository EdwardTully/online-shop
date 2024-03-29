import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState= {
    loading: false,
    items: [],
    error: ''
}

const baseUrl = "http://localhost:4000/";

export const fetchItems=createAsyncThunk('virtualWarehouse/fetchItems', (val)=>{
    return axios
    .get(baseUrl+val)
    .then((response)=>response.data)
    .then(console.log(val))
}
    )

const itemsSlice = createSlice({
    name: 'virtualWarehouse',
    initialState: initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchItems.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchItems.fulfilled, (state, action)=>{
            state.loading = false
            state.items = action.payload
            state.error = ''

        })
        builder.addCase(fetchItems.rejected, (state, action)=>{
            state.loading = false
            state.items = []
            state.error = action.error.message
        })
    }
})

export default itemsSlice.reducer