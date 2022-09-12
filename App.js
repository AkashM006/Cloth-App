import 'react-native-reanimated'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './Screens/MainScreen'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Settings Screen</Text>
    </View>
  )
}

const Drawer = createDrawerNavigator();

const App = () => {
  
  return (
          <NavigationContainer>
            <Drawer.Navigator
              screenOptions={{
                drawerActiveBackgroundColor:'black',
                drawerActiveTintColor: 'white',
                drawerType:'slide',
              }}
              initialRouteName='Main'
            >
                <Drawer.Screen
                  options={{
                    header:() => {},
                    title: 'Home',
                    swipeEnabled: false,
                  }}
                  name='Main'
                  component={MainScreen}
                />
              <Drawer.Screen name='Settings' component={SettingsScreen} />
            </Drawer.Navigator>
          </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

export default App