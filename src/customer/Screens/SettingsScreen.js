import React from 'react'
import DrawerHeader from '../components/DrawerHeader'
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