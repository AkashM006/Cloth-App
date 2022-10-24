import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { modify } from '../../redux/cartSlice';

const Card = ({ item, }) => {

    const dispatch = useDispatch();

    const { id, size, title, price, count, discount, color } = item;

    const minusHandler = () => { dispatch(modify({ id, color, size, toAdd: -1, })) }

    const addHandler = () => { dispatch(modify({ id, color, size, toAdd: 1, })) }

    return (
        <View style={styles.container}>
            <View>
                <Image style={{ height: 70, width: 70, borderRadius: 15, backgroundColor: 'white', }} source={item.savedImage} />
            </View>
            <View style={{ marginLeft: '5%', flex: 1, justifyContent: 'center', }}>
                <View >
                    <Text style={[styles.text, styles.heading]}>
                        {title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - {size.toUpperCase()}
                    </Text>
                    <Text style={[styles.text, styles.subHeading]}>
                        {color}
                    </Text>
                </View>
                {/* <View style={styles.textContainer}>
                    <Text style={[styles.text, styles.subHeading]}>
                        Color
                    </Text>
                    <Text style={[styles.text, styles.subtitle]}>
                        {color}
                    </Text>
                </View> */}
                <View style={styles.textContainer}>
                    <Text style={[styles.text, styles.subHeading]}>
                        Value
                    </Text>
                    <Text style={[styles.text, styles.subtitle]}>
                        {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, styles.subtitle]}>
                        Discount
                    </Text>
                    <Text style={[styles.text, styles.subtitle]}>
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
                        <Text style={[styles.text, styles.subtitle]}>
                            {((price * count) - discount).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </Text>
                    </View>
                </View>
            </View>
        </View >
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
    text: {
        color: 'black',
    },
    subHeading: {
        fontSize: 16,
        fontWeight: '800',
    },
    heading: {
        fontSize: 20,
        fontWeight: '800',
    },
    subtitle: {
        fontSize: 16,
    }
})

export default Card