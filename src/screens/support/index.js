import { View, Text } from "react-native"
import styles from "./style.js"

export default function Support() {
    return ( 
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.headerTittle}>
                            Tem alguma dúvida?
                        </Text>
                        <Text style={styles.headerSubTittle}>
                            Consulte nossos canais oficiais abaixo:
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            <Text style={styles.boldText}>Email:</Text> email@mail.com
                        </Text>
                        <Text style={styles.text}>
                            <Text style={styles.boldText}>WhatsApp:</Text> (+244) 912345678
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}