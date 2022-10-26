import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    items: [],
    color: '',
    count: 0,
    currentSize: '',
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        modify: (state, action) => {
            const { id, size, color, toAdd } = action.payload
            const idx = state.items.findIndex(item => item.id === id && item.size === size && item.color === color)
            state.items[idx].count += toAdd
            if (state.items[idx].count === 0)
                state.items = state.items.filter(item => item.id !== id || item.size !== size)
        },
        addItem: (state, action) => {
            const { id, price, title, savedImage, discount } = action.payload
            const { currentSize: size, count, color } = state
            const idx = state.items.findIndex(item => item.id === id && item.size === size && item.color === color)

            if (idx === -1) {
                state.items.push({
                    id,
                    size,
                    count,
                    price,
                    savedImage,
                    title,
                    discount,
                    color,
                })
                return
            }
            state.items[idx].count += count
        },
        setColor: (state, action) => {
            state.color = action.payload
        },
        resetColor: (state, action) => {
            state.color = ''
        },
        setCount: (state, action) => {
            if (action.payload === -1 && state.count === 0) return
            else if (action.payload === 0) {
                state.count = 0
                return
            }
            state.count += action.payload
        },
        setCurrentSize: (state, action) => {
            state.currentSize = action.payload
        },
        resetSize: state => {
            state.currentSize = ''
        },
        resetCart: _ => initialState
    }
})

export const {
    modify,
    addItem,
    setColor,
    resetColor,
    setCount,
    resetSize,
    setCurrentSize,
    resetCart
} = cartSlice.actions

export default cartSlice.reducer