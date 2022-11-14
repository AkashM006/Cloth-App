import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    isDrawerOpen: false
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        setDrawerState: (state, action) => {
            state.isDrawerOpen = action.payload
        },
        resetDrawer: _ => initialState
    }
})

export const { setDrawerState, resetDrawer } = drawerSlice.actions

export default drawerSlice.reducer