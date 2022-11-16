import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Header = () => {

    const navigation = useNavigation()

    const pressHandler = () => { navigation.goBack() }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={pressHandler} style={styles.button}>
                <Image style={styles.icon} source={require('../../../icons/right.png')} />
            </TouchableOpacity>
            <Text style={styles.text}>
                Merchandise
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: '5%',
        paddingHorizontal: '2.5%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 15,
        height: 15,
        transform: [{ rotate: '180deg' }]
    },
    button: {
        padding: '5%',
        backgroundColor: '#f0f0f0',
        marginRight: '5%',
        borderRadius: 15,
    },
    text: {
        color: 'black',
        fontSize: 24,
        fontWeight: '800'
    }
})

export default Header