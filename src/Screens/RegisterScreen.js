import { View, Alert } from 'react-native'
import React, { useEffect } from 'react'
import Register from '../components/Register/Register'
import { useDispatch, useSelector } from 'react-redux'

const RegisterScreen = () => {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (user.error && user.error.trim().length !== 0) {
            Alert.alert('Whoops!'
                , user.error,
                [
                    {
                        text: 'OK',
                        onPress: () => dispatch(setError(''))
                    }
                ])
        }
    }, [user.error])

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Register />
        </View>
    )
}

export default RegisterScreen