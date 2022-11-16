import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeDrawer from './customer/navigation/HomeDrawer';
import LoginStack from './customer/navigation/LoginStack'
import SplashScreen from './customer/Screens/SplashScreen';
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth'
import { login, setHasInternet, setIsLoading, setMsg, setType } from './redux/userSlice';
import { useTranslation } from 'react-i18next';
import NetInfo from "@react-native-community/netinfo";
import OneSignal, { NotificationReceivedEvent } from 'react-native-onesignal';
import firestore from '@react-native-firebase/firestore'
import HomeScreen from './admin/Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { setActiveRoute } from './redux/drawerSlice';

// OneSignal Initialization
OneSignal.setAppId('0931b6fa-78dd-449d-a3f1-8343c08b4be7')

// promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
// We recommend removing the following code and instead using an In-App Message to prompt for 
// notification permission(See step 8 at https://documentation.onesignal.com/docs/react-native-sdk-setup#step-5-initialize-the-onesignal-sdk)
OneSignal.promptForPushNotificationsWithUserResponse();

const MainScreen = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const language = user.language.code
    const { t, i18n } = useTranslation();


    OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
        let notification = notificationReceivedEvent.getNotification()

        const title = notification.title
        const body = notification.body

        dispatch(setMsg({
            title,
            text: body,
            status: 'success'
        }))
    })

    OneSignal.setNotificationOpenedHandler(notification => {
        console.log('Notification Opened: ', notification)
        const { title, body } = notification.notification
        dispatch(setMsg({
            title,
            text: body,
            status: 'success'
        }))
    })

    useEffect(() => {
        // for changing the user
        const subscriber = auth().onAuthStateChanged(async currentUser => {
            dispatch(login(currentUser))
            if (user.isLoading) dispatch(setIsLoading(false))
            if (currentUser === null) return

            try { // to check if the user already exists so that we can get user's type
                const result = await firestore().collection('users').where('email', '==', currentUser.email).get()
                if (result.size !== 0) {
                    dispatch(setType(result.docs[0]._data.type))
                    return
                }
            } catch (err) {
                console.log("Error: ", err)
                return
            }

            try { // if the user does not exist then we can create an entry and mention as customer
                await firestore().collection('users').add({
                    email: currentUser.email,
                    type: 'customer'
                })
                dispatch(setType('customer'))
            } catch (err) {
                console.log("Error: ", err)
                return
            }
        })

        auth().onUserChanged(user => {
            dispatch(login(user))
        })
        return subscriber
    }, [dispatch])

    useEffect(() => {
        // for changing language
        i18n.changeLanguage(language)
            .then(_ => {
                // console.log("Language changed")
            })
            .catch(err => {
                console.log('err', err)
            })
    }, [language, i18n])

    useEffect(() => {
        // adding event listener to change the internet connection
        const unsubscribe = NetInfo.addEventListener(state => {
            dispatch(setHasInternet(state.isConnected))
            dispatch(setMsg(state.isConnected === true ?
                { title: 'Connection Status', text: 'You are online', status: 'success' } :
                { title: 'Connection Status', text: 'You are offline', status: 'failure' }))
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const navigationStateChangeHandler = state => {
        if (user.type !== 'admin') return

        const route = state.routes[state.routes.length - 1].name
        dispatch(setActiveRoute(route))

    }

    return (
        <>
            <NavigationContainer onStateChange={navigationStateChangeHandler} >
                {user === true ? <SplashScreen /> : user.user !== null ? <Splitter /> : <LoginStack />}
            </NavigationContainer>
        </>
    )
}

const Splitter = () => {
    const user = useSelector(state => state.user)

    const loginMapper = {
        'customer': <HomeDrawer />,
        'admin': <HomeScreen />
    }

    return (
        <>
            {loginMapper[user.type]}
        </>
    )
}

const Admin = () => {

}

export default MainScreen