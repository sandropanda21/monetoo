import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bannerContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        width: 180,
        height: 180,
        borderWidth: 0.5,
        borderStyle: "solid",
        borderColor: "#444444", 
        borderRadius: 24,
        backgroundColor: "#f1f1f1",
        paddingBlock: 10,
        paddingInline: 20
    },
    bannerText: {
        color: "#1e1e1e",
        fontSize: 16,
        fontFamily: "Inter-SemiBold",
    }
})

export default styles