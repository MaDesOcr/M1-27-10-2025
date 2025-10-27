import React from "react";
import { Text, View } from "react-native";
import DisplayDate from "@/component/DisplayDate";
import FichePerso from "@/component/FichePerso";
import { Personnage } from "@/model/Personnage";

export default function page1(){
    const perso1 : Personnage = {nom : "Moi",
         prenom : "Moi",
         image : require("@/assets/images/react-logo.png")};

    return(
        <View >
             {/* <Text> BONJOUR </Text> */}
            {/* <DisplayDate stringToDisplay="Bonjour"/> */}
            <FichePerso {...perso1}/>
        </View>
    )
}