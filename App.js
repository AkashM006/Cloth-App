import 'react-native-reanimated'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './Screens/HomeScreen'

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
        // <View style={{backgroundColor: 'white'}}>
          <NavigationContainer>
            <Drawer.Navigator
              screenOptions={{
                drawerActiveBackgroundColor:'black',
                drawerActiveTintColor: 'white',
                drawerType:'slide',
              }}
              initialRouteName='Home'
            >
                <Drawer.Screen
                  options={{
                    header:() => {},
                  }}
                  name='Home'
                  component={HomeScreen}
                />
              <Drawer.Screen name='Settings' component={SettingsScreen} />
            </Drawer.Navigator>
          </NavigationContainer>
        // </View>
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