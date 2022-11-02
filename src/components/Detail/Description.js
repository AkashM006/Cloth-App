import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setCount } from '../../redux/cartSlice';
import { setMsg } from '../../redux/userSlice'
import Card from './Card'
import Slider from './Slider'

const Description = ({ cloth }) => {

  const dispatch = useDispatch();
  const count = useSelector(state => state.cart.count)
  const selectedColor = useSelector(state => state.cart.color)

  const addHandler = () => {
    dispatch(setCount(1))
  }

  const reduceHandler = () => {
    dispatch(setCount(-1))
  }

  const addToBasketHandler = () => {

    if (selectedColor.trim().length === 0) {
      // Alert.alert('Whoops!', 'Please select a color for you cloth!', [{ text: 'OK' }], { cancelable: true })
      dispatch(setMsg({ title: 'Whoops! Not able to add to cart', text: 'Please select a color for your cloth!' }))
      return
    }
    if (count === 0) {
      // Alert.alert('Whoops!', 'Select at least one item!', [{ text: 'OK' }], { cancelable: true })
      dispatch(setMsg({ title: 'Whoops! Not able to add to cart', text: 'Select at least one item!' }))
      return
    }

    dispatch(addItem({
      id: cloth.id,
      price: cloth.price,
      title: cloth.title,
      savedImage: cloth.savedImage,
      discount: cloth.discount,
    }))
    dispatch(setCount(0))
    dispatch(setMsg({ title: 'Hooray!', text: 'Cloth added to your cart!' }))
  }

  useEffect(() => {
    return () => {
      dispatch(setCount(0))
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ height: '80%' }}>
        <View style={styles.imageContainer}>
          <Image source={require('../../icons/cloth.png')} />
        </View>
        <View style={styles.sliderContainer}>
          <Slider />
        </View>
        <View style={styles.colorsContainer}>
          <FlatList
            data={cloth.colors}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => <Card index={index} dispatch={dispatch} key={index} color={item} />}
            showsHorizontalScrollIndicator={false}
            horizontal
            bounces={false}
          />
        </View>
        <View style={styles.contentContainer}>
          <ScrollView>
            <Text style={{ color: 'black' }}>
              Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Fermentum odio eu feugiat pretium nibh ipsum. Purus gravida quis blandit turpis cursus in hac. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Pharetra sit amet aliquam id diam. Cursus mattis molestie a iaculis at. Orci a scelerisque purus semper eget duis at. Nulla facilisi morbi tempus iaculis urna. Et odio pellentesque diam volutpat. Sed faucibus turpis in eu mi. Facilisis leo vel fringilla est ullamcorper eget. Nunc scelerisque viverra mauris in aliquam sem. Cras ornare arcu dui vivamus. Tellus id interdum velit laoreet. Est ultricies integer quis auctor elit. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Vel turpis nunc eget lorem. Senectus et netus et malesuada fames ac.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis. In est ante in nibh mauris cursus mattis. Condimentum mattis pellentesque id nibh. Ipsum consequat nisl vel pretium lectus quam id leo. Justo nec ultrices dui sapien eget mi proin sed libero. Eu scelerisque felis imperdiet proin fermentum. Sit amet nisl purus in mollis nunc sed id semper. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lectus mauris ultrices eros in cursus turpis massa. Ullamcorper eget nulla facilisi etiam dignissim. Vitae congue mauris rhoncus aenean. Dignissim suspendisse in est ante in nibh mauris. Pharetra et ultrices neque ornare aenean euismod.
            </Text>
          </ScrollView>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.price}>
            {cloth.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </Text>
        </View>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={reduceHandler}>
            <Image source={require('../../icons/minus.png')} style={[styles.icon,]} />
          </TouchableOpacity>
          <Text style={styles.counterText}>
            {count}
          </Text>
          <TouchableOpacity onPress={addHandler}>
            <Image source={require('../../icons/plus.png')} style={[styles.icon,]} />
          </TouchableOpacity>
        </View>
        <View style={styles.basketContainer}>
          <TouchableOpacity onPress={addToBasketHandler}>
            <Image source={require('../../icons/basket.png')} style={styles.basket} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignSelf: 'center'
  },
  sliderContainer: {
    marginVertical: '2%',
  },
  colorsContainer: {
    marginTop: '5%',
    marginHorizontal: '5%',
  },
  contentContainer: {
    height: '40%',
    marginTop: '5%',
    marginHorizontal: '2.5%',
  },
  bottomContainer: {
    width: '100%',
    height: '20%',
    padding: '5%',
    flexDirection: 'row',
    paddingBottom: '25%',
    justifyContent: 'space-around'
  },
  price: {
    color: 'black',
    fontWeight: '700',
    fontSize: 22,
  },
  icon: {
    height: 45,
    width: 45,
  },
  counterText: {
    fontSize: 24,
    color: 'black',
    fontWeight: '600'
  },
  basket: {
    height: 30,
    width: 30,
  },
  basketContainer: {
    borderRadius: 100,
    backgroundColor: 'lightgray',
    padding: '2%',
    alignSelf: 'center'
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    marginHorizontal: '5%',
  }
})

export default Description