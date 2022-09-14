import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from "./HomeScreen"
import ExploreScreen from "./ExploreScreen"
import ChatScreen from './ChatScreen';
import CartScreen from './CartScreen';
import DetailScreen from './DetailScreen';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  const headerOptions = {header: () => {}};
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
    </Stack.Navigator>
  )
};

export default MainScreen;