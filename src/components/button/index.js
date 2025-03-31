import { TouchableOpacity, Text } from "react-native";
import styles from "./style"

export default function Button({text, ...props}) {
    return(
        <>
            <TouchableOpacity {...props} style={styles.button} activeOpacity={0.5}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </>
    )
}

