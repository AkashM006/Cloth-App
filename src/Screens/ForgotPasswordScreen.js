import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as yup from 'yup'
import auth from '@react-native-firebase/auth'

const ForgotPasswordScreen = () => {

    const [email, setEmail] = useState('')
    const navigation = useNavigation()

    const forgotPasswordValidator = yup.object().shape({
        email: yup.string().email().required()
    })

    const passwordResetHandler = () => {
        // if (email.trim().length === 0) {
        //     Alert.alert('Error', 'Email should not be empty!', [
        //         {
        //             text: 'OK'
        //         }
        //     ],
        //         { cancelable: true }
        //     )
        //     return
        // }
        forgotPasswordValidator.isValid({ email })
            .then(valid => {
                // console.log('Is valid: ', valid)
                if (!valid) {
                    Alert.alert('Error!', 'Please enter valid email!', [
                        {
                            text: 'OK'
                        }
                    ],
                        { cancelable: true }
                    )
                    return
                }

                auth().sendPasswordResetEmail(email)
                    .then(_ => {
                        Alert.alert('Mail sent', 'Password reset mail has been sent to your email', [
                            {
                                text: 'OK',
                                onPress: () => navigation.goBack()
                            }
                        ])
                    })
                    .catch(err => {
                        // console.log("err:", err.message)
                        Alert.alert('Whoops!', err.message, [{
                            text: 'OK'
                        }], { cancelable: true })
                    })
            })

    }

    const backHandler = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ marginBottom: '5%', marginHorizontal: '5%' }}>
                    <Text style={{ color: 'white', fontSize: 30 }}>Forgot Password</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerContentContainer}>
                    <View style={{ marginTop: '12%', marginHorizontal: '5%', }}>
                        <View style={styles.formGroup}>
                            <Text style={styles.text}>Email</Text>
                            <View style={styles.inputContainer}>
                                <Image style={styles.icon} source={require('../icons/email.png')} />
                                <TextInput
                                    placeholderTextColor={'gray'}
                                    placeholder='Your Email'
                                    style={styles.input}
                                    defaultValue={email}
                                    onChangeText={newEmail => setEmail(newEmail)}
                                />
                            </View>
                        </View>
                        <View style={styles.formGroup}>
                            <View>
                                <TouchableOpacity
                                    style={[styles.button, { backgroundColor: 'black', }]}
                                    onPress={passwordResetHandler}
                                >
                                    <Text style={[styles.heading, { color: 'white' }]}>Send Password Reset Mail</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={[styles.button, styles.outlineButton]}
                                    onPress={backHandler}
                                >
                                    <Text style={[styles.text, styles.heading]}>Go Back</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'black',
        borderBottomRightRadius: 30,
    },
    footer: {
        flex: 3,
        backgroundColor: 'black',
    },
    input: {
        color: 'black',
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 2,
        width: '90%'
    },
    text: {
        color: 'black'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        height: 20,
        width: 20,
    },
    formGroup: {
        marginTop: '5%'
    },
    button: {
        alignItems: 'center',
        padding: '5%',
        borderRadius: 5,
    },
    heading: {
        fontWeight: '600',
    },
    footerContentContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
    },
    outlineButton: {
        borderColor: 'black',
        borderWidth: 1,
        marginTop: '5%'
    }
})

export default ForgotPasswordScreen