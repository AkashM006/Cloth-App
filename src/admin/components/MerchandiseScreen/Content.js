import { View, Text, StyleSheet, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import React from 'react'
import Card from './Card'
import CLOTHES from '../../../data/clothes'
import { useState } from 'react'
import { useCallback } from 'react'

const Header = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
            <Text style={styles.text}>Clothes</Text>
            <Image source={require('../../../icons/chevron-right.png')} style={styles.icon} />
        </View>
    )
}

const Content = () => {
    let cl = [...CLOTHES, ...CLOTHES, ...CLOTHES]

    const [clothes, setClothes] = useState(cl)

    const endReachedHandler = () => { setClothes(prev => [...prev, ...cl]) }

    const renderItem = useCallback(({ item, index }) => <Card cloth={item} index={index} />, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={clothes}
                keyExtractor={(_, index) => index}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: '51%' }}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={Header}
                bounces={false}
                onEndReached={endReachedHandler}
                onEndReachedThreshold={0.25}
            // extraData={pages}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '2.5%',
        marginTop: '10%',
    },
    text: {
        color: 'gray',
        fontSize: 18,
        fontWeight: '500'
    },
    icon: {
        width: 15,
        height: 15,
        marginLeft: '5%',
        tintColor: 'gray'
    },

})

export default Content