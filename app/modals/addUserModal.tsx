import { useState } from "react";
import { Text, TextInput } from "react-native";

export default function addUserModal(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    
    return (
        <>
            <TextInput value={firstName} onChangeText={setFirstName}></TextInput>
            <TextInput value={lastName} onChangeText={setLastName}></TextInput>
            
        </>       
    )
}