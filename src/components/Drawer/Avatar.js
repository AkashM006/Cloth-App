import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const DIMENSION = 70

const Avatar = () => {

    const user = useSelector(state => state.user.user)
    const navigation = useNavigation()

    const pressHandler = () => {
        navigation.navigate('Profile')
    }

    const img = user.photoURL.trim().length === 0 ? require('../../icons/profile.png') : { uri: user.photoURL }

    return (
        <View style={styles.container}>
            <Image source={img} style={styles.photo} />
            <View style={{ justifyContent: 'space-between', }}>
                <View>
                    <Text style={[styles.text, styles.heading]}>{user.displayName}</Text>
                    <Text style={styles.text}>{user.email}</Text>
                </View>
                <Pressable onPress={pressHandler}>
                    <View style={{ marginTop: '5%' }}>
                        <Text style={[styles.text, styles.heading]}>View Profile</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: '5%',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 2,
        padding: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        marginHorizontal: '3%',
        borderRadius: 5,
        marginTop: '3%',
        flex: 1,
    },
    photo: {
        height: DIMENSION,
        width: DIMENSION,
        borderRadius: 100,
        backgroundColor: 'white',
    },
    text: { color: 'white' },
    heading: {
        fontWeight: '800',
        fontSize: 16
    },
})

export default Avatar