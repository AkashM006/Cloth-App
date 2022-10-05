import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from '../Screens/DetailScreen'
import MoreScreen from '../Screens/MoreScreen'

const Stack = createNativeStackNavigator()

const MoreStack = () => {
    const headerOption = { header: () => { } }
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={MoreScreen}
                options={headerOption}
            />
            <Stack.Screen
                name='Details'
                component={DetailScreen}
                options={headerOption}
            />
        </Stack.Navigator>
    )
}

export default MoreStack