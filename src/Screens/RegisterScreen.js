import { View, Text } from 'react-native'
import React from 'react'
import Register from '../components/Register/Register'

const RegisterScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Register />
        </View>
    )
}

export default RegisterScreen