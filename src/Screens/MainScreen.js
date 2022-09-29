import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import HomeDrawer from '../navigation/HomeDrawer';
import LoginStack from '../navigation/LoginStack'

const MainScreen = () => {
    const user = useSelector(state => state.user);
    console.log("User: ", user);
    return (
        <>
            {user.user ? <HomeDrawer /> : <LoginStack />}
        </>
    )
}

export default MainScreen