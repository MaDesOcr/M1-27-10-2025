import { getPersonDetails } from "@/service/PersonnageService";
import { useState, useEffect } from "react";
import { Personnage } from "@/model/Personnage";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";

export default function pageDetail(){

    const {id} = useLocalSearchParams<{id : string}>()

    const [perso, setPerso] = useState<Personnage>();
    useEffect(() => {
            getPersonDetails(parseInt(id)).then((data) => setPerso(data))
        }, [])

    return(
        <>
            {JSON.stringify(perso)}
        </>
    )
}