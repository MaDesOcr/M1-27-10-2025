import { Text } from "react-native"

export default function DisplayDate({stringToDisplay} : {stringToDisplay : string}){
    return(
        <Text> 
            {stringToDisplay}
            {new Date().toISOString()} </Text>
    )
}