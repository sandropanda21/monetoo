import {View, TextInput, Image} from "react-native"
import styles from "./style"


const icons = {
    person: require("../../assets/icons/person.png"),
    mail: require("../../assets/icons/mail.png"),
    visibility: require("../../assets/icons/visibility.png")
}

export default function Input({icon, ...props}) {
    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput {...props} style={styles.inputField} placeholderTextColor={"#1e1e1e"}/>
                <Image source={icons[icon]}/>
            </View>
        </>
    )
}