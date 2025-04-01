import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StatusBar } from "react-native";
import Input from "./components/input/index.js"
import Button from "./components/button/index.js"
import Banner from "./components/banner/index.js"


SplashScreen.preventAutoHideAsync();


export default function App() {
 const [loaded, error] = useFonts({
  "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
  "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
  "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
  "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
  "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
 });

 useEffect(() => {
   if (loaded || error) {
     SplashScreen.hideAsync();
   }
 }, [loaded, error]);

 if (!loaded && !error) {
   return null;
 }

 return (
  <>
    <StatusBar barStyle={'light-content'} backgroundColor={"#00703A"}/>
    <View style={{flex: 1, flexDirection: "column", paddingInline: 10, gap: 20}}>
      <Text style={{fontFamily: "Inter-Bold", fontSize: 25, color: "#00703A"}}>Monetoooo</Text>
      <Input placeholder={"Digite algo"} icon={"person"}/>
      <Button text={"Cadastrar-se"}/>
      <Banner icon={"money"} text={"Ganhar Dinheiro"}/>
    </View>
  </>
 )
}
