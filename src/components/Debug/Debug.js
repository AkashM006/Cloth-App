import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import crashlytics from '@react-native-firebase/crashlytics'
import { useSelector } from 'react-redux'

const Debug = () => {

    const createCrash = () => {
        crashlytics().crash()
    }

    let x;

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

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
            <TouchableOpacity onPress={createCrash} style={styles.button}>
                <Text style={{ color: 'black', textAlign: 'center' }}>Crash</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={createNewError} style={styles.button}>
                <Text style={{ color: 'black', textAlign: 'center' }}>Error</Text>
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
    }
}

export default Debug