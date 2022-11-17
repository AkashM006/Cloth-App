import { View, StyleSheet, SectionList } from 'react-native'
import React from 'react'
import Card from './Card'
import CLOTHES from '../../../data/clothes'
import { useState } from 'react'
import StackHeader from '../StackHeader'

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
            items.push(<Card key={Math.random()} cloth={item} index={index} />)
            return (index === clothes[0].data.length - 1) ? <View key={Math.random()} style={styles.row}>{items}</View> : null
        }

        items.push(<Card key={Math.random()} cloth={item} index={index} />)
        return (
            <View key={Math.random()} style={styles.row}>
                {items}
            </View>
        )
    }

    const renderSectionHeader = () => {
        return <StackHeader title={'Merchandise'} />
    }

    return (
        <View style={styles.container}>
            <SectionList
                sections={clothes}
                renderItem={renderItem}
                keyExtractor={(item, index) => Math.random()}
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