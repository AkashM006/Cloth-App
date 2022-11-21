import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { formatCurrency } from '../../../utils/text'

const Details = ({ price, qty }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.topContainerText}>{formatCurrency(price)}</Text>
                <Text style={styles.topContainerText}>Qty: {qty}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        paddingHorizontal: '5%'
    },
    topContainerText: {
        fontSize: 24,
        fontWeight: '800',
        color: 'black'
    },
    topContainer: {
        // flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default Details