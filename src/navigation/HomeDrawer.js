import { View, Text } from 'react-native'
import React from 'react'
import MainScreen from '../Screens/MainScreen'
import SplashScreen from '../Screens/SplashScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>Settings Screen</Text>
        </View>
    )
}

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveBackgroundColor: 'black',
                drawerActiveTintColor: 'white',
                drawerType: 'slide',
            }}
            initialRouteName='Splash'
        >
            <Drawer.Screen
                options={{
                    header: () => { },
                    title: 'Home',
                    swipeEnabled: false,
                }}
                name='Main'
                component={MainScreen}
            />
            <Drawer.Screen
                options={{
                    header: () => { },
                    swipeEnabled: false,
                    drawerItemStyle: { height: 0 },

                }}
                name='Splash'
                component={SplashScreen}
            />
            <Drawer.Screen name='Settings' component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

export default HomeDrawer