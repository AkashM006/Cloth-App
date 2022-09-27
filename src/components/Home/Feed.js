import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Card from './Card'
import { FlatList } from 'react-native-gesture-handler'
import CLOTHES from "../../data/clothes"
import { useState } from 'react'
import { useEffect } from 'react'

const Feed = ({style}) => {

  const [clothes, setClothes] = useState(CLOTHES.slice(0,3));
  const [trig,setTrig] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setClothes(prevValue => [...prevValue,...prevValue.slice(0,3)])
    },3000);
  },[trig]);

  return (
    <View style={[style,styles.container]}>
      <Text style={styles.title}>Autumn Winter</Text>
      <FlatList
        data={clothes}
        keyExtractor={(item,index) => index}
        renderItem={item => <Card cloth={item} />}
        horizontal={true}
        onEndReachedThreshold={0}
        onEndReached={() => setTrig(t => !t)}
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