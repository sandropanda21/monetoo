import { View, Image } from "react-native";
import styles from "./style.js"

export default function OtherLogin () {
    return (
        <>
            <View style={styles.container}>
                <Image source={require("../../assets/icons/Facebook.png")}/>
                <Image source={require("../../assets/icons/Google.png")}/>
                <Image source={require("../../assets/icons/Apple.png")}/>
            </View>
        </>
    )
}