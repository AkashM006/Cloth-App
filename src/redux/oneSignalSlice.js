import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    isLoggedIn: false,
    externalUserID: ''
}

export const oneSignalSlice = createSlice({
    name: 'oneSignal',
    initialState,
    reducers: {
        setExternalUserID: (state, action) => {
            state.externalUserID = action.payload
        },
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        },
        setState: (state, action) => {
            state.externalUserID = action.payload.externalUserID
            state.isLoggedIn = action.payload.isLoggedIn
        },
        resetOneSignalData: _ => initialState
    }
})

export const { setExternalUserID, setLoggedIn, setState, resetOneSignalData } = oneSignalSlice.actions

export default oneSignalSlice.reducer