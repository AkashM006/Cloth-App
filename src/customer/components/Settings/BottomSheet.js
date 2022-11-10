import { View, Text, StyleSheet } from 'react-native'
import React, { useImperativeHandle, useCallback } from 'react'
import { Dimensions } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const { height, width } = Dimensions.get('screen')
const maxTranslateY = -height / 2

const BottomSheet = React.forwardRef(({ children, containerStyle }, ref) => {

    const translateY = useSharedValue(0)
    const context = useSharedValue({ y: 0 })
    const isActive = useSharedValue(false)

    const scrollTo = useCallback(dest => {
        'worklet'
        if (dest === 0) isActive.value = false;
        else isActive.value = true;
        translateY.value = withSpring(dest, { damping: 50 })
    }, [])

    const getIsActive = useCallback(_ => {
        return isActive.value
    }, [])

    useImperativeHandle(ref, () => ({ scrollTo, getIsActive }), [scrollTo])

    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value }
        }).onUpdate(event => {
            translateY.value = event.translationY + context.value.y
            translateY.value = Math.max(translateY.value, maxTranslateY)
        }).onEnd(() => {
            if (translateY.value > -height / 2.5)
                scrollTo(0)
            else
                scrollTo(maxTranslateY)

        })

    const animatedBottomSheetStyle = useAnimatedStyle(() => {

        const borderRadius = interpolate(
            translateY.value,
            [-height * 0.7, maxTranslateY],
            [20, 10],
            Extrapolate.CLAMP
        )

        return {
            borderRadius,
            transform: [{ translateY: translateY.value }]
        }
    })

    return (
        <>
            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.container, animatedBottomSheetStyle]}>
                    <View style={styles.line} />
                    <View style={containerStyle}>
                        {children}
                    </View>
                </Animated.View>
            </GestureDetector>
        </>
    )
})

const styles = StyleSheet.create({
    container: {
        height: height,
        width: '100%',
        backgroundColor: 'black',
        position: 'absolute',
        top: height,
        borderRadius: 20,
    },
    line: {
        backgroundColor: 'lightgray',
        width: width * 0.25,
        marginTop: '2%',
        marginBottom: '5%',
        borderRadius: 2,
        height: 3,
        alignSelf: 'center'
    }
})

export default BottomSheet