import { interpolateColor, useAnimatedStyle } from 'react-native-reanimated'

const useReanimatedIndicatorStyle = (valueObject, inputRange, outputRange) => {
    return useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(valueObject.value, inputRange, outputRange)
        return { backgroundColor }
    })
}

export { useReanimatedIndicatorStyle }