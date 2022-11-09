import { View, StyleSheet, Image, useWindowDimensions, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { useState } from 'react'
import { setMsg } from '../../redux/userSlice'
import Clipboard from '@react-native-clipboard/clipboard'

const MAXLINKLENGTH = 25

const Docs = () => {
    const dispatch = useDispatch()

    const { height, width } = useWindowDimensions()

    const webViewRef = useRef(null);

    const [canGoBack, setCanGoBack] = useState(false)
    const [canGoForward, setCanGoForward] = useState(false)
    const [currentUrl, setCurrentUrl] = useState('www.google.com')// https://reactnative.dev/docs/getting-started
    const [isLoading, setIsLoading] = useState(false)

    const goBackHandler = () => { if (webViewRef.current && canGoBack) webViewRef.current.goBack() }

    const goForwardHandler = () => { if (webViewRef.current && canGoForward) webViewRef.current.goForward() }

    const reloadHandler = () => {
        if (isLoading === true && webViewRef.current) {
            setIsLoading(false)
            webViewRef.current.stopLoading()
        }

        else if (isLoading === false && webViewRef.current) {
            setIsLoading(true)
            webViewRef.current.reload()
        }
    }

    const copyHandler = () => {
        Clipboard.setString(currentUrl)
    }

    const image = isLoading === true ? require('../../icons/close.png') : require('../../icons/reload.png')

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: height * 0.88 }}>
                <WebView
                    source={{ uri: currentUrl }}
                    onError={event => alert('Error: ' + event.nativeEvent.title)}
                    bounces={false}
                    startInLoadingState={true}
                    onLoadStart={() => setIsLoading(true)}
                    onLoadEnd={() => setIsLoading(false)}
                    onShouldStartLoadWithRequest={navigationState => {
                        setCanGoBack(navigationState.canGoBack)
                        setCanGoForward(navigationState.canGoForward)
                        setCurrentUrl(navigationState.url)
                        return true
                    }}
                    onNavigationStateChange={navigationState => {
                        setCanGoBack(navigationState.canGoBack)
                        setCanGoForward(navigationState.canGoForward)
                        setCurrentUrl(navigationState.url)
                    }}
                    pullToRefreshEnabled={true}
                    ref={webViewRef}
                />
            </View>
            <View style={[styles.buttonsContainer, { height: height * 0.1 }]}>
                <TouchableOpacity
                    // disabled={!canGoBack}
                    onPress={goBackHandler}
                    style={{ opacity: canGoBack === true ? 1 : 0.5 }}
                >
                    <Image
                        source={require('../../icons/back.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={reloadHandler} >
                    <Image source={image} style={styles.icon} />
                </TouchableOpacity>
                <View style={styles.urlContainer}>
                    <Text style={styles.text}>
                        {currentUrl.length > MAXLINKLENGTH ? currentUrl.substring(0, MAXLINKLENGTH + 1) + '...' : currentUrl}
                    </Text>
                </View>
                <TouchableOpacity onPress={copyHandler} >
                    <Image source={require('../../icons/copy.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity
                    // disabled={!canGoForward}
                    onPress={goForwardHandler}
                    style={{ opacity: canGoForward === true ? 1 : 0.5 }}
                >
                    <Image
                        source={require('../../icons/back.png')}
                        style={[styles.icon, styles.forward]}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
        // paddingHorizontal: '5%',
    },
    icon: {
        height: 30,
        width: 30,
    },
    forward: {
        transform: [
            { rotate: '180deg' }
        ]
    },
    text: {
        color: 'black',
        fontSize: 16
    },
    urlContainer: {
        padding: '1%',
        paddingHorizontal: '3%',
        backgroundColor: '#f0f0f0',
        borderRadius: 5
    }
})

export default Docs