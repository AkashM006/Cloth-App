import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Dashboard/Header'

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10
    }
})

export default DashboardScreen