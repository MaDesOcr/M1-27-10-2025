import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";

export default function RootLayout() {
    const router = useRouter();
  
  return (
    <Stack screenOptions={{
        title:"",
         //headerTitle:()=><Ionicons name="home"></Ionicons>,
         headerLeft:({...props})=><Ionicons {...props}
         name="home">
          
         </Ionicons>
      }}>
      <Stack.Screen name="page1"/>
      <Stack.Screen name="(page2)"/>
    </Stack>
  )
}


//onPress={()=> router.back() }>
         