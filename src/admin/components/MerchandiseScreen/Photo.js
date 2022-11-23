import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import { useState } from 'react'

const Buttons = ({ pressHandler, isLoading, cameraHandler, formik }) => {
    return (<View style={styles.container}>
        {/* {formik.values.rawImg !== '' &&
                <View style={styles.previewContainer}>
                    <Text>Preview</Text>
                    <Image source={{ uri: formik.values.rawImg }} style={styles.preview} />
                </View>
            } */}
        <TouchableOpacity style={styles.button} onPress={pressHandler} disabled={isLoading}>
            <Text style={styles.text}>
                Upload Photo
            </Text>
        </TouchableOpacity>
        {formik.values.photo === '' && <TouchableOpacity style={styles.button} onPress={cameraHandler} disabled={isLoading}>
            <Text style={styles.text}>
                Capture new Photo
            </Text>
        </TouchableOpacity>}
    </View>)
}

const Preview = ({ formik, pressHandler }) => {
    return (
        <View style={styles.previewContainer}>
            <Text style={styles.text}>Preview</Text>
            <View style={styles.previewSlide}>
                <View horizontal style={styles.previewImageContainer}>
                    <Image source={{ uri: formik.values.rawImg }} style={styles.preview} />
                    <TouchableOpacity style={styles.closeContainer} onPress={pressHandler}>
                        <Image source={require('../../../icons/close.png')} style={styles.close} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const Photo = ({ formik }) => {

    const [isLoading, setIsLoading] = useState()

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
        let rawImg = imgUri
        imgUri = Platform.OS === 'android' ? imgUri.replace('file://', '') : imgUri
        let fileName = imgUri.substring(imgUri.lastIndexOf('/') + 1)

        formik.setFieldValue('photo', fileName)
        formik.setFieldValue('photoURI', imgUri)
        formik.setFieldValue('rawImg', rawImg)
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
            formik.setFieldValue('rawImg', '')
        }
    }

    const render = {
        true: <Buttons pressHandler={pressHandler} formik={formik} cameraHandler={cameraHandler} isLoading={isLoading} />,
        false: <Preview formik={formik} pressHandler={pressHandler} />
    }

    return render[formik.values.rawImg === '']
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
    },
    preview: {
        height: 175,
        width: 175,
        marginVertical: '5%',
        borderRadius: 10,
    },
    previewContainer: {
        paddingHorizontal: '2.5%',
        alignItems: 'flex-start'
    },
    close: {
        width: 15,
        height: 15,
    },
    closeContainer: {
        position: 'absolute',
        right: 7,
        top: 15,
        padding: '5%',
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    previewImageContainer: {
        position: 'relative',
    },
    previewSlide: {
        flexDirection: 'row'
    }
})

export default Photo