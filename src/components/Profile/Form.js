import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import * as yup from 'yup'
import { setIsLoading } from '../../redux/userSlice'

const Form = () => {
    const data = useSelector(state => state.user)
    const dispatch = useDispatch()
    const user = data.user

    const [email, setEmail] = useState(user.email)
    const [name, setName] = useState(user.displayName)
    const [password, setPassword] = useState('')
    const [hasChanged, setHasChanged] = useState(false)

    const alert = (description) => {
        Alert.alert('Whoops!', description, [{ text: 'OK' }], { cancelable: true })
    }

    const updateHandler = async () => {

        if (hasChanged === false) return

        dispatch(setIsLoading(true))
        // implement validation and then change the credentials
        let validatedEmail = email;
        let validatedName = name;
        let validatedPassword = password

        if (user.email !== email) {
            try {
                const result = await yup.object().shape({
                    email: yup.string('Email must be a string').email('Email is not valid').required()
                }).validate({ email })
                validatedEmail = result.email
            } catch (err) {
                dispatch(setIsLoading(false))
                alert(err.errors[0])
                return
            }
        }
        if (user.displayName !== name) {
            try {
                const result = await yup.object().shape({
                    name: yup
                        .string('Name must be a string')
                        .required('Name is required')
                        .min(3, 'Name must be atleast 3 characters long')
                        .matches(/^[a-zA-Z ]*$/, 'Name must contain only alphabets'),
                }).validate({ name })
                validatedName = result.name
            } catch (err) {
                dispatch(setIsLoading(false))
                alert(err.errors[0])
                return
            }
        }

        if (!user.isGoogleAuth && password !== '' && password.trim().length !== 0) {
            try {
                const result = await yup.object().shape({
                    password: yup
                        .string('Password must be a string')
                        .required('Password is required')
                        .min(8, 'Password must be atleast 8 characters long')
                }).validate({ password })
                validatedPassword = result.password
            } catch (err) {
                dispatch(setIsLoading(false))
                alert(err.errors[0])
                return
            }
        }

        // validation phase over now begin updating values

        if (user.email !== email) {
            try {
                result = await auth().currentUser.updateEmail(validatedEmail)
            } catch (err) {
                dispatch(setIsLoading(false))
                alert(err.message)
                return
            }
        }

        if (user.displayName !== name) {
            try {
                const result = auth().currentUser.updateProfile({ displayName: validatedName })
            } catch (err) {
                dispatch(setIsLoading(false))
                alert(err.message)
                return
            }
        }

        if (!user.isGoogleAuth && password !== '' && password.trim().length !== 0) {
            try {
                const result = await auth().currentUser.updatePassword(validatedPassword)
            } catch (err) {
                dispatch(setIsLoading(false))
                alert(err.message)
                return
            }
        }

        dispatch(setIsLoading(false))
        Alert.alert('Success', 'Your profile has been updated!', [{ text: 'OK' }], { cancelable: true })
        setPassword('')
    }

    useEffect(() => {
        setHasChanged(
            email !== user.email ||
            name !== user.displayName ||
            password?.trim().length !== 0
        )
    })

    return (
        <View style={styles.container}>
            <View style={styles.formGroup}>
                <Image source={require('../../icons/email.png')} style={styles.icon} />
                <TextInput
                    placeholderTextColor={'gray'}
                    placeholder='Your Email'
                    style={styles.input}
                    keyboardType='email-address'
                    defaultValue={email}
                    onChangeText={newEmail => setEmail(newEmail)}
                    editable={!data.isGoogleAuth}
                />
            </View>
            <View style={styles.formGroup}>
                <Image source={require('../../icons/profile.png')} style={styles.icon} />
                <TextInput
                    placeholderTextColor={'gray'}
                    placeholder='Your Name'
                    style={styles.input}
                    defaultValue={name}
                    onChangeText={newName => setName(newName)}
                />
            </View>
            {!data.isGoogleAuth && <View style={styles.formGroup}>
                <Image source={require('../../icons/password.png')} style={styles.icon} />
                <TextInput
                    placeholderTextColor={'gray'}
                    placeholder='Your new password'
                    secureTextEntry={true}
                    style={styles.input}
                    defaultValue={password}
                    onChangeText={newPassword => setPassword(newPassword)}
                />
            </View>}
            <View style={[styles.formGroup, { alignSelf: 'center' }]}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: 'black' }, hasChanged === false && styles.inActive]}
                    onPress={updateHandler}
                >
                    <Text
                        style={[styles.heading, { color: 'white' },]}
                    >
                        CHANGE
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    text: {
        color: 'black',
    },
    input: {
        color: 'black',
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 2,
        width: '90%',
    },
    icon: {
        height: 30,
        width: 30,
    },
    formGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%',
    },
    button: {
        alignItems: 'center',
        padding: '5%',
        borderRadius: 5,
    },
    heading: {
        fontWeight: '600',
    },
    inActive: {
        backgroundColor: 'lightgray'
    }
})

export default Form