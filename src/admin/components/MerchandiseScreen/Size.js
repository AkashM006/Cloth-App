import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { FieldArray } from 'formik'

const EmptySize = () => {
    return <View style={styles.textContainer}>
        <Text style={{ color: 'black', fontStyle: 'italic', fontSize: 16 }}>No sizes added yet.</Text>
    </View>
}

const Size = ({ formik }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Size</Text>
            <FieldArray name='sizes'>
                {props => {
                    const { push, remove, form } = props

                    const addHandler = _ => {
                        let sizeName = form.values.currentSize
                        push(sizeName)
                        // form.values.currentSize = ''
                        formik.setFieldValue('currentSize', '')
                    }

                    return (
                        <>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter a size ( XS, S, L )'
                                    onChangeText={formik.handleChange('currentSize')}
                                    value={formik.values.currentSize}
                                    placeholderTextColor='gray'
                                />
                                <TouchableOpacity onPress={addHandler} style={styles.add}>
                                    <Text style={styles.addText}>Add</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.separator}>
                                {form.values.sizes.length === 0 ?
                                    <EmptySize /> :
                                    <FlatList
                                        horizontal
                                        data={form.values.sizes}
                                        keyExtractor={(item, index) => index}
                                        showsHorizontalScrollIndicator={false}
                                        bounces={false}
                                        renderItem={({ item, index }) => (
                                            <TouchableOpacity style={styles.sizeContainer} onPress={() => remove(index)}>
                                                <Text style={styles.sizeText}>{item}</Text>
                                            </TouchableOpacity>
                                        )}
                                    />
                                }
                            </View>
                        </>
                    )
                }}
            </FieldArray>
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
        width: '75%'
    },
    inputContainer: {
        marginTop: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container: {
        marginBottom: '5%'
    },
    add: {
        borderColor: '#0180ff',
        borderWidth: 1,
        padding: '5%',
        borderRadius: 14,
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
    },
    sizes: {
        marginTop: '5%'
    },
    delete: {
        width: 20,
        height: 20,
    },
    separator: {
        marginTop: '5%'
    },
    scroll: {
        backgroundColor: 'white',
        width: '100%'
    },
    sizeText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
    },
    sizeContainer: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginRight: 15,
        flexDirection: 'row',
    },
    textContainer: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10
    }
})

export default Size