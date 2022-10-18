import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';

const BottomTab = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.savedItems.items)

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderColor: 'white', borderWidth: 2, flex: 1, }}>
        <TouchableOpacity style={styles.iconContainer} >
          <Image style={styles.icon} source={require('../../icons/home.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Explore')}>
          <Image style={styles.icon} source={require('../../icons/bookmark-icon.png')} />
          {items.length !== 0 && <View style={styles.badge}>
            <Text style={{ color: 'white' }}>
              {items.length >= 100 ? '99+' : items.length}
            </Text>
          </View>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Chat')}>
          <Image style={styles.icon} source={require('../../icons/chat.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Profile')} >
          <Image style={styles.icon} source={require('../../icons/profile.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    height: 35,
    width: 35,
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
  badge: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    position: 'absolute',
    padding: '10%',
    zIndex: 100,
    backgroundColor: 'black',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 25,
    // width: 25,

  },
})

export default BottomTab;