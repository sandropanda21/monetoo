import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#f1f1f1",
    },
    header: {
        backgroundColor: "#00BF63",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerTop: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBlock: 35,
        paddingInline: 22.5,
    },
    headerTopSection: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    headerTopSectionImg: {
        width: 80,
        height: 80
    },
    headerTopSectionText: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: "#ffffff"
    },
    headerTopBell: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2ED059",
        height: 40,
        width: 40,
        borderRadius: 20,
        padding: 7
    },
    statistics: {
        gap: 26,
        marginInline: 58,
        marginBottom: 45
    },
    statisticsHeaderText: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: "#ffffff"
    },
    mainStatistics: {
        flexDirection: "row",
        gap: 36,
    },
    mainStatisticsNumber: {
        fontSize: 24,
        fontFamily: "Inter-SemiBold",
        color: "#ffffff"
    },
    mainStatisticsText: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: "#ffffff"
    },
    bannerContainer: {
        gap: 30,
        marginBlock: 65,
        marginInline: 22
    },
    bannerGroup: {
        flexDirection: "row",
        gap: 15 
    }
})

export default styles