import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useSelector } from 'react-redux'

const Profile = () => {

    const user = useSelector(state => state.user)
    // console.log(user)
    // console.log(user.user.displayName)

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, }} />
            <View style={{ flex: 5, backgroundColor: 'white', }}>
                <LinearGradient colors={['#DCE2E2', 'rgba(217, 217, 217, 0)']} locations={[0, 1]} style={styles.gradientContainer}>
                    <View style={{ transform: [{ translateY: -90 }], }}>
                        <Text style={styles.title}>{user.user.displayName}</Text>
                        <Image source={{ uri: user.user.photoURL }} style={styles.photo} />
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
        resizeMode: 'cover'
    },
    gradientContainer: {
        flex: 1,
        alignItems: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
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