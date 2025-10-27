import { Link, useRouter } from "expo-router";
import { Text, View, Button } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={()=>router.push("/page1")} 
      title="Page 1"/>
      <Button onPress={()=>router.push("/tab1")} 
      title="Page 2"/>

     {/* <Link href="/page1">PAGE1</Link>
      <Link href="/tab1">PAGE2</Link>*/}
      
    </View>
  );
}
