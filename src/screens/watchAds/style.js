import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        paddingBlock: 65,
        paddingInline: 30
    },
    header: {
        textAlign: "left",
        width: 230,
        gap: 12
    },
    headerTittle: {
        fontSize: 24,
        fontFamily: "Inter-Black",
        color: "#1e1e1e"
    },
    headerSubTittle: {
        fontSize: 16,
        fontFamily: "Inter-Thin",
        color: "#1e1e1e"
    }
})

export default styles