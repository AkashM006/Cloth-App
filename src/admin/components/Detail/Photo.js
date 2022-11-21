import { View, Text, useWindowDimensions, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SharedElement } from 'react-navigation-shared-element'

const Photo = ({ image, rating, id }) => {

    const height = useWindowDimensions().height

    return (
        <View style={styles.imageContainer}>
            <SharedElement id={`item.${id}.photo`}>
                <Image source={image} style={[styles.photo, { height: height / 3 }]} />
            </SharedElement>
            <SharedElement id={`item.${id}.rating`} style={styles.rating}>
                <View style={styles.ratingContentContainer}>
                    <Image source={require('../../../icons/star.png')} style={styles.star} />
                    <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
                </View>
            </SharedElement>
        </View>
    )
}

const styles = StyleSheet.create({
    photo: {
        width: '100%',
        borderRadius: 14,
        resizeMode: 'cover'
    },
    imageContainer: {
        paddingHorizontal: '2.5%'
    },
    rating: {
        padding: '1%',
        paddingRight: 0,
        backgroundColor: 'white',
        borderRadius: 7,
        position: 'absolute',
        right: 20,
        top: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#ffc107',
        borderWidth: 1,
    },
    ratingContentContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    star: {
        height: 20,
        width: 20,
        marginLeft: '5%',
    },
    ratingText: {
        fontWeight: '700',
        fontSize: 16,
        color: '#ffc107',
        paddingLeft: '2%',
    },
})

export default Photo