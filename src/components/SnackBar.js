import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withDelay, withSequence, withSpring, withTiming } from 'react-native-reanimated'
import { useEffect } from 'react'
import { setMsg } from '../redux/userSlice'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

const SnackBar = () => {

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

    const background = {
        success: 'green',
        failure: 'red',
        dark: 'black'
    }

    return (
        <Animated.View style={[styles.container, bottomStyle]}>
            <View style={{ flexDirection: 'row' }}>
                {('title') in msg && msg.title !== '' && <Animated.Text style={[styles.text, styles.title, textStyle]}>
                    {msg.title}
                </Animated.Text>}
                <View style={[styles.status, { backgroundColor: background[msg.status] }]} />
            </View>
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
        padding: '5%',
        borderRadius: 200,
        backgroundColor: 'black',
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
    },
    title: {
        fontWeight: '700'
    },
    status: {
        height: 20,
        width: 20,
        borderRadius: 100,
        marginLeft: '2%'
    }
})

export default SnackBar