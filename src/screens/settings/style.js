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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 14
    },
    headerText: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: "#000000"
    },
})

export default styles