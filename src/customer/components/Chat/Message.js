import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const me = 'akash';

const Message = ({msg}) => {
  return (
    <View style={[styles.container,{backgroundColor: (msg.from === me)?'#747474':'#D9D9D9',}]}>
      <View style={{flex: 5,padding: 3}}>
          <Text style={{color:'black',}}>{msg.text}</Text>
      </View>
      {msg.from !== me && <View style={{flex: 1,}}>
        <Image style={styles.avatar} source={{uri:msg.link}} />
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        padding: '5%',
        marginBottom: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
})

export default Message