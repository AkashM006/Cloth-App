import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen'
import ExploreScreen from "../Screens/ExploreScreen"
import ChatScreen from '../Screens/ChatScreen';
import CartScreen from '../Screens/CartScreen';
import DetailScreen from '../Screens/DetailScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.closeDrawer()
  }, [])
  const headerOptions = { header: () => { } };
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={headerOptions}
      />
      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        title="Explore"
        options={headerOptions}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={headerOptions}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={headerOptions}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={headerOptions}
      />
      <Stack.Screen
        name='Profile'
        component={ProfileScreen}
        options={headerOptions}
      />
    </Stack.Navigator>
  )
};

export default HomeStack;