import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeDrawer from '../navigation/HomeDrawer';
import LoginStack from '../navigation/LoginStack'
import SplashScreen from './SplashScreen';
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth'
import { login, setHasInternet, setIsLoading, setMsg } from '../redux/userSlice';
import { useTranslation } from 'react-i18next';
import NetInfo from "@react-native-community/netinfo";

const MainScreen = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const language = user.language.code
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged((currentUser) => {
            dispatch(login(currentUser))
            if (user.isLoading) dispatch(setIsLoading(false))
        })

        auth().onUserChanged(user => {
            dispatch(login(user))
        })
        return subscriber
    }, [dispatch])

    useEffect(() => {
        i18n.changeLanguage(language)
            .then(_ => {
                // console.log("Language changed")
            })
            .catch(err => {
                console.log('err', err)
            })
    }, [language, i18n])

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            dispatch(setHasInternet(state.isConnected))
        });

        return () => {
            unsubscribe();
        }
    }, [])

    useEffect(() => {
        NetInfo.fetch().then(state => {
            dispatch(setHasInternet(state.isConnected))
            dispatch(setMsg(state.isConnected === true ? { text: 'You are now online' } : { text: 'You are now offline' }))
        })
    }, [user.user])

    return (
        <>
            {user === true ? <SplashScreen /> :
                user.user !== null ? <HomeDrawer /> : <LoginStack />}
        </>
    )
}

export default MainScreen