import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import DisplayDate from "@/component/DisplayDate";
import FichePerso from "@/component/FichePerso";
import { Personnage } from "@/model/Personnage";
import getPersons from "@/service/PersonnageService";

export default function page1(){

    const [persos, setPersos]= useState<Personnage[]>([]);

    useEffect(()=>{
        getPersons().then((data)=>setPersos(data))        
    }, [])
      
    return(
        <View >
            {persos.map((p, i) => 
                <FichePerso {...p} key={i}/>
            )}
            
        </View>
    )
}