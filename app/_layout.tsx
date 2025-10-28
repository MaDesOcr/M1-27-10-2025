import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";

export default function RootLayout() {
    const router = useRouter();
  
  return (
    <Stack screenOptions={{
        title:"",
         headerLeft:({...props})=><Ionicons {...props}
         name="home">
         </Ionicons>
         
      }}>
      <Stack.Screen name="userList"/>
      <Stack.Screen name="(page2)"/>
    </Stack>
  )
}


//onPress={()=> router.back() }>
         