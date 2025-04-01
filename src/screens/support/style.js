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
        gap: 40
    },
    headerTittle: {
        fontSize: 20,
        fontFamily: "Inter-Black",
        color: "#1e1e1e",
        marginBottom: 10
    },
    headerSubTittle: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: "#1e1e1e"
    },
    boldText: {
        fontFamily: "Inter-SemiBold",
    },
    text: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: "#000000",
        marginBottom: 10
    }
})

export default styles