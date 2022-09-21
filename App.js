import 'react-native-reanimated'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './src/Screens/MainScreen'
import { Provider } from 'react-redux'
import {store, persistor} from './src/redux/store'
import {Provider as PaperProvider} from 'react-native-paper'
import { PersistGate } from 'redux-persist/integration/react'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Settings Screen</Text>
    </View>
  )
}

const Drawer = createDrawerNavigator();

const theme = {
  colors:{
    primary: 'black',
  }
}

const App = () => {
  
  return (
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <PaperProvider theme={theme}>
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
              </PaperProvider>
            </PersistGate>
          </Provider>
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