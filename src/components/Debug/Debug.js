import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import crashlytics from '@react-native-firebase/crashlytics'
import { useDispatch, useSelector } from 'react-redux'
import analytics from '@react-native-firebase/analytics'
import { setMsg } from '../../redux/userSlice'

const Debug = () => {

    const [count, setCount] = useState(0)

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
            await analytics().logEvent('login', {
                // email: user.user.email
                method: user.isGoogleAuth === true ? 'google' : 'Email/Password'
            })
            dispatch(setMsg({ title: 'Google Analytics Event', text: "Event logged", status: 'success' }))
        } catch (err) {
            console.log(err)
            dispatch(setMsg({ title: 'Error while logging to Google Analytics', text: "Error: ", err, status: 'failure' }))
        }
    }

    const toastHandler = () => {
        setCount(prev => prev + 1)
        if (count % 2 == 0)
            dispatch(setMsg({
                title: 'Test',
                text: 'A really big notification body for testing if the text is displaying if its long',
                status: 'success'
            }))
        else
            dispatch(setMsg({ text: 'Test toast notification', status: 'success' }))
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