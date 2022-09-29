import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
        },
        logout: (state, action) => {
            state.user = null
        },
        setLoad: (state, action) => {
            state.isLoading = action.payload.isLoading
        },
        setError: (state, action) => {
            state.error = action.payload.error
        }
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer