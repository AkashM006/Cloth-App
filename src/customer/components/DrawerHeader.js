import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HamBurger from '../../icons/HamBurger.svg'

const DrawerHeader = ({ title }) => {
    const navigation = useNavigation();

    const navigationHandler = () => {
        navigation.openDrawer()
    }
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={navigationHandler}>
                <HamBurger height={25} width={25} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: '5%',
        paddingVertical: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 24,
        color: 'black',
    },
    textContainer: {
        marginLeft: '5%'
    }
})

export default DrawerHeader