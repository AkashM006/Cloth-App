import React from 'react'
import HomeStack from './HomeStack'
import SplashScreen from '../Screens/SplashScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useEffect } from 'react'
import auth from '@react-native-firebase/auth'

const LogoutScreen = () => {
    useEffect(() => {
        auth().signOut();
    }, [])
    return (
        <></>
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
            initialRouteName='Home'
        >
            <Drawer.Screen
                options={{
                    header: () => { },
                    title: 'Home',
                    swipeEnabled: false,
                }}
                name='Main'
                component={HomeStack}
            />
            <Drawer.Screen
                name='Logout'
                component={LogoutScreen}
                options={{
                    header: () => { },
                    swipeEnabled: false,
                }}

            />
            {/* <Drawer.Screen
                options={{
                    header: () => { },
                    swipeEnabled: false,
                    drawerItemStyle: { height: 0 },

                }}
                name='Splash'
                component={SplashScreen}
            /> */}
        </Drawer.Navigator>
    )
}

export default HomeDrawer