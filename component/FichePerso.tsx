import { Personnage } from "@/model/Personnage";
import { Image, StyleSheet, Text, View } from "react-native";

export default function FichePerso(
    perso : Personnage
//    {perso} : {perso : Personnage}
){
   // const image = 
    //const image = require(`@/assets/images/${perso.image}`);
    return(
        <View style={styles.card}>
            <View style={styles.txtInCard}>
                <Text>Nom : {perso.nom}</Text>
                <Text>Prenom : {perso.prenom}</Text>
            </View>
            <Image source={image}
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