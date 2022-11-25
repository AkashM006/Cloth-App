import { View, StyleSheet, SectionList, Image, TouchableOpacity, ActivityIndicator, Text } from 'react-native'
import React from 'react'
import Card from './Card'
import CLOTHES from '../../../data/clothes'
import { useState } from 'react'
import StackHeader from '../StackHeader'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import firestore from '@react-native-firebase/firestore'

const Empty = ({ loading }) => {
    return <>
        <StackHeader title={'Merchandise'} />
        <View style={styles.emptyContainer}>
            {loading === true ? <ActivityIndicator size={'large'} /> : <Text style={styles.text}>You have added no items</Text>}
        </View>
    </>
}

const Content = () => {

    const [clothes, setClothes] = useState([{ data: [], title: 'Clothes' }])
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(true) // for maintaining if the screen has finished loading
    const [isWaiting, setIsWaiting] = useState(false) // when waiting for more elements
    const [lastDoc, setLastDoc] = useState()
    const [endReached, setEndReached] = useState(false)

    const getData = async () => {
        let result;
        try {
            if (lastDoc === undefined)
                result = await firestore().collection('clothes').orderBy('name').limit(10).get()
            else
                result = await firestore().collection('clothes').orderBy('name').startAfter(lastDoc).limit(10).get()
        } catch (err) {
            console.log("Error: ", error)
        }

        try {
            let last = await result.docs
            if (last.length === 0) {
                setEndReached(true)
                return
            }
            setLastDoc(last[last.length - 1])
        } catch (err) {
            console.log("Error here: ", err)
        }

        let fetchedClothes = result.docs.map(cloth => {
            let { name, about, price, discount, sizes, colors, photo, totalRating, ratedCount } = cloth._data
            return {
                name,
                about,
                price,
                discount,
                sizes,
                colors,
                photo,
                rating: ratedCount === 0 ? 0 : totalRating / ratedCount,
                totalRating,
                ratedCount
            }
        })
        setClothes(prev => [{ title: 'Clothes', data: [...prev[0].data, ...fetchedClothes] }])
        if (isLoading === true) setIsLoading(false)
        if (isWaiting === true) setIsWaiting(false)
    }

    useEffect(() => {
        getData()
    }, [])

    const endReachedHandler = () => {
        if (endReached === true) return
        setIsWaiting(true)
        getData()
    }

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

    const renderSectionHeader = ({ section }) => { return section.title === 'sub' ? <></> : <StackHeader title={'Merchandise'} /> }

    const pressHandler = () => { navigation.navigate('Form') }

    const Footer = () => {
        return (<>
            {endReached === false && <ActivityIndicator size={'large'} style={styles.footer} />}
        </>)
    }

    return (
        <View style={styles.container}>
            {clothes[0].data.length === 0 ? <Empty loading={isLoading} /> : <SectionList
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
                ListFooterComponent={Footer}
            />}
            <TouchableOpacity onPress={pressHandler} style={styles.addContainer}>
                <Image source={require('../../../icons/add.png')} style={styles.add} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '2.5%',
        flex: 1,
        backgroundColor: 'white',
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
    },
    emptyContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        marginTop: '5%',
    }
})

export default Content