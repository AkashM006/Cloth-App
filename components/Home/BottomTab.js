import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BottomTab = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',justifyContent: 'space-evenly',alignItems:'center', borderColor: 'white', borderWidth: 2, flex: 1,}}>
          <TouchableOpacity style={styles.iconContainer} >
              <Image style={styles.icon} source={require('../../assets/home.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Explore')}>
            <Image style={styles.icon} source={require('../../assets/bookmark.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Chat')}>
            <Image style={styles.icon} source={require('../../assets/chat.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} >
            <Image style={styles.icon} source={require('../../assets/profile.png')} />
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    icon: {
        height: 30,
        width: 30,
    },
    container: {
        backgroundColor: 'white',
        height: '100%', 
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    iconContainer: {
      padding: 5,
    },
})

export default BottomTab;