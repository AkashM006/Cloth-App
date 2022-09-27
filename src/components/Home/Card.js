import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import { useNavigation } from '@react-navigation/native'

const Card = ({cloth}) => {
  const navigation = useNavigation();

  const id = cloth.item.id;
  
  const navigationHandler = () => {
    navigation.navigate('Details',{
      id,
    });
  };

  return (
      <View>
            <View style={styles.container}>
              <Pressable onPress={navigationHandler}>
                <LinearGradient colors={['#eef6f6','white']} locations={[0,0.65]} style={styles.gradientContainer}>
                  <View style={{height: '20%',padding: 10, paddingTop: 20}}>
                    <CardHeader title={cloth.item.title} price={cloth.item.price} />
                  </View>
                  <View style={{height: '80%', paddingLeft: 10, paddingTop: 10,}}>
                    <CardFooter colors={cloth.item.colors}  />
                  </View>
                </LinearGradient>
              </Pressable>
            </View>
      </View>
  )
}

const styles = StyleSheet.create({
    gradientContainer:{
        borderRadius: 10,
        height: '100%',
    },
    container:{
        height: '85%',
        width: '95%',
        minWidth: 220,
        borderRadius: 10,
        marginRight: 20,
        backgroundColor: 'white',
    }
})

export default Card;