import React from 'react'
import HomeStack from './HomeStack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import auth from '@react-native-firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import MoreStack from './MoreStack'
import DebugScreen from '../Screens/DebugScreen'
import SettingsScreen from '../Screens/SettingsScreen'
import { logoutUserThunk } from '../redux/userSlice'
import { useTranslation } from 'react-i18next'

const MoreMainScreen = () => {
    return (
        <MoreStack />
    )
}

const header = () => { }

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const logout = async () => {
        // if (user.isGoogleAuth === true) {
        //     try {
        //         await GoogleSignin.revokeAccess();
        //         await GoogleSignin.signOut();

        //     } catch (error) {
        //         console.log(error);
        //     }
        // }

        // auth().signOut();
        dispatch(logoutUserThunk(user.isGoogleAuth))
    }

    let options = {
        header,
        swipeEnabled: false
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
                    <DrawerContentScrollView  {...props}>
                        <DrawerItemList {...props} />
                        <DrawerItem label={t('logout')} onPress={logout} />
                    </DrawerContentScrollView>
                )
            }}
        >
            <Drawer.Screen
                options={{
                    header,
                    title: t('home'),
                    swipeEnabled: false,
                    unmountOnBlur: true,
                }}
                name='Main'
                component={HomeStack}
            />
            <Drawer.Screen
                name='More'
                component={MoreMainScreen}
                options={{
                    header,
                    swipeEnabled: false,
                    unmountOnBlur: true,
                    title: t('more'),
                }}
            />
            <Drawer.Screen
                name='Debug'
                component={DebugScreen}
                options={{
                    header,
                    swipeEnabled: false,
                    unmountOnBlur: true,
                }}
            />
            <Drawer.Screen
                name='Settings'
                component={SettingsScreen}
                options={{
                    header,
                    swipeEnabled: false,
                    unmountOnBlur: true,
                    title: t('settings')
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