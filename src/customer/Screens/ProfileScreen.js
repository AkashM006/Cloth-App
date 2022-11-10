import { View } from 'react-native'
import React from 'react'
import StackHeader from '../components/StackHeader'
import Profile from '../components/Profile/Profile'

const ProfileScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <StackHeader
                title={'Profile'}
            />
            <Profile />
        </View>
    )
}

export default ProfileScreen