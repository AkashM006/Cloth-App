import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeDrawer from '../navigation/HomeDrawer';
import LoginStack from '../navigation/LoginStack'
import SplashScreen from './SplashScreen';
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth'
import { login, setIsLoading } from '../redux/userSlice';

const MainScreen = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged((currentUser) => {
            dispatch(login(currentUser))
            if (user.isLoading) dispatch(setIsLoading({ isLoading: false }))
        })
        return subscriber
    }, [dispatch])

    return (
        <>
            {user.isLoading === true ? <SplashScreen /> :
                user.user !== null ? <HomeDrawer /> : <LoginStack />}
        </>
    )
}

export default MainScreen