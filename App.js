import 'react-native-reanimated'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './src/Screens/MainScreen'
import { Provider } from 'react-redux'
import {store, persistor} from './src/redux/store'
import {Provider as PaperProvider} from 'react-native-paper'
import { PersistGate } from 'redux-persist/integration/react'
import Lottie from 'lottie-react-native'

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

const SplashScreen = () => {
  const animationRef = useRef(null);
  const navigation = useNavigation();
  
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    },5000);
  },[])

  return (
    <View style={{flex: 1, justifyContent: 'center',alignItems: 'center',}}>
      <Lottie 
        source={require('./src/icons/loading.json')}
        autoPlay
        ref={animationRef}
        loop={false}
        onAnimationFinish={() => {
          animationRef.current.play()
        }}
      />
    </View>
  )
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
                    initialRouteName='Splash'
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
                      <Drawer.Screen
                        options={{
                          header:() => {},
                          swipeEnabled: false,
                          drawerItemStyle: {height: 0},
                          
                        }}
                        name='Splash'
                        component={SplashScreen}
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