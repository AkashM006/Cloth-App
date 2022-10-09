import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import More from '../components/More/More'
import DrawerHeader from '../components/DrawerHeader'


const MoreScreen = () => {
    // const navigation = useNavigation();

    // const navigationHandler = () => {
    //     navigation.openDrawer()
    // }
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <DrawerHeader title={'More'} />
            <More />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: '5%',
        paddingVertical: '10%',
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default MoreScreen