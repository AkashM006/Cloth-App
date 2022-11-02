import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const registerUserThunk = createAsyncThunk('user/register', (credentials, thunkApi) => {
    return auth()
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then(userToken => {
            return auth().currentUser.updateProfile({ displayName: credentials.name })
        })
        .then(_ => {
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

const logoutUserThunk = createAsyncThunk('user/logout', (isGoogleAuth, thunkApi) => {
    if (isGoogleAuth) {
        return GoogleSignin
            .revokeAccess()
            .then(_ => {
                return GoogleSignin.signOut()
            })
            .then(_ => {
                auth().signOut()
                return {}
            })
    }
    auth().signOut()
    return {}
})

let initialState = {
    user: null,
    isLoading: true,
    error: '',
    userLoading: false,
    isGoogleAuth: false,
    language: {
        code: 'en',
        name: 'English'
    },
    msg: {
        text: '',
        title: '',
    },
    hasInternet: true,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        setIsGoogleAuth: (state, action) => {
            state.isGoogleAuth = action.payload
        },
        logout: state => {
            state.user = null
            state.isGoogleAuth = false
            state.language.code = 'en'
            state.language.name = 'English'
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        },
        setMsg: (state, action) => {
            state.msg = action.payload
            if (!'title' in action.payload)
                state.msg.title = ''
        },
        setHasInternet: (state, action) => {
            state.hasInternet = action.payload
        },
        resetUser: _ => initialState
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
            state.isGoogleAuth = false
        })
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            state.userLoading = false
            state.user = null
            state.error = action.error.message
        })
        builder.addCase(logoutUserThunk.fulfilled, state => {
            state.isGoogleAuth = false
            state.language.code = 'en'
            state.language.name = 'English'
        })
        builder.addCase(logoutUserThunk.rejected, (state, action) => {
            state.error = action.error.message
        })
    }
})

const {
    login,
    logout,
    setIsLoading,
    setError,
    setIsGoogleAuth,
    setLanguage,
    setMsg,
    setHasInternet,
    resetUser
} = userSlice.actions;


export default userSlice.reducer
export {
    login,
    logout,
    setIsLoading,
    setError,
    setIsGoogleAuth,
    setLanguage,
    setMsg,
    setHasInternet,
    resetUser,
    registerUserThunk,
    loginUserThunk,
    logoutUserThunk,
}