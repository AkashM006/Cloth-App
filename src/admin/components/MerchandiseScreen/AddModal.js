import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import Form from './Form'
import { useNavigation } from '@react-navigation/native'
import * as Yup from 'yup'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

const AddModal = () => {

    const navigation = useNavigation()

    const closeHandler = () => { navigation.goBack() }

    const schema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Cloth Name must be atleast 3 characters long!')
            .max(36, 'Cltoh Name can be only 36 characters long!')
            .required('Cloth Name is required!'),
        about: Yup.string()
            .min(10, 'About must be alteast 10 characters long!')
            .max(5000, 'About can be only 5000 characters long!')
            .required('About is required'),
        sizes: Yup.array().min(1, 'Alteast one size must be available!').required('Alteast one size must be available!'),
        colors: Yup.array().min(1, 'Atleast one color must be available!').required('Alteast one size must be available!'),
        photo: Yup.string().required('Alteast one picture is required!'),
        photoURI: Yup.string().required('Alteast one picture is required!'),
    })

    return (
        <View style={styles.modal}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.heading}>Add New Cloth</Text>
                    <TouchableOpacity onPress={closeHandler} style={styles.iconContainer}>
                        <Image source={require('../../../icons/close.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.contentContainer}>
                <Formik
                    initialValues={{
                        name: '',
                        about: '',
                        currentSize: '',
                        sizes: [],
                        currentColor: '',
                        currentColorCode: '',
                        colors: [],
                        photo: '',
                        photoURI: '',
                    }}
                    validate={async formFields => {
                        let values = { ...formFields }
                        delete values.currentColor
                        delete values.currentColorCode
                        delete values.currentSize
                        try {
                            const result = await schema.validate(values)
                            return {}
                        } catch (err) {
                            return { message: err.message }
                        }

                    }}
                    onSubmit={async values => {
                        // validate if the cloth is already present in firestore
                        let { name, about, sizes, colors, photo, photoURI } = values

                        try {
                            const cloth = await (await firestore().collection('clothes').where('name', '==', name.toLowerCase()).count().get())

                            if (cloth._data.count !== 0) {
                                Alert.alert("Duplicate Cloth Name!", 'A cloth with the same name already exists please enter a new name!')
                                return
                            }

                            // Task: here create an entry in db until then disable the button

                            // Sub Task: first upload the file to file storage and get the link

                            try {
                                await storage().ref(photo).putFile(photoURI)
                                console.log("Uploded the photo")
                            } catch (err) {
                                console.log("Error while uploading the photo")
                            }

                            // Sub Task: create document in clothes collection

                            try {
                                photo = await storage().ref(photo).getDownloadURL()
                                const result = await firestore().collection('clothes').add({
                                    name,
                                    about,
                                    sizes,
                                    colors,
                                    photo
                                })
                                console.log("Result: ", result)
                            } catch (err) {
                                console.log("Error: ", err)
                            }

                            // clear the form and go back
                            navigation.goBack()

                        } catch (err) {
                            console.log("Error: ", err)
                        }
                    }}
                >
                    {(props) => <Form formik={props} />}
                </Formik>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        height: 25,
        width: 25,
    },
    iconContainer: {
        padding: '2.5%',
        backgroundColor: '#f0f0f0',
        borderRadius: 14,
    },
    container: {
        flexDirection: 'row',
        width: '100%',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modal: {
        padding: '5%',
        backgroundColor: 'white',
        marginBottom: '5%',
    },
    heading: {
        fontSize: 24,
        fontWeight: '800',
        color: 'black'
    },
    contentContainer: { marginTop: '5%', },
})

export default AddModal