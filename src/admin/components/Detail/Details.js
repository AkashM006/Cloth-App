import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { formatCurrency } from '../../../utils/text'
import Skeleton from '../Skeleton/Skeleton'
import { useDispatch, useSelector } from 'react-redux'
import firestore from '@react-native-firebase/firestore'
import { resetSelectedItem, setDetail } from '../../../redux/selectedItemSlice'
import { useNavigation } from '@react-navigation/native'
import Editable from './Editable'
import { useState } from 'react'

const Details = () => {

    const selectedItem = useSelector(state => state.selectedItem.name)
    const detail = useSelector(state => state.selectedItem.detail)
    const [hasLoaded, setHasLoaded] = useState(false)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const getData = async () => {
        const result = await (await firestore().collection('clothes').where('name', '==', selectedItem).get()).docs
        if (result === null) {
            Alert.alert("Whoops!", "No such cloth exists!")
            navigation.goBack()
        }
        dispatch(setDetail(result[0]._data))
    }

    useEffect(() => {
        setHasLoaded(!(detail === null || detail === undefined || Object.keys(detail).length === 0))
    }, [detail])

    useEffect(() => {
        getData()

        return () => {
            dispatch(resetSelectedItem())
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                {/* <View>
                    {
                        detail === null || detail === undefined || Object.keys(detail).length === 0 ?
                            <Skeleton height={30} width={'30%'} borderRadius={10} /> :
                            <Text style={styles.price}>{formatCurrency(+detail.price)}</Text>
                    }
                </View> */}
                <Editable hasLoaded={hasLoaded} height={30} width={'70%'} borderRadius={10} placeholder='Name' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        paddingHorizontal: '5%'
    },
    topContainerText: {
        fontSize: 24,
        fontWeight: '800',
        color: 'black'
    },
    topContainer: { justifyContent: 'space-between' },
    price: {
        fontSize: 24,
        color: 'black',
        fontWeight: '500'
    }
})

export default Details