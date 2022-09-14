import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'

const Card = ({cloth,index}) => {
  return (
    <View style={[styles.container,(index%2==1?{marginTop: '7%',paddingTop: '7%'}:{})]}>
      {cloth.link && <Image style={{width: '95%', height: 150, resizeMode: 'cover', borderRadius: 15}} source={{uri: cloth.link}} />}
      {cloth.name && <Text style={{color: '#A9A9A9', marginTop: '5%',fontSize: 15}}>{cloth.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Text>}
      {cloth.price && <Text style={{color: 'black', fontSize: 17, fontWeight: '800'}}>{cloth.price.toLocaleString('en-US',{style:'currency',currency: 'USD'})}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: '2%',
        backgroundColor: 'white',
        flex: 1,
    }
})

export default Card