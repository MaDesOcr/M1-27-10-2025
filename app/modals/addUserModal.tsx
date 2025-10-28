import { useState } from "react";
import { Button, TextInput } from "react-native";
import { useRouter } from "expo-router";

export default function addUserModal() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const router = useRouter();

    async function addUser() {
        const persoAdded = await fetch('https://dummyjson.com/users/add',
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName,
                    lastName
                })
            })
            console.log(persoAdded);
            router.back();
    }

    return (
        <>
            <TextInput value={firstName} onChangeText={setFirstName}></TextInput>
            <TextInput value={lastName} onChangeText={setLastName}></TextInput>
            <Button title="Add" onPress={addUser}></Button>
        </>
    )
}