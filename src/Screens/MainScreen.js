import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeDrawer from '../navigation/HomeDrawer';
import LoginStack from '../navigation/LoginStack'
import SplashScreen from './SplashScreen';
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth'
import { setIsLoading } from '../redux/userSlice';

const MainScreen = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    console.log("User: ", user);

    const authStateChanged = (user) => {
        dispatch(setIsLoading({ isLoading: false }))
        console.log("User: ", user);
        // todo: change the state of loading and the user
        // if (user ?? Object.keys(user) !== 0) {
        // }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(authStateChanged)
        return subscriber()
    })

    return (
        <>
            {user.isLoading === true ? <SplashScreen /> : user.user ? <HomeDrawer /> : <LoginStack />}
        </>
    )
}

export default MainScreen