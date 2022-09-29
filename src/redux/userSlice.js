import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
        },
        logout: (state, action) => {
            state.user = null
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload.isLoading
        },
        setError: (state, action) => {
            state.error = action.payload.error
        }
    }
})

export const { login, logout, setIsLoading, setError } = userSlice.actions

export default userSlice.reducer