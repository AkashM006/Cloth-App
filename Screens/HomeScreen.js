import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Feed from '../components/Home/Feed'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Header style={alignStyle} />
      <Feed style={alignStyle} />
    </View>
  )
}

const alignStyle = {
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// });

export default HomeScreen