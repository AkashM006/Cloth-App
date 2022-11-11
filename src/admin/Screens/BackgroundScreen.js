import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Content from '../components/Background/Content'

const BackgroundScreen = () => {
    return (
        <View style={styles.container}>
            <Content />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0180ff'
    }
})

export default BackgroundScreen