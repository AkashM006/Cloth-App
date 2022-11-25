import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    name: '',
    detail: {}
}

export const selectedItemSlice = createSlice({
    name: 'selectedItems',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setDetail: (state, action) => {
            state.detail = action.payload
        },
        resetSelectedItem: _ => initialState
    }
})

export const { setName, setDetail, resetSelectedItem } = selectedItemSlice.actions

export default selectedItemSlice.reducer