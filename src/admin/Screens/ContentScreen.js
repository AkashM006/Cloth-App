import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import AdminHomeNavigation from '../navigation/AdminHomeNavigation'

const DURATION = 250

const ContentScreen = () => {

    const drawerState = useSelector(state => state.drawer)

    const translateX = useSharedValue(0)
    const borderRadius = useSharedValue(0)
    const translateY = useSharedValue(0)
    const rotate = useSharedValue(0)
    const borderWidth = useSharedValue(0)
    const padding = useSharedValue(0)

    useEffect(() => {
        if (drawerState.isDrawerOpen) {
            translateX.value = 250
            borderRadius.value = 10
            translateY.value = 100
            rotate.value = -10
            borderWidth.value = 2
            padding.value = 20
        }
        else {
            translateX.value = 0
            borderRadius.value = 0
            translateY.value = 0
            rotate.value = 0
            borderWidth.value = 0
            padding.value = 0
        }
    }, [drawerState.isDrawerOpen])

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: withTiming(translateX.value, { duration: DURATION }) },
                { translateY: withTiming(translateY.value, { duration: DURATION }) },
                { rotate: withTiming(rotate.value + 'deg', { duration: DURATION }) },
            ],
            borderRadius: withTiming(borderRadius.value, { duration: DURATION }),
            padding: withTiming(padding.value, { duration: DURATION }),
            borderWidth: withTiming(borderWidth.value, { duration: DURATION }),
        }
    }, [translateX, borderRadius, translateY, rotate, padding, borderWidth])

    const rContainerStyle = useAnimatedStyle(() => {
        return { borderRadius: withTiming(borderRadius.value, { duration: DURATION }), }
    }, [borderRadius])

    return (
        <Animated.View style={[styles.container, rStyle]}>
            <Animated.View style={[styles.contentContainer, rContainerStyle]}>
                <AdminHomeNavigation />
            </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexGrow: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderColor: 'rgba(255,255,255,0.2)',
        padding: '1.5%'
    },
    contentContainer: {
        backgroundColor: 'white',
        flex: 1,
    }
})

export default ContentScreen