import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { capitalize, shorten } from '../../../utils/text'
import { setDrawerState } from '../../../redux/drawerSlice'

const Header = () => {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const pressHandler = () => { dispatch(setDrawerState(true)) }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.photoContainer}>
                    <Image source={{ uri: user.user.photoURL }} style={styles.photo} />
                </View>
                <View>
                    <Text style={[styles.heading, styles.text]}>{shorten(capitalize(user.user.displayName), 10)}</Text>
                    <Text style={styles.subtitle}>{capitalize(user.type)}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={pressHandler} style={styles.menuContainer}>
                <Image style={styles.menu} source={require('../../../icons/admin-menu.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        marginHorizontal: '2.5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    photoContainer: {
        borderRadius: 1000,
        borderColor: '#0180ff',
        borderWidth: 2,
        padding: '1.5%',
        marginRight: '5%',
    },
    photo: {
        width: 60,
        height: 60,
        borderRadius: 1000,
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '900'
    },
    subtitle: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '700'
    },
    menuContainer: {
        backgroundColor: '#E4E4E4',
        padding: '2%',
        borderRadius: 7,
    },
    menu: {
        height: 25,
        width: 25,
    }
})

export default Header