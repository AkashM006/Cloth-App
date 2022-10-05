import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CLOTHES from '../data/clothes'
import StackHeader from "../components/StackHeader"
import Description from '../components/Detail/Description'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/savedItemSlice'

const DetailScreen = ({ route }) => {

    const { id } = route.params;

    const cloth = CLOTHES.find(cloth => cloth.id === id);

    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <StackHeader title={cloth.title} HeaderRight={HeaderRight} cloth={cloth} />
            <View>
                <Description cloth={cloth} />
            </View>
        </View>
    )
}

const HeaderRight = ({ cloth }) => {

    const savedItems = useSelector(state => state.savedItems.items);

    const match = savedItems.find(item => item?.id === cloth.id);

    const dispatch = useDispatch();
    const [isBookmarked, setIsBookmarked] = useState(match ? true : false);

    const saveHandler = (cloth) => {
        let item = cloth

        if (isBookmarked) dispatch(remove({ id: item.id }))
        else dispatch(add({ item }))

        setIsBookmarked(prevValue => !prevValue);
    }

    const bookMarkActive = require('../icons/bookmark-active.png')
    const bookMark = require('../icons/bookmark.png')
    const image = isBookmarked === false ?
        bookMark :
        bookMarkActive;

    return <View>
        <TouchableOpacity onPress={() => saveHandler(cloth)}>
            <Image style={{ height: 30, width: 30 }} source={image} />
        </TouchableOpacity>
    </View>
}

export default DetailScreen