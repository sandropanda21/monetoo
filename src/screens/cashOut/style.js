import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#ffffff",
        paddingBlock: 65,
        paddingInline: 30,
    },
    header: {
        textAlign: "left",
        width: 260,
        gap: 10
    },
    headerTittle: {
        fontSize: 20,
        fontFamily: "Inter-Medium",
        color: "#1e1e1e"
    },
    headerSubTittle: {
        fontSize: 16,
        fontFamily: "Inter-Thin",
        color: "#1e1e1e"
    },
    main: {
        gap: 47,
        marginTop: 47,
        marginBottom: 80,
    }
})

export default styles