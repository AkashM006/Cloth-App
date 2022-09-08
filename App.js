import 'react-native-reanimated'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Search from './assets/search.svg'
import ShoppingBag from './assets/shopping-bag.svg'

const HomeScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Home Screen</Text>
      </View>
  )
}

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Settings Screen</Text>
    </View>
  )
}

const Drawer = createDrawerNavigator();

const HeaderRight = () => {
  return (
    <View style={{borderColor: 'black', borderWidth: 3, flexDirection: 'row', width: '80%'}}>
        <View >
          <Search />
          <ShoppingBag />
        </View>
    </View>
  )
}

const App = () => {
  
  return (
        <NavigationContainer>
          <Drawer.Navigator 
            screenOptions={{
              drawerActiveBackgroundColor:'black', 
              drawerActiveTintColor: 'white',
              drawerType:'slide',
              // drawerInactiveTintColor: 'blue'
            }} 
            initialRouteName='Home'
          >
            <Drawer.Screen 
              options={{
                headerStyle:{
                  height: 60,
                  backgroundColor: 'white',
                },
                headerTitleStyle:{
                  // display: 'none',
                },
              }}
              name='Home' 
              component={HomeScreen} 
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