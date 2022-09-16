import {createSlice} from '@reduxjs/toolkit'

export const savedItemSlice = createSlice({
    name: 'savedItems',
    initialState: {
        items: []
    },
    reducers: {
        add: (state,action) => {
            state.items.push(action.payload.item);
        },
        remove: (state,action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id )
        },
        clear: state => {
            state.savedItems = []
        }
    }
})

export const {add,remove,clear} = savedItemSlice.actions

export default savedItemSlice.reducer