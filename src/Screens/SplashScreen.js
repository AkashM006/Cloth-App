import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { View } from 'react-native';

const SplashScreen = () => {
    const animationRef = useRef(null);
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Main');
        }, 5000);
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <LottieView
                source={require('../icons/loading.json')}
                autoPlay
                ref={animationRef}
                loop={false}
                onAnimationFinish={() => {
                    animationRef.current.play()
                }}
            />
        </View>
    )
}

export default SplashScreen