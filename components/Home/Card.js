import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'

const Card = ({cloth}) => {
  return (
      <View>
        <View style={styles.container}>
            <LinearGradient colors={['#eef6f6','white']} locations={[0,0.65]} style={styles.gradientContainer}>
            {/* <LinearGradient colors={['#e0eef5','white']} locations={[0,0.65]} style={styles.gradientContainer} > */}
              <View style={{flex: 1,padding: 10, paddingTop: 20}}>
                <CardHeader title={cloth.item.title} price={cloth.item.price} />
              </View>
              <View style={{flex: 4, paddingLeft: 10, paddingTop: 10}}>
                <CardFooter colors={cloth.item.colors}  />
              </View>
            </LinearGradient>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    gradientContainer:{
        borderRadius: 10,
        height: '100%',
    },
    container:{
        height: '80%',
        width: '85%',
        borderRadius: 10,
        marginRight: 20,
        backgroundColor: 'white',
    }
})

export default Card;