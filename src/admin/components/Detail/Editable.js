import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Skeleton from '../Skeleton/Skeleton'
import { useState } from 'react'
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useEffect } from 'react'
import { useRef } from 'react'

const CustomInput = ({ placeholder, width }) => {

    const [isEditing, setIsEditing] = useState(false)
    const pencil = require('../../../icons/pencil.png')
    const tick = require('../../../icons/tick.png')
    const editSharedValue = useSharedValue(0)
    const ref = useRef(null)

    const pressHandler = () => {
        setIsEditing(prev => !prev)
        ref.current.focus()
    }

    useEffect(() => {
        let target = isEditing === true ? 1 : 0
        editSharedValue.value = withTiming(target, { duration: 200 })
    }, [isEditing])

    let textWidth;
    if (typeof width === 'string')
        textWidth = (parseInt(width) * 0.9) + '%'
    else
        textWidth = width * 0.9

    const backgroundStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(editSharedValue.value, [0, 1], ['white', '#f0f0f0'])
        }
    }, [])

    return <View style={styles.customInputContainer}>
        <Animated.View style={[backgroundStyle, { width: textWidth, }, styles.inputContainer]}>
            <TextInput
                editable={isEditing}
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor='black'
                ref={ref}
            />
        </Animated.View>
        <TouchableOpacity onPress={pressHandler} style={styles.editContainer}>
            <Image source={isEditing === false ? pencil : tick} style={styles.edit} />
        </TouchableOpacity>
    </View>
}

const Editable = ({ hasLoaded, height, width, borderRadius, placeholder }) => {
    return (
        <View>
            {
                hasLoaded === true ?
                    <CustomInput placeholder={placeholder} width={width} /> :
                    <Skeleton height={height} width={width} borderRadius={borderRadius} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    edit: {
        height: 20,
        width: 20,
        // borderColor: 'black',
        // borderWidth: 1
    },
    editContainer: {
        backgroundColor: '#f0f0f0',
        padding: '4%',
        borderRadius: 10,
    },
    customInputContainer: {
        flexDirection: 'row'
    },
    input: {
        width: '100%',
        borderRadius: 10,
        marginRight: '5%',
    },
    inputContainer: {
        borderColor: 'white',
        borderWidth: 1,
        marginRight: '3%',
        borderRadius: 10
    }
})

export default Editable