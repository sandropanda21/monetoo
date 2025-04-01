import { ScrollView, View, Text } from "react-native"
import Button from "../../components/button"
import CashOutForm from "../../components/cashOutForm"
import styles from "./style.js"

export default function CashOut() {
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTittle}>
                        Pedido de Saque
                    </Text>
                    <Text style={styles.headerSubTittle}>
                        Preencha o formulário abaixo para completar seu pedido!
                    </Text>
                </View>
                <View style={styles.main}>
                    <CashOutForm/>
                    <Button text={"Sacar"}/>
                </View>
            </ScrollView>
        </>
    )
}