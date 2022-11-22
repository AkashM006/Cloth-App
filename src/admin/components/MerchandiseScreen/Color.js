import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Field from './Field'
import { FieldArray } from 'formik'

const EmptyText = () => {
    return <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No colors added Yet</Text>
    </View>
}

const Color = ({ formik }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Colors</Text>
            <View style={styles.fieldContainer}>
                <FieldArray name='colors'>
                    {props => {
                        const { push, remove, form } = props

                        const pressHandler = () => {
                            if (form.values.currentColor === '' || form.values.currentColorCode === '') {
                                return
                            }
                            let colorObj = {
                                name: form.values.currentColor,
                                colorCode: form.values.currentColorCode,
                            }
                            push(colorObj)
                            form.setFieldValue('currentColor', '')
                            form.setFieldValue('currentColorCode', '')
                        }
                        return (
                            <>
                                <Field
                                    text='Color Name'
                                    onChangeText={formik.handleChange('currentColor')}
                                    value={formik.values.currentColor}
                                    placeholder='Color Name ( Gray, Radiant blue, Power red )'
                                />
                                <Field
                                    text='Color Code'
                                    onChangeText={formik.handleChange('currentColorCode')}
                                    value={formik.values.currentColorCode}
                                    placeholder='Color Code ( #fff, #f0f0f0 )'
                                />
                                <TouchableOpacity onPress={pressHandler} style={styles.button}>
                                    <Text style={styles.addText}>Add</Text>
                                </TouchableOpacity>
                                <View style={{ marginTop: '7.5%' }}>
                                    {form.values.colors.length === 0 ?
                                        <EmptyText /> :
                                        <FlatList
                                            data={form.values.colors}
                                            horizontal
                                            keyExtractor={(item, index) => index}
                                            showsHorizontalScrollIndicator={false}
                                            bounces={false}
                                            renderItem={({ item, index }) => {
                                                return (
                                                    <TouchableOpacity onPress={() => remove(index)} style={styles.colorContainer}>
                                                        <View style={[styles.color, { backgroundColor: item.colorCode }]} />
                                                        <Text style={styles.colorText}>{item.name}</Text>
                                                    </TouchableOpacity>
                                                )
                                            }}
                                        />
                                    }
                                </View>
                            </>
                        )
                    }}
                </FieldArray>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        marginBottom: '2.5%'
    },
    text: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
    fieldContainer: {
        padding: '5%'
    },
    button: {
        padding: '5%',
        paddingHorizontal: '10%',
        borderRadius: 10,
        borderColor: '#0180ff',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    addText: {
        color: 'black',
        fontWeight: '400',
        fontSize: 16,
    },
    emptyContainer: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 15,
    },
    colorContainer: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        marginRight: 15,
        alignItems: 'center',
    },
    color: {
        width: 20,
        height: 20,
        marginRight: 5,
        borderRadius: 5
    },
    colorText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
    },
    emptyText: {
        color: 'black',
        fontStyle: 'italic',
        fontSize: 16,
    }
})

export default Color