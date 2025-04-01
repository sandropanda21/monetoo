import { View, Text, Switch, Image } from "react-native"
import { useState } from "react"
import Button from "../../components/button"
import styles from "./style.js"

export default function Settings() {
    const [on, setOn] = useState(false)
    const toogleButton = ()=>setOn(previousState => !previousState)
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require("../../assets/icons/notificationBlack.png")}/>
                    <Text style={styles.headerText}>Receber notificações</Text>
                    <Switch
                        trackColor={{true: "#85FFC4", false:"#C3D7CD"}}
                        thumbColor={on ? "#00bf63" :  "#94B8A6"}
                        value={on}
                        onValueChange={toogleButton}
                    />
                </View>
                <Button text={"Terminar Sessão"}/>
            </View>
        </>
    )
}