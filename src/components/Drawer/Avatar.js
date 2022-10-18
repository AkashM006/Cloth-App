import { View, Text, StyleSheet, Image, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const DIMENSION = 70

const Avatar = () => {

    const user = useSelector(state => state.user.user)

    const img = user.photoURL?.trim().length === 0 || user.photoURL === null ? require('../../icons/profile.png') : { uri: user.photoURL }

    return (
        <View style={styles.container}>
            <Image source={img} style={styles.photo} />
            <View style={{ justifyContent: 'space-between', }}>
                <View>
                    <Text style={[styles.text, styles.heading]}>{user.displayName?.length <= 17 ? user.displayName : user.displayName.substring(0, 14) + '...'}</Text>
                    <Text style={styles.text}>{user.email.length <= 17 ? user.email : user.email.substring(0, 14) + '...'}</Text>
                </View>
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
        // height: height / 4
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