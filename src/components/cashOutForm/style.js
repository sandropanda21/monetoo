import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        gap: 47,
    },
    inputContainer: {
        gap: 20
    },
    label: {
        fontSize: 16,
        fontFamily: "Inter-Medium",
        color: "1e1e1e",
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#e1e1e1",
        borderRadius: 10,
        fontSize: 16,
        fontFamily: "Inter-Thin",
        paddingInline: 15,
        paddingBlock: 18,
        gap: 10
    },
    inputField: {
        flex: 1,
        fontSize: 16,
        fontFamily: "Inter-Thin",
    },
    bankInput: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#e1e1e1",
        borderRadius: 10,
        fontSize: 16,
        fontFamily: "Inter-Medium",
        paddingBlock: 18,
        paddingInline: 15
    },
    bankInputField: {
        flex: 1,
    }
})

export default styles