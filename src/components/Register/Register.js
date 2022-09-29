import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Register = () => {

    const navigation = useNavigation();

    const loginHandler = () => {
        navigation.goBack();
    }

    const registerHandler = () => {
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ marginBottom: '5%', marginHorizontal: '5%' }}>
                    <Text style={{ color: 'white', fontSize: 30 }}>Register</Text>
                </View>
            </View>
            <View style={styles.footer}>
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
                                onChange={newEmail => setEmail(newEmail)}
                            />
                        </View>
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.text}>Password</Text>
                        <View style={styles.inputContainer}>
                            <Image style={styles.icon} source={require('../../icons/profile.png')} />
                            <TextInput
                                placeholderTextColor={'gray'}
                                placeholder='Your Name'
                                style={styles.input}
                                secureTextEntry={true}
                                defaultValue={name}
                                onChange={newName => setName(newName)}
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
                                onChange={newPassword => setPassword(newPassword)}
                            />
                        </View>
                    </View>
                    <View style={styles.formGroup}>
                        <View>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: 'black', }]}
                                onPress={registerHandler}
                            >
                                <Text style={[styles.heading, { color: 'white' }]}>REGISTER</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={[styles.button, { borderColor: 'black', borderWidth: 1, marginTop: '5%' }]}
                                onPress={loginHandler}
                            >
                                <Text style={[styles.text, styles.heading]}>LOGIN</Text>
                            </TouchableOpacity>
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
        backgroundColor: 'black'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    footer: {
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
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
    }
})

export default Register