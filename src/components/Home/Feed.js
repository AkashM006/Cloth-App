import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Card from './Card'
import { FlatList } from 'react-native-gesture-handler'
import CLOTHES from "../../data/clothes"

const Feed = ({style}) => {
  return (
    <View style={[style,styles.container]}>
      <Text style={styles.title}>Autumn Winter</Text>
      <FlatList
        data={CLOTHES}
        keyExtractor={item => item.id}
        renderItem={item => <Card cloth={item} />}
        horizontal={true}
        style={{padding: '3%'}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 15,
        backgroundColor: 'white',
        height: '100%'
    },
    title:{
        color: 'black',
        textAlign:'center',
        fontWeight: '900',
        fontSize: 40,
        marginBottom: '15%'
    }
})

export default Feed