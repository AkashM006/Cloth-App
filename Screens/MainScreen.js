import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../components/Home/Home"
import Explore from '../components/Explore/Explore';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
         name="Home" 
         component={Home} 
         options={{header: () => {}}} />
        <Stack.Screen
         name="Explore"
         component={Explore}
         title="Explore"
         options={{header: () => {}}}
         />
    </Stack.Navigator>
  )
};

export default MainScreen;