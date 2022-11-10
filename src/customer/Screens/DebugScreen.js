import { View, Text } from 'react-native'
import React from 'react'
import DrawerHeader from '../components/DrawerHeader'
import Debug from '../components/Debug/Debug'

const DebugScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <DrawerHeader title={'Debug'} />
            <Debug />
        </View>
    )
}

export default DebugScreen