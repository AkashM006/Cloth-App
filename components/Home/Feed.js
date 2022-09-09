import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Feed = ({style}) => {
  return (
    <View style={[style,styles.container]}>
      <Text style={styles.title}>Autumn Winter</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title:{
        color: 'black',
        textAlign:'center',
        fontWeight: '900',
        fontSize: 32
    }
})

export default Feed