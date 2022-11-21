import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import StackHeader from '../components/StackHeader'
import Body from '../components/Detail/Body'

const DetailScreen = () => {

    // const { id, name, image } = useRoute().params
    const details = useRoute().params

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: '2.5%' }}>
                <StackHeader title={details.name} />
            </View>
            <Body item={details} />
        </View>
    )
}

export default DetailScreen