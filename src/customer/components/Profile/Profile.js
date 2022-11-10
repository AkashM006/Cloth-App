import { View, Text, Image, StyleSheet, Pressable, Platform, Alert, useWindowDimensions, TouchableOpacity, Modal } from 'react-native'
import React, { useRef, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import Form from './Form'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage'
import auth from '@react-native-firebase/auth'
import { setIsLoading, setMsg } from '../../../redux/userSlice'
import BottomSheet from '../Settings/BottomSheet'

const Profile = () => {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const img = user.user.photoURL === null ? require('../../../icons/profile.png') : { uri: user.user.photoURL }
    const bottomSheetRef = useRef(null)
    const [isFull, setIsFull] = useState(false)
    const { height, width } = useWindowDimensions()

    const photoSelectionCallback = async response => {
        if (response.didCancel) {
            console.log("User cancelled file upload")
            dispatch(setIsLoading(false))
            return
        }
        if (response.errorCode) {
            dispatch(setIsLoading(false))
            console.log("Error message: ", response.errorMessage)
            // Alert.alert('Whoops!', response.errorMessage, [{ text: 'OK' }], { cancelable: true })
            dispatch(setMsg({ title: 'Whoops!', text: response.errorMessage, status: 'failure' }))
            return
        }

        let imgUri = response.assets[0].uri
        imgUri = Platform.OS === 'android' ? imgUri.replace('file://', '') : imgUri
        let fileName = imgUri.substring(imgUri.lastIndexOf('/') + 1)

        // get the current photo link and remove it and then add the current photo
        const oldPhoto = user.user.photoURL

        try {
            await storage().ref(fileName).putFile(imgUri)
        } catch (err) {
            console.log("Unable to upload to firebase storage: ", err)
            dispatch(setIsLoading(false))
            return
        }

        let fileUrl = ''
        try {
            fileUrl = await storage().ref(fileName).getDownloadURL()
        } catch (err) {
            console.log("Unable to get file: ", err)
            dispatch(setIsLoading(false))
            return
        }

        const update = { photoURL: fileUrl }

        try {
            await auth().currentUser.updateProfile(update)
        } catch (err) {
            dispatch(setIsLoading(false))
            console.log("Unable to change the profile photo: ", err)
            return
        }

        try {
            await storage().refFromURL(oldPhoto).delete()
        } catch (errr) {
            console.log("Unable to delete old file: ", err)
            return
        }

        dispatch(setIsLoading(false))
        // Alert.alert('Hooray!', 'Your profile photo has changed!', [{ text: 'OK' }], { cancelable: true })
        dispatch(setMsg({ title: 'Hooray!', text: 'Your profile photo has been changed!', status: 'success' }))
        bottomSheetRef.current?.scrollTo(0)
    }

    const cameraHandler = () => {
        dispatch(setIsLoading(true))
        const options = {
            storageOption: {
                skipBackup: true,
                mediaType: 'photo',
                cameraType: 'back',
                quality: 0.8,
                saveToPhotos: true
            }
        }

        launchCamera(options, photoSelectionCallback)
    }

    const galleryHandler = () => {
        dispatch(setIsLoading(true))
        const options = {
            mediaType: 'photo',
            maxWidth: 2000,
            maxHeight: 2000,
            quality: 0.8,
            selectionLimit: 1,
        }

        launchImageLibrary(options, photoSelectionCallback)
    }

    const pressHandler = () => { bottomSheetRef.current?.scrollTo(-height / 2.25) }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <Modal
                onRequestClose={() => setIsFull(false)}
                transparent={true}
                animationType='slide'
                visible={isFull}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Pressable onPress={() => setIsFull(false)}>
                            <Image source={require('../../../icons/close.png')} style={styles.close} />
                        </Pressable>
                        <Text style={styles.modalText}>{user.user.displayName}</Text>
                    </View>
                    <View style={styles.modalImage}>
                        <Image source={img} style={styles.photoFull} />
                    </View>
                </View>
            </Modal>
            <View style={{ flex: 1, }} />
            <View style={{ flex: 5, backgroundColor: 'white', }}>
                <LinearGradient colors={['#DCE2E2', 'rgba(217, 217, 217, 0)']} locations={[0, 1]} style={styles.gradientContainer}>
                    <View style={{ transform: [{ translateY: -90 }], width: '100%', }}>
                        <Text style={styles.title}>{user.user.displayName}</Text>
                        <View>
                            <Pressable onPress={() => setIsFull(true)}>
                                <Image source={img} style={styles.photo} />
                            </Pressable>
                            <Pressable onPress={pressHandler} style={styles.cameraContainer}>
                                <Image source={require('../../../icons/pencil.png')} style={styles.camera} />
                            </Pressable>
                        </View>
                        <Form />
                    </View>
                </LinearGradient>
                <BottomSheet ref={bottomSheetRef}>
                    <View style={styles.bottomSheetContainer}>
                        <TouchableOpacity onPress={galleryHandler}>
                            <View style={styles.iconContainer}>
                                <Image style={styles.icon} source={require('../../../icons/gallery.png')} />
                                <Text style={styles.text}>Select from Gallery</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={cameraHandler}>
                            <View style={styles.iconContainer}>
                                <Image style={styles.icon} source={require('../../../icons/camera.png')} />
                                <Text style={styles.text}>Capture new picture</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    photo: {
        height: 150,
        width: 150,
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 100,
        backgroundColor: 'white',
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    gradientContainer: {
        flex: 1,
        alignItems: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: '2%'
    },
    title: {
        color: 'black',
        textAlign: 'center',
        marginTop: '2%',
        fontWeight: '800',
        fontSize: 18
    },
    camera: {
        position: 'absolute',
        tintColor: 'white',
        width: 30,
        height: 30,
    },
    cameraContainer: {
        backgroundColor: 'black',
        width: 50,
        height: 50,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: 0,
        transform: [{ translateX: 50 }],
        borderRadius: 100,
    },
    bottomSheetContainer: {
        flexDirection: 'row',
        paddingHorizontal: '5%',
        justifyContent: 'center',
    },
    iconContainer: {
        backgroundColor: '#141414',
        padding: '2.5%',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: '5%',
    },
    text: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600'
    },
    icon: {
        tintColor: 'white'
    },
    photoFull: {
        height: '80%',
        width: '100%',
        resizeMode: 'contain'
    },
    modalContainer: {
        backgroundColor: 'black',
        paddingVertical: '5%'
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    close: {
        width: 30,
        height: 30,
        tintColor: 'white'
    },
    modalText: {
        color: 'white',
        marginLeft: '2%',
        fontSize: 20,
        fontWeight: '700'
    },
    modalImage: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
})

export default Profile