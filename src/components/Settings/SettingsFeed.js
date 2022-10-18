import { View, Text, Button, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import BottomSheet from './BottomSheet'
import { GestureHandlerRootView, FlatList, ScrollView } from 'react-native-gesture-handler'
import { useRef } from 'react'
import SettingsContent from './SettingsContent'
import languages from '../../i18n/languages'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { setLanguage } from '../../redux/userSlice'

const { height, width } = Dimensions.get('screen')
const maxTranslateY = -height * 0.8

const SettingsFeed = () => {

    const ref = useRef(null);
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const currentLanguage = useSelector(state => state.user.language)

    const openBottomSheet = () => {
        if (ref?.current?.getIsActive() === true)
            ref?.current?.scrollTo(0)
        else
            ref?.current?.scrollTo(-height / 2)
    }

    const changeLanguage = (languageObj) => {
        i18n.changeLanguage(languageObj.code)
            .then(() => {
                dispatch(setLanguage(languageObj))
                ref?.current?.scrollTo(0)
            })
            .catch(err => {
                console.log("Error: ", err);
            })
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <SettingsContent pressHandler={openBottomSheet} />
                <BottomSheet containerStyle={styles.containerStyle} ref={ref}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '800' }}>Select a Language:</Text>
                    <View style={styles.cardContainer}>
                        <ScrollView>
                            {languages.map((item, index) => {
                                return <TouchableOpacity key={index} onPress={() => changeLanguage(item)}>
                                    <View style={styles.card}>
                                        <Text style={styles.text}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            })}
                        </ScrollView>
                    </View>
                </BottomSheet>
            </View>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 50,
        backgroundColor: '#141414',
        justifyContent: 'center',
        marginBottom: '2%',
        borderRadius: 5
    },
    containerStyle: {
        marginHorizontal: '5%'
    },
    cardContainer: {
        marginTop: 15
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    }
})

export default SettingsFeed