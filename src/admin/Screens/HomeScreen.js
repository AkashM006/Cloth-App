import React from 'react'
import BackgroundScreen from './BackgroundScreen'
import ContentScreen from './ContentScreen'
import { enableScreens } from 'react-native-screens'

enableScreens()

const HomeScreen = () => {
    return (
        <>
            <BackgroundScreen />
            <ContentScreen />
        </>
    )
}

export default HomeScreen