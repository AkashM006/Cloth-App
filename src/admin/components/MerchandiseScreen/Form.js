import { StyleSheet, TouchableOpacity, View, Text, Alert } from 'react-native'
import React from 'react'
import Field from './Field'
import Size from './Size'
import Color from './Color'
import Photo from './Photo'

const Form = ({ formik }) => {

    const pressHandler = () => {
        formik.validateForm()
            .then(res => {
                if (Object.keys(res).length === 0) {
                    console.log("Success")
                    formik.submitForm()
                } else {
                    console.log("Failure")
                    let message = res.message
                    Alert.alert(
                        'Whoops!',
                        message,
                        [{ text: 'OK', }],
                        { cancelable: true }
                    )
                }
            })
    }

    return (
        <View>
            <Field
                text='Name'
                onChangeText={formik.handleChange('name')}
                value={formik.values.name}
                placeholder='Cloth Name'
            />
            <Field
                text='About'
                onChangeText={formik.handleChange('about')}
                value={formik.values.about}
                placeholder='About Cloth'
                multiline={true}
            />
            <Field
                text='Price'
                onChangeText={formik.handleChange('price')}
                value={formik.values.price}
                placeholder='Price ( 100, 1500 )'
                multiline={false}
                type='numeric'
            />
            <Field
                text='Quantity'
                onChangeText={formik.handleChange('qty')}
                value={formik.values.qty}
                placeholder='Quantity ( 10, 150 )'
                multiline={false}
                type='numeric'
            />
            <Field
                text='Discount'
                onChangeText={formik.handleChange('discount')}
                value={formik.values.discount}
                placeholder='Discount ( 10, 12.5 )'
                multiline={false}
                type='numeric'
            />
            <Size formik={formik} />
            <Color formik={formik} />
            <Photo formik={formik} />
            <TouchableOpacity
                disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
                onPress={pressHandler}
                style={[styles.button, { backgroundColor: (!formik.dirty || !formik.isValid || formik.isSubmitting) ? 'gray' : '#0180ff' }]}
            >
                <Text style={styles.text}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    button: {
        // backgroundColor: '#0180ff',
        padding: '5%',
        borderRadius: 7,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
    }
})

export default Form