import { StatusBar, View } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Feed from '../components/Home/Feed'
import BottomTab from '../components/Home/BottomTab'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Home = ({ navigation }) => {

  const user = useSelector(state => state.user.user)

  useEffect(() => {
    navigation.closeDrawer()
  }, [user])

  return (
    <>
      <StatusBar />
      <View style={{ backgroundColor: 'white', height: '100%', }}>
        <View style={{ height: '90%' }}>
          <Header stackNavigation={navigation} style={alignStyle} />
          <Feed style={[alignStyle, { marginTop: 20 }]} />
        </View>
        <View style={{ height: '10%' }}>
          <BottomTab />
        </View>
      </View>
    </>
  )
}

const alignStyle = {
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

export default Home;