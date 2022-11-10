import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const CardHeader = ({ title, price, count }) => {
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.title}>
          {title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </Text>
        <View
          style={styles.leftContainer}
        >
          <View>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: '900' }}>
              {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </Text>
          </View>
          {count !== 0 && <View style={styles.textContainer}>
            <Text style={styles.text}>{count >= 100 ? '99+' : count}</Text>
          </View>}
        </View>
      </View>
      <View>
        <Image source={require('../../../icons/tag.png')} style={{ height: 30, width: 30 }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  text: {
    color: 'black',
  },
  textContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 100,
    padding: '2%',
    paddingHorizontal: '5%'
  },
  title: {
    color: 'black',
    fontSize: 24,
  },
  priceContainer: {
    paddingRight: 10,
    flex: 1,
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  }
})

export default CardHeader;