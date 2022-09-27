import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Circle = ({color}) => (<View style={[{backgroundColor:color},styles.iconContainer]} />)

const CardFooter = ({colors,img}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1,justifyContent: 'center',}}>
        <View>
            {colors.map((color,index) => <Circle key={index} color={color.colorCode} /> )}
            {/* <Cirlce color='black' /> */}
        </View>
      </View>
      <View style={{flex: 4,flexDirection: 'row',justifyContent:'flex-end',marginTop: '30%'}}>
         <Image 
          style={{height: '100%', resizeMode: 'cover', width: '100%',}} 
          // source={require('../../icons/boy.png')} 
          source={{uri: img}}
         />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    iconContainer: {
        width: 20, 
        height: 20, 
        borderRadius: 100,
        marginVertical: 5
    }
})

export default CardFooter;