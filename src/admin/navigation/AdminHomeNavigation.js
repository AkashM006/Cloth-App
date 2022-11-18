import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashboardScreen from '../Screens/DashboardScreen'
import MerchandiseScreen from '../Screens/MerchandiseScreen'
import DetailScreen from '../Screens/DetailScreen'
import MerchandiseNavigation from './MerchandiseNavigation'

const Stack = createNativeStackNavigator()

const AdminHomeNavigation = () => {
    const options = {
        header: () => { }
    }
    return (
        <Stack.Navigator screenOptions={{ contentStyle: { borderRadius: 10 } }} initialRouteName='Dashboard'>
            <Stack.Screen
                name='Dashboard'
                options={options}
                component={DashboardScreen}
            />
            {/* <Stack.Screen
                name='Merchandise'
                options={options}
                component={MerchandiseScreen}
            />
            <Stack.Screen
                name='Detail'
                options={options}
                component={DetailScreen}
            /> */}
            <Stack.Screen
                name='Merchandise'
                options={options}
                component={MerchandiseNavigation}
            />
        </Stack.Navigator>
    )
}

export default AdminHomeNavigation