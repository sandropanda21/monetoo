import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#00BF63",
        paddingInline: 10,
        paddingBottom: 14,
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25
    },
    headerImage:{
        marginBottom: 25
    },
    headerText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Inter-Regular",
    },
    textBold: {
        fontFamily: "Inter-Bold"
    },
    textBoldColor: {
        fontFamily: "Inter-Bold",
        color: "#00BF63"
    },
    formContainer: {
        gap: 20,
        backgroundColor: "#f1f1f1",
        paddingBlock: 52,
        paddingInline: 28,
        borderRadius: 10,
        marginTop: 65,
        marginBottom: 20
    },
    formText: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: "#1e1e1e",
    },
    formFooter: {
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    }
})

export default styles