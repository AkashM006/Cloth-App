import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        modify: (state, action) => {
            // first check if it is addition or removal
            // payload: id, toAdd(+1/-1), size
            // items[0] : { id, size, count, price }
            const { id, size, toAdd } = action.payload
            const idx = state.items.findIndex(item => item.id === id && item.size === size)
            state.items[idx].count += toAdd
            if (state.items[idx].count === 0)
                state.items = state.items.filter(item => item.id !== id || item.size !== size)
        },
        addItem: (state, action) => {
            const { id, size, count, price, title, savedImage, discount } = action.payload
            const idx = state.items.findIndex(item => item.id === id && item.size === size)

            if (idx === -1) {
                state.items.push({
                    id,
                    size,
                    count,
                    price,
                    savedImage,
                    title,
                    discount
                })
                return
            }
            state.items[idx].count += count
        },
    }
})

export const { modify, addItem } = cartSlice.actions

export default cartSlice.reducer