import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Route = ({ text, icon }) => {

    const activeText = 'Dashboard'

    const textColor = {
        true: 'white',
        false: '#c7e3ff',
    }

    const fontWeight = {
        true: '800',
        false: '600',
    }

    const backgroundColor = {
        true: '#1a8eff',
        false: 'transparent',
    }

    return (
        <TouchableOpacity>
            <View style={[styles.container, { backgroundColor: backgroundColor[activeText === text], padding: '5%' }]}>
                <Image source={icon} style={[styles.icon, { tintColor: activeText === text ? 'white' : '#80bfff' }]} />
                <Text style={{ color: textColor[activeText === text], fontWeight: fontWeight[activeText === text] }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '2.5%',
        borderRadius: 10
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: '2.5%',
    },
})

export default Route