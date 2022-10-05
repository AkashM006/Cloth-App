import { View, Image, Text } from 'react-native'
import React from 'react'
import StackHeader from '../components/StackHeader'
import List from '../components/Explore/List'
import { useSelector } from 'react-redux'

const ExploreScreen = () => {

  const savedItems = useSelector(state => state.savedItems.items)

  return (
    <View style={{ height: '100%', backgroundColor: 'white' }}>
      <StackHeader
        title={'Explore'}
        count={savedItems.length}
        HeaderRight={() => <View style={{ flexDirection: 'row', }}>
          <Image style={{ height: 30, width: 30 }} source={require('../icons/bookmark-active.png')} />
          <Text style={{ color: 'black', fontSize: 20, fontWeight: '600' }}>{savedItems.length}</Text>
        </View>}
      />
      <List data={savedItems} />
    </View>
  )
}

export default ExploreScreen;