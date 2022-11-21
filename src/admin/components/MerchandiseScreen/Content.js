import { View, StyleSheet, SectionList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from './Card'
import CLOTHES from '../../../data/clothes'
import { useState } from 'react'
import StackHeader from '../StackHeader'
import AddModal from './AddModal'
import { Easing, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

const Content = () => {
    // let cl = [...CLOTHES, ...CLOTHES, ...CLOTHES]
    let cl = [...CLOTHES]
    let old = [...cl]

    cl = [{ data: [...cl], title: 'Clothes' }]
    const [clothes, setClothes] = useState(cl)
    // const [isModalOpen, setIsModalOpen] = useState(false)
    const visibility = useSharedValue(0)

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

    const renderSectionHeader = () => { return <StackHeader title={'Merchandise'} /> }

    const pressHandler = () => {
        // setIsModalOpen(prev => !prev)
        // visibility.value = withSpring(1, { damping: 50 })
        visibility.value = withTiming(1, {
            duration: 700,
            easing: Easing.out(Easing.exp)
        })
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
                // onEndReached={endReachedHandler}
                // onEndReachedThreshold={0.25}
                contentContainerStyle={{ paddingBottom: '25%' }}
                showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity onPress={pressHandler} style={styles.addContainer}>
                <Image source={require('../../../icons/add.png')} style={styles.add} />
            </TouchableOpacity>
            <AddModal visible={visibility} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '2.5%',
        flex: 1,
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
    },
    add: {
        height: 30,
        width: 30,
        tintColor: 'white',
    },
    addContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        padding: '2.5%',
        backgroundColor: '#0180ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
    }
})

export default Content