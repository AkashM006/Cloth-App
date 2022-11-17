import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const Body = ({ item }) => {

    const height = useWindowDimensions().height

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={[styles.photo, { height: height / 3 }]} />
                <View style={styles.rating}>
                    <Image source={require('../../../icons/star.png')} style={styles.star} />
                    <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    photo: {
        width: '100%',
        borderRadius: 14,
        resizeMode: 'cover'
    },
    imageContainer: {
        paddingHorizontal: '2.5%'
    },
    rating: {
        padding: '2%',
        paddingHorizontal: '3%',
        backgroundColor: 'white',
        borderRadius: 7,
        position: 'absolute',
        right: 20,
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#ffc107',
        borderWidth: 1,
    },
    star: {
        height: 20,
        width: 20,
    },
    ratingText: {
        fontWeight: '700',
        fontSize: 16,
        color: '#ffc107',
        marginLeft: '2%',
    },
})

export default Body