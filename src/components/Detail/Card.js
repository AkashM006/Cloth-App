import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Checkbox } from 'react-native-paper'
import { useState } from 'react';
import { useEffect } from 'react';
import { resetColor, setColor } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Card = ({ color, index }) => {

    // create a redux slice or another property in already existing slice so that we can store the active color
    // while unmounting clear the colors in the slice
    // later on use that to add to the cart along with the color

    const [isChecked, setIsChecked] = useState(index === 0 ? true : false)
    const dispatch = useDispatch()
    const currentColor = useSelector(state => state.cart.color)

    useEffect(() => { if (isChecked === true) dispatch(setColor(color.name)) }, [isChecked])

    useEffect(() => {
        if (currentColor === color.name)
            setIsChecked(true)
        else
            setIsChecked(false)
    }, [currentColor])

    return (
        <View style={styles.container}>
            <Checkbox
                status={isChecked ? 'checked' : 'unchecked'}
                onPress={() => {
                    if (isChecked === false) setIsChecked(true)
                }}
            />
            <Text style={styles.innerContainer}>{color.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    innerContainer: {
        padding: 5,
        color: 'black',
        fontWeight: '700'
    },
    colorContainer: {
        height: 10,
        width: 10,
    }
})

export default Card