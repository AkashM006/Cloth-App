import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { registerUserThunk } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'
import { registerValidator } from '../../validators/register'

const Register = () => {

    const navigation = useNavigation();
    const dispath = useDispatch();

    const loginHandler = () => {
        navigation.goBack();
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const registerHandler = async () => {
        // first validate and then authenticate
        // todo: Do password validation
        const credentials = { email, name, password }
        registerValidator.validate(credentials)
            .then(value => {
                dispath(registerUserThunk(credentials));
            })
            .catch(err => {
                Alert.alert('Whoops!', err.errors[0], [{ text: 'OK' }], { cancelable: true })
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ marginBottom: '5%', marginHorizontal: '5%' }}>
                    <Text style={{ color: 'white', fontSize: 30 }}>Register</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerContentContainer}>
                    <View style={{ marginTop: '12%', marginHorizontal: '5%', }}>
                        <View>
                            <Text style={styles.text}>Email</Text>
                            <View style={styles.inputContainer}>
                                <Image style={styles.icon} source={require('../../icons/email.png')} />
                                <TextInput
                                    placeholderTextColor={'gray'}
                                    placeholder='Your email'
                                    style={styles.input}
                                    keyboardType='email-address'
                                    defaultValue={email}
                                    onChangeText={newEmail => setEmail(newEmail)}
                                />
                            </View>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.text}>Name</Text>
                            <View style={styles.inputContainer}>
                                <Image style={styles.icon} source={require('../../icons/profile.png')} />
                                <TextInput
                                    placeholderTextColor={'gray'}
                                    placeholder='Your Name'
                                    style={styles.input}
                                    defaultValue={name}
                                    onChangeText={newName => setName(newName)}
                                />
                            </View>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.text}>Password</Text>
                            <View style={styles.inputContainer}>
                                <Image style={styles.icon} source={require('../../icons/password.png')} />
                                <TextInput
                                    placeholderTextColor={'gray'}
                                    placeholder='Your Password'
                                    style={styles.input}
                                    secureTextEntry={true}
                                    defaultValue={password}
                                    onChangeText={newPassword => setPassword(newPassword)}
                                />
                            </View>
                        </View>
                        <View style={styles.formGroup}>
                            <View>
                                <TouchableOpacity
                                    style={[styles.button, { backgroundColor: 'black', }]}
                                    onPress={registerHandler}
                                >
                                    <Text
                                        style={[styles.heading, { color: 'white' }]}
                                    >
                                        REGISTER
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={[styles.button, { borderColor: 'black', borderWidth: 1, marginTop: '5%' }]}
                                    onPress={loginHandler}
                                >
                                    <Text style={[styles.text, styles.heading]}>Sign In</Text>
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
        borderBottomRightRadius: 30,
        backgroundColor: 'black'
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
    }
})

export default Register