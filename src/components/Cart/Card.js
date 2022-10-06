import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { modify } from '../../redux/cartSlice';

const Card = ({ item, }) => {

    const dispatch = useDispatch();

    const { id, size, title, price, count, discount } = item;

    const minusHandler = () => {
        dispatch(modify({
            id, size, toAdd: -1,
        }))
    }

    const addHandler = () => {
        dispatch(modify({
            id, size, toAdd: 1,
        }))
    }

    return (
        <View style={styles.container}>
            <View>
                <Image style={{ height: 70, width: 70, borderRadius: 15, backgroundColor: 'white', }} source={item.savedImage} />
            </View>
            <View style={{ marginLeft: '5%', flex: 1, justifyContent: 'center', }}>
                <View>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '800', }}>
                        {title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - {size.toUpperCase()}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '600' }}>
                        Value
                    </Text>
                    <Text style={{ color: 'black', fontSize: 16, }}>{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={{ color: 'black', fontSize: 16, }}>
                        Discount
                    </Text>
                    <Text style={{ color: 'black', fontSize: 16, }}>
                        - {discount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                        <TouchableOpacity onPress={minusHandler}>
                            <Image style={{ height: 20, width: 20, }} source={require('../../icons/minus.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: 'black' }}>{item.count}</Text>
                        <TouchableOpacity onPress={addHandler}>
                            <Image style={{ height: 20, width: 20, }} source={require('../../icons/plus.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row-reverse' }}>
                        <Text style={{ color: 'black', fontSize: 17 }}>{((price * count) - discount).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D9D9D9',
        padding: '5%',
        marginBottom: '5%',
        borderRadius: 20,
        flexDirection: 'row',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '1%'
    },
})

export default Card