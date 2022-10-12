import { View, Text, StyleSheet, TextInput, Dimensions, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUserThunk } from '../../redux/userSlice'
import { useTranslation } from 'react-i18next'

const { height, width } = Dimensions.get('window')

const SettingsContent = ({ pressHandler }) => {

    const currentLanguage = useSelector(state => state.user.language)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation()

    const logout = () => {
        dispatch(logoutUserThunk(user.isGoogleAuth))
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.text}>{t('language')}: </Text>
                <Pressable style={styles.input} onPress={pressHandler}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', }}>{currentLanguage.name}</Text>
                        <TouchableOpacity onPress={pressHandler} style={styles.iconContainer}>
                            <Image source={require('../../icons/edit.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </View>
            <TouchableOpacity style={styles.logout} onPress={logout}>
                <Text style={styles.text}>{t('logout')}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: '5%',
        flex: 1,
    },
    text: {
        color: 'black',
        fontSize: 18,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        flex: 1,
        borderRadius: 5,
        maxWidth: width / 1.65,
        padding: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    formContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        height: 20,
        width: 20,
    },
    iconContainer: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 100,
    },
    logout: {
        borderColor: 'black',
        borderWidth: 1,
        marginTop: '5%',
        padding: '5%',
        paddingVertical: '2%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 7
    }
})

export default SettingsContent