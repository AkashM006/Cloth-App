import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const StackHeader = ({title,HeaderRight,...props}) => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.canGoBack() && navigation.goBack()}>
            <Image style={styles.icon} source={require('../icons/back.png')} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 2,alignItems:'center'}}>
        <Text style={{color: 'black',fontWeight: '700',fontSize: 20}}>{title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Text>
      </View>
      {HeaderRight ? <View>
        <HeaderRight {...props} />
      </View> : <View style={styles.icon} />}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: '5%',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30
    }
})

export default StackHeader;