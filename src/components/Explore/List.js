import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Card from './Card'

const List = ({ data, ...props }) => {

  const DATA = [...data];
  if (DATA.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text style={{ color: 'black' }}>You have no saved items</Text>
      </View>
    )
  }
  if (DATA.length % 2 === 1) DATA.push({});

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, index) => index}
        data={DATA}
        renderItem={({ item, index }) => <Card onPressNavigate={props.onPressNavigate ?? false} isActionShown={props.isActionShown ?? true} cloth={item} index={index} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: '87.5%', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '17%', }}
        numColumns='2'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingBottom: '10%',
    backgroundColor: 'white'
  }
})

export default List