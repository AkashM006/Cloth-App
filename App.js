import 'react-native-reanimated'
import { Alert } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/store'
import { Provider as PaperProvider } from 'react-native-paper'
import { PersistGate } from 'redux-persist/integration/react'
import MainScreen from './src/Screens/MainScreen'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import messaging from '@react-native-firebase/messaging'
import './src/i18n/i18n'
import Loader from './src/components/Loader'
import SnackBar from './src/components/SnackBar'

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

  const messageHanlder = message => {
    Alert.alert(message.notification.title, message.notification.body)
  }
  useEffect(() => {
    const subscriber = messaging().onMessage(messageHanlder)
    messaging().onNotificationOpenedApp(messageHanlder)
    return subscriber
  }, [])

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <MainScreen />
          <Loader />
          <SnackBar />
        </NavigationContainer>
      </PaperProvider>
      {/* </PersistGate> */}
    </Provider>
  )
}

export default App