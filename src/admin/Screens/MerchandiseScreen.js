import React from 'react'
import { StyleSheet, View } from 'react-native'
import Content from '../components/MerchandiseScreen/Content'

const MerchandiseScreen = () => {
    return (
        <View style={styles.container}>
            <Content />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default MerchandiseScreen