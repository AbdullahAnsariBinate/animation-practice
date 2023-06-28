import * as React from 'react';
import { SafeAreaView, Text, View, ScrollView, Pressable } from 'react-native';
import LottieContainer, { LottieContainerProps } from '../components/LottieContainer';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, withRepeat, Easing } from 'react-native-reanimated';
import { TextInput } from 'react-native-paper';
import { heightPercentageToDP } from 'react-native-responsive-screen'




export default function Home(): JSX.Element {
    const [text, setText] = React.useState("");
    const [text2, setText2] = React.useState("");



    // const handleRotation = (progress: Animated.SharedValue<number>) => {
    //     //if you want to run a function on javascript ui thread
    //     'worklet';
    //     return `${progress.value * 2 * Math.PI}rad`
    // }
    // const progress = useSharedValue(1);
    // const scaleProgress = useSharedValue(2);

    const emailInitial = useSharedValue(-heightPercentageToDP('100%'));
    const passwordInitial = useSharedValue(0);


    // const animatedStyles = useAnimatedStyle(() => {
    //     return {
    //         opacity: progress.value,
    //         // borderRadius: (progress.value * 100)/1,
    //         transform: [
    //             { scale: scaleProgress.value },
    //             { rotate: `${progress.value * 2 * Math.PI}rad` }
    //         ]
    //     }
    // }, [])

    const customAnimationEmail = useAnimatedStyle(() => {
        return {
            bottom: emailInitial.value
        }
    }, [])
    const customAnimationPassword = useAnimatedStyle(() => {
        return {
            opacity: passwordInitial.value
        }
    }, [])

    const animationFunc = () => {
        // progress.value = withSpring(0.5);
        // scaleProgress.value = withRepeat(withSpring(1.5), -1);
    }
    const animationFunc2 = () => {
        // progress.value = withRepeat(withSpring(1), 3, true);
        // scaleProgress.value = withRepeat(withSpring(0), 3, true);
    }
    React.useEffect(() => {
        emailInitial.value = withTiming(0, { duration: 300, easing: Easing.elastic(.8) })
        passwordInitial.value = withTiming(1, { duration: 400 })

    }, [])

    return (
        <SafeAreaView style={{ backgroundColor: 'rgb(103 232 249)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Animated.View style={[{ height: 100, width: 100, backgroundColor: 'yellow', borderRadius: 10 }, animatedStyles]}>
            </Animated.View> */}
            <Animated.View style={[{ width: '95%', gap: 10 }, customAnimationEmail]}>
                <View >
                    <TextInput
                        label="Email"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                </View>
                <View >

                    <TextInput
                        label="Password"
                        value={text2}
                        onChangeText={text2 => setText2(text)}
                    />
                </View>

            </Animated.View>
            <Pressable onPress={() => animationFunc()} style={{ backgroundColor: 'green', paddingHorizontal: 20, paddingVertical: 16, borderRadius: 10, marginTop: 50 }}>
                <Text>Animate</Text>
            </Pressable>
            <Pressable onPress={() => animationFunc2()} style={{ backgroundColor: 'red', paddingHorizontal: 20, paddingVertical: 16, borderRadius: 10, marginTop: 10 }}>
                <Text>Animate D</Text>
            </Pressable>
        </SafeAreaView>
    )
}
