import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Route from './Route'

const routes = [
    {
        id: 1,
        text: 'Dashboard',
        icon: require('../../../icons/admin-home.png'),
    },
    {
        id: 2,
        text: 'Merchandise',
        icon: require('../../../icons/admin-cloth.png'),
    },
]

const Routes = () => {
    return (
        <View style={styles.container}>
            {routes.map(route => <Route text={route.text} icon={route.icon} key={route.id} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '2.5%',
        marginTop: '25%',
        height: '100%',
        alignItems: 'flex-start'
    },
})

export default Routes