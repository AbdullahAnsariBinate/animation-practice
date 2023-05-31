import React, { SetStateAction, Dispatch } from "react";
import { Text, View } from "react-native";
import LottieView from 'lottie-react-native'



interface SplashProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>
}
export default function Splash({ setIsLoading }: SplashProps): JSX.Element {

    return (
        <View style={{ flex: 1, alignItems: 'center', margin: 0 }}>
            <LottieView
                source={require('../assets/animateSplash.json')}
                autoPlay
                loop={false}
                resizeMode="cover"
                onAnimationFinish={()=> setIsLoading(false)}
            />
        </View>
    )
}