import {ScrollView, View, Text, Image} from "react-native"
import Input from "../../components/input"
import Button from "../../components/button"
import OtherLogin from "../../components/otherLogin"
import styles from "./styles.js"

export default function SignUp () {
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image source={require("../../assets/images/logo.png")} style={styles.headerImage}/>
                    <Text style={styles.headerText}>
                        Transforme seu tempo em ganhos reais.
                    </Text>
                    <Text style={styles.headerText}>    
                        Cadastre-se agora e comece a
                        <Text style={styles.textBold}> ganharrrrrr!</Text>
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <Input placeholder={"Nome"} icon={"person"}/>
                    <Input placeholder={"E-mail"} keyBoardType={"email"} icon={"mail"}/>
                    <Input placeholder={"Senha"} secureTextEntry icon={"visibility"}/>
                    <Input placeholder={"Confirmar Senha"} secureTextEntry icon={"visibility"}/>
                    <Button text={"Criar Conta"}/>
                    <View style={styles.formFooter}>
                        <Text style={styles.formText}>Outras Opções</Text>
                        <OtherLogin/>
                        <Text style={styles.formText}>Já Sou Cadastrado? <Text style={styles.textBoldColor}>Iniciar Sessão</Text></Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}