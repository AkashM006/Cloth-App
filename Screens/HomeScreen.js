import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Feed from '../components/Home/Feed'
import BottomTab from '../components/Home/BottomTab'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white',height: '100%',}}>
      <View style={{height: '90%'}}>
      {/* <View style={{flex: 2}}> */}
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

export default HomeScreen