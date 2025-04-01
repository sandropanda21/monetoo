import { View, Text, TextInput } from "react-native"
import styles from "./style.js"

export default function CashOutForm() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        Qual banco você deseja enviar seus ganhos?
                    </Text>
                    <View style={styles.input}>
                        <View/>
                        <TextInput placeholder="Banco Angolano de Investimento" placeholderTextColor={"#1e1e1e"} style={styles.bankInputField}/>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        Informe o seu IBAN
                    </Text>
                    <View style={styles.input}>
                        <Text>AO</Text>
                        <TextInput placeholder="00693756421092734234" placeholderTextColor={"#1e1e1e"} keyboardType="numeric" style={styles.inputField}/>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        Quanto deseja sacar?
                    </Text>
                    <View style={styles.input}>
                        <TextInput placeholder="100,00" placeholderTextColor={"#1e1e1e"} keyboardType="numeric" style={styles.inputField}/>
                        <Text>Kzs</Text>
                    </View>
                </View>
            </View>
        </>
    )
}