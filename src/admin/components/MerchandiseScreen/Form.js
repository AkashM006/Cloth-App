import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import Field from './Field'
import Size from './Size'
import Color from './Color'
import Photo from './Photo'

const Form = ({ formik }) => {

    const pressHandler = () => {
        // first validate the form and then submit
        formik.validateForm()
            .then(res => {
                console.log("Finished")
            })
            .catch(err => {
                console.log("Error: ", err)
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
            <Size formik={formik} />
            <Color formik={formik} />
            <Photo formik={formik} />
            <TouchableOpacity onPress={pressHandler} style={styles.button}>
                <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0180ff',
        padding: '5%',
        borderRadius: 7,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: '400',
        fontSize: 16
    }
})

export default Form