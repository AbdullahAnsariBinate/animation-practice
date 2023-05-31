import * as React from "react";
import { Text, View } from "react-native";
import Splash from "./src/screens/Splash";
import Home from "./src/screens/Home";


export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  return isLoading ? <Splash setIsLoading={setIsLoading} /> : <Home />;
}