import { View, Modal, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'
import { useSelector } from 'react-redux'

const Loader = () => {

    const translateX = useSharedValue(0)
    const visible = useSelector(state => state.user.isLoading)


    const inputRange = [0, 1]
    const outputRange = [-40, 40]

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: interpolate(translateX.value, inputRange, outputRange) }]
        }
    })

    const animate = () => {
        'worklet'
        translateX.value = withRepeat(withTiming(1, 6000), -1, true)
    }


    useEffect(() => {
        animate()
        return () => {
            console.log("Loading unmounted")
            translateX.value = 0
        }
    }, [])

    return (
        <Modal transparent visible={visible}>
            <View style={styles.background}>
                <Image source={require('../icons/app.png')} style={styles.icon} />
                <Animated.View style={[styles.loader, rStyle]} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 100,
        width: 100,
        borderRadius: 20
    },
    loader: {
        backgroundColor: 'white',
        height: 10,
        width: 10,
        marginTop: '2%',
        borderRadius: 100,
        // transform: [
        //     {
        //         translateX: -25
        //     }
        // ]
    }
})

export default Loader