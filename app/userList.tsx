import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import FichePerso from "@/component/FichePerso";
import { Personnage } from "@/model/Personnage";
import getPersons from "@/service/PersonnageService";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function userList() {

    const router = useRouter();

    const [persos, setPersos] = useState<Personnage[]>([]);

    useEffect(() => {
        getPersons().then((data) => setPersos(data))
    }, [])

    return (
        <> 
            <Pressable onPress={()=> router.push("/modals/addUserModal")}>
                <Ionicons name="add-circle-sharp"></Ionicons>
            </Pressable>

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
        </>
    )
}