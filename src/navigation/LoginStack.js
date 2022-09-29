import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../Screens/LoginScreen'

const Stack = createNativeStackNavigator();

const LoginStack = () => {
    const headerOptions = { header: () => { } };
    return (
        <Stack.Navigator initialRouteName="Login">
            {/* <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={headerOptions}
            /> */}
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={headerOptions}
            />
        </Stack.Navigator>
    )
};

export default LoginStack;