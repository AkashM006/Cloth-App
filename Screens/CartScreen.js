import { View, Text } from 'react-native'
import React from 'react'
import StackHeader from '../components/StackHeader'
import CartFeed from '../components/Cart/CartFeed'

const CartScreen = () => {
  return (
    <View style={{height: '100%',backgroundColor: 'white'}}>
      <StackHeader title='Cart' />
      <CartFeed />
    </View>
  )
}

export default CartScreen