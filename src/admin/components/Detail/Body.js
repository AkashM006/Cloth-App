import { View, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import Photo from './Photo'

const Body = () => {

    const item = useRoute().params

    return (
        <View style={styles.container}>
            <Photo image={item.image} rating={item.rating} id={item.id} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})

export default Body