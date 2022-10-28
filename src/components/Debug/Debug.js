import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import crashlytics from '@react-native-firebase/crashlytics'
import { useDispatch, useSelector } from 'react-redux'
import analytics from '@react-native-firebase/analytics'
import { setMsg } from '../../redux/userSlice'

const Debug = () => {

    const createCrash = () => {
        crashlytics().crash()
    }

    let x; // for creating an error to log to firebase console

    const dispatch = useDispatch();


    const user = useSelector(state => state.user);

    const createNewError = async () => {
        try {
            crashlytics().log('Started createError function!')
            let k = x.triggerNewError();
            // crashlytics().log('Finished createError function without any hiccups!')
        } catch (err) {
            // console.log(err)
            // console.log(typeof x);
            // crashlytics().setAttributes('user', { 'isGoogleAuth': x.isGoogleAuth == true ? 'true' : 'false' })
            crashlytics().setAttribute('isGoogleAuth', user.isGoogleAuth == true ? 'true' : 'false')
            crashlytics().recordError(err);// records stack trace and information
        }
    }

    const logAnalytics = async () => {
        try {
            await analytics().logEvent('test')
            console.log("Logged")
        } catch (err) {
            console.log(err)
        }
    }

    const toastHandler = () => {
        dispatch(setMsg({ text: 'Test toast notification' }))
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
            <TouchableOpacity onPress={createCrash} style={styles.button}>
                <Text style={styles.text}>Crash</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={createNewError} style={styles.button}>
                <Text style={styles.text}>Error</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logAnalytics} style={styles.button}>
                <Text style={styles.text}>Analytics Log</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toastHandler} style={styles.button}>
                <Text style={styles.text}>Toast</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    button: {
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white',
        textAlign: 'center',
        padding: '5%',
        width: '100%',
        marginBottom: '5%',
    },
    text: { color: 'black', textAlign: 'center' }
}

export default Debug