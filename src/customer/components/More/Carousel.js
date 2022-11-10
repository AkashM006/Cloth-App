import { View, Text, FlatList, Image, StyleSheet, Dimensions, Animated, } from 'react-native'
import React from 'react'
import { useRef } from 'react';

const ITEM_WIDTH = Dimensions.get('window').width;

const Carousel = () => {

    const scrollX = useRef(new Animated.Value(0)).current;

    const ITEMS = [
        { link: 'https://www.zoomnews.in/uploads_2019/newses/louis_1068330933_sm.jpg' },
        { link: 'https://www.adgully.com/img/800/201907/louis-philippe.jpg' },
        { link: 'https://www.marketing91.com/wp-content/uploads/2017/01/banner3.jpg' },
        { link: 'https://www.medianews4u.com/wp-content/uploads/2019/07/stay-Uncrushed.jpg' },
        { link: 'https://lh3.googleusercontent.com/tiy8qcw7_0BejVW5flnaDFCqzi7jU-QD2wvmgzm8ys5ertLp2ikgk-V79dV3IbdFVtQ0lxgoEOg-nzql4IIm_MuKrF_8=w512' }
    ]

    return (
        <View>
            <View style={{ width: ITEM_WIDTH, overflow: 'hidden', }}>
                <Animated.FlatList
                    horizontal
                    data={ITEMS}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <View>
                            <Image style={styles.image} source={{ uri: item.link }} />
                        </View>
                    }}
                    scrollEventThrottle={16}
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={ITEM_WIDTH}
                    decelerationRate='fast'
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true }
                    )}
                    pagingEnabled={true}
                />
                <View style={styles.pagination}>
                    {ITEMS.map((_, index) => {
                        const inputRange = [(index - 1) * ITEM_WIDTH, index * ITEM_WIDTH, (index + 1) * ITEM_WIDTH];
                        const scale = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.5, 1, 0.5],
                            extrapolate: "clamp",
                        })
                        return <Animated.View key={index} style={[styles.dot, { opacity: scale, }]} />
                    })}
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: ITEM_WIDTH,
        resizeMode: 'cover',
        height: 200,
    },
    pagination: {
        flexDirection: 'row',
        marginTop: '2%',
        justifyContent: 'center',
        marginBottom: '5%'
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 8,
        backgroundColor: '#9c9c9c',
        marginRight: 10,
    }
})

export default Carousel