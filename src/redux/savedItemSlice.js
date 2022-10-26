import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    items: []
}

export const savedItemSlice = createSlice({
    name: 'savedItems',
    initialState,
    reducers: {
        add: (state, action) => {
            state.items.push(action.payload.item);
        },
        remove: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
        clear: state => {
            state.savedItems = []
        },
        resetSavedItems: _ => initialState
    }
})

export const { add, remove, clear, resetSavedItems } = savedItemSlice.actions

export default savedItemSlice.reducer