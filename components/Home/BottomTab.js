import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const BottomTab = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',justifyContent: 'space-evenly',alignItems:'center', borderColor: 'white', borderWidth: 2, flex: 1,}}>
          <TouchableOpacity>
              <Image style={styles.icon} source={require('../../assets/home.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.icon} source={require('../../assets/bookmark.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.icon} source={require('../../assets/chat.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
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
        // borderColor: 'black', 
        // borderWidth: 1, 
        // backgroundColor: 'gray',
        height: '100%', 
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})

export default BottomTab;