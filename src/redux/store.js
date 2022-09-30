import { combineReducers, configureStore } from '@reduxjs/toolkit'
import savedItemReducer from './savedItemSlice'
import userReducer from './userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const persistConfig = {
    storage: AsyncStorage,
    key: 'root',
}

const rootReducer = combineReducers({
    savedItems: savedItemReducer,
    user: userReducer,
})

// uncomment this when using redux persist
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//             serializableCheck: false,
//         })
// })

// export const persistor = persistStore(store);
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})