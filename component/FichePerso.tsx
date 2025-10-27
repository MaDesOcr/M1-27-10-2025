import { Personnage } from "@/model/Personnage";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function FichePerso(
    perso : Personnage
//    {perso} : {perso : Personnage}
){
    //const image = `@/assets/images/${perso.image}`;

    return(
        <View style={styles.card}>
            <View style={styles.txtInCard}>
                <Text>Nom : {perso.nom}</Text>
                <Text>Prenom : {perso.prenom}</Text>
            </View>
            {/* <Image source={require(image)}
                alt="textIMAGEMANQUANTE"/> */}
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