import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from "./HomeScreen"
import ExploreScreen from "./ExploreScreen"
import ChatScreen from './ChatScreen';

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
    </Stack.Navigator>
  )
};

export default MainScreen;