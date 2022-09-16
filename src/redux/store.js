import {configureStore} from '@reduxjs/toolkit'
import savedItemReducer from './savedItemSlice'

export default configureStore({
    reducer: {
        savedItems: savedItemReducer,
    },
})