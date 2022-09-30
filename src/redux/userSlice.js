import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import auth from '@react-native-firebase/auth'

const registerUserThunk = createAsyncThunk('user/register', (credentials, thunkApi) => {
    return auth()
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then(userToken => {
            return {}
        })
})

const loginUserThunk = createAsyncThunk('user/login', (credentials, thunkApi) => {
    return auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(user => {
            return {}
        })
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoading: true,
        error: '',
        userLoading: false,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
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
    },
    extraReducers: builder => {
        builder.addCase(registerUserThunk.pending, state => {
            state.userLoading = true
        })
        builder.addCase(registerUserThunk.fulfilled, state => {
            state.userLoading = false
        })
        builder.addCase(registerUserThunk.rejected, (state, action) => {
            state.userLoading = false
            state.user = null
            state.error = action.error.message
        })
        builder.addCase(loginUserThunk.pending, state => {
            state.userLoading = true
        })
        builder.addCase(loginUserThunk.fulfilled, state => {
            state.userLoading = false
        })
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            state.userLoading = false
            state.user = null
            state.error = action.error.message
        })
    }
})

const { login, logout, setIsLoading, setError } = userSlice.actions;


export default userSlice.reducer
export { login, logout, setIsLoading, setError, registerUserThunk, loginUserThunk }