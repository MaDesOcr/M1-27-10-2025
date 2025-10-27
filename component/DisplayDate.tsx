import { Text } from "react-native"


export default function DisplayDate(){
    return(
        <Text> {new Date().toISOString()} </Text>
    )
}