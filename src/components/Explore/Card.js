import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Menu } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/savedItemSlice';
import { useNavigation } from '@react-navigation/native';

const Card = ({ cloth, index, isActionShown, onPressNavigate }) => {

  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const pressHandler = () => {
    setIsVisible(prevValue => !prevValue);
  }

  const removeHandler = () => {
    dispatch(remove({ id: cloth.id }));
  }

  const navigateToDetails = () => {
    setIsVisible(false);
    let id = cloth.id;
    navigation.navigate('Details', {
      id,
    });
  }

  const onItemPressHandler = () => {
    if (onPressNavigate)
      navigateToDetails();
  }

  return (
    <View style={[styles.container, (index % 2 == 1 ? { marginTop: '7%', paddingTop: '7%' } : {})]}>
      <View>
        <Pressable onPress={onItemPressHandler}>
          {cloth.savedImage && <Image style={{ width: '95%', height: 150, resizeMode: 'cover', borderRadius: 15 }} source={cloth.savedImage} />}
          {cloth.title && <Text style={{ color: '#A9A9A9', marginTop: '5%', fontSize: 15 }}>{cloth.title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Text>}
          {cloth.price && <Text style={[styles.text, { fontSize: 17, fontWeight: '800' }]}>{cloth.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>}
        </Pressable>
      </View>
      {isActionShown && Object.keys(cloth).length !== 0 &&
        <Menu
          visible={isVisible}
          onDismiss={() => setIsVisible(false)}
          anchor={<CustomMenu pressHandler={pressHandler} />}
          contentStyle={styles.backgroundWhite}

        >
          <Menu.Item
            onPress={removeHandler}
            leadingIcon={require('../../icons/delete.png')}
            title={
              <View>
                <Text style={styles.text}>
                  Remove
                </Text>
              </View>
            }
            contentStyle={styles.backgroundWhite}
          />
          <Menu.Item
            onPress={navigateToDetails}
            leadingIcon={require('../../icons/eye.png')}
            title={
              <View>
                <Text style={styles.text}>
                  View
                </Text>
              </View>
            }
          />
        </Menu>}
    </View>
  )
}

const CustomMenu = ({ pressHandler }) => {
  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={{ padding: '1%' }} >
        <Image source={require('../../icons/more.png')} style={{ height: 15, width: 15, color: 'black', }} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: '2%',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: 'black'
  },
  backgroundWhite: {
    backgroundColor: 'white'
  }
})

export default Card