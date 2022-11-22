import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import Form from './Form'
import { useNavigation } from '@react-navigation/native'

const AddModal = () => {

    const navigation = useNavigation()

    const closeHandler = () => { navigation.goBack() }

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
            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
                <Formik
                    initialValues={{
                        name: '',
                        about: '',
                        currentSize: '',
                        sizes: [],
                        currentColor: '',
                        currentColorCode: '',
                        colors: [],
                        photo: ''
                    }}
                    // validationSchema={}
                    onSubmit={values => {
                        // do something
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
    contentContainer: {
        marginTop: '5%',
    },
})

export default AddModal