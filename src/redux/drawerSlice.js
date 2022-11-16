import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    isDrawerOpen: false,
    activeRoute: 'Dashboard'
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        setDrawerState: (state, action) => {
            state.isDrawerOpen = action.payload
        },
        setActiveRoute: (state, action) => {
            state.activeRoute = action.payload
        },
        resetDrawer: _ => initialState
    }
})

export const { setDrawerState, setActiveRoute, resetDrawer } = drawerSlice.actions

export default drawerSlice.reducer