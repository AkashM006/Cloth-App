import { View, Text, StyleSheet, Image, SectionList } from 'react-native'
import React from 'react'
import Card from './Card'
import CLOTHES from '../../../data/clothes'
import { useState } from 'react'
import Header from '../MerchandiseScreen/Header'

const Content = () => {
    let cl = [...CLOTHES, ...CLOTHES, ...CLOTHES]
    let old = [...cl]

    cl = [{ data: [...cl], title: 'Clothes' }]
    const [clothes, setClothes] = useState(cl)

    const endReachedHandler = () => { setClothes(prev => [{ data: [...old, ...prev[0].data], title: 'Clothes' }]) }

    let items = []

    const renderItem = ({ item, index }) => {
        if (index % 2 === 0) {
            items = []
            items.push(<Card cloth={item} index={index} />)
            return (index === clothes[0].data.length - 1) ? <View style={styles.row}>{items}</View> : null
        }

        items.push(<Card cloth={item} index={index} />)
        return (
            <View style={styles.row}>
                {items}
            </View>
        )
    }

    const renderSectionHeader = () => {
        return (
            <View style={styles.header}>
                <Header />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <SectionList
                sections={clothes}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                renderSectionHeader={renderSectionHeader}
                stickyHeaderHiddenOnScroll={true}
                stickySectionHeadersEnabled={true}
                onEndReached={endReachedHandler}
                onEndReachedThreshold={0.25}
                contentContainerStyle={{ paddingBottom: '25%' }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '2.5%',
    },
    header: {
        paddingBottom: '5%',
        backgroundColor: 'white'
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
    row: {
        flexDirection: 'row'
    }
})

export default Content