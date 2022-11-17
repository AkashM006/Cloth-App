import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import StackHeader from '../components/StackHeader'
import Body from '../components/Detail/Body'

const DetailScreen = () => {

    // const { id, name, image } = useRoute().params
    const details = useRoute().params

    return (
        <>
            <StackHeader title={details.name} />
            <Body item={details} />
        </>
    )
}

export default DetailScreen