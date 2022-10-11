import { View, Text, Dimensions, StyleSheet, Button, Animated } from 'react-native'
import React, { useRef, useState } from 'react'

const height = Dimensions.get('window').height;

const bottomSheetHeight = (height * 40) / 100

const SettingsFeed = () => {

    const animatedHeight = useRef(new Animated.Value(0)).current;
    const [isOpen, setIsOpen] = useState(false);

    const openBottomSheet = () => {
        // console.log("Animated Value: ", animatedHeight)
        // let toValue = animatedHeight === bottomSheetHeight ? 0 : bottomSheetHeight;
        // console.log("toValue: ", toValue)
        setIsOpen(prev => !prev);
        let toValue = isOpen === true ? 0 : 100

        Animated.spring(animatedHeight, {
            toValue,
            duration: 300,
            useNativeDriver: false
        }).start()


    }

    return (
        <View style={styles.container}>
            <Text>SettingsFeed</Text>
            {/* <TouchableOpacity onPress={openBottomSheet}>
                <View>
                    <Text>Open</Text>
                </View>
            </TouchableOpacity> */}
            <Button title='Open' onPress={openBottomSheet} />
            <Animated.View
                style={[styles.bottomSheet, {
                    height: animatedHeight.interpolate({
                        inputRange: [0, 100],
                        outputRange: [0, bottomSheetHeight]
                    }),
                    opacity: animatedHeight.interpolate({
                        inputRange: [0, 50, 100],
                        outputRange: [0, 0.5, 1]
                    })
                }]}
                onStartShouldSetResponder={() => true}
            // onResponderMove={() => {
            // }}
            >
                <Text style={{ color: 'black' }}>Hello</Text>
            </Animated.View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        flex: 1
    },
    bottomSheet: {
        // height: bottomSheetHeight,
        // borderColor: 'white',
        // borderWidth: 2,
        position: 'absolute',
        width: '100%',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
        padding: '5%'
        // top: height - bottomSheetHeight,
    }
})

export default SettingsFeed