import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Carousel from './Carousel'
import CLOTHES from '../../data/clothes'
import List from '../Explore/List';
import { useState } from 'react';

const DATA = CLOTHES;

const More = () => {
    DATA = [...DATA, ...DATA];
    const [count, setCount] = useState([0]);
    return (
        <View>
            <FlatList
                data={count}
                keyExtractor={(_, index) => index}
                renderItem={(_) =>
                    <View style={{ flex: 1 }}>
                        <Carousel />
                    </View>
                }
            />
        </View>
    )
}

export default More