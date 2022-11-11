import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {

    const closeHandler = () => { }

    return (
        <>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[{ color: 'white' }, styles.heading]}>Cloth</Text>
                    <Text style={[{ color: '#e2c648' }, styles.heading]}>App</Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={closeHandler}>
                        <Image source={require('../../../icons/right.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>fashion app</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        marginHorizontal: '2.5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 24,
        letterSpacing: 1.15,
        fontWeight: '600',
        alignSelf: 'center',
    },
    icon: {
        width: 15,
        height: 15,
        alignSelf: 'center',
        tintColor: 'white',
    },
    iconContainer: {
        padding: '5%',
        backgroundColor: '#1a8eff',
        borderRadius: 15,
    },
    subtitleContainer: {
        marginHorizontal: '2.5%',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#9eb5ff'
    }
})

export default Header