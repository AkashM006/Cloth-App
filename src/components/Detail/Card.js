import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Checkbox } from 'react-native-paper'
import { useState } from 'react';
import { useEffect } from 'react';
import { resetColor, setColor } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Card = ({ color, index }) => {

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

    const updateHandler = () => {
        if (isChecked === false) setIsChecked(true)
    }

    return (
        <TouchableOpacity onPress={updateHandler}>
            <View style={styles.container}>
                <Checkbox
                    status={isChecked ? 'checked' : 'unchecked'}
                    onPress={updateHandler}
                />
                <Text style={styles.innerContainer}>{color.name}</Text>
            </View>
        </TouchableOpacity>
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