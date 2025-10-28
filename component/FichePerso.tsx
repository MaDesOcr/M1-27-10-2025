import { Personnage } from "@/model/Personnage";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function FichePerso(
    perso : Personnage
){
    return(
        <View style={styles.card}>
            <View style={styles.txtInCard}>
                <Text>Nom : {perso.lastName}</Text>
                <Text>Prenom : {perso.firstName}</Text>
            </View>
            <Image style={styles.image} source={{uri:perso.image}}
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

    },
    image : {
        height : 50,
        width : 50
    }
}

)