import 'react-native-reanimated'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { Provider, useSelector } from 'react-redux'
import { store, persistor } from './src/redux/store'
import { Provider as PaperProvider } from 'react-native-paper'
import { PersistGate } from 'redux-persist/integration/react'
import MainScreen from './src/Screens/MainScreen'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const theme = {
  colors: {
    primary: 'black',
  }
}

const App = () => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '909548793641-ovu0vlclskchdlu81e5uvrr2mrovlnnk.apps.googleusercontent.com'
    })
  }, [])

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </PaperProvider>
      {/* </PersistGate> */}
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

export default App