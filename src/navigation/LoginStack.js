import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../Screens/LoginScreen'
import SplashScreen from '../Screens/SplashScreen'
import RegisterScreen from '../Screens/RegisterScreen'

const Stack = createNativeStackNavigator();

const LoginStack = () => {
    const headerOptions = { header: () => { } };
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
            {/* <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={headerOptions}
            /> */}
        </Stack.Navigator>
    )
};

export default LoginStack;