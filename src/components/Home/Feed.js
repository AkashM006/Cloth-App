import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import Card from './Card'
import { FlatList } from 'react-native-gesture-handler'
import CLOTHES from "../../data/clothes"
import { useState } from 'react'

const Feed = ({ style }) => {

  const [clothes, setClothes] = useState(CLOTHES.slice(0, 3));
  const [isLoading, setIsLoading] = useState(false);

  const renderMore = () => {
    if (isLoading === true) return;
    setIsLoading(true);
    setTimeout(() => {
      setClothes(prevValue => [...prevValue, ...prevValue.slice(0, 3)])
      setIsLoading(false);
    }, 3000);
  }

  return (
    <View style={[style, styles.container]}>
      <Text style={styles.title}>Autumn Winter</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {isLoading && <View
          style={styles.loader}>
          <ActivityIndicator size='large' color='#1338BE' />
        </View>}
        <FlatList
          data={clothes}
          keyExtractor={(item, index) => index}
          renderItem={item => <Card cloth={item} />}
          horizontal={true}
          onEndReachedThreshold={0.2}
          onEndReached={renderMore}
        />
      </View>
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
  title: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 40,
    marginBottom: '15%'
  },
  loader: {
    position: 'absolute',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    transform: [
      {
        translateY: -50,
      }
    ],
  }

})

export default Feed