import React from "react";
import { Text, View } from "react-native";
import DisplayDate from "@/component/DisplayDate";
import FichePerso from "@/component/FichePerso";
import { Personnage } from "@/model/Personnage";
import getPersons from "@/service/PersonnageService";

export default function page1(){
  /*  const perso1 : Personnage = {nom : "Moi",
         prenom : "Moi",
         image : require("@/assets/images/react-logo.png")};
*/
    const persos : Personnage[] = getPersons();

    //=> appel du service qui retourne la liste de perso         
    return(
        <View >
             {/* <Text> BONJOUR </Text> */}
            {/* <DisplayDate stringToDisplay="Bonjour"/> */}
            
            {persos.map((p, i) => 
                <FichePerso {...p} key={i}/>
            )}
            
        </View>
    )
}