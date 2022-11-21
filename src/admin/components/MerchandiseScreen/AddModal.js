import { View, Text, Image, StyleSheet, TouchableOpacity, BackHandler, ScrollView, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { Easing, interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated'

const AddModal = ({ visible }) => {

    const closeHandler = () => visible.value = withTiming(0, {
        duration: 700,
        easing: Easing.in(Easing.exp)
    })

    const rStyle = useAnimatedStyle(() => {
        return {
            top: interpolate(visible.value, [0, 1], [100, 0]) + '%',
            left: interpolate(visible.value, [0, 1], [100, 0]) + '%',
            borderRadius: interpolate(visible.value, [0, 0., 1], [100, 100, 0])
        }
    }, [])

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if (visible.value === 1) {
                closeHandler()
                return true
            }
            return false
        })

        return () => backHandler.remove()
    }, [])

    return (
        <>
            {visible && <Animated.View style={[styles.modal, rStyle]}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.heading}>Add New Cloth</Text>
                        <TouchableOpacity onPress={closeHandler} style={styles.iconContainer}>
                            <Image source={require('../../../icons/close.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    {/* Other content */}
                </View>
                <ScrollView style={styles.contentContainer}>
                    <Text style={styles.text}>Name</Text>
                    <TextInput />
                </ScrollView>
            </Animated.View>}
        </>
    )
}

const styles = StyleSheet.create({
    icon: {
        height: 25,
        width: 25,
    },
    iconContainer: {
        padding: '2.5%',
        backgroundColor: '#f0f0f0',
        borderRadius: 14,
    },
    container: {
        flexDirection: 'row',
        width: '100%',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modal: {
        position: 'absolute',
        top: '100%',
        left: '100%',
        bottom: 0,
        right: 0,
        padding: '5%',
        backgroundColor: 'white'
    },
    heading: {
        fontSize: 24,
        fontWeight: '800',
        color: 'black'
    },
    contentContainer: {
        marginTop: '5%',
    },
    text: {
        color: 'black',
        fontSize: 16,
    }
})

export default AddModal