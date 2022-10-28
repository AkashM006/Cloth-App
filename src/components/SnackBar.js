import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withDelay, withSequence, withSpring, withTiming } from 'react-native-reanimated'
import { useEffect } from 'react'
import { setMsg } from '../redux/userSlice'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

const SnackBar = () => {

    const dispatch = useDispatch()
    const msg = useSelector(state => state.user.msg)

    const bottom = useSharedValue(-200)
    const context = useSharedValue({ bottom: -200 })

    const bottomStyle = useAnimatedStyle(() => {
        return {
            bottom: bottom.value,
            width: `${interpolate(bottom.value, [-200, 50], [10, 80])}%`
        }
    }, [])

    const textStyle = useAnimatedStyle(() => {
        return {
            fontSize: interpolate(bottom.value, [-200, 50], [0, 14])
        }
    }, [])

    useEffect(() => {
        if (msg.text !== '') {
            bottom.value = withSequence(
                withSpring(50, { damping: 50 }),
                withDelay(3000, withTiming(-200)),
            )
        }
    }, [msg])

    return (
        <Animated.View style={[styles.container, bottomStyle]}>
            <Animated.Text style={[styles.text, textStyle]}>
                {msg.text}
            </Animated.Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        position: 'absolute',
        bottom: 100,
        alignSelf: 'center',
        padding: '4%',
        borderRadius: 200,
        backgroundColor: 'black',
        flexDirection: 'row',
    },
    statusContainer: {
        backgroundColor: 'green',
        height: '100%',
        width: '7%',
        borderRadius: 200,
        marginRight: '3%'
    },
    text: {
        color: 'white'
    }
})

export default SnackBar