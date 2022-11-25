import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { capitalize, formatCurrency } from '../../../utils/text'
import { useNavigation } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'
import { useDispatch } from 'react-redux'
import { setName } from '../../../redux/selectedItemSlice'

const Card = ({ cloth, index }) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const pressHandler = () => {
        dispatch(setName(cloth.name))
        navigation.navigate('Detail', {
            name: cloth.name,
            image: cloth.photo,
        })
    }

    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity onPress={pressHandler} style={styles.iconContainer}>
                <Image source={require('../../../icons/edit-admin.png')} style={styles.icon} />
            </TouchableOpacity>
            {/* <SharedElement id={`item.${cloth.name}.rating`} style={styles.rating}>
                <View style={styles.ratingContentContainer}>
                    {cloth.ratedCount !== 0 && <Image source={require('../../../icons/star.png')} style={styles.star} />}
                    <Text style={styles.ratingText}>
                        {cloth.ratedCount !== 0 ? cloth.rating.toFixed(1) : 'Not Rated'}
                    </Text>
                </View>
            </SharedElement> */}
            {/* <SharedElement id={`item.${cloth.name}.rating`} style={styles.rating}> */}
            <View style={styles.rating}>
                <View style={styles.ratingContentContainer}>
                    {cloth.ratedCount !== 0 && <Image source={require('../../../icons/star.png')} style={styles.star} />}
                    <Text style={styles.ratingText}>
                        {cloth.ratedCount === 0 ? 'Not Rated' : cloth.rating.toFixed(2)}
                    </Text>
                </View>
            </View>
            {/* </SharedElement> */}
            <View style={styles.contentContainer}>
                <SharedElement id={`item.${cloth.name}.photo`} style={styles.imageContainer}>
                    <Image source={{ uri: cloth.photo }} style={styles.photo} />
                </SharedElement>
                <Text style={[styles.title, styles.text]}>{capitalize(cloth.name)}</Text>
                <Text style={[styles.price, styles.text]}>{formatCurrency(+cloth.price)}</Text>
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
        position: 'absolute',
        zIndex: 5,
        left: 15,
        top: '56%',
        borderColor: '#ffc107',
        borderWidth: 2,
        paddingHorizontal: 5,
        paddingVertical: 2,
        justifyContent: 'space-between',
        borderRadius: 7,
        backgroundColor: 'rgba(0,0,0,0.25)'
    },
    ratingContentContainer: {
        flexDirection: 'row'
    },
    star: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    ratingText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffc107',
    },
})

export default memo(Card, arePropsEqual)// using memo to memoise and prevent old cards from re rendering