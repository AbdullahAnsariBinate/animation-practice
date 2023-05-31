import * as React from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import LottieContainer, { LottieContainerProps } from '../components/LottieContainer';
import Animated from 'react-native-reanimated';

export default function Home(): JSX.Element {
    return (
        <SafeAreaView style={{ backgroundColor: 'rgb(103 232 249)', flex: 1, }}>
            <Animated.ScrollView>
                <Text style={{fontSize:30, fontWeight:'800', color:'#000000', textAlign:'center'}}>
                    Welcome Home
                </Text>
                {animations.map((animation, index) => <LottieContainer  key={index} {...animation}/>)}
            </Animated.ScrollView>
        </SafeAreaView>
    )
}

const animations: LottieContainerProps[] = [
    {
        name: 'Girl',
        source: 'https://assets5.lottiefiles.com/packages/lf20_jogqbvym.json',
        author: 'Abdullah',
        path: require('../assets/girl.json')
    },
    // {
    //     name: 'Sucess',
    //     source: 'https://lottiefiles.com/782-check-mark-success',
    //     author: 'Travis Gregory',
    //     path: require('../assets/sucess.json'),
    // },
    // {
    //     name: 'Danger',
    //     source: 'https://assets10.lottiefiles.com/packages/lf20_j6fywzxe.json',
    //     author: 'Jacques Mauriac',
    //     path: require('../assets/danger.json'),
    // },
    {
        name: 'Rider',
        source: 'https://assets1.lottiefiles.com/private_files/lf30_ewzbzcaw.json',
        author: 'Lottie Files',
        path: require('../assets/rider.json'),
    },


];