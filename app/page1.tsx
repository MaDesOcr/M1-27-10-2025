import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import DisplayDate from "@/component/DisplayDate";
import FichePerso from "@/component/FichePerso";
import { Personnage } from "@/model/Personnage";
import getPersons from "@/service/PersonnageService";
import { router, useRouter } from "expo-router";

export default function page1() {

    const router = useRouter();

    const [persos, setPersos] = useState<Personnage[]>([]);

    useEffect(() => {
        getPersons().then((data) => setPersos(data))
    }, [])

    return (
        <View>
            {persos.map((p) =>
                <Pressable onPress={()=>
                        router.navigate({pathname: "pageDetail",
                            params:{id: p.id}
                        })}>
                    <FichePerso {...p} key={p.id} />
                </Pressable>

            )}
        </View>
    )
}