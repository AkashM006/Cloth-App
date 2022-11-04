import { View, Text, Alert } from 'react-native'
import React from 'react'
import Login from '../components/Login/Login'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setError, setMsg } from '../redux/userSlice'

const LoginScreen = () => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user.error && user.error.trim().length !== 0) {
            // Alert.alert('Whoops!'
            //     , user.error,
            //     [
            //         {
            //             text: 'OK',
            //             onPress: () => dispatch(setError(''))
            //         }
            //     ])
            dispatch(setMsg({
                title: 'Whoops!',
                text: user.error,
                status: 'failure'
            }))
        }
    }, [user.error])

    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <Login />
        </View>
    )
}

export default LoginScreen