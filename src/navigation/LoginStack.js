import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../Screens/LoginScreen'
import SplashScreen from '../Screens/SplashScreen'
import RegisterScreen from '../Screens/RegisterScreen'
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen'
import OneSignal from 'react-native-onesignal'
import { useDispatch, useSelector } from 'react-redux'
import { resetOneSignalData } from '../redux/oneSignalSlice'
import { setIsLoading } from '../redux/userSlice'

const Stack = createNativeStackNavigator();

const LoginStack = () => {
    const headerOptions = { header: () => { } };
    const dispatch = useDispatch()
    const oneSignalData = useSelector(state => state.oneSignal)

    useEffect(() => {
        // here reset oneSignal
        if (oneSignalData.isLoggedIn === true)
            OneSignal.removeExternalUserId(result => { dispatch(resetOneSignalData()) })

    }, [])

    return (
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
                name="Main"
                component={LoginScreen}
                options={headerOptions}
            />
            <Stack.Screen
                name='Register'
                component={RegisterScreen}
                options={headerOptions}
            />
            <Stack.Screen
                name='ForgotPassword'
                component={ForgotPasswordScreen}
                options={headerOptions}
            />
            {/* <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={headerOptions}
            /> */}
        </Stack.Navigator>
    )
};

export default LoginStack;