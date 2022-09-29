import { View, Text } from 'react-native'
import React from 'react'
import Login from '../components/Login/Login'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NavigationActions } from 'react-navigation'

const LoginScreen = () => {
    const navigation = useNavigation();

    // useEffect(() => {
    //     navigation.reset({
    //         index: 1,
    //         actions: [NavigationActions.navigate({ routeName: 'Main' })]
    //     });
    // }, [])
    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <Login />
        </View>
    )
}

export default LoginScreen