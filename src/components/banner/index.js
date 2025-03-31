import {TouchableOpacity, Text, Image} from "react-native"
import styles from "./style"

const icons = {
    money: require("../../assets/icons/money.png"),
    payment: require("../../assets/icons/payments.png"),
    setting: require("../../assets/icons/settings.png"),
    support: require("../../assets/icons/support.png"),
}

export default function Banner ({icon, text, ...props}) {
    return (
        <>
            <TouchableOpacity {...props} style={styles.bannerContainer} activeOpacity={0.5}>
                <Image source={icons[icon]}/>
                <Text style={styles.bannerText}>{text}</Text>
            </TouchableOpacity>
        </>
    )
}