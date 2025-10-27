import { Image, StyleSheet, Text, View } from "react-native";
import { green } from "react-native-reanimated/lib/typescript/Colors";

export default function FichePerso(){
    return(
        <View style={styles.card}>
            <View style={styles.txtInCard}>
                <Text>Nom</Text>
                <Text>Prenom</Text>
            </View>
            <Image source={require("@/assets/images/react-logo.png")}
                alt="textIMAGEMANQUANTE"/>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        flexDirection : "row",
        borderColor : "green",
        borderWidth : 2,
        justifyContent : "space-between",
        alignItems : "center"
    },
    txtInCard : {

    }
}

)