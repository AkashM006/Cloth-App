import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Field = ({ text, value, onChangeText, placeholder, type, ...props }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    placeholderTextColor={'gray'}
                    keyboardType={type ?? 'default'}
                    {...props}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400'
    },
    input: {
        backgroundColor: '#f0f0f0',
        borderRadius: 7,
    },
    inputContainer: {
        marginTop: '2%'
    },
    container: {
        marginBottom: '5%'
    }
})

export default Field