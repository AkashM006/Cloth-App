import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { capitalize, formatCurrency } from '../../../utils/text'
import Animated, { FadeInLeft, FadeInRight, Layout } from 'react-native-reanimated'

const Card = ({ cloth, index }) => {

    const pressHandler = () => { console.log("Pressed") }

    const delay = 50 + ((index / 2) * 150)

    const animation = index % 2 === 0 ? FadeInLeft.delay(delay) : FadeInRight.delay(delay)

    return (
        <Animated.View
            entering={animation}
            style={styles.container}
        >
            <Pressable onPress={pressHandler}>
                <View style={styles.contentContainer}>
                    <Image source={(cloth.adminImage)} style={styles.photo} />
                    <Text style={[styles.title, styles.text]}>{capitalize(cloth.title)}</Text>
                    <Text style={[styles.price, styles.text]}>{formatCurrency(cloth.price)}</Text>
                </View>
            </Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: 300,
        padding: '1%',
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#0180ff',
        borderRadius: 14,
        paddingHorizontal: '5%',
        paddingTop: '5%'
    },
    photo: {
        resizeMode: 'cover',
        width: '100%',
        height: '70%',
        borderRadius: 14,
    },
    title: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
        padding: '2%',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        color: 'rgba(255,255,255, 0.75)',
        padding: '2%',
    },
    edit: {
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        padding: '5%',
        borderTopLeftRadius: 14
    }
})

export default Card