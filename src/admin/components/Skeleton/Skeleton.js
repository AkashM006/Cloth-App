import { Animated, View } from 'react-native'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const Skeleton = ({ height, width, borderRadius }) => {
    const opacity = useRef(new Animated.Value(0.3))

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity.current, {
                    toValue: 1,
                    useNativeDriver: true,
                    duration: 500,
                }),
                Animated.timing(opacity.current, {
                    toValue: 0.3,
                    useNativeDriver: true,
                    duration: 800,
                })
            ])
        ).start()
    }, [])

    return (
        <Animated.View style={{ borderRadius, opacity: opacity.current, height, width, backgroundColor: 'lightgray' }} />
    )
}

export default Skeleton