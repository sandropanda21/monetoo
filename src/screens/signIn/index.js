import {ScrollView, View, Text, Image} from "react-native"
import Input from "../../components/input"
import Button from "../../components/button"
import OtherLogin from "../../components/otherLogin"
import styles from "./styles.js"

export default function SignIn () {
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image source={require("../../assets/images/logo.png")} style={styles.headerImage}/>
                    <Text style={styles.headerText}>
                        Bem-vindo de volta!
                    </Text>
                    <Text style={styles.headerText}>   
                        Acesse sua conta e continue  
                        <Text style={styles.textBold}> ganhando!</Text>
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <Input placeholder={"E-mail"} keyBoardType={"email"} icon={"mail"}/>
                    <Input placeholder={"Senha"} secureTextEntry icon={"visibility"}/>
                    <Button text={"Iniciar Sessão"}/>
                    <View style={styles.formFooter}>
                        <Text style={styles.formText}>Outras Opções</Text>
                        <OtherLogin/>
                        <Text style={styles.formText}>Ainda Não Sou Cadastrado? <Text style={styles.textBoldColor}>Cadastrar-se</Text></Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}