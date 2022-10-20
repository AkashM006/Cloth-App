import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useSelector } from 'react-redux'
import Form from './Form'

const Profile = () => {

    const user = useSelector(state => state.user)

    const img = user.user.photoURL === null ? require('../../icons/profile.png') : { uri: user.user.photoURL }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <View style={{ flex: 1, }} />
            <View style={{ flex: 5, backgroundColor: 'white', }}>
                <LinearGradient colors={['#DCE2E2', 'rgba(217, 217, 217, 0)']} locations={[0, 1]} style={styles.gradientContainer}>
                    <View style={{ transform: [{ translateY: -90 }], width: '100%', }}>
                        <Text style={styles.title}>{user.user.displayName}</Text>
                        <Image source={img} style={styles.photo} />
                        <Form />
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    photo: {
        height: 150,
        width: 150,
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 100,
        backgroundColor: 'white',
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    gradientContainer: {
        flex: 1,
        alignItems: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: '2%'
    },
    title: {
        color: 'black',
        textAlign: 'center',
        marginTop: '2%',
        fontWeight: '800',
        fontSize: 18
    }
})

export default Profile