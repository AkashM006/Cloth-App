import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const CardHeader = ({title,price}) => {
  return (
    <View style={styles.container}>
      <View style={{paddingRight: 10}}>
        <Text style={{color: 'black', fontSize: 24}}>{title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Text>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '900'}}>{price.toLocaleString('en-US',{style: 'currency',currency: 'USD'})}</Text>
      </View>
      <View>
        <Image source={require('../../assets/tag.png')} style={{height: 30, width: 30}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
})

export default CardHeader;