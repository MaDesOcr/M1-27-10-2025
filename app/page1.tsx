import React from "react";
import { Text, View } from "react-native";
import DisplayDate from "@/component/DisplayDate";
import FichePerso from "@/component/FichePerso";

export default function page1(){
    return(
        <View >
            <Text> BONJOUR </Text>
            <DisplayDate/>
            <FichePerso/>
        </View>
    )
}