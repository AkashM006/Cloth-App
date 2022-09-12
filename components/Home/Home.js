import { View } from 'react-native'
import React from 'react'
import Header from './Header'
import Feed from './Feed'
import BottomTab from './BottomTab'

const Home = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white',height: '100%',}}>
      <View style={{height: '90%'}}>
        <Header style={alignStyle} />
        <Feed style={[alignStyle,{marginTop: 20}]} />
      </View>
      <View style={{height: '10%'}}>
        <BottomTab />
      </View>
    </View>
  )
}

const alignStyle = {
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

export default Home;