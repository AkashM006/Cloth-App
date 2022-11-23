import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { capitalize, formatCurrency } from '../../../utils/text'
import { useNavigation } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'

const Card = ({ cloth, index }) => {

    const navigation = useNavigation()

    const pressHandler = () => {
        navigation.navigate('Detail', {
            name: cloth.name,
            image: cloth.photo,
            rating: cloth.rating
        })
    }

    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity onPress={pressHandler} style={styles.iconContainer}>
                <Image source={require('../../../icons/edit-admin.png')} style={styles.icon} />
            </TouchableOpacity>
            <SharedElement id={`item.${cloth.name}.rating`} style={styles.rating}>
                <View style={styles.ratingContentContainer}>
                    <Image source={require('../../../icons/star.png')} style={styles.star} />
                    <Text style={styles.ratingText}>{cloth.rating.toFixed(1)}</Text>
                </View>
            </SharedElement>
            <View style={styles.contentContainer}>
                <SharedElement id={`item.${cloth.name}.photo`} style={styles.imageContainer}>
                    <Image source={{ uri: cloth.photo }} style={styles.photo} />
                </SharedElement>
                <Text style={[styles.title, styles.text]}>{capitalize(cloth.name)}</Text>
                <Text style={[styles.price, styles.text]}>{formatCurrency(cloth.price)}</Text>
            </View>
        </View >
    )
}

const arePropsEqual = (prev, next) => {
    const prevCloth = prev.cloth
    const newCloth = next.cloth

    for (let key in prevCloth) {
        if (!(key in newCloth && newCloth[key] === prevCloth[key])) return false
    }
    return true
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: 225,
        padding: '1%',
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#377fc8',
        borderRadius: 14,
        paddingHorizontal: '2%',
        paddingTop: '2%'
    },
    imageContainer: { width: '100%', height: '70%' },
    photo: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
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
    },
    icon: {
        height: 15,
        width: 15,
    },
    iconContainer: {
        padding: '5%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        zIndex: 10,
        top: 10,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    rating: {
        padding: '2%',
        paddingHorizontal: 0,
        backgroundColor: 'white',
        borderRadius: 7,
        position: 'absolute',
        zIndex: 10,
        left: 10,
        top: '58%',
        borderColor: '#ffc107',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    ratingContentContainer: {
        paddingLeft: '5%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    star: {
        height: 20,
        width: 20
    },
    ratingText: {
        fontWeight: '700',
        fontSize: 14,
        color: '#ffc107',
        marginLeft: '2%'
    }
})

export default memo(Card, arePropsEqual)// using memo to memoise and prevent old cards from re rendering