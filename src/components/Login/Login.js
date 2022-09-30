import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { loginUserThunk } from '../../redux/userSlice'

const Login = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(loginUserThunk({ email, password }))
    }

    const registerHandler = () => {
        navigation.navigate('Register')
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ marginBottom: '5%', marginHorizontal: '5%' }}>
                    <Text style={{ color: 'white', fontSize: 30 }}>Login</Text>
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
                                    onPress={loginHandler}
                                >
                                    <Text style={[styles.heading, { color: 'white' }]}>LOGIN</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={[styles.button, { borderColor: 'black', borderWidth: 1, marginTop: '5%' }]}
                                    onPress={registerHandler}
                                >
                                    <Text style={[styles.text, styles.heading]}>REGISTER</Text>
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
        flex: 2,
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

export default Login