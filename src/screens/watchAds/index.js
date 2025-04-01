import { View, Text } from "react-native"
import Button from "../../components/button"
import styles from "./style.js"

export default function WatchAds() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTittle}>
                        Assista anúncios e seja recompensado
                    </Text>
                    <Text style={styles.headerSubTittle}>
                        Clique no botão abaixo para começar!
                    </Text>
                </View>
                <Button text={"Ver anúncios"}/>
            </View>
        </>
    )
}