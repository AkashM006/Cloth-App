import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Carousel from './Carousel'
import CLOTHES from '../../data/clothes'
import List from '../Explore/List';
import { useState } from 'react';

const DATA = CLOTHES;

const More = () => {
    let data = [...DATA, ...DATA, ...DATA, DATA[0]];
    const [count, setCount] = useState([0]);
    const [counter, setCounter] = useState(1)

    const loadMore = () => {
        setCount(prevValue => [...prevValue, counter])
        setCounter(prevValue => prevValue + 1)
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={count}
                keyExtractor={(_, index) => index}
                renderItem={({ item }) =>
                    <View style={{ flex: 1 }}>
                        <Carousel />
                        <List onPressNavigate={true} isActionShown={false} data={data} />
                    </View>
                }
                bounces={false}
                onEndReached={loadMore}
            />
        </View>
    )
}

export default More