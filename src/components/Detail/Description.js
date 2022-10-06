import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Slider from '@react-native-community/slider'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, modify } from '../../redux/cartSlice';

const Description = ({ cloth }) => {

  const dispatch = useDispatch();

  const [sliderValue, setSliderValue] = useState(0);
  const [currentSize, setCurrentSize] = useState('p');
  // const [currentCount, setCurrentCount] = useState(0);

  const [sizeCount, setSizeCount] = useState({
    p: 0,
    m: 0,
    g: 0,
    gg: 0
  })

  // first use a state object so that we can keep track of the count of each size here.
  // after clicking the button we can add it to the store

  const addHandler = () => {
    setSizeCount(prevValue => {
      return { ...prevValue, [currentSize]: prevValue[currentSize] + 1 }
    })
  }

  const reduceHandler = () => {
    if (sizeCount[currentSize] === 0) return;
    setSizeCount(prevValue => {
      return { ...prevValue, [currentSize]: prevValue[currentSize] - 1 }
    })
  }

  const addToBasket = () => {
    // send all to the store
    for (let size in sizeCount) {
      if (sizeCount[size] === 0) continue
      dispatch(addItem({
        id: cloth.id,
        size,
        count: sizeCount[size],
        price: cloth.price,
        title: cloth.title,
        savedImage: cloth.savedImage,
        discount: cloth.discount
      }))
    }
  }


  useEffect(() => {
    switch (sliderValue) {
      case 0:
        setCurrentSize('p');
        break;
      case 35:
        setCurrentSize('m');
        break;
      case 70:
        setCurrentSize('g');
        break;
      case 100:
        setCurrentSize('gg');
        break;
      default:
        setSliderValue(0);
    }
  }, [sliderValue])

  return (
    <View style={styles.container}>
      <View>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Image style={{ height: 250, width: 200 }} source={require('../../icons/cloth.png')} />
        </View>
        <View style={{ margin: '10%' }}>
          <Slider
            maximumValue={100}
            minimumValue={0}
            step={35}
            value={sliderValue}
            onValueChange={value => setSliderValue(value)}
            maximumTrackTintColor='black'
            minimumTrackTintColor='black'
            thumbTintColor='black'
          />
        </View>
        <View style={{ marginHorizontal: '10%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View
            style={
              [styles.icon, {
                marginLeft: '5%',
                backgroundColor: currentSize === 'p' ? 'black' : '#BEBEBE',
              }
              ]}>
            <Text
              style={{ color: currentSize === 'p' ? 'white' : 'black' }}
            >
              P
            </Text>
          </View>
          <View style={[styles.icon, { backgroundColor: currentSize === 'm' ? 'black' : '#BEBEBE', }]}>
            <Text style={{ color: currentSize === 'm' ? 'white' : 'black' }}>M</Text>
          </View>
          <View style={[styles.icon, { backgroundColor: currentSize === 'g' ? 'black' : '#BEBEBE', }]}>
            <Text style={{ color: currentSize === 'g' ? 'white' : 'black' }}>G</Text>
          </View>
          <View style={[styles.icon, { backgroundColor: currentSize === 'gg' ? 'black' : '#BEBEBE', marginRight: '5%' }]}>
            <Text style={{ color: currentSize === 'gg' ? 'white' : 'black' }}>X</Text>
          </View>
        </View>
      </View>
      <View style={{ height: '25%', marginHorizontal: '5%', marginTop: '5%' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ color: 'black' }}>
            Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Fermentum odio eu feugiat pretium nibh ipsum. Purus gravida quis blandit turpis cursus in hac. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Pharetra sit amet aliquam id diam. Cursus mattis molestie a iaculis at. Orci a scelerisque purus semper eget duis at. Nulla facilisi morbi tempus iaculis urna. Et odio pellentesque diam volutpat. Sed faucibus turpis in eu mi. Facilisis leo vel fringilla est ullamcorper eget. Nunc scelerisque viverra mauris in aliquam sem. Cras ornare arcu dui vivamus. Tellus id interdum velit laoreet. Est ultricies integer quis auctor elit. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Vel turpis nunc eget lorem. Senectus et netus et malesuada fames ac.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis. In est ante in nibh mauris cursus mattis. Condimentum mattis pellentesque id nibh. Ipsum consequat nisl vel pretium lectus quam id leo. Justo nec ultrices dui sapien eget mi proin sed libero. Eu scelerisque felis imperdiet proin fermentum. Sit amet nisl purus in mollis nunc sed id semper. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lectus mauris ultrices eros in cursus turpis massa. Ullamcorper eget nulla facilisi etiam dignissim. Vitae congue mauris rhoncus aenean. Dignissim suspendisse in est ante in nibh mauris. Pharetra et ultrices neque ornare aenean euismod.
          </Text>
        </ScrollView>
      </View>
      <View style={{ marginTop: '5%', padding: '5%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
        <View style={{ flex: 1 }}>
          <Text style={{
            fontWeight: '800', color: 'black', alignItems: 'center'
          }}>
            {cloth.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', flex: 2 }}>
          <TouchableOpacity onPress={reduceHandler}>
            <Image style={{ height: 40, width: 40 }} onPre source={require('../../icons/minus.png')} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>{sizeCount[currentSize]}</Text>
          <TouchableOpacity onPress={addHandler}>
            <Image style={{ height: 40, width: 40 }} source={require('../../icons/plus.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', }}>
          <TouchableOpacity style={{ backgroundColor: '#E2E6E6', borderRadius: 20, padding: '10%' }} onPress={addToBasket} >
            <Image style={{ height: 30, width: 30, }} source={require('../../icons/basket.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: '5%',
  },
  icon: {
    backgroundColor: '#BEBEBE',
    borderRadius: 100,
    padding: '2%',
    paddingHorizontal: '4%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
})

export default Description