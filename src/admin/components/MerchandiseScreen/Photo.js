import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'

const Photo = ({ formik }) => {

    const imageHandler = async response => {
        if (response.didCancel) {
            console.log("User cancelled file upload")
            return
        }
        if (response.errorCode) {
            console.log("Error message: ", response.errorMessage)
            return
        }

        let imgUri = response.assets[0].uri
        imgUri = Platform.OS === 'android' ? imgUri.replace('file://', '') : imgUri
        let fileName = imgUri.substring(imgUri.lastIndexOf('/') + 1)

        formik.setFieldValue('photo', fileName)
        formik.setFieldValue('photoURI', imgUri)
    }

    const cameraHandler = () => {
        const options = {
            storageOption: {
                skipBackup: true,
                mediaType: 'photo',
                cameraType: 'back',
                quality: 0.8,
                saveToPhotos: true
            }
        }

        launchCamera(options, imageHandler)
    }

    const pressHandler = () => {
        const options = {
            mediaType: 'photo',
            maxWidth: 2000,
            maxHeight: 2000,
            quality: 0.8,
            selectionLimit: 1,
        }
        if (formik.values.photo === '')
            launchImageLibrary(options, imageHandler)
        else {
            formik.setFieldValue('photo', '')
            formik.setFieldValue('photoURI', '')
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={pressHandler}>
                <Text style={styles.text}>
                    {formik.values.photo !== '' ? 'Clear Photo' : 'Upload Photo'}
                </Text>
            </TouchableOpacity>
            {formik.values.photo === '' && <TouchableOpacity style={styles.button} onPress={cameraHandler}>
                <Text style={styles.text}>
                    Capture new Photo
                </Text>
            </TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderColor: '#0180ff',
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: 'white',
        padding: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '5%'
    }
})

export default Photo