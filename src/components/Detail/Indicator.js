import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Animated, { interpolateColor, useAnimatedStyle } from 'react-native-reanimated'
import { useEffect } from 'react'

const Indicator = ({ style, inputRange, textRange, backgroundRange, text, object }) => {

    const rBgStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(object.value, inputRange, backgroundRange)
        return { backgroundColor }
    })

    const rTextStyle = useAnimatedStyle(() => {
        const color = interpolateColor(object.value, inputRange, textRange)
        return { color }
    })

    return (
        <Animated.View
            style={[
                styles.indicator,
                style,
                rBgStyle
            ]}>
            <Animated.Text
                style={[
                    styles.text,
                    rTextStyle
                ]}
            >
                {text}
            </Animated.Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontWeight: '800'
    },
    indicator: {
        backgroundColor: 'lightgray',
        position: 'absolute',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 300
    },
})

export default Indicator