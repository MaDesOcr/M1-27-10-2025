import { Personnage } from "@/model/Personnage";
import persons from "@/assets/data/persons.json"

export default function getPersons(){
    return persons as Personnage[]
}