import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashboardScreen from '../Screens/DashboardScreen'

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
        </Stack.Navigator>
    )
}

export default AdminHomeNavigation