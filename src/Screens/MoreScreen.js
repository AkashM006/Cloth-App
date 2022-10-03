import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HamBurger from '../icons/HamBurger.svg'
import More from '../components/More/More'

const MoreScreen = () => {
    const navigation = useNavigation();

    const navigationHandler = () => {
        navigation.openDrawer()
    }
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={navigationHandler}>
                    <HamBurger height={25} width={25} />
                </TouchableOpacity>
                <View style={{ marginLeft: '5%' }}>
                    <Text style={{ fontSize: 24, color: 'black', }}>More</Text>
                </View>
            </View>
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