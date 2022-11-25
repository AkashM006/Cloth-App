import { View, Text, useWindowDimensions, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SharedElement } from 'react-navigation-shared-element'

const Photo = ({ image, name }) => {

    const height = useWindowDimensions().height

    return (
        <View style={styles.imageContainer}>
            <SharedElement id={`item.${name}.photo`}>
                <Image source={{ uri: image }} style={[styles.photo, { height: height / 3 }]} />
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
})

export default Photo