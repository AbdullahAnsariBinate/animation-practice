import LottieView from 'lottie-react-native';
import React, {Fragment} from 'react';
import { View, Text } from 'react-native';


export interface LottieContainerProps {
    name: string;
    source: string;
    author: string;
    path: string;
}
export default function LottieContainer({ name, source, author, path }:LottieContainerProps): JSX.Element {
    const [show, setShow] = React.useState<boolean>();
    return (
  <Fragment>
    <View style={{height:200, width:200, alignSelf:'center'}}>
        <LottieView 
        source={path}
        autoPlay
        loop={true}
        />
    </View>
  </Fragment>
    )
}