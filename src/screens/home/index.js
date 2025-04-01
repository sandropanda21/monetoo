import { ScrollView, View, Text, Image  } from "react-native";
import Banner from "../../components/banner";
import styles from "./style.js"

export default function Home() {
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerTop}>
                        <View style={styles.headerTopSection}>
                            <Image source={require("../../assets/images/secondaryLogo.png")} style={styles.headerTopSectionImg}/>
                            <Text style={styles.headerTopSectionText}>Olá, Sandro</Text>
                        </View>
                        <View style={styles.headerTopBell}>
                            <Image source={require("../../assets/icons/notifications.png")}/>
                        </View>
                    </View>
                    <View style={styles.statistics}>
                        <Text style={styles.statisticsHeaderText}>Estatísticas</Text>
                        <View style={styles.mainStatistics}>
                            <View>
                                <Text style={styles.mainStatisticsNumber}>
                                    3567
                                </Text>
                                <Text style={styles.mainStatisticsText}>
                                    Pontos
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.mainStatisticsNumber}>
                                    100
                                </Text>
                                <Text style={styles.mainStatisticsText}>
                                    Vídeos
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.mainStatisticsNumber}>
                                    10
                                </Text>
                                <Text style={styles.mainStatisticsText}>
                                    Convites
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.statistics}>
                        <Text style={styles.statisticsHeaderText}>
                            Seus Ganhos:
                        </Text>
                        <Text style={styles.mainStatisticsText}>
                            <Text style={styles.mainStatisticsNumber}>2000,00</Text> Kzs
                        </Text>
                    </View>
                </View>
                <View style={styles.bannerContainer}>
                    <View style={styles.bannerGroup}>
                        <Banner icon={"money"} text={"Ganhar"}/>
                        <Banner icon={"payment"} text={"Sacar"}/>
                    </View>
                    <View style={styles.bannerGroup}>
                        <Banner icon={"support"} text={"Suporte"}/>
                        <Banner icon={"setting"} text={"Definições"}/>
                    </View>
                </View>
            </ScrollView>

        </>
    )
}