import React from 'react'
import HomeStack from './HomeStack'
import SplashScreen from '../Screens/SplashScreen'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import { useSelector } from 'react-redux'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {

    const user = useSelector(state => state.user)

    const logout = async () => {
        if (user.isGoogleAuth === true) {
            try {
                await GoogleSignin.revokeAccess();
                await GoogleSignin.signOut();

            } catch (error) {
                console.error(error);
            }
        }

        auth().signOut();
    }

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveBackgroundColor: 'black',
                drawerActiveTintColor: 'white',
                drawerType: 'slide',
            }}
            initialRouteName='Home'
            drawerContent={props => {
                return (
                    <DrawerContentScrollView {...props}>
                        <DrawerItemList {...props} />
                        <DrawerItem label='Logout' onPress={logout} />
                    </DrawerContentScrollView>
                )
            }}
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
            {/* <Drawer.Screen
                name='Logout'
                component={LogoutScreen}
                options={{
                    header: () => { },
                    swipeEnabled: false,
                }}
            /> */}
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