import React from 'react'
import HomeStack from './HomeStack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import auth from '@react-native-firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import MoreStack from './MoreStack'
import DebugScreen from '../Screens/DebugScreen'
import SettingsScreen from '../Screens/SettingsScreen'
import { logoutUserThunk, resetUser, setIsLoading } from '../redux/userSlice'
import { useTranslation } from 'react-i18next'
import { View, Text, StyleSheet } from 'react-native'
import Avatar from '../components/Drawer/Avatar'
import { useEffect } from 'react'
import { resetCart } from '../redux/cartSlice'
import { resetSavedItems } from '../redux/savedItemSlice'
import { setState } from '../redux/oneSignalSlice'
import OneSignal from 'react-native-onesignal'
import uuidv4 from 'uuidv4'

const MoreMainScreen = () => {
    return (
        <MoreStack />
    )
}

const header = () => { }

const Drawer = createDrawerNavigator()

const HomeDrawer = () => {

    const user = useSelector(state => state.user)
    const oneSignalData = useSelector(state => state.oneSignal)
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation()
    const logout = async () => {
        dispatch(setIsLoading(true))
        dispatch(logoutUserThunk(user.isGoogleAuth))
            .then(_ => {
                dispatch(setIsLoading(false))
            })
            .catch(err => {
                console.log('err', err)
            })
    }

    useEffect(() => {
        // here check for one signal and update the external user id
        if (oneSignalData.isLoggedIn === false) { // the user is logging in
            let id = uuidv4()
            OneSignal.setExternalUserId(id, results => {
                dispatch(setState({
                    isLoggedIn: true,
                    externalUserID: id
                }))
                OneSignal.sendTag('operation', 'login')
            })
        }

        return function () {
            dispatch(resetUser())
            dispatch(resetCart())
            dispatch(resetSavedItems())
        }
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
                        <Avatar />
                        <DrawerItem label='' style={styles.divider} />
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

const styles = StyleSheet.create({
    divider: {
        height: 1,
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
        marginBottom: '5%',
    }
})

export default HomeDrawer