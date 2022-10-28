/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging'

messaging().setBackgroundMessageHandler(async message => { })

AppRegistry.registerComponent(appName, () => App);

// debug-view-firebase : "adb shell debug.firebase.analytics.app com.clothapp.dev",
// debug-view-stop-firebase : "adb shell debug.firebase.analytics.app .none."