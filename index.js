/**
 * @format
 */
import { AppRegistry } from 'react-native';
import PushNotification from 'react-native-push-notification';
import App from './App';
import { name as appName } from './app.json';

PushNotification.configure({
    onRegister: token => {
        console.log("TOKEN: ", token)
    },
    onNotification: notification => {
        console.log("NOTIFICATION: ", notification)
    },
    senderID: '909548793641'
})

AppRegistry.registerComponent(appName, () => App);
