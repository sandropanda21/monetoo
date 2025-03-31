import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingBlock: 16.5,
        paddingInline: 22,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#d9d9d9", 
        borderRadius: 10,
        backgroundColor: "#ffffff"
    },
    inputField: {
        flex: 1,
        borderWidth: 0,
        color: "#1e1e1e",
        fontSize: 14,
        fontFamily: "Inter-Regular",
        paddingInline: 5
    }
})

export default styles