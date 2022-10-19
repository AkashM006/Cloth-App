import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeDrawer from '../navigation/HomeDrawer';
import LoginStack from '../navigation/LoginStack'
import SplashScreen from './SplashScreen';
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth'
import { login, setIsLoading } from '../redux/userSlice';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const language = user.language.code
    const navigation = useNavigation();

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged((currentUser) => {
            dispatch(login(currentUser))
            if (user.isLoading) dispatch(setIsLoading({ isLoading: false }))
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

    return (
        <>
            {user.isLoading === true ? <SplashScreen /> :
                user.user !== null ? <HomeDrawer navigation={navigation} /> : <LoginStack />}
        </>
    )
}

export default MainScreen