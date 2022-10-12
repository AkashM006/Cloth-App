import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import DrawerHeader from '../components/DrawerHeader'
import BottomSheet from '../components/Settings/BottomSheet'
import SettingsFeed from '../components/Settings/SettingsFeed'

const SettingsScreen = () => {
    return (
        <>
            <DrawerHeader title={'Settings'} />
            <SettingsFeed />
        </>
    )
}

export default SettingsScreen