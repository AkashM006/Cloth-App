import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveRoute, setDrawerState } from '../../../redux/drawerSlice'
import { useNavigation } from '@react-navigation/native'

const Route = ({ text, icon }) => {

    const activeText = useSelector(state => state.drawer.activeRoute)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const textColor = { true: 'white', false: '#c7e3ff', }

    const fontWeight = { true: '800', false: '600', }

    const backgroundColor = { true: '#1a8eff', false: 'transparent', }

    const pressHandler = () => {
        dispatch(setActiveRoute(text))
        // dispatch(setDrawerState(false))
        navigation.navigate(text)
    }

    return (
        <TouchableOpacity onPress={pressHandler} >
            <View style={[styles.container, { backgroundColor: backgroundColor[activeText === text], padding: '5%' }]}>
                <Image source={icon} style={[styles.icon, { tintColor: activeText === text ? 'white' : '#80bfff' }]} />
                <Text style={{ color: textColor[activeText === text], fontWeight: fontWeight[activeText === text] }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '2.5%',
        borderRadius: 10
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: '10%',
    },
})

export default Route