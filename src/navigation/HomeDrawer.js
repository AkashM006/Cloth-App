import React from 'react'
import HomeStack from './HomeStack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import auth from '@react-native-firebase/auth'
import { useSelector } from 'react-redux'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import MoreStack from './MoreStack'

const MoreMainScreen = () => {
    return (
        <MoreStack />
    )
}

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
    useEffect(() => {
        logout()
    }, [])

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
                    <DrawerContentScrollView  {...props}>
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
            <Drawer.Screen
                name='More'
                component={MoreMainScreen}
                options={{
                    header: () => { },
                    swipeEnabled: false,
                    unmountOnBlur: true,
                }}
            />
            {/* <Drawer.Screen
                name='Logout'
                component={LogoutScreen}
                options={{
                    header: () => { },
                    swipeEnabled: false,
                    unmountOnBlur: true,
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