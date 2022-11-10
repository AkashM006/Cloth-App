import { View, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import Indicator from './Indicator'
// import { useReanimatedIndicatorStyle } from '../../hooks/Styles' when using hooks instead of props
import { useDispatch } from 'react-redux'
import { resetColor, resetSize, setCurrentSize } from '../../../redux/cartSlice'

const { width } = Dimensions.get('window')

const SLIDER_WIDTH = width * 0.8
const SLIDER_HEIGHT = 5

const KNOB_DIMESNION = 16

const MIN_SLIDER_VALUE = 0;
const MAX_SLIDER_VALUE = SLIDER_WIDTH - MIN_SLIDER_VALUE - KNOB_DIMESNION

const RANGE = MAX_SLIDER_VALUE - MIN_SLIDER_VALUE

const INDICATOR_DIMENSION = 30

const RSTYLE = [
    {
        text: 'P',
        inputRange: [0, 0.33 * RANGE, RANGE],
        textOutputRange: ['white', 'black', 'black'],
        backgroundOutputRange: ['black', 'lightgray', 'lightgray'],
        style: { transform: [{ translateX: MIN_SLIDER_VALUE - KNOB_DIMESNION / 2 }] },
        pos: MIN_SLIDER_VALUE,
    },
    {
        text: 'M',
        inputRange: [0, 0.33 * RANGE, 0.66 * RANGE, RANGE],
        textOutputRange: ['black', 'white', 'black', 'black'],
        backgroundOutputRange: ['lightgray', 'black', 'lightgray', 'lightgray'],
        style: { transform: [{ translateX: 0.33 * RANGE - KNOB_DIMESNION / 2 }] },
        pos: 0.33 * RANGE,
    },
    {
        text: 'G',
        inputRange: [0, 0.33 * RANGE, 0.66 * RANGE, RANGE],
        textOutputRange: ['black', 'black', 'white', 'black'],
        backgroundOutputRange: ['lightgray', 'lightgray', 'black', 'lightgray'],
        style: { transform: [{ translateX: 0.66 * RANGE - KNOB_DIMESNION / 2 }] },
        pos: 0.66 * RANGE,
    },
    {
        text: 'GG',
        inputRange: [0, 0.66 * RANGE, RANGE],
        textOutputRange: ['black', 'black', 'white'],
        backgroundOutputRange: ['lightgray', 'lightgray', 'black'],
        style: { transform: [{ translateX: MAX_SLIDER_VALUE - KNOB_DIMESNION / 2 }] },
        pos: MAX_SLIDER_VALUE,
    }
]

const Slider = () => {

    const translateX = useSharedValue(MIN_SLIDER_VALUE)
    const context = useSharedValue({ x: MIN_SLIDER_VALUE })

    const dispatch = useDispatch()

    const changeSize = size => { dispatch(setCurrentSize(size)) }

    const scrollTo = (dest, size) => {
        'worklet'
        translateX.value = withSpring(dest, { damping: 50 })
        runOnJS(changeSize)(size)
    }

    useEffect(() => {
        dispatch(setCurrentSize('P'))
        return () => {
            dispatch(resetColor())
            dispatch(resetSize())
        }
    }, [])

    const gesture = Gesture.Pan().onStart(_ => {
        context.value = { x: translateX.value }
    }).onUpdate(event => {
        if (event.translationX + context.value.x <= MIN_SLIDER_VALUE)
            translateX.value = MIN_SLIDER_VALUE
        else if (event.translationX + context.value.x >= MAX_SLIDER_VALUE)
            translateX.value = MAX_SLIDER_VALUE
        else
            translateX.value = event.translationX + context.value.x
    })
        .onEnd(_ => {
            if (translateX.value <= (0.33 / 2) * RANGE) scrollTo(MIN_SLIDER_VALUE, 'P')
            else if (translateX.value > (0.33 / 2) * RANGE && translateX.value <= (0.99 / 2) * RANGE) scrollTo(0.33 * RANGE, 'M')
            else if (translateX.value > (0.99 / 2) * RANGE && translateX.value <= (1.65 / 2) * RANGE) scrollTo(0.66 * RANGE, 'G')
            else scrollTo(MAX_SLIDER_VALUE, 'GG')
        })

    const reanimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: -6 }
            ]
        }
    })
    return (
        <View style={styles.container}>
            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.bar]}>
                    <Animated.View style={[styles.knob, reanimatedStyle]} />
                </Animated.View>
            </GestureDetector>
            <View style={styles.indicatorContainer}>
                {RSTYLE.map((rStyle, index) => {
                    return (
                        <Indicator
                            style={rStyle.style}
                            inputRange={rStyle.inputRange}
                            textRange={rStyle.textOutputRange}
                            backgroundRange={rStyle.backgroundOutputRange}
                            text={rStyle.text}
                            object={translateX}
                            key={index}
                            position={rStyle.pos}
                            scrollTo={scrollTo}
                        />
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignSelf: 'center',
        width: SLIDER_WIDTH,
    },
    bar: {
        height: 4,
        backgroundColor: 'lightgray',
        borderRadius: 200,
    },
    knob: {
        height: KNOB_DIMESNION,
        width: KNOB_DIMESNION,
        backgroundColor: 'black',
        transform: [
            {
                translateY: -6
            }
        ],
        borderRadius: 200
    },
    indicatorContainer: {
        flexDirection: 'row',
        marginTop: '10%',
        alignItems: 'center',
    },
    indicator: {
        backgroundColor: 'lightgray',
        position: 'absolute',
        width: INDICATOR_DIMENSION,
        height: INDICATOR_DIMENSION,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 300
    },
    text: {
        color: 'black',
        fontWeight: '800'
    }
})

export default Slider